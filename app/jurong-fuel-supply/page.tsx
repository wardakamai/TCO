import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Jurong Fuel Supply — Singapore Petroleum Terminal',
  description:
    'TOO Crude Oil operates from Jurong Island, Singapore — supplying EN590 diesel, Jet A1, crude oil, and bunker fuel to Asia-Pacific buyers. 1.2M m³ Jurong storage with FOB Singapore and CIF Asia delivery.',
  keywords: [
    'Jurong fuel supply', 'Singapore petroleum supplier', 'Jurong Island storage', 'FOB Singapore fuel',
    'fuel supplier Singapore', 'petroleum supplier Asia Pacific', 'Jurong oil terminal',
    'diesel supplier Singapore', 'bunker fuel Singapore', 'energy commodity supplier Asia',
    'CIF Singapore', 'global petroleum trading', 'fuel exporter worldwide', 'Singapore oil storage',
    'Asia Pacific petroleum supplier',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/jurong-fuel-supply' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/jurong-fuel-supply',
    title: 'Jurong Fuel Supply — Singapore Petroleum Terminal | TOO Crude Oil',
    description: 'Petroleum supply from Jurong Island, Singapore. FOB Singapore and CIF Asia delivery of EN590, Jet A1, and crude oil. 1.2M m³ storage capacity.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Jurong Fuel Supply Singapore — TOO Crude Oil' }],
  },
};

const markets = [
  { market: 'China & North Asia', desc: 'CIF delivery to Shanghai, Ningbo, Tianjin, Busan (Korea), and Tokyo Bay. Jurong\'s proximity provides 7–14 day transits to China\'s major petroleum import ports.' },
  { market: 'South East Asia', desc: 'FOB Singapore and short-haul CIF for Thai, Vietnamese, Indonesian, Filipino, and Malaysian buyers. Rapid vessel turnaround in the world\'s busiest straits.' },
  { market: 'South Asia', desc: 'CIF supply to Indian subcontinent ports (Mumbai, Kandla, Colombo, Chittagong). Jurong offers competitive freight rates for Indian Ocean routes.' },
  { market: 'Australia & Pacific', desc: 'CIF delivery to Australian east and west coast ports (Brisbane, Sydney, Melbourne, Fremantle) and Pacific island nations. Singapore is the natural supply base.' },
];

const faqs = [
  { q: 'Why Singapore for Asia-Pacific fuel supply?', a: 'Singapore is the world\'s top petroleum trading and refining hub, processing over 1.5 million barrels per day. Jurong Island hosts the world\'s third-largest refining complex. Our Jurong terminal position gives us direct access to Asia-Pacific pricing benchmarks (MOPS), competitive freight rates, and the world\'s most liquid petroleum spot market.' },
  { q: 'What products are available from Jurong?', a: 'From our Jurong Island terminal, we supply: EN590 Ultra-Low Sulphur Diesel (ULSD), Jet A1 aviation fuel, REBCO crude oil and CPC Blend, Gasoline RON 92/95, Bunker Fuel IFO 180/380, and VLSFO (Very Low Sulphur Fuel Oil, IMO 2020 compliant).' },
  { q: 'How is pricing set for FOB Singapore supply?', a: 'FOB Singapore product pricing is typically based on MOPS (Mean of Platts Singapore) assessments plus or minus an agreed differential. MOPS is the primary benchmark for Asia-Pacific petroleum products. Crude oil is priced on Dated Brent or Dubai/Oman basis as agreed.' },
  { q: 'Can I take delivery via tanker from Jurong?', a: 'Yes. We offer FOB, TTT (Tank-to-Tanker), TTO (Tank-to-Tank), and CIF delivery from our Jurong terminal. Buyers nominating vessels are subject to our vessel vetting procedures. Vessel acceptance is typically within 48 hours for IMO-classed tankers.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Jurong Fuel Supply', path: '/jurong-fuel-supply' },
  ]),
  service({
    name: 'Jurong Fuel Supply',
    description: 'Petroleum supply from Jurong Island, Singapore, with FOB Singapore and CIF Asia delivery of EN590, Jet A1, and crude oil.',
    path: '/jurong-fuel-supply',
    serviceType: 'Petroleum Supply',
    areaServed: 'Singapore',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function JurongFuelSupplyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Asia-Pacific Hub"
        title="Jurong Fuel"
        highlight="Supply"
        subtitle="Petroleum supply from Jurong Island, Singapore — 1.2M m³ storage serving Asia-Pacific markets. FOB Singapore and CIF delivery of EN590, Jet A1, crude oil, and bunker fuel."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Jurong Island, Singapore</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Asia-Pacific Petroleum Supply Hub
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP established its <strong style={{ color: T.text }}>Jurong Island terminal in 2017</strong>, entering the world's most dynamic petroleum trading market. Singapore is the pricing benchmark for Asia-Pacific petroleum — our <strong style={{ color: T.text }}>1.2 million m³ Jurong storage</strong> positions us as a direct FOB supplier for Asia-Pacific buyers.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  From Jurong, we supply <strong style={{ color: T.text }}>EN590 diesel, Jet A1, crude oil, gasoline, and bunker fuel</strong> on FOB Singapore and CIF terms to buyers across China, South East Asia, South Asia, and Australia. Our MOPS-linked pricing ensures complete market transparency.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  Singapore is the world's top <strong style={{ color: T.text }}>petroleum spot market</strong> with over 200 oil traders and major NOCs maintaining a Singapore presence. Our Jurong allocation gives buyers direct access to this market with the security of a long-established, ISO-certified supplier.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>JURONG TERMINAL</h3>
                {[
                  { label: 'Location', value: 'Jurong Island, Singapore' },
                  { label: 'Storage Capacity', value: '1.2 million m³' },
                  { label: 'Terminal Access', value: 'Since 2017' },
                  { label: 'Products', value: 'EN590 · Jet A1 · Crude · Gasoline · Bunker' },
                  { label: 'Delivery', value: 'FOB / CIF / TTT / TTO' },
                  { label: 'Pricing Benchmark', value: 'MOPS (Mean of Platts Singapore)' },
                  { label: 'Primary Markets', value: 'China · SEA · South Asia · Australia' },
                  { label: 'Inspection', value: 'SGS / Intertek Singapore' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: `1px solid ${T.border}`, gap: '1rem' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted, flexShrink: 0 }}>{label}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: T.text, textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Markets Served from Jurong
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {markets.map(({ market, desc }) => (
                <div key={market} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.gold, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.5rem' }}>{market}</div>
                  <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ background: T.warm, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: T.text, marginBottom: '0.6rem' }}>{q}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.muted, lineHeight: 1.8, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.75rem 2rem', background: T.gold, color: '#19140D', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }}>
                Request Jurong Supply Offer →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
