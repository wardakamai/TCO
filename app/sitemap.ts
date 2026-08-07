import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

async function getBlogEntries(base: string): Promise<MetadataRoute.Sitemap> {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  const entries = await Promise.all(
    files.map(async f => {
      const slug = f.replace(/\.mdx$/, '');
      const { metadata } = await import(`@/content/blog/${slug}.mdx`);
      return {
        url: `${base}/blog/${slug}`,
        lastModified: new Date(metadata.date),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
      };
    })
  );
  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://www.toocrudeoil.com';
  const now = new Date('2026-08-07');
  const blogEntries = await getBlogEntries(base);
  return [
    { url: base,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/storage`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/products`,                      lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    /* Market specialisation pages */
    { url: `${base}/en590-supplier`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/jet-a1-supplier`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/crude-oil-supplier`,            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cif-petroleum-supply`,          lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/rotterdam-fuel-allocation`,     lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/fujairah-jet-fuel-supplier`,    lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/jurong-fuel-supply`,            lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/houston-crude-oil-supplier`,    lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/sgs-verification`,              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/global-fuel-logistics`,         lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    /* Specialist service pages */
    { url: `${base}/services/tank-storage`,         lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/tank-leasing`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/terminal-operations`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/fob-trading`,          lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/trading-process`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    /* Company pages */
    { url: `${base}/about`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sustainability`,                lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/contact`,                       lastModified: now, changeFrequency: 'yearly',  priority: 0.65 },
    /* Blog */
    { url: `${base}/blog`,                          lastModified: now, changeFrequency: 'weekly',  priority: 0.75 },
    ...blogEntries,
  ];
}
