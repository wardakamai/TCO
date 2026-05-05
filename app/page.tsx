import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import StoragePreview from '@/components/home/StoragePreview';
import SustainabilityTeaser from '@/components/home/SustainabilityTeaser';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'TOO Crude Oil — Global Oil & Gas Supplier | Crude Oil LLP',
  description: 'Crude Oil LLP (TOO Crude Oil) — Kazakhstan-based international oil & gas supplier. FOB trading of REBCO, Diesel EN590, Jet Fuel A1, LNG and Gasoline from Rotterdam, Houston, Jurong and Fujairah.',
  keywords: [
    'crude oil supplier Kazakhstan', 'FOB oil trading', 'REBCO crude oil', 'petroleum products supplier',
    'oil gas company Almaty', 'Rotterdam oil trading', 'Fujairah bunker fuel', 'TOO Crude Oil',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com' },
  openGraph: { url: 'https://www.toocrudeoil.com' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <ProductsShowcase />
      <StoragePreview />
      <SustainabilityTeaser />
      <CTABanner />
    </>
  );
}
