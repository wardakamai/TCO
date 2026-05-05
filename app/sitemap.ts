import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.toocrudeoil.com';
  const now = new Date('2025-01-01');
  return [
    { url: base,                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/storage`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`,          lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/products`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${base}/about`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sustainability`,    lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/contact`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.65 },
  ];
}
