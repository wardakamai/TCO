import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import RelatedLinks from '@/components/shared/RelatedLinks';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FOB Trading — Free On Board Petroleum Supply',
  description:
    'Buy crude oil, EN590 diesel, Jet A1, and bunker fuel FOB from TOO Crude Oil terminals at Rotterdam, Houston, Jurong, and Fujairah. Understand FOB Incoterms, risk transfer, and vessel nomination for petroleum trading.',
  keywords: [
    'FOB trading', 'FOB petroleum supply', 'free on board oil', 'FOB Incoterms', 'FOB crude oil',
    'FOB diesel supplier', 'FOB vs CIF', 'FOB delivery terms', 'FOB contract oil', 'FOB Rotterdam',
    'FOB Houston', 'oil export FOB',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/services/fob-trading' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/services/fob-trading',
    title: 'FOB Trading — Free On Board Petroleum Supply | TOO Crude Oil',
    description: 'FOB crude oil and refined product supply from four global terminals. Buyer arranges freight; TCO loads and documents the cargo.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'FOB Trading — TOO Crude Oil' }],
  },
};

const benefits = [
  { title: 'Lower Landed Cost', desc: 'Without freight and insurance built into the price, FOB cargoes are typically cheaper at the point of purchase — buyers capture any freight savings from their own chartering relationships.' },
  { title: 'Full Control Over Freight', desc: 'Buyers select their own vessel, shipping line, and route, which matters for traders with existing charter arrangements or specific vessel-class requirements.' },
  { title: 'Flexible Destination', desc: 'Because the buyer arranges the voyage, cargo can be redirected to a different discharge port after loading — useful for traders selling cargoes on while afloat.' },
  { title: 'Faster Deal Execution', desc: 'FOB contracts involve fewer moving parts on the seller\'s side (no freight or insurance arrangement), which can shorten the time from agreement to loading.' },
  { title: 'Four Load Port Options', desc: 'FOB cargoes are available from Rotterdam, Houston, Jurong, and Fujairah, giving buyers a choice of load port geography to suit their onward voyage.' },
  { title: 'Suited to Established Traders', desc: 'FOB works best for buyers with their own shipping or chartering capability, or an appointed freight forwarder — a natural fit for trading houses, refineries, and national oil companies.' },
];

const fobProcess = [
  { step: '01', title: 'Inquiry & ICPO', desc: 'Buyer submits an Irrevocable Corporate Purchase Order or formal inquiry specifying product, volume, and preferred load port.' },
  { step: '02', title: 'SPA Execution', desc: 'A Sales and Purchase Agreement is signed specifying FOB Incoterms 2020, load port, laycan window, price formula, and payment terms.' },
  { step: '03', title: 'Vessel Nomination', desc: 'The buyer nominates a vessel and provides its particulars to the seller ahead of the agreed laycan (loading window).' },
  { step: '04', title: 'Loading & Inspection', desc: 'Product is loaded at the terminal under independent SGS or Intertek supervision, with gauging and sampling before and after loading.' },
  { step: '05', title: 'Bill of Lading & Title Transfer', desc: 'The Bill of Lading is issued on completion of loading; risk and title transfer to the buyer as product passes the vessel\'s rail.' },
  { step: '06', title: 'Freight & Onward Voyage', desc: 'The buyer\'s vessel departs under its own charter arrangements; freight, insurance, and the onward voyage are the buyer\'s responsibility from this point.' },
];

const documentation = [
  { name: 'Sales and Purchase Agreement (SPA)', desc: 'The governing contract specifying FOB Incoterms, load port, laycan, quantity tolerance, price formula, and payment terms.' },
  { name: 'Notice of Readiness (NOR)', desc: 'Issued once the terminal and cargo are ready for the buyer\'s nominated vessel to commence loading.' },
  { name: 'Bill of Lading', desc: 'The key title document under FOB — issued on completion of loading, confirming quantity and grade shipped and evidencing the buyer\'s ownership.' },
  { name: 'Certificate of Quality & Quantity', desc: 'Issued by an independent inspector confirming the product loaded meets the contracted specification and volume.' },
  { name: 'Certificate of Origin', desc: 'Confirms the country of origin of the product, required for customs clearance at most discharge ports.' },
];

