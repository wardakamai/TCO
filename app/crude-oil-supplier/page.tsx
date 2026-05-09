import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crude Oil Supplier — REBCO & Global Crude Oil Export | TOO Crude Oil',
  description:
    'TOO Crude Oil is a verified global crude oil supplier and exporter. We supply REBCO (Russian Export Blend Crude Oil) and other crude grades on FOB and CIF terms from Houston, Rotterdam, and Fujairah. Direct refinery allocation for bulk buyers.',
  keywords: [
    'crude oil supplier', 'global crude oil supplier', 'crude oil exporter', 'REBCO supplier',
    'crude oil Houston', 'crude oil supplier Houston', 'crude oil FOB', 'crude oil CIF',
    'petroleum exporter', 'direct refinery supplier', 'bulk crude oil', 'verified oil supplier',
    'international crude oil supplier', 'oil and gas trading company', 'energy commodity supplier',
    'crude oil trading', 'petroleum products supplier',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/crude-oil-supplier' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/crude-oil-supplier',
    title: 'Global Crude Oil Supplier — REBCO FOB & CIF | TOO Crude Oil',
    description:
      'Verified global crude oil supplier. REBCO and crude grades on FOB/CIF terms from Houston, Rotterdam, and Fujairah. Direct refinery allocation. SGS inspected.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Global Crude Oil Supplier — TOO Crude Oil' }],
  },
};

const T = { text: '#19140D', muted: '#8A7A65', sub: '#4A3C2A', border: '#E3D9C8', warm: '#F4EDE0', surface: '#FFFFFF', gold: '#B8860B' };

const grades = [
  { name: 'REBCO', full: 'Russian Export Blend Crude Oil', api: '31–33° API', sulphur: '~1.3% S (medium sour)', origin: 'Kazakhstan / Russia', notes: 'Primary export grade. Widely traded on Platts Urals basis.' },
  { name: 'CPC Blend', full: 'Caspian Pipeline Consortium', api: '45–46° API', sulphur: '~0.55% S (low)', origin: 'Kazakhstan (Tengiz, Kashagan)', notes: 'Light sweet crude. Premium over Brent assessed.' },
  { name: 'KEBCO', full: 'Kazakhstan Export Blend Crude Oil', api: '~28° API', sulphur: '~1.8% S', origin: 'Kazakhstan', notes: 'Kazakh sour blend. Competitive pricing for Asian refineries.' },
];

const terminals = [
  { port: 'Houston, TX — USGC', desc: 'Direct port access at the Port of Houston. FOB Gulf Coast delivery for US Gulf, Caribbean, Latin American, and transatlantic crude buyers. 1.6M m³ storage capacity.' },
  { port: 'Rotterdam, NL — ARA', desc: 'ARA terminal allocation providing FOB and CIF delivery for European refineries and crude importers. Access to North Sea, NWE, and Mediterranean routes.' },
  { port: 'Fujairah, UAE', desc: 'Middle East hub for CIF delivery to Asia, Indian subcontinent, East Africa, and Red Sea destinations. 1.4M m³ storage.' },
];

