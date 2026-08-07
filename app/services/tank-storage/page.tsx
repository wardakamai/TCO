import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import RelatedLinks from '@/components/shared/RelatedLinks';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Tank Storage Services — Bulk Liquid & Petroleum Storage',
  description:
    'TOO Crude Oil offers independent tank storage for crude oil, diesel, jet fuel, and bunker fuel at Rotterdam, Houston, Jurong, and Fujairah. Storage agreements, blending, and real-time inventory management for traders and importers.',
  keywords: [
    'tank storage services', 'bulk liquid storage', 'petroleum storage terminal', 'oil storage facility',
    'fuel storage terminal', 'storage terminal Rotterdam', 'independent tank storage', 'storage agreement oil',
    'tank storage receipt', 'terminal storage capacity', 'crude oil storage', 'diesel storage terminal',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/services/tank-storage' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/services/tank-storage',
    title: 'Tank Storage Services — Bulk Petroleum Storage | TOO Crude Oil',
    description: 'Independent tank storage for crude oil and refined products at four global terminals. Storage agreements, blending, and inventory management.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Tank Storage Services — TOO Crude Oil' }],
  },
};

const benefits = [
  { title: 'Capital-Free Capacity', desc: 'Access large-volume storage infrastructure without the capital cost of building or acquiring your own terminal. Pay only for the tankage and throughput you actually use.' },
  { title: 'Strategic Port Access', desc: 'Storage at Rotterdam, Houston, Jurong, and Fujairah puts your inventory at four of the busiest petroleum trading hubs in the world, minutes from deep-water berths and pipeline networks.' },
  { title: 'Blending & Segregation', desc: 'Tanks are configured for product segregation and, where required, in-tank or in-line blending to meet buyer specifications before redelivery.' },
  { title: 'Real-Time Inventory Visibility', desc: 'Automatic tank gauging (ATG) and telemetry give you live volume, temperature, and density readings for every parcel held on your account.' },
  { title: 'Marine & Pipeline Connectivity', desc: 'Every terminal in our network has direct marine berths and, at Rotterdam and Houston, pipeline connections into the surrounding refining and distribution grid.' },
  { title: 'Flexible Contract Terms', desc: 'Storage can be arranged on a spot, monthly, or multi-year basis, with throughput and ancillary handling fees agreed upfront in the storage agreement.' },
];

const storageProcess = [
  { step: '01', title: 'Tank Nomination', desc: 'Client specifies product, required volume, and preferred terminal. We confirm available tankage and proposed storage window.' },
  { step: '02', title: 'Storage Agreement', desc: 'A Tank Storage Agreement (TSA) is executed, setting out storage fees, throughput charges, minimum stay, and handling terms.' },
  { step: '03', title: 'Intake & Gauging', desc: 'Product is received by vessel, barge, or pipeline. Opening volume is confirmed by independent tank gauging and sampling.' },
  { step: '04', title: 'Custody & Monitoring', desc: 'Product is held under our custody with continuous inventory monitoring, quality preservation, and, where applicable, blending.' },
  { step: '05', title: 'Tank Storage Receipt', desc: 'A Tank Storage Receipt (TSR) is issued confirming the client\'s title to the stored volume — often used as collateral in trade finance.' },
  { step: '06', title: 'Withdrawal & Redelivery', desc: 'Product is redelivered by vessel, truck, or pipeline on client instruction, with closing gauge and Certificate of Quantity issued.' },
];

const documentation = [
  { name: 'Tank Storage Agreement (TSA)', desc: 'Governs the commercial terms of the storage arrangement: fees, minimum term, liability, and handling obligations.' },
  { name: 'Tank Storage Receipt (TSR)', desc: 'Confirms the volume and product held on a client\'s account — frequently used as security in letter-of-credit or trade finance structures.' },
  { name: 'Statement of Facts', desc: 'A timestamped record of vessel arrival, berthing, discharge, and departure at the terminal during intake or redelivery.' },
  { name: 'Gauge & Ullage Reports', desc: 'Independent tank gauging reports confirming opening and closing volumes at each intake or withdrawal.' },
  { name: 'Certificate of Quantity', desc: 'Issued by an independent inspector (SGS, Intertek, or Bureau Veritas) confirming quantity delivered into or out of storage.' },
];

