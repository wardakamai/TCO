import type { Metadata } from 'next';
import ProductsPageClient from '@/components/products/ProductsPageClient';
import { breadcrumbList } from '@/lib/schema';

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
  ]),
];

export const metadata: Metadata = {
  title: 'Products',
  description: 'TOO Crude Oil supplies REBCO crude oil, Diesel EN590, Jet Fuel A1, LNG, Gasoline RON 92/95, and Bunker Fuel IFO 180/380 on FOB terms from Rotterdam, Houston, Jurong and Fujairah.',
  keywords: [
    'REBCO crude oil', 'Diesel EN590 supplier', 'Jet Fuel A1', 'LNG supplier Kazakhstan',
    'Gasoline RON 92', 'Bunker fuel IFO 380', 'FOB petroleum products', 'crude oil for sale',
    'diesel EN590 purchase', 'aviation fuel supplier', 'marine bunker fuel', 'oil products Kazakhstan',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/products' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/products',
    title: 'Oil & Gas Products — REBCO, Diesel EN590, Jet Fuel A1, LNG | TOO Crude Oil',
    description: 'Premium petroleum products on FOB terms: REBCO crude oil, Diesel EN590, Jet Fuel A1, LNG, Gasoline RON 92/95, and Bunker Fuel from four global terminals.',
  },
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductsPageClient />
    </>
  );
}
