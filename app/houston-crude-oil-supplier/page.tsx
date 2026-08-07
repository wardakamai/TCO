import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Houston Crude Oil Supplier — FOB USGC Petroleum Export',
  description:
    'TOO Crude Oil supplies crude oil and petroleum products FOB Houston, Texas. Direct USGC crude oil export for refineries, traders, and petroleum importers. 1.6M m³ Houston terminal with Aframax to VLCC access.',
  keywords: [
    'crude oil supplier Houston', 'Houston crude oil supplier', 'FOB Houston crude oil',
    'petroleum export Houston', 'USGC crude oil', 'Houston oil terminal', 'crude oil exporter',
    'Houston petroleum supplier', 'oil and gas Houston Texas', 'fuel exporter worldwide',
    'direct refinery supplier Houston', 'bulk crude oil Houston', 'petroleum exporter',
    'global crude oil supplier', 'energy commodity supplier',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/houston-crude-oil-supplier' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/houston-crude-oil-supplier',
    title: 'Houston Crude Oil Supplier — FOB Gulf Coast Export | TOO Crude Oil',
    description: 'FOB Houston crude oil and petroleum products. 1.6M m³ USGC terminal. Aframax to VLCC. CIF delivery to Latin America, Europe, and Asia.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Houston Crude Oil Supplier — TOO Crude Oil' }],
  },
};

const products = [
  { product: 'REBCO Crude Oil', spec: '31–33° API · ~1.3% S', terms: 'FOB / CIF', market: 'Europe · Asia · Latin America' },
  { product: 'CPC Blend Crude', spec: '45–46° API · ~0.55% S (light sweet)', terms: 'FOB', market: 'Asian and European refineries' },
  { product: 'EN590 Diesel (ULSD)', spec: '≤ 10 PPM sulphur', terms: 'FOB / CIF', market: 'USGC · Caribbean · Latin America' },
  { product: 'Jet Fuel A1', spec: 'ASTM D1655', terms: 'FOB / CIF', market: 'Americas · transatlantic' },
  { product: 'Gasoline RON 92/95', spec: 'ASTM D4814', terms: 'FOB', market: 'Caribbean · Central America · West Africa' },
  { product: 'Bunker Fuel VLSFO', spec: 'IMO 2020 compliant', terms: 'EX-PIPE', market: 'Houston Ship Channel bunkering' },
];

const usFeatures = [
  { title: 'USGC Market Access', desc: 'Houston is the epicentre of US petroleum export. Our terminal position on the Houston Ship Channel gives direct access to the world\'s largest crude oil export infrastructure — with capacity to load Aframax, Suezmax, and VLCC vessels.' },
  { title: 'Gulf of Mexico Routes', desc: 'FOB Houston positions us perfectly for CIF delivery to Mexico, Caribbean nations, Central and South America — high-growth petroleum importing regions where USGC pricing (WTI/LLS differential) is competitive.' },
  { title: 'Transatlantic Exports', desc: 'Houston to European ARA ports (Rotterdam, Hamburg) and Mediterranean refineries. US crude exports to Europe surged post-2015 export ban lift — we leverage this infrastructure for REBCO and CPC Blend deliveries.' },
  { title: '1.6M m³ Storage', desc: 'Our Houston terminal network provides 1.6 million cubic metres of petroleum storage — covering crude, refined products, and petrochemicals. Flexible lifting schedules for monthly and bi-monthly term contracts.' },
];

