import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'CIF Petroleum Supply — CIF Crude Oil & Fuel Delivery Worldwide',
  description:
    'TOO Crude Oil provides CIF petroleum supply for crude oil, EN590 diesel, Jet A1, and bunker fuel. Cost, Insurance & Freight delivery to any major port worldwide. Direct CIF supplier with SGS verification.',
  keywords: [
    'CIF crude oil supplier', 'CIF petroleum supply', 'CIF fuel delivery', 'CIF oil supplier',
    'cost insurance freight petroleum', 'CIF diesel supplier', 'CIF Jet A1', 'CIF Rotterdam',
    'CIF Fujairah', 'international fuel supplier', 'fuel supplier worldwide', 'global petroleum trading',
    'petroleum CIF terms', 'oil CIF delivery', 'energy commodity supplier',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/cif-petroleum-supply' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/cif-petroleum-supply',
    title: 'CIF Petroleum Supply — Worldwide Delivery | TOO Crude Oil',
    description: 'CIF petroleum supply for crude oil, EN590, Jet A1, and bunker fuel to any major port. TOO Crude Oil handles cost, freight, and insurance.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'CIF Petroleum Supply — TOO Crude Oil' }],
  },
};

const products = [
  { name: 'Crude Oil (REBCO / CPC)', desc: 'CIF delivery of REBCO and CPC Blend crude oil. Aframax to VLCC vessel sizes. Pricing on Platts Urals or Dated Brent basis.' },
  { name: 'Diesel EN590 (ULSD)', desc: 'CIF EN590 diesel 10 PPM to European, African, and Asian ports. SGS inspected at load port.' },
  { name: 'Jet Fuel A1', desc: 'CIF Jet A1 aviation fuel from Fujairah and Rotterdam. ASTM D1655 / DEF STAN 91-091 compliant.' },
  { name: 'Gasoline RON 92/95', desc: 'CIF motor gasoline EN228 compliant. Ideal for West Africa, Latin America, and developing market importers.' },
  { name: 'Bunker Fuel IFO 180/380', desc: 'CIF marine bunker fuel to major bunkering ports. IMO 2020 compliant VLSFO also available.' },
  { name: 'LNG', desc: 'Liquefied Natural Gas CIF supply from Kazakhstan fields. Available for long-term off-take agreements.' },
];

const cifProcess = [
  { step: '01', title: 'Inquiry & KYC', desc: 'Buyer submits ICPO or formal inquiry. Seller conducts KYC and due diligence on buyer entity.' },
  { step: '02', title: 'Contract Execution', desc: 'Sales and Purchase Agreement signed with full terms: product spec, quantity, price formula, load port, CIF destination, and payment terms.' },
  { step: '03', title: 'Vessel Nomination', desc: 'Seller nominates vessel and arranges freight. Cargo is booked to buyer\'s nominated discharge port. Insurance arranged per CIF Incoterms 2020.' },
  { step: '04', title: 'SGS Inspection', desc: 'SGS or Intertek inspects cargo at load port. Certificate of Quality and Certificate of Quantity issued before vessel departure.' },
  { step: '05', title: 'Shipping Documents', desc: 'Full document set: Bill of Lading, CoQ, CoO, Insurance Certificate, Packing List, and SGS Report transmitted to buyer or issuing bank.' },
  { step: '06', title: 'Discharge & Settlement', desc: 'Cargo arrives at buyer\'s port. Discharge quantity confirmed. Payment settled per LC or agreed payment terms.' },
];

