import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SGS Verification Process — Quality Inspection for Petroleum | TOO Crude Oil',
  description:
    'All TOO Crude Oil petroleum products are independently verified by SGS, Intertek, or Bureau Veritas. Learn about our SGS inspection process, product quality certification, and trade documentation for crude oil, EN590, and Jet A1.',
  keywords: [
    'SGS verification petroleum', 'SGS inspection crude oil', 'petroleum quality verification',
    'SGS certificate oil', 'oil quality inspection', 'Intertek petroleum', 'Bureau Veritas oil',
    'verified oil supplier', 'petroleum SGS report', 'crude oil inspection', 'SGS certificate of quality',
    'petroleum quality assurance', 'oil trade documentation', 'SGS crude oil',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/sgs-verification' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/sgs-verification',
    title: 'SGS Verification — Petroleum Quality Inspection | TOO Crude Oil',
    description: 'Independent SGS, Intertek, and Bureau Veritas quality inspection for all crude oil and petroleum product cargoes. Complete trade documentation.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'SGS Verification — TOO Crude Oil' }],
  },
};

const T = { text: '#19140D', muted: '#8A7A65', sub: '#4A3C2A', border: '#E3D9C8', warm: '#F4EDE0', surface: '#FFFFFF', gold: '#B8860B' };

const process = [
  { step: '01', title: 'Pre-Shipment Sampling', desc: 'Representative samples are drawn from the storage tank or vessel at load port by an SGS-certified sampling technician, following ISO 3170 procedures for liquid petroleum.' },
  { step: '02', title: 'Laboratory Analysis', desc: 'Samples are analysed at an accredited SGS or Intertek laboratory. Tests cover all key parameters: density, viscosity, sulphur content, flash point, cetane number, etc., per product specification.' },
  { step: '03', title: 'Certificate of Quality (CoQ)', desc: 'SGS issues a Certificate of Quality confirming the product meets specification. The CoQ is a legally recognised document accepted by all major trade finance banks.' },
  { step: '04', title: 'Quantity Measurement', desc: 'Cargo quantity is independently measured by SGS draft survey (for vessels) or tank gauge measurement at the terminal. Certificate of Quantity (CoQ/Q) issued.' },
  { step: '05', title: 'Certificate of Origin', desc: 'Country of origin is certified. Required for customs clearance in most jurisdictions and for applicable duty rate determination.' },
  { step: '06', title: 'Full Document Pack', desc: 'The complete verified document package is couriered to buyer and/or buyer\'s bank: B/L, CoQ, Quantity Certificate, CoO, Insurance Certificate, Invoice, and SGS Report.' },
];

const documents = [
  { doc: 'Bill of Lading (Original 3/3)', req: 'Always' },
  { doc: 'Commercial Invoice', req: 'Always' },
  { doc: 'SGS Certificate of Quality', req: 'Always' },
  { doc: 'SGS Certificate of Quantity', req: 'Always' },
  { doc: 'Certificate of Origin', req: 'Always' },
  { doc: 'Insurance Certificate (CIF)', req: 'CIF shipments' },
  { doc: 'Health Certificate', req: 'Some jurisdictions' },
  { doc: 'SGS Pre-Shipment Inspection Report', req: 'Upon request' },
  { doc: 'Additive Approval Certificate (Jet A1)', req: 'Aviation fuel' },
  { doc: 'MARPOL Bunker Delivery Note', req: 'Marine bunker' },
];

const inspectors = [
  { name: 'SGS S.A.', desc: 'World\'s leading inspection, verification, testing, and certification company. Headquartered in Geneva, Switzerland. Our primary inspection partner across all four terminals.' },
  { name: 'Intertek Group', desc: 'Global quality assurance and testing company (London). Used for Jurong and Fujairah terminal inspections as SGS\'s peer. Intertek reports are equally accepted by LC banks.' },
  { name: 'Bureau Veritas', desc: 'French inspection and certification organisation. Used for select Houston and Rotterdam cargoes and for vessel inspections under SIRE (Ship Inspection Report) requirements.' },
];

