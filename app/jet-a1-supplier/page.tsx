import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jet A1 Supplier — Aviation Fuel CIF & FOB | TOO Crude Oil',
  description:
    'TOO Crude Oil supplies Jet Fuel A1 (ASTM D1655 / DEF STAN 91-091) on CIF and FOB terms from Fujairah and Rotterdam. Verified aviation fuel exporter for airlines, into-plane operators, and fuel management companies worldwide.',
  keywords: [
    'Jet A1 supplier', 'Jet A1 CIF supplier', 'aviation fuel supplier', 'Jet A1 exporter',
    'jet fuel Fujairah', 'Jet A1 Rotterdam', 'aviation kerosene supplier', 'DEF STAN 91-091',
    'ASTM D1655 supplier', 'bulk aviation fuel', 'jet fuel worldwide', 'Jet A1 CIF Fujairah',
    'international fuel supplier', 'fuel exporter worldwide', 'aviation fuel exporter',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/jet-a1-supplier' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/jet-a1-supplier',
    title: 'Jet A1 Aviation Fuel Supplier — CIF & FOB | TOO Crude Oil',
    description:
      'Verified Jet A1 supplier delivering aviation fuel CIF and FOB from Fujairah and Rotterdam. ASTM D1655 / DEF STAN 91-091 compliant. Global fuel logistics.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Jet A1 Aviation Fuel Supplier — TOO Crude Oil' }],
  },
};

const T = { text: '#19140D', muted: '#8A7A65', sub: '#4A3C2A', border: '#E3D9C8', warm: '#F4EDE0', surface: '#FFFFFF', gold: '#B8860B' };

const specs = [
  { property: 'Specification', value: 'ASTM D1655 / DEF STAN 91-091' },
  { property: 'Flash Point', value: '≥ 38.0 °C (min)' },
  { property: 'Density at 15°C', value: '775.0–840.0 kg/m³' },
  { property: 'Freezing Point', value: '≤ −47 °C' },
  { property: 'Net Heat of Combustion', value: '≥ 42.8 MJ/kg' },
  { property: 'Total Acidity', value: '≤ 0.015 mg KOH/g' },
  { property: 'Sulphur Content', value: '≤ 3000 mg/kg' },
  { property: 'Smoke Point', value: '≥ 19 mm (min)' },
];

const supplyRoutes = [
  { route: 'Fujairah → Worldwide', desc: 'CIF delivery from our Fujairah terminal — ideal for Middle East, India, Africa, South East Asia, and Far East buyers. Fast turnaround from storage to vessel.' },
  { route: 'Rotterdam → Europe / Africa', desc: 'FOB and CIF Rotterdam for European airports and African fuel importers. ARA terminal allocation with flexible lifting schedules.' },
  { route: 'Houston → Americas', desc: 'FOB Houston for USGC-based buyers and Central / South American aviation fuel importers. Direct port access.' },
  { route: 'SGS Verified Cargoes', desc: 'All Jet A1 cargoes undergo independent SGS inspection at load port. CoQ and quantity certificates issued per IATA standards.' },
];

const faqs = [
  { q: 'What is Jet A1 fuel?', a: 'Jet A1 is a kerosene-type aviation turbine fuel used in commercial and military jet aircraft worldwide. It meets the ASTM D1655 standard (used in the Americas) and DEF STAN 91-091 (UK/international). Jet A1 has a freeze point of −47°C, making it suitable for long-haul flights at high altitude.' },
  { q: 'What is the minimum order for Jet A1?', a: 'Our standard minimum cargo size for Jet A1 is 5,000 metric tonnes for spot transactions. For term supply agreements, monthly volumes from 10,000 MT to 100,000 MT are available, subject to allocation and logistics planning.' },
  { q: 'Can you supply Jet A1 CIF to African ports?', a: 'Yes. We regularly supply Jet A1 on CIF terms to ports in West Africa, East Africa, and North Africa. Our Fujairah and Rotterdam terminals provide geographic flexibility for African buyers. We handle freight, insurance, and arrange delivery to your designated discharge port.' },
  { q: 'Is the fuel approved by IATA?', a: 'Yes. Our Jet A1 is sourced from IATA-approved refineries and terminals. All cargoes comply with IATA Guidance Material for Aviation Turbine Fuels and carry full documentation including Certificate of Quality, origin certificates, and independent inspection reports.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Jet Fuel A1 — Aviation Turbine Fuel',
  description: 'Jet A1 aviation fuel (ASTM D1655 / DEF STAN 91-091) supplied by Crude Oil LLP on CIF and FOB terms from Fujairah, Rotterdam, and Houston.',
  brand: { '@type': 'Brand', name: 'Crude Oil LLP' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: 'Crude Oil LLP', url: 'https://www.toocrudeoil.com' },
    areaServed: 'Worldwide',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', description: 'Price per metric tonne based on Platts Jet CIF NWE or FOB Rotterdam assessments' },
  },
};

export default function JetA1SupplierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Aviation Fuel"
        title="Jet A1 Fuel"
        highlight="Supplier"
        subtitle="ASTM D1655 / DEF STAN 91-091 — CIF and FOB delivery from Fujairah, Rotterdam, and Houston. Verified aviation kerosene for airlines, distributors, and fuel operators worldwide."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>CIF &amp; FOB Supply</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Jet A1 CIF Supplier — Fujairah &amp; Rotterdam
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP operates as a <strong style={{ color: T.text }}>direct Jet A1 CIF supplier</strong> with storage and terminal access at Fujairah (UAE) and Rotterdam (Netherlands). Our aviation fuel supply chain services airlines, into-plane operators, fuel handling companies, and aviation fuel distributors globally.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Fujairah is our primary <strong style={{ color: T.text }}>Jet A1 supply hub for Asia, Africa, and the Middle East</strong>. The port's strategic location between East and West allows rapid CIF delivery with competitive freight rates. Rotterdam serves Europe and transatlantic buyers under FOB or CIF terms.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  Every Jet A1 cargo is independently inspected by SGS or Intertek. We issue Certificate of Quality, Certificate of Quantity, Certificate of Origin, and additive approval documentation as required.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>SUPPLY OVERVIEW</h3>
                {[
                  { label: 'Product', value: 'Aviation Turbine Fuel Jet A1' },
                  { label: 'Specification', value: 'ASTM D1655 / DEF STAN 91-091' },
                  { label: 'Min. Cargo', value: '5,000 MT (spot) / 10,000 MT (term)' },
                  { label: 'Load Ports', value: 'Fujairah · Rotterdam · Houston' },
                  { label: 'Delivery', value: 'CIF / FOB / CFR' },
                  { label: 'Inspection', value: 'SGS / Intertek' },
                  { label: 'Documentation', value: 'CoQ · CoO · SGS Report · B/L' },
                  { label: 'Payment', value: 'LC at Sight / SBLC' },
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
              Technical Specifications — Jet A1
            </h2>
            <div style={{ background: T.surface, borderRadius: '12px', border: `1px solid ${T.border}`, overflow: 'hidden' }}>
              {specs.map(({ property, value }, i) => (
                <div key={property} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? T.surface : '#FDFAF6', borderBottom: i < specs.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.muted }}>{property}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: T.text }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Supply Routes &amp; Logistics
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem' }}>
              {supplyRoutes.map(({ route, desc }) => (
                <div key={route} style={{ background: T.warm, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: T.gold, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>{route}</div>
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
                Request Jet A1 Supply Offer →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
