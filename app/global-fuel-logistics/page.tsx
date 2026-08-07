import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Global Fuel Logistics — Petroleum Transport & Supply Chain',
  description:
    'TOO Crude Oil manages end-to-end global fuel logistics for crude oil and petroleum products. Freight, insurance, customs, documentation, and multimodal delivery from Rotterdam, Houston, Fujairah, and Singapore to any world port.',
  keywords: [
    'global fuel logistics', 'petroleum logistics', 'fuel transport worldwide', 'crude oil logistics',
    'petroleum supply chain', 'oil freight management', 'CIF fuel delivery', 'bulk fuel exporter',
    'energy commodity supplier', 'fuel supplier worldwide', 'global petroleum trading',
    'petroleum freight', 'oil tanker logistics', 'international fuel supplier',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/global-fuel-logistics' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/global-fuel-logistics',
    title: 'Global Fuel Logistics — Petroleum Supply Chain | TOO Crude Oil',
    description: 'End-to-end petroleum logistics from Rotterdam, Houston, Fujairah, and Singapore. Freight, insurance, customs, and CIF delivery to any major port.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Global Fuel Logistics — TOO Crude Oil' }],
  },
};

const services = [
  { icon: '⛴', title: 'Ocean Freight Arrangement', desc: 'We charter or book space on Aframax, Suezmax, and VLCC tankers through our network of vetted shipbrokers. Competitive freight rates negotiated based on cargo size, route, and market conditions.' },
  { icon: '🛡', title: 'Marine Cargo Insurance', desc: 'Under CIF terms, we arrange marine cargo insurance at minimum 110% CIF value. All-risk cover available on request. Insured with Lloyd\'s of London-approved underwriters.' },
  { icon: '📋', title: 'Trade Documentation', desc: 'Complete generation of shipping documents: Bill of Lading, Invoice, CoQ, CoO, Packing List, SGS Reports, and bank-compliant LC document sets. We handle all export customs and EEI filing.' },
  { icon: '🗂', title: 'Customs & Compliance', desc: 'Our trade compliance team handles export licensing, customs declarations (AES/EEI for US), and destination import requirements. We ensure full regulatory compliance across all jurisdictions.' },
  { icon: '🔍', title: 'Cargo Tracking', desc: 'Real-time vessel tracking provided for all CIF shipments. Buyers receive vessel name, IMO number, ETA updates, and are notified at key voyage milestones (departure, canal transit, arrival).' },
  { icon: '📦', title: 'Last-Mile Delivery', desc: 'Beyond port delivery, we can coordinate inland transport: pipeline, rail, road tanker, and barge. Available for select markets — Europe (ARA/Rhine corridor), US (Gulf Coast pipeline), Singapore (jetty-to-refinery).' },
];

const routes = [
  { from: 'Rotterdam', to: 'Mediterranean', time: '5–8 days', vessel: 'Aframax / MR Tanker' },
  { from: 'Rotterdam', to: 'West Africa', time: '12–18 days', vessel: 'MR / LR1 Tanker' },
  { from: 'Houston', to: 'Caribbean / LatAm', time: '3–10 days', vessel: 'MR / LR1 Tanker' },
  { from: 'Houston', to: 'Europe (ARA)', time: '14–18 days', vessel: 'Aframax / Suezmax' },
  { from: 'Fujairah', to: 'Indian Subcontinent', time: '3–7 days', vessel: 'MR / LR1 Tanker' },
  { from: 'Fujairah', to: 'East Africa', time: '7–12 days', vessel: 'MR Tanker' },
  { from: 'Fujairah', to: 'South East Asia', time: '7–14 days', vessel: 'LR1 / Aframax' },
  { from: 'Jurong (SG)', to: 'China / North Asia', time: '7–14 days', vessel: 'LR1 / Aframax' },
];