const faqs = [
  { q: 'What does FOB mean in petroleum trading?', a: 'FOB (Free On Board) is an Incoterms 2020 delivery term under which the seller\'s responsibility ends once the product passes the vessel\'s rail at the load port. The buyer arranges and pays for the vessel, freight, and marine insurance from that point onward, and takes on the risk of loss or damage during the sea voyage.' },
  { q: 'What is the difference between FOB and CIF?', a: 'Under FOB, the buyer arranges and pays for freight and insurance, and risk transfers at the load port. Under CIF (Cost, Insurance & Freight), the seller arranges and pays for freight and minimum insurance to the named discharge port, though risk still transfers to the buyer at the load port under both terms. In practice, FOB gives the buyer more control over logistics; CIF is simpler for buyers without their own chartering capability. TOO Crude Oil offers both — see our CIF petroleum supply page for the alternative structure.' },
  { q: 'Who nominates the vessel under an FOB contract?', a: 'The buyer nominates the vessel, providing particulars (name, IMO number, flag, deadweight, and ETA) to the seller within the timeframe specified in the Sales and Purchase Agreement, so the terminal can plan berth allocation and confirm loading readiness.' },
  { q: 'When exactly does risk transfer under FOB?', a: 'Risk transfers from seller to buyer once the product passes the vessel\'s permanent rail at the load port — in practice, once loading is complete and the Bill of Lading is issued. Before that point, any loss or damage during loading remains the seller\'s responsibility.' },
  { q: 'Can I buy FOB without operating my own shipping department?', a: 'Yes. Many FOB buyers use an appointed freight forwarder or ship broker to handle vessel chartering and freight arrangements rather than managing it in-house. We work directly with your nominated broker or forwarder to coordinate the vessel nomination and loading schedule.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'FOB Trading', path: '/services/fob-trading' },
  ]),
  service({
    name: 'FOB Trading',
    description: 'Free On Board supply of crude oil, EN590 diesel, Jet A1, and bunker fuel from Rotterdam, Houston, Jurong, and Fujairah, with the buyer arranging freight.',
    path: '/services/fob-trading',
    serviceType: 'FOB Petroleum Supply',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function FOBTradingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="FOB Delivery"
        title="FOB Petroleum"
        highlight="Trading"
        subtitle="Free On Board supply of crude oil and refined products from four global terminals — you nominate the vessel, we load and document the cargo."
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
                  Trading on FOB Terms
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  <strong style={{ color: T.text }}>FOB (Free On Board)</strong> is one of the two delivery structures most commonly used in petroleum trading — the other being CIF. Under FOB, our responsibility as seller ends once product is loaded onto the buyer's nominated vessel at the load port. From that point, the buyer owns the cargo, arranges its own freight and marine insurance, and controls the onward voyage.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  This structure suits buyers who already have chartering relationships, an in-house shipping desk, or an appointed freight forwarder, and who want direct control over vessel selection, freight cost, and — because the cargo is theirs from the load port onward — the flexibility to redirect or resell it while it is still at sea.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  We offer FOB loading of crude oil, EN590 diesel, Jet A1, gasoline, and bunker fuel from all four of our terminals — Rotterdam, Houston, Jurong, and Fujairah — with the same independent inspection and documentation standards applied to every cargo regardless of delivery term.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  Choosing between FOB and CIF ultimately comes down to who is better placed to manage freight risk. A trading house with an active chartering desk, or a national oil company with a standing relationship with a shipping line, will often prefer FOB to capture freight savings and retain optionality over the cargo's final destination. A first-time importer, or a buyer without in-house logistics capability, more often prefers the simplicity of CIF. We supply both structures from the same terminal network, so the choice can be made on commercial grounds rather than operational constraint.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>FOB TRADING AT A GLANCE</h3>
                {[
                  { label: 'Incoterms', value: 'FOB 2020 (Free On Board)' },
                  { label: 'Load Ports', value: 'Rotterdam · Houston · Jurong · Fujairah' },
                  { label: 'Freight Arranged By', value: 'Buyer' },
                  { label: 'Insurance Arranged By', value: 'Buyer' },
                  { label: 'Risk Transfer', value: 'At load port, on completion of loading' },
                  { label: 'Products', value: 'Crude · EN590 · Jet A1 · Gasoline · Bunker' },
                  { label: 'Inspection', value: 'SGS / Intertek at load port' },
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

      {/* Benefits */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Why Buyers Choose FOB
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
              FOB Supply Process
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {fobProcess.map(({ step, title, desc }) => (
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
              FOB Documentation
            </h2>
            <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '760px' }}>
              An FOB cargo carries the same banking-grade documentation as any other delivery term, issued as the product is loaded rather than after it arrives.
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
                Request FOB Pricing →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <RelatedLinks
        links={[
          { title: 'CIF Petroleum Supply', desc: 'Prefer us to arrange freight and insurance? See our CIF delivery structure.', href: '/cif-petroleum-supply' },
          { title: 'Trading Process', desc: 'How a petroleum trading transaction moves from inquiry to settlement.', href: '/services/trading-process' },
          { title: 'Terminal Operations', desc: 'How berthing, loading, and gauging work at our port terminals.', href: '/services/terminal-operations' },
          { title: 'Global Fuel Logistics', desc: 'Freight, insurance, and documentation support for the onward voyage.', href: '/global-fuel-logistics' },
          { title: 'Products', desc: 'The full range of crude oil and refined petroleum products we supply.', href: '/products' },
          { title: 'Contact Our Trading Desk', desc: 'Request FOB pricing and availability from our team in Almaty.', href: '/contact' },
        ]}
      />

      <CTABanner />
    </>
  );
}