const faqs = [
  { q: 'What crude oil grades are available FOB Houston?', a: 'From Houston, we supply REBCO (Russian Export Blend, 31–33° API, medium sour) and CPC Blend (Caspian Pipeline Consortium, 45–46° API, light sweet). REBCO is priced on Platts Urals basis; CPC Blend on Dated Brent basis. Additional grades may be available subject to market conditions.' },
  { q: 'What vessel sizes can load at your Houston terminal?', a: 'Our Houston terminal berths accommodate Aframax vessels (80,000–120,000 DWT), Suezmax (120,000–200,000 DWT), and we can arrange VLCC-sized (250,000+ DWT) liftings via offshore transshipment or partner terminals on the Texas Gulf Coast.' },
  { q: 'Can you supply petroleum products to the Caribbean or Latin America?', a: 'Yes. From Houston, we supply diesel EN590, gasoline, and Jet A1 on CIF terms to Caribbean islands (Jamaica, Trinidad, Dominican Republic, Bahamas), Central America (Panama, Guatemala, Costa Rica), and South American ports (Cartagena, Callao, Santos, Buenos Aires).' },
  { q: 'What are your payment terms for FOB Houston?', a: 'Standard payment terms are confirmed, irrevocable Letter of Credit at sight (LC at Sight) from a first-class international bank. For established counterparties with 12+ months trade history, SBLC-backed open account terms may be discussed. All financial instruments are subject to buyer bank confirmation.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Houston Crude Oil Supplier', path: '/houston-crude-oil-supplier' },
  ]),
  service({
    name: 'Houston Crude Oil Supply',
    description: 'FOB Houston crude oil and petroleum product export from a 1.6M m³ USGC terminal, with Aframax to VLCC vessel access.',
    path: '/houston-crude-oil-supplier',
    serviceType: 'Petroleum Supply',
    areaServed: 'Houston, Texas, United States',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function HoustonCrudeOilSupplierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Houston, Texas"
        title="Houston Crude Oil"
        highlight="Supplier"
        subtitle="FOB and CIF crude oil and petroleum export from the Port of Houston, USGC. 1.6M m³ storage capacity serving Latin America, Europe, and global markets."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>US Gulf Coast</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  FOB Houston Petroleum Export
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP has operated from <strong style={{ color: T.text }}>Houston, Texas since 2014</strong> — positioning us at the heart of the US Gulf Coast petroleum export market. Our <strong style={{ color: T.text }}>1.6 million m³ Houston terminal</strong> is one of the largest independent tank positions on the Houston Ship Channel, enabling FOB supply of crude oil and refined products to any global buyer.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  As a <strong style={{ color: T.text }}>Houston crude oil supplier</strong>, we export REBCO and CPC Blend crude to European refineries, Asian NOCs, and independent refiners. Our refined product supply covers EN590 diesel, Jet A1, and gasoline for Caribbean, Latin American, and transatlantic buyers.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  All Houston cargoes are SGS or Bureau Veritas inspected. Full USGC documentary compliance (CBP, COE, EEI) is handled by our in-house trade compliance team. We facilitate efficient LC and SBLC processing through our banking relationships.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>HOUSTON TERMINAL</h3>
                {[
                  { label: 'Location', value: 'Port of Houston, Texas, USA' },
                  { label: 'Storage Capacity', value: '1.6 million m³' },
                  { label: 'Terminal Access', value: 'Since 2014' },
                  { label: 'Vessel Sizes', value: 'Aframax · Suezmax · VLCC*' },
                  { label: 'Products', value: 'Crude · EN590 · Jet A1 · Gasoline · Bunker' },
                  { label: 'Delivery', value: 'FOB / CIF / CFR' },
                  { label: 'Pricing', value: 'WTI · LLS · Platts Urals differential' },
                  { label: 'Inspection', value: 'SGS / Bureau Veritas' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: `1px solid ${T.border}`, gap: '1rem' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted, flexShrink: 0 }}>{label}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: T.text, textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: T.muted, marginTop: '0.75rem' }}>*VLCC via offshore transshipment or partner terminals</p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Products */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Products Available FOB Houston
            </h2>
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: `1px solid ${T.border}` }}>
              <div style={{ background: T.surface, overflow: 'hidden', minWidth: '540px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 2fr', padding: '0.75rem 1.5rem', background: '#19140D', gap: '1rem' }}>
                  {['Product', 'Grade', 'Terms', 'Primary Markets'].map(h => (
                    <span key={h} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</span>
                  ))}
                </div>
                {products.map(({ product, spec, terms, market }, i) => (
                  <div key={product} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 2fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? T.surface : '#FDFAF6', borderBottom: i < products.length - 1 ? `1px solid ${T.border}` : 'none', gap: '1rem', alignItems: 'start' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: T.text }}>{product}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{spec}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.gold, fontWeight: 600 }}>{terms}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{market}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Features */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Houston as a Petroleum Export Hub
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {usFeatures.map(({ title, desc }) => (
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
                Request Houston Supply Offer →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
