import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Rotterdam Fuel Allocation — FOB Rotterdam EN590, Jet A1 & Crude',
  description:
    'TOO Crude Oil holds direct fuel allocation at Rotterdam ARA terminals. FOB Rotterdam supply of EN590 diesel, Jet A1, crude oil, and gasoline. Verified petroleum supplier in the Amsterdam-Rotterdam-Antwerp hub.',
  keywords: [
    'Rotterdam fuel allocation', 'FOB Rotterdam supplier', 'EN590 supplier Rotterdam',
    'Rotterdam ARA terminal', 'diesel FOB Rotterdam', 'Jet A1 Rotterdam', 'crude oil Rotterdam',
    'petroleum Rotterdam', 'ARA allocation', 'Rotterdam oil terminal', 'global petroleum supplier',
    'wholesale petroleum supplier', 'fuel exporter Rotterdam', 'direct refinery supplier Rotterdam',
    'CIF crude oil supplier Rotterdam',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/rotterdam-fuel-allocation' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/rotterdam-fuel-allocation',
    title: 'Rotterdam Fuel Allocation — FOB ARA Petroleum Supply | TOO Crude Oil',
    description: 'Direct fuel allocation at Rotterdam ARA. FOB Rotterdam EN590, Jet A1, crude oil, and gasoline. Verified wholesale petroleum supplier.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Rotterdam Fuel Allocation — TOO Crude Oil' }],
  },
};

const products = [
  { product: 'EN590 Diesel (ULSD)', spec: 'EN 590:2013+A1:2017 · ≤10 PPM sulphur', minCargo: '25,000 MT', notes: 'FOB Rotterdam ARA. TTO and TTT options available.' },
  { product: 'Jet Fuel A1', spec: 'ASTM D1655 / DEF STAN 91-091', minCargo: '10,000 MT', notes: 'FOB Rotterdam. CIF to European and African ports.' },
  { product: 'REBCO Crude Oil', spec: 'Medium sour, 31–33° API, ~1.3% S', minCargo: '80,000 MT', notes: 'FOB Rotterdam / CIF NWE. Aframax and Suezmax.' },
  { product: 'Gasoline RON 92/95', spec: 'EN 228 compliant', minCargo: '20,000 MT', notes: 'FOB Rotterdam for European blenders and West African importers.' },
  { product: 'Bunker Fuel IFO / VLSFO', spec: 'IFO 180/380 · IMO 2020 VLSFO', minCargo: '5,000 MT', notes: 'Bunker delivery Rotterdam port. Vessel-to-vessel and ex-pipe.' },
];

const araFacts = [
  { title: 'World\'s Largest Port', desc: 'Rotterdam is Europe\'s busiest port and the world\'s top petroleum handling hub, with over 400 million tonnes of cargo handled annually. Our ARA allocation provides access to the deepest berths and largest tank farms.' },
  { title: '2.8M m³ Storage', desc: 'Our Rotterdam terminal network has 2.8 million cubic metres of petroleum storage — one of the largest independent tank farm positions in the ARA area — enabling substantial spot and term supply.' },
  { title: 'Platts Assessment Hub', desc: 'Rotterdam is the global benchmark for Platts Barges FOB Rotterdam and Cargoes CIF NWE pricing. All our Rotterdam product pricing is transparently linked to these published assessments.' },
  { title: 'Tank-to-Tank Transfers', desc: 'We offer TTO (Tank-to-Tank Operations) and TTT (Tank-to-Tanker) options within the ARA terminal network, allowing buyers to take delivery without arranging ocean freight.' },
];