const faqs = [
  { q: 'What vessel types do you use for petroleum transport?', a: 'We use the full range of oil tanker classes depending on cargo size and route: MR (Medium Range, 25,000–55,000 DWT) for refined products on short-haul routes; LR1/LR2 (Long Range, 55,000–110,000 DWT) for refined product CIF trades; Aframax (80,000–120,000 DWT) for crude and refined products; Suezmax (120,000–200,000 DWT) and VLCC (250,000+ DWT) for large crude cargoes.' },
  { q: 'Do you handle multimodal (sea + inland) delivery?', a: 'Yes, for select routes. In Europe, we can arrange sea delivery to ARA terminals followed by Rhine barge delivery inland to German, Swiss, Belgian, or Dutch destinations. In the US Gulf Coast, pipeline delivery from Houston terminals is available for buyers connected to the TEPPCO or Colonial Pipeline networks.' },
  { q: 'How do you handle vessel vetting?', a: 'All nominated vessels must pass our vetting requirements based on SIRE (Ship Inspection Report Programme) by OCIMF (Oil Companies International Marine Forum) and CDI (Chemical Distribution Institute) criteria. Vessels must be in class and have no critical SIRE observations. We assess vessels through our approved vetting system before nomination acceptance.' },
  { q: 'Can you arrange freight for buyer-nominated cargoes?', a: 'Yes. For buyers under FOB terms who want our help arranging freight, we offer freight-only brokerage services on a commission basis. Alternatively, we can provide FOB-plus-freight quotes, effectively offering an equivalent CIF price without formal Incoterms change, allowing buyers to benefit from our freight relationships while maintaining their preferred trade terms.' },
];

export default function GlobalFuelLogisticsPage() {
  return (
    <>
      <PageHero
        label="Supply Chain"
        title="Global Fuel"
        highlight="Logistics"
        subtitle="End-to-end petroleum supply chain management from Rotterdam, Houston, Fujairah, and Singapore. We handle freight, insurance, customs, documentation, and CIF delivery to any world port."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>End-to-End</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Complete Petroleum Logistics From Source to Port
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP manages the <strong style={{ color: T.text }}>complete petroleum supply chain</strong> from terminal to discharge port. Our logistics capabilities allow buyers to request CIF delivery and receive petroleum products without managing freight, insurance, or customs — we handle the entire operational chain.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Operating from <strong style={{ color: T.text }}>four global terminals</strong> (Rotterdam, Houston, Fujairah, Jurong), our logistics network covers every major global shipping route. We maintain relationships with vetted shipbrokers, tanker operators, marine insurers, and customs brokers in all key jurisdictions.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  For buyers preferring FOB terms, we still offer <strong style={{ color: T.text }}>freight-only arrangements</strong> on commission — giving you the advantages of our freight network without changing your preferred trade terms.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>LOGISTICS CAPABILITIES</h3>
                {[
                  { label: 'Load Ports', value: 'Rotterdam · Houston · Fujairah · Jurong' },
                  { label: 'Vessel Types', value: 'MR · LR1/LR2 · Aframax · Suezmax · VLCC' },
                  { label: 'Incoterms', value: 'FOB · CIF · CFR · DAP' },
                  { label: 'Insurance', value: 'Lloyd\'s approved underwriters' },
                  { label: 'Inspection', value: 'SGS / Intertek at load port' },
                  { label: 'Documentation', value: 'Full LC-compliant document set' },
                  { label: 'Tracking', value: 'Real-time vessel tracking per cargo' },
                  { label: 'Multimodal', value: 'Barge / pipeline / road available' },
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

      {/* Services */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Logistics Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {services.map(({ icon, title, desc }) => (
                <div key={title} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.4rem' }}>{title}</div>
                  <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Routes */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Key Supply Routes &amp; Transit Times
            </h2>
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: `1px solid ${T.border}` }}>
              <div style={{ background: T.warm, overflow: 'hidden', minWidth: '500px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', padding: '0.75rem 1.5rem', background: '#19140D', gap: '1rem' }}>
                  {['From', 'To', 'Transit', 'Vessel Type'].map(h => (
                    <span key={h} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</span>
                  ))}
                </div>
                {routes.map(({ from, to, time, vessel }, i) => (
                  <div key={`${from}-${to}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? T.surface : '#FDFAF6', borderBottom: i < routes.length - 1 ? `1px solid ${T.border}` : 'none', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: T.gold }}>{from}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.text }}>{to}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{time}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{vessel}</span>
                  </div>
                ))}
              </div>
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
                Discuss Logistics Requirements →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