const faqs = [
  { q: 'What does CIF mean in petroleum trading?', a: 'CIF stands for Cost, Insurance, and Freight (Incoterms 2020). Under CIF terms, the seller (TOO Crude Oil) pays for the cost of the product, arranges and pays for ocean freight to the named discharge port, and provides minimum cargo insurance. Risk transfers to the buyer when the cargo is loaded on the vessel at the load port.' },
  { q: 'Which discharge ports can you deliver CIF?', a: 'We can deliver CIF to any major deep-water port globally — including all major European ports (Rotterdam, Hamburg, Antwerp, Genoa), West African ports (Lagos, Abidjan, Lomé, Dakar), East African ports (Mombasa, Dar es Salaam), Middle Eastern ports (Fujairah, Jeddah, Aqaba), and Asian ports (Colombo, Karachi, Mumbai, Singapore, Shanghai).' },
  { q: 'How is the insurance arranged under CIF terms?', a: 'Under Incoterms 2020 CIF, we arrange marine cargo insurance with a reputable insurer covering minimum 110% of the cargo\'s CIF value. Buyers may request additional insurance coverage (e.g., all-risk instead of minimum cover) — this is negotiated at contract stage.' },
  { q: 'What documentation comes with a CIF cargo?', a: 'Standard CIF documentation includes: Original Bill of Lading (3/3), Commercial Invoice, Certificate of Quality (SGS/Intertek), Certificate of Quantity, Certificate of Origin, Insurance Certificate, Packing List, and Health Certificate where applicable. Additional documents can be provided per buyer bank requirements.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'CIF Petroleum Supply', path: '/cif-petroleum-supply' },
  ]),
  service({
    name: 'CIF Petroleum Supply',
    description: 'Cost, Insurance & Freight delivery of crude oil, EN590 diesel, Jet A1, and bunker fuel to any major port worldwide, with SGS verification.',
    path: '/cif-petroleum-supply',
    serviceType: 'CIF Petroleum Supply',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function CIFPetroleumSupplyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="CIF Delivery"
        title="CIF Petroleum"
        highlight="Supply"
        subtitle="Cost, Insurance & Freight delivery of crude oil, EN590 diesel, Jet A1, gasoline, and bunker fuel to any major port worldwide. TOO Crude Oil manages the full logistics chain."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Incoterms 2020</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Why Choose CIF With TOO Crude Oil?
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Under <strong style={{ color: T.text }}>CIF (Cost, Insurance & Freight)</strong> terms, we handle the full export logistics chain — from terminal to your nominated discharge port. This is the preferred delivery mode for buyers who wish to minimise operational complexity, particularly national oil companies, government buyers, and import-dependent distributors.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Our CIF petroleum supply covers all products: <strong style={{ color: T.text }}>crude oil, EN590 diesel, Jet A1, gasoline, and bunker fuel</strong>. We operate from four strategic terminals (Rotterdam, Houston, Fujairah, Jurong) to ensure shortest transit times and most competitive freight rates to any destination.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Every CIF shipment is accompanied by SGS or Intertek inspection documentation and full banking-grade shipping documents, ensuring smooth letter-of-credit processing and trade finance compliance.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  If you have your own chartering capability and would prefer to arrange freight and insurance yourself, see our{' '}
                  <Link href="/services/fob-trading" style={{ color: T.gold, fontWeight: 600 }}>FOB trading</Link> page for the alternative delivery structure.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>CIF SUPPLY AT A GLANCE</h3>
                {[
                  { label: 'Incoterms', value: 'CIF 2020 (Cost, Insurance, Freight)' },
                  { label: 'Load Ports', value: 'Rotterdam · Fujairah · Houston · Jurong' },
                  { label: 'Discharge Ports', value: 'Any major global port' },
                  { label: 'Products', value: 'Crude · EN590 · Jet A1 · Gasoline · Bunker' },
                  { label: 'Insurance', value: 'Min. 110% CIF value (can increase)' },
                  { label: 'Inspection', value: 'SGS / Intertek at load port' },
                  { label: 'Transit Time', value: '7–35 days depending on route' },
                  { label: 'Payment', value: 'LC at Sight / SBLC / Prepayment' },
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

      {/* Products */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Products Available on CIF Terms
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {products.map(({ name, desc }) => (
                <div key={name} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.5rem' }}>{name}</div>
                  <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Process */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              CIF Supply Process
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {cifProcess.map(({ step, title, desc }) => (
                <div key={step} style={{ background: T.warm, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.5rem', color: T.gold, marginBottom: '0.5rem' }}>{step}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.4rem' }}>{title}</div>
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
                Request CIF Supply Quote →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