const faqs = [
  { q: 'What is the ARA region?', a: 'ARA stands for Amsterdam–Rotterdam–Antwerp. It is the world\'s largest petroleum products trading hub and the primary pricing benchmark region for European petroleum markets. Platts and Argus publish daily price assessments for barges FOB Rotterdam and cargoes CIF NWE from the ARA region.' },
  { q: 'What delivery options are available at Rotterdam?', a: 'At Rotterdam we offer: FOB (buyer arranges vessel), CIF to named discharge port, TTO (Tank-to-Tank Operation between two terminals within ARA), TTT (Tank-to-Tanker for buyer\'s vessel alongside our terminal), and barge delivery for smaller parcels within the ARA inland waterway network.' },
  { q: 'Can I take delivery by barge?', a: 'Yes. In the ARA region, we have access to barge delivery for EN590 diesel, gasoline, and gasoil. Minimum barge parcel sizes start at 1,000 MT. This is useful for buyers operating inland river distribution networks in Germany, Belgium, France, and the Netherlands.' },
  { q: 'How quickly can a cargo be loaded at Rotterdam?', a: 'For allocated cargoes, loading can typically commence within 7–14 days of contract execution, subject to laycan agreement and vessel nomination. Term contract buyers with established liftings can be scheduled on monthly or bi-monthly cycles.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Rotterdam Fuel Allocation', path: '/rotterdam-fuel-allocation' },
  ]),
  service({
    name: 'Rotterdam Fuel Allocation',
    description: 'Direct FOB fuel allocation at Rotterdam ARA terminals for EN590 diesel, Jet A1, crude oil, and gasoline.',
    path: '/rotterdam-fuel-allocation',
    serviceType: 'Petroleum Supply',
    areaServed: 'Rotterdam, Netherlands',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function RotterdamFuelAllocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="ARA Terminal Network"
        title="Rotterdam Fuel"
        highlight="Allocation"
        subtitle="Direct petroleum allocation at Rotterdam ARA — FOB supply of EN590 diesel, Jet A1, crude oil, and gasoline. One of the ARA's largest independent storage positions."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Rotterdam, Netherlands</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Direct FOB Rotterdam Petroleum Supplier
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP established its <strong style={{ color: T.text }}>Rotterdam ARA terminal presence in 2010</strong> — making it one of our first international FOB positions. Today, our Rotterdam allocation supports <strong style={{ color: T.text }}>FOB Rotterdam supply of EN590 diesel, Jet A1, crude oil, and gasoline</strong> for European and global buyers.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  The Port of Rotterdam is the world's benchmark petroleum trading hub. As a <strong style={{ color: T.text }}>verified EN590 supplier Rotterdam</strong> and crude oil trader, we operate with full transparency: all pricing is linked to Platts Barges FOB Rotterdam or Cargoes CIF NWE assessments — no hidden margins or opaque pricing models.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  We serve European refineries, independent distributors, airlines, bunker operators, and petroleum traders. CIF delivery from Rotterdam is available to Mediterranean, West African, and North American buyers.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>ROTTERDAM TERMINAL</h3>
                {[
                  { label: 'Location', value: 'Port of Rotterdam, ARA, Netherlands' },
                  { label: 'Storage Capacity', value: '2.8 million m³' },
                  { label: 'Terminal Access', value: 'Since 2010' },
                  { label: 'Products', value: 'Crude · EN590 · Jet A1 · Gasoline · Bunker' },
                  { label: 'Delivery Modes', value: 'FOB · CIF · TTO · TTT · Barge' },
                  { label: 'Pricing Benchmark', value: 'Platts Barges FOB Rott. / CIF NWE' },
                  { label: 'Inspection', value: 'SGS / Intertek / Bureau Veritas' },
                  { label: 'ISO Certified', value: 'ISO 9001:2015 operations' },
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

      {/* Products table */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Products Available FOB Rotterdam
            </h2>
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: `1px solid ${T.border}` }}>
              <div style={{ background: T.surface, overflow: 'hidden', minWidth: '540px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 2fr', padding: '0.75rem 1.5rem', background: '#19140D', gap: '1rem' }}>
                  {['Product', 'Specification', 'Min. Cargo', 'Notes'].map(h => (
                    <span key={h} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</span>
                  ))}
                </div>
                {products.map(({ product, spec, minCargo, notes }, i) => (
                  <div key={product} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 2fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? T.surface : '#FDFAF6', borderBottom: i < products.length - 1 ? `1px solid ${T.border}` : 'none', gap: '1rem', alignItems: 'start' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: T.text }}>{product}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{spec}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.text }}>{minCargo}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{notes}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ARA facts */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Why Rotterdam ARA?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {araFacts.map(({ title, desc }) => (
                <div key={title} style={{ background: T.warm, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.5rem' }}>{title}</div>
                  <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
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
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.75rem 2rem', background: T.gold, color: '#19140D', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }}>
                Request Rotterdam Allocation →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