const faqs = [
  { q: 'What is a Tank Storage Agreement?', a: 'A Tank Storage Agreement (TSA) is the commercial contract between a storage provider and a client that sets out the terms under which petroleum product is held at a terminal — including storage fees, throughput charges, minimum contract term, product specification, and liability for loss or contamination.' },
  { q: 'What is a Tank Storage Receipt used for?', a: 'A Tank Storage Receipt (TSR) confirms that a specified volume and grade of product is held in a client\'s name at a terminal. Traders and importers often use a TSR as collateral when arranging trade finance or letters of credit, since it evidences ownership of a physical, storable asset.' },
  { q: 'What is the minimum storage volume?', a: 'Minimum storage volumes vary by terminal and product, but typically start from 5,000 MT for dedicated tankage at our smaller facilities, with larger blocks of capacity available at Rotterdam and Houston. Spot storage for smaller parcels can sometimes be arranged within shared tankage.' },
  { q: 'Can product be blended while in storage?', a: 'Yes. Several of our tanks are configured for in-tank or in-line blending, allowing clients to adjust product specification — for example combining base fuel grades to meet a target sulphur content or octane rating — before redelivery.' },
  { q: 'How is stored product insured?', a: 'Product held in our terminals is covered under the terminal operator\'s all-risk storage insurance as standard. Clients requiring additional named-cargo insurance can arrange it separately, and we will provide the documentation an insurer needs to underwrite the policy.' },
  { q: 'Can I store product I purchased from another supplier?', a: 'Yes. Our tank storage service is available to hold third-party product, not only cargoes purchased from TOO Crude Oil. Clients simply need to arrange delivery into our terminal by vessel, barge, or pipeline, subject to product specification and available tankage at the time of nomination.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Tank Storage', path: '/services/tank-storage' },
  ]),
  service({
    name: 'Tank Storage Services',
    description: 'Independent tank storage for crude oil, diesel, jet fuel, and bunker fuel at Rotterdam, Houston, Jurong, and Fujairah, with storage agreements, blending, and inventory management.',
    path: '/services/tank-storage',
    serviceType: 'Petroleum Storage',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function TankStoragePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Storage Services"
        title="Tank Storage"
        highlight="Services"
        subtitle="Independent bulk liquid storage for crude oil and refined products at four strategic port terminals — with flexible agreements, blending, and real-time inventory visibility."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Storage Infrastructure</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  What Tank Storage Means for Traders and Importers
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Bulk liquid storage is the physical backbone of the petroleum trade. Before a cargo of crude oil, diesel, or jet fuel reaches a refinery, blender, or end-buyer, it typically passes through one or more storage terminals — held in tanks that allow traders to break large parcels into smaller lots, blend products to specification, and time deliveries against market demand rather than vessel schedules.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  TOO Crude Oil operates independent tank storage across four terminals — <strong style={{ color: T.text }}>Rotterdam, Houston, Jurong, and Fujairah</strong> — with more than 7 million cubic metres of combined capacity. Clients contract for tankage the same way they would with any dedicated storage terminal: through a formal Tank Storage Agreement that sets out fees, minimum stay, and handling obligations, backed by tank storage receipts that can be used in trade finance.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  This is distinct from simply buying a cargo from us on FOB or CIF terms — tank storage is a standalone service for traders, refineries, governments, and fuel importers who need somewhere to hold product they already own, whether that is a strategic reserve, a working inventory position, or cargo awaiting blending before onward sale.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  Global storage utilisation moves with the market. When contango widens — when forward prices sit meaningfully above spot — traders lease additional tankage to hold physical barrels for later resale, and terminal capacity at hubs like Rotterdam and Fujairah can tighten within weeks. Conversely, in a backwardated market, storage demand eases as traders prefer to sell promptly rather than carry inventory. Because our terminal positions span Europe, the US Gulf Coast, the Middle East, and Southeast Asia, clients can shift storage strategy between regions rather than being tied to a single port's capacity cycle.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>STORAGE AT A GLANCE</h3>
                {[
                  { label: 'Terminals', value: 'Rotterdam · Houston · Jurong · Fujairah' },
                  { label: 'Combined Capacity', value: '7M+ m³' },
                  { label: 'Products Stored', value: 'Crude · Diesel · Jet A1 · Gasoline · Bunker' },
                  { label: 'Contract Types', value: 'Spot, monthly, or multi-year TSA' },
                  { label: 'Blending', value: 'In-tank and in-line, where configured' },
                  { label: 'Inventory Monitoring', value: 'Automatic tank gauging (ATG)' },
                  { label: 'Access', value: 'Marine berths + pipeline (Rotterdam/Houston)' },
                  { label: 'Documentation', value: 'TSA, TSR, Gauge Reports, CoQ' },
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

      {/* Benefits */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Why Lease Storage Instead of Building Your Own
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {benefits.map(({ title, desc }) => (
                <div key={title} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.5rem' }}>{title}</div>
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
              How Tank Storage Works
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {storageProcess.map(({ step, title, desc }) => (
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

      {/* Documentation */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1rem' }}>
              Storage Documentation
            </h2>
            <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '760px' }}>
              Every intake, storage period, and withdrawal is backed by a formal document trail — the same documentation banks and auditors expect to see when stored product is used as trade finance collateral.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {documentation.map(({ name, desc }) => (
                <div key={name} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.5rem' }}>{name}</div>
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
                Request Storage Availability →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <RelatedLinks
        links={[
          { title: 'Tank Leasing', desc: 'Dedicated tank capacity leased on longer-term contracts, independent of throughput storage.', href: '/services/tank-leasing' },
          { title: 'Terminal Operations', desc: 'How cargo intake, gauging, and jetty scheduling work at our port terminals.', href: '/services/terminal-operations' },
          { title: 'Terminal Network', desc: 'Explore our four port terminals — Rotterdam, Houston, Jurong, and Fujairah.', href: '/storage' },
          { title: 'Products', desc: 'The full range of crude oil and refined petroleum products we supply and store.', href: '/products' },
          { title: 'SGS Verification', desc: 'Independent quality and quantity inspection for stored and shipped cargoes.', href: '/sgs-verification' },
          { title: 'Contact Our Trading Desk', desc: 'Discuss storage availability, terms, and pricing with our team in Almaty.', href: '/contact' },
        ]}
      />

      <CTABanner />
    </>
  );
}
