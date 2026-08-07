import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import { T } from '@/lib/theme';
import { breadcrumbList } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Blog — Petroleum Trading Insights & Guides',
  description: 'Guides and explainers on petroleum trading, storage, logistics, and documentation from TOO Crude Oil — FOB/CIF trading, tank storage, marine fuel, quality inspection, and more.',
  alternates: { canonical: 'https://www.toocrudeoil.com/blog' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/blog',
    title: 'Blog — Petroleum Trading Insights & Guides | TOO Crude Oil',
    description: 'Guides and explainers on petroleum trading, storage, logistics, and documentation.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'TOO Crude Oil Blog' }],
  },
};

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

async function getArticles(): Promise<ArticleSummary[]> {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  const articles = await Promise.all(
    files.map(async f => {
      const slug = f.replace(/\.mdx$/, '');
      const mod = await import(`@/content/blog/${slug}.mdx`);
      return { slug, ...mod.metadata };
    })
  );
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ]),
];

export default async function BlogIndexPage() {
  const articles = await getArticles();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Knowledge Center"
        title="Petroleum Trading"
        highlight="Insights"
        subtitle="Guides and explainers on FOB/CIF trading, storage, logistics, and documentation — from the team that handles them every day."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {articles.map(a => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  style={{ display: 'block', background: T.warm, borderRadius: '12px', padding: '1.75rem', border: `1px solid ${T.border}`, textDecoration: 'none' }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 700, color: T.gold, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', marginBottom: '0.75rem' }}>
                    {a.category}
                  </div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.25rem', color: T.text, marginBottom: '0.6rem', lineHeight: 1.3 }}>
                    {a.title}
                  </h2>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.muted, lineHeight: 1.7, margin: 0 }}>
                    {a.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
