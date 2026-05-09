import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.toocrudeoil.com';
  const now = new Date('2026-05-09');
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
    /* Company pages */
    { url: `${base}/about`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sustainability`,                lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/contact`,                       lastModified: now, changeFrequency: 'yearly',  priority: 0.65 },
  ];
}