const faqs = [
  { q: 'What crude oil grades does TOO Crude Oil supply?', a: 'We supply REBCO (Russian Export Blend Crude Oil), CPC Blend (Caspian Pipeline Consortium light sweet crude from Kazakhstan), and KEBCO. Our primary grade is REBCO, priced on the Platts Urals differential basis. CPC Blend is available for buyers requiring a light sweet crude option.' },
  { q: 'What is the minimum crude oil cargo size?', a: 'Standard crude cargo sizes start at 80,000 MT (approximately 600,000 barrels) for Aframax-size vessels, with Suezmax and VLCC cargoes available for large-volume buyers. Smaller parcels may be available at Rotterdam for pipeline or barge delivery.' },
  { q: 'How is crude oil priced?', a: 'Crude oil pricing is typically Platts Urals (for REBCO) or Dated Brent (for CPC Blend) plus/minus an agreed differential, converted to metric tonnes at the agreed conversion factor. Pricing periods are agreed at the time of deal and set out in the contract.' },
  { q: 'Do you provide allocation letters and BCL?', a: 'Yes. Upon successful KYC and contract execution, we provide formal allocation letters from terminal management and can arrange Bank Comfort Letters (BCL) / Bank Capability Letters as required for the buyer\'s financial procedures.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'REBCO Crude Oil — Russian Export Blend',
  description: 'REBCO crude oil supplied by Crude Oil LLP on FOB and CIF terms from Houston, Rotterdam, and Fujairah. Platts Urals pricing, SGS inspected.',
  brand: { '@type': 'Brand', name: 'Crude Oil LLP' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: 'Crude Oil LLP', url: 'https://www.toocrudeoil.com' },
    areaServed: 'Worldwide',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', description: 'Price per barrel based on Platts Urals differential or Dated Brent basis' },
  },
};

export default function CrudeOilSupplierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Crude Oil Export"
        title="Global Crude Oil"
        highlight="Supplier"
        subtitle="REBCO and Caspian crude grades on FOB and CIF terms — direct refinery allocation from Houston, Rotterdam, and Fujairah. Verified supply for refineries, traders, and NOCs worldwide."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Direct Allocation</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Verified Global Crude Oil Exporter
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP has been a <strong style={{ color: T.text }}>direct crude oil supplier</strong> since 2007, operating from Kazakhstan with international terminal positions in Houston, Rotterdam, and Fujairah. Our crude oil supply chain serves independent refineries, national oil companies, petroleum traders, and commodity hedge funds.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  As a <strong style={{ color: T.text }}>crude oil exporter</strong> with direct refinery allocation, we offer transparent pricing based on Platts or Argus assessments. Our documentation package — including SGS inspection reports, Bills of Lading, CoQ, and CoO — meets international trade finance and letter-of-credit requirements.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  We supply crude oil to <strong style={{ color: T.text }}>refineries worldwide</strong> including Europe, Asia, West Africa, the Middle East, and the Americas. Both spot cargo and term supply arrangements are available, with pricing periods set per ISDA or bilateral agreement.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>CRUDE OIL SUPPLY OVERVIEW</h3>
                {[
                  { label: 'Primary Grade', value: 'REBCO (Russian Export Blend)' },
                  { label: 'Additional Grades', value: 'CPC Blend · KEBCO' },
                  { label: 'Min. Cargo', value: '80,000 MT (Aframax)' },
                  { label: 'Vessel Sizes', value: 'Aframax · Suezmax · VLCC' },
                  { label: 'Load Ports', value: 'Houston · Rotterdam · Fujairah' },
                  { label: 'Terms', value: 'FOB / CIF / CFR' },
                  { label: 'Pricing', value: 'Platts Urals / Dated Brent ± diff.' },
                  { label: 'Inspection', value: 'SGS / Bureau Veritas' },
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

      {/* Grades */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Available Crude Oil Grades
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {grades.map(({ name, full, api, sulphur, origin, notes }) => (
                <div key={name} style={{ background: T.surface, borderRadius: '12px', padding: '1.75rem', border: `1px solid ${T.border}` }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.15rem', color: T.text }}>{name}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{full}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    {[['API Gravity', api], ['Sulphur', sulphur], ['Origin', origin]].map(([k, v]) => (
                      <div key={k} style={{ background: T.warm, borderRadius: '6px', padding: '0.5rem 0.75rem' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: T.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{k}</div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: T.text }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.muted, margin: 0, lineHeight: 1.6 }}>{notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Terminals */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Loading Terminals
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {terminals.map(({ port, desc }) => (
                <div key={port} style={{ background: T.warm, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: T.gold, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>{port}</div>
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
                Request Crude Oil Allocation →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