const faqs = [
  { q: 'Why is SGS inspection important for petroleum buyers?', a: 'Independent third-party inspection by SGS or equivalent protects both buyer and seller. It ensures the product delivered matches the contracted specification, prevents quantity disputes, and provides documentation that satisfies letter-of-credit (LC) and trade finance requirements. Banks will not release payment under an LC without SGS or equivalent inspection certificates.' },
  { q: 'Who pays for SGS inspection?', a: 'Under FOB terms, the seller (TOO Crude Oil) arranges and pays for SGS inspection at the load port. Under CIF terms, inspection is included in our overall cost. For additional re-inspection at the discharge port requested by the buyer, the buyer bears the cost of that additional inspection.' },
  { q: 'Can I see the SGS certificate before payment?', a: 'Under LC terms, the SGS Certificate of Quality and Certificate of Quantity are included in the document set presented to the issuing bank. For non-LC transactions, we can share digital copies of certificates upon vessel departure and prior to payment settlement, subject to bilateral agreement in the SPA.' },
  { q: 'What happens if the SGS report shows off-spec product?', a: 'If an SGS inspection at load port reveals the product is off-specification, the cargo is not loaded and the matter is resolved before shipment. Our quality control procedures at the terminal (pre-loading sampling) are designed to prevent off-spec cargoes from reaching the inspection stage.' },
];

export default function SGSVerificationPage() {
  return (
    <>
      <PageHero
        label="Quality Assurance"
        title="SGS Verification"
        highlight="Process"
        subtitle="Every cargo independently inspected by SGS, Intertek, or Bureau Veritas. Certificate of Quality, Certificate of Quantity, and full trade documentation issued per cargo."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Independent Verification</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Third-Party Quality Certification on Every Cargo
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP mandates <strong style={{ color: T.text }}>independent SGS inspection</strong> on every petroleum cargo we ship. This commitment goes beyond standard industry practice — we require pre-shipment sampling, laboratory analysis, and certificate issuance before any vessel departs from our terminals.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Our primary inspection partner is <strong style={{ color: T.text }}>SGS S.A.</strong> (Geneva, Switzerland) — the world's most recognised commodity inspection organisation. SGS certificates are accepted by all major trade finance banks for LC documentation and are the gold standard in petroleum trading.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  We also work with <strong style={{ color: T.text }}>Intertek</strong> and <strong style={{ color: T.text }}>Bureau Veritas</strong> where operationally required. All three are ILAC-accredited and internationally recognised — their certificates carry equal legal weight in petroleum trade finance.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>INSPECTION OVERVIEW</h3>
                {[
                  { label: 'Primary Inspector', value: 'SGS S.A. (all terminals)' },
                  { label: 'Secondary', value: 'Intertek · Bureau Veritas' },
                  { label: 'Inspection Standard', value: 'ISO 3170 · IP / ASTM methods' },
                  { label: 'CoQ Issued', value: 'Per cargo, at load port' },
                  { label: 'CoQ Content', value: 'Full spec compliance confirmed' },
                  { label: 'Quantity Method', value: 'Draft survey / tank gauge' },
                  { label: 'LC Compliance', value: 'All major international banks' },
                  { label: 'Certificate Validity', value: 'Original + electronic copies' },
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

      {/* Process */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              SGS Inspection Process
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {process.map(({ step, title, desc }) => (
                <div key={step} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.5rem', color: T.gold, marginBottom: '0.5rem' }}>{step}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.4rem' }}>{title}</div>
                  <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Documents */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Standard Document Package
            </h2>
            <div style={{ background: T.warm, borderRadius: '12px', border: `1px solid ${T.border}`, overflow: 'hidden' }}>
              {documents.map(({ doc, req }, i) => (
                <div key={doc} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? T.surface : '#FDFAF6', borderBottom: i < documents.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.text }}>{doc}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: req === 'Always' ? '#2d6a4f' : T.muted }}>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Inspectors */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Our Inspection Partners
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {inspectors.map(({ name, desc }) => (
                <div key={name} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.5rem' }}>{name}</div>
                  <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* FAQ */}
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
                Request a Verified Cargo →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
