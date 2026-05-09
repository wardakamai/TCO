import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import StoragePreview from '@/components/home/StoragePreview';
import SustainabilityTeaser from '@/components/home/SustainabilityTeaser';
import CTABanner from '@/components/home/CTABanner';
import BrentPriceTicker from '@/components/home/BrentPriceTicker';

export const metadata: Metadata = {
  title: 'TOO Crude Oil — Global Crude Oil Supplier | Crude Oil LLP',
  description: 'Crude Oil LLP (TOO Crude Oil) — verified global crude oil supplier and petroleum exporter. CIF and FOB trading of REBCO, EN590 diesel, Jet A1, LNG from Rotterdam, Houston, Jurong and Fujairah. Direct refinery allocation. SGS verified.',
  keywords: [
    'crude oil supplier', 'global crude oil supplier', 'crude oil exporter', 'petroleum products supplier',
    'oil and gas trading company', 'wholesale petroleum supplier', 'direct refinery supplier',
    'fuel supplier worldwide', 'energy commodity supplier', 'bulk fuel exporter', 'petroleum exporter',
    'verified oil supplier', 'international fuel supplier', 'global petroleum trading',
    'CIF crude oil supplier', 'EN590 supplier Rotterdam', 'Jet A1 CIF supplier',
    'refinery allocation supplier', 'fuel exporter worldwide', 'crude oil supplier Houston',
    'Fujairah fuel allocation', 'global petroleum supplier', 'wholesale diesel supplier',
    'TOO Crude Oil', 'Crude Oil LLP', 'REBCO supplier', 'Kazakhstan oil company',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com' },
  openGraph: {
    url: 'https://www.toocrudeoil.com',
    title: 'TOO Crude Oil — Global Crude Oil & Petroleum Supplier',
    description: 'Verified global crude oil supplier. CIF and FOB trading of REBCO, EN590 diesel, Jet A1, LNG from Rotterdam, Houston, Jurong and Fujairah. Direct refinery allocation, SGS inspected.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <BrentPriceTicker />
      <ServicesGrid />
      <ProductsShowcase />
      <StoragePreview />
      <SustainabilityTeaser />
      <CTABanner />
    </>
  );
}
