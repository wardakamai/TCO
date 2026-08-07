import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'EN590 Diesel Supplier — Wholesale Diesel EN590 10 PPM',
  description:
    'TOO Crude Oil is a verified EN590 diesel supplier delivering Ultra-Low Sulphur Diesel (10 PPM) on CIF and FOB terms from Rotterdam, Fujairah and Houston. Bulk diesel export for traders, refineries, and distributors worldwide.',
  keywords: [
    'EN590 supplier', 'EN590 diesel supplier', 'wholesale diesel supplier', 'ultra-low sulphur diesel',
    'diesel 10 PPM supplier', 'EN590 Rotterdam', 'bulk diesel export', 'diesel CIF supplier',
    'diesel FOB Rotterdam', 'petroleum products supplier', 'diesel exporter', 'fuel supplier worldwide',
    'EN590 diesel exporter', 'gasoil EN590', 'diesel D2 supplier',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/en590-supplier' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/en590-supplier',
    title: 'EN590 Diesel Supplier — Bulk ULSD 10 PPM | TOO Crude Oil',
    description:
      'Verified EN590 diesel supplier. CIF and FOB delivery of Ultra-Low Sulphur Diesel 10 PPM from Rotterdam, Fujairah, and Houston. Bulk volumes for traders and distributors.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'EN590 Diesel Supplier — TOO Crude Oil' }],
  },
};

const specs = [
  { property: 'Standard', value: 'EN 590:2013+A1:2017' },
  { property: 'Sulphur Content', value: '≤ 10 mg/kg (10 PPM)' },
  { property: 'Cetane Number', value: '≥ 51.0 (min)' },
  { property: 'Density at 15°C', value: '820–845 kg/m³' },
  { property: 'Flash Point', value: '≥ 55 °C' },
  { property: 'Viscosity at 40°C', value: '2.00–4.50 mm²/s' },
  { property: 'CFPP (Winter Grade)', value: 'Available −20°C to −44°C' },
  { property: 'Water Content', value: '≤ 200 mg/kg' },
];

const deliveryTerms = [
  { term: 'CIF Rotterdam', desc: 'Cost, Insurance & Freight to Port of Rotterdam. SGS inspected at load port.' },
  { term: 'FOB Rotterdam', desc: 'Free On Board from our Rotterdam ARA allocation. Buyer arranges freight.' },
  { term: 'CIF Fujairah', desc: 'CIF delivery to Port of Fujairah, UAE. Suitable for Middle East & Asia buyers.' },
  { term: 'FOB Houston', desc: 'FOB from Houston, TX. Ideal for USGC, Latin America, and transatlantic shipments.' },
  { term: 'TTO / TTT', desc: 'Tank-to-Tank and Tank-to-Tanker transfers available at Rotterdam ARA terminals.' },
];

const faqs = [
  { q: 'What is EN590 diesel?', a: 'EN590 is the European standard specification for automotive diesel fuel (road-grade gasoil). The current grade is Ultra-Low Sulphur Diesel (ULSD) with a maximum sulphur content of 10 mg/kg (10 PPM), compliant with Euro 5 and Euro 6 vehicle emission standards.' },
  { q: 'What volumes do you supply?', a: 'Minimum order quantities start at 25,000 metric tonnes per cargo, with monthly supply programs available from 50,000 MT to 500,000 MT. We serve term contract buyers and spot cargo traders.' },
  { q: 'How is quality verified?', a: 'All cargoes are independently inspected by SGS, Intertek, or Bureau Veritas at the load port. Certificate of Quality (CoQ), Certificate of Origin (CoO), and SGS Inspection Report accompany every shipment.' },
  { q: 'Which payment terms are accepted?', a: 'We accept confirmed, irrevocable Letters of Credit (LC at sight), SBLC, and MT103 wire transfer for established counterparties. All transactions are conducted under NCND/IMFPA where applicable.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'EN590 Ultra-Low Sulphur Diesel',
  description: 'EN590 diesel (ULSD 10 PPM) supplied by Crude Oil LLP on FOB and CIF terms from Rotterdam, Fujairah, and Houston terminals. Meets Euro 5 and Euro 6 standards.',
  brand: { '@type': 'Brand', name: 'Crude Oil LLP' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: 'Crude Oil LLP', url: 'https://www.toocrudeoil.com' },
    areaServed: 'Worldwide',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', description: 'Price per metric tonne, based on Platts/Argus assessments plus agreed differential' },
  },
};

export default function EN590SupplierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Petroleum Products"
        title="EN590 Diesel"
        highlight="Supplier"
        subtitle="Ultra-Low Sulphur Diesel 10 PPM — CIF and FOB delivery from Rotterdam, Fujairah, and Houston. Verified supply for bulk traders, distributors, and end-users worldwide."
      />

      {/* Intro */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Verified Supplier</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Wholesale EN590 Diesel — Direct Refinery Allocation
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP is a Kazakhstan-registered, internationally operating <strong style={{ color: T.text }}>wholesale EN590 diesel supplier</strong> with physical allocation at four strategic port terminals. We supply EN590 Ultra-Low Sulphur Diesel (ULSD) that fully complies with European standard EN 590:2013+A1:2017.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Our Rotterdam ARA allocation enables direct <strong style={{ color: T.text }}>FOB Rotterdam diesel supply</strong> to European, African, and transatlantic buyers. CIF delivery is available from Rotterdam, Fujairah (UAE), and Houston (USGC), making us a true <strong style={{ color: T.text }}>global petroleum trading</strong> partner.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  We work with petroleum product traders, national oil companies, independent distributors, and bulk fuel importers. All cargoes come with full SGS or Intertek inspection reports, CoQ, and SGS Certificate of Quantity.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>QUICK FACTS</h3>
                {[
                  { label: 'Product', value: 'EN590 Diesel / ULSD 10 PPM' },
                  { label: 'Sulphur', value: '≤ 10 mg/kg (Euro 6 compliant)' },
                  { label: 'Min. Cargo', value: '25,000 MT per lifting' },
                  { label: 'Loading Ports', value: 'Rotterdam · Fujairah · Houston' },
                  { label: 'Delivery', value: 'FOB / CIF / TTO / TTT' },
                  { label: 'Inspection', value: 'SGS / Intertek / Bureau Veritas' },
                  { label: 'Payment', value: 'LC at Sight / SBLC / Wire' },
                  { label: 'Pricing', value: 'Platts / Argus + differential' },
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

      {/* Specs */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '0.75rem' }}>
              EN590 Technical Specifications
            </h2>
            <p style={{ color: T.muted, fontFamily: 'DM Sans, sans-serif', marginBottom: '2.5rem', maxWidth: '600px' }}>
              All product supplied meets or exceeds EN 590:2013+A1:2017 standard. Grade certificates issued per batch.
            </p>
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

      {/* Delivery Terms */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Delivery Terms &amp; Port Options
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {deliveryTerms.map(({ term, desc }) => (
                <div key={term} style={{ background: T.warm, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: T.gold, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{term}</div>
                  <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* FAQ */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: T.text, marginBottom: '0.6rem' }}>{q}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.muted, lineHeight: 1.8, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', color: T.muted, marginBottom: '1rem' }}>Have a specific inquiry about EN590 diesel supply?</p>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.75rem 2rem', background: T.gold, color: '#19140D', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }}>
                Request a Supply Offer →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
