import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import RelatedLinks from '@/components/shared/RelatedLinks';
import CTABanner from '@/components/home/CTABanner';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, article } from '@/lib/schema';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const SITE_URL = 'https://www.toocrudeoil.com';

interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  excerpt: string;
  keywords?: string[];
}

interface RelatedLink {
  title: string;
  desc: string;
  href: string;
}

interface BlogModule {
  default: ComponentType;
  metadata: BlogMetadata;
  faqs?: { q: string; a: string }[];
  related?: RelatedLink[];
}

function loadArticle(slug: string): Promise<BlogModule> {
  return import(`@/content/blog/${slug}.mdx`);
}

export function generateStaticParams() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  return files.map(f => ({ slug: f.replace(/\.mdx$/, '') }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await loadArticle(slug);
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      url: `${SITE_URL}/blog/${slug}`,
      title: metadata.title,
      description: metadata.description,
      images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: metadata.title }],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Content, metadata, faqs, related } = await loadArticle(slug);

  const jsonLd = [
    breadcrumbList([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: metadata.title, path: `/blog/${slug}` },
    ]),
    article({
      headline: metadata.title,
      description: metadata.description,
      path: `/blog/${slug}`,
      datePublished: metadata.date,
    }),
    ...(faqs && faqs.length ? [faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a })))] : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero label={metadata.category} title={metadata.title} subtitle={metadata.excerpt} />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted, marginBottom: '2rem' }}>
              {new Date(metadata.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <Content />
          </div>
        </section>
      </SectionReveal>

      {faqs && faqs.length > 0 && (
        <SectionReveal direction="up">
          <section style={{ background: T.warm, padding: '4rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {faqs.map(({ q, a }) => (
                  <div key={q} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                    <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: T.text, marginBottom: '0.6rem' }}>{q}</h3>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.muted, lineHeight: 1.8, margin: 0 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>
      )}

      {related && related.length > 0 && <RelatedLinks heading="Related Reading" links={related} />}

      <CTABanner />
    </>
  );
}
