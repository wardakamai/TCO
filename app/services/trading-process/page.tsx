import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import RelatedLinks from '@/components/shared/RelatedLinks';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Trading Process — From Inquiry to Delivery',
  description:
    'How a petroleum trading transaction with TOO Crude Oil works, from initial inquiry and KYC through contract, inspection, and delivery. Understand ICPO, SPA, payment terms, and compliance in energy trading.',
  keywords: [
    'oil trading process', 'petroleum trading procedure', 'energy trading process', 'ICPO petroleum',
    'sales and purchase agreement oil', 'KYC oil trading', 'oil trading compliance', 'crude oil transaction process',
    'how to buy crude oil', 'oil trading payment terms', 'SPA petroleum contract',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/services/trading-process' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/services/trading-process',
    title: 'Trading Process — From Inquiry to Delivery | TOO Crude Oil',
    description: 'A transparent, step-by-step petroleum trading process — inquiry, KYC, contract, inspection, and delivery.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Trading Process — TOO Crude Oil' }],
  },
};

const benefits = [
  { title: 'Transparent, Documented Steps', desc: 'Every transaction follows the same sequence of inquiry, verification, contract, and delivery — no shortcuts, and no requests for fees before a contract exists.' },
  { title: 'KYC Protects Both Sides', desc: 'Know Your Customer checks on new counterparties reduce fraud risk for buyer and seller alike, and are a standard requirement of the banks handling trade finance.' },
  { title: 'Bank-Compliant Documentation', desc: 'Contracts and shipping documents are structured to meet the requirements of the banks that process letters of credit for our buyers.' },
  { title: 'Experienced Trading Desk', desc: 'Our team in Almaty has managed FOB and CIF transactions across four terminals since 2007, with direct experience of the compliance requirements in each destination market.' },
  { title: 'No Broker-Chain Confusion', desc: 'We deal directly with end buyers and mandated intermediaries under a clear NCNDA/IMFPA where intermediaries are involved, avoiding the ambiguity that causes many trade attempts to stall.' },
  { title: 'Consistent Across Products', desc: 'The same process framework applies whether the transaction is for crude oil, EN590 diesel, Jet A1, or bunker fuel, on either FOB or CIF terms.' },
];

const tradingSteps = [
  { step: '01', title: 'Inquiry & ICPO', desc: 'Buyer submits an Irrevocable Corporate Purchase Order (ICPO) or formal inquiry stating product, quantity, delivery terms, and destination.' },
  { step: '02', title: 'KYC & Compliance', desc: 'We conduct Know Your Customer checks on the buyer entity — corporate registration, beneficial ownership, and sanctions screening — before proceeding.' },
  { step: '03', title: 'Proof of Product', desc: 'Where requested, we provide standard proof-of-product documentation appropriate to the transaction stage, consistent with industry practice.' },
  { step: '04', title: 'SPA Negotiation', desc: 'Commercial terms — price formula, quantity tolerance, delivery window, inspection standard, and payment terms — are negotiated and set out in a draft Sales and Purchase Agreement.' },
  { step: '05', title: 'Contract Execution', desc: 'The SPA is signed by both parties. Where intermediaries are involved, an NCNDA/IMFPA is executed to protect all parties\' commercial interests.' },
  { step: '06', title: 'Payment Instrument', desc: 'Buyer arranges the agreed payment instrument — typically an LC at sight or SBLC issued by a first-class bank — per the terms in the SPA.' },
  { step: '07', title: 'Loading or Vessel Nomination', desc: 'Depending on delivery terms (FOB or CIF), the buyer nominates a vessel or we arrange freight, and the cargo is scheduled for loading.' },
  { step: '08', title: 'Inspection & Delivery', desc: 'SGS or Intertek inspects the cargo at load port; shipping documents are issued and the transaction proceeds to delivery and final settlement.' },
];

const documentation = [
  { name: 'ICPO', desc: 'The buyer\'s formal purchase order, stating intent to buy a specified product, quantity, and delivery structure.' },
  { name: 'NCNDA / IMFPA', desc: 'Where intermediaries are involved, a Non-Circumvention, Non-Disclosure Agreement and fee protection agreement sets out each party\'s role and commission.' },
  { name: 'Sales and Purchase Agreement (SPA)', desc: 'The binding contract governing price, quantity, quality specification, delivery terms, and payment structure for the transaction.' },
  { name: 'Letter of Credit / SBLC', desc: 'The bank-issued payment instrument confirming the buyer\'s ability to pay, structured per the terms agreed in the SPA.' },
  { name: 'Final Shipping Documents', desc: 'Bill of Lading, Certificate of Quality, Certificate of Quantity, and Certificate of Origin, issued on loading or discharge to complete the transaction.' },
];

const faqs = [
  { q: 'What is an ICPO?', a: 'An Irrevocable Corporate Purchase Order (ICPO) is a formal document from the buyer stating their firm intent to purchase a specified product, quantity, and delivery structure. It is the standard first step in a petroleum trading transaction and allows the seller to begin KYC and product allocation before drafting a full contract.' },
  { q: 'How long does KYC take?', a: 'For established corporate buyers with straightforward ownership structures, KYC is typically completed within a few business days once the required corporate documents (registration certificate, ownership structure, and bank reference) are provided. More complex ownership structures or first-time counterparties in higher-risk jurisdictions can take longer.' },
  { q: 'What payment terms do you accept?', a: 'We accept confirmed, irrevocable Letters of Credit (LC at sight) from first-class international banks, Standby Letters of Credit (SBLC), and, for established counterparties with a trading history, MT103 wire transfer. The specific instrument and its terms are agreed and documented in the Sales and Purchase Agreement.' },
  { q: 'Do you require any upfront fees before a contract exists?', a: 'No. We do not request advance fees, processing charges, or refundable deposits before a Sales and Purchase Agreement is signed. Requests of that kind are a common pattern in fraudulent trading schemes across the industry, and buyers should treat them as a warning sign regardless of who they are dealing with.' },
  { q: 'How do you work with brokers and intermediaries?', a: 'We work directly with mandated intermediaries under a signed NCNDA/IMFPA, which protects the intermediary\'s commission and prevents circumvention while keeping the underlying transaction between TOO Crude Oil and the end buyer clear and auditable.' },
  { q: 'What is a Sales and Purchase Agreement (SPA), and why does it matter?', a: 'The SPA is the binding contract that turns a negotiated deal into an enforceable agreement — it fixes the price formula, quantity and tolerance, product specification, delivery terms, inspection standard, and payment structure. Until the SPA is signed, terms discussed by email or in principle are not contractually binding on either party, which is why we treat SPA execution as the point a transaction formally begins.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Trading Process', path: '/services/trading-process' },
  ]),
  service({
    name: 'Petroleum Trading Process',
    description: 'End-to-end petroleum trading process from inquiry and KYC through contract, inspection, and delivery, for FOB and CIF transactions.',
    path: '/services/trading-process',
    serviceType: 'Petroleum Trading',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function TradingProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Energy Trading"
        title="Our Trading"
        highlight="Process"
        subtitle="A transparent, step-by-step process — from initial inquiry and KYC through contract, inspection, and delivery — for every crude oil and petroleum product transaction."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>How We Trade</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Why the Process Matters as Much as the Product
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Petroleum cargoes are high-value, physically remote transactions — a single Aframax parcel of crude oil can be worth tens of millions of dollars, changing hands between counterparties who may be meeting for the first time and are often based on different continents. The industry has developed a fairly standard sequence of steps — inquiry, KYC, contract, payment instrument, inspection, delivery — precisely because skipping any of them is where fraud and disputes tend to originate.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  TOO Crude Oil follows this sequence on every transaction, regardless of product or delivery term. We do not ask for advance fees before a contract exists, we conduct proper KYC on new counterparties, and every commercial term — price formula, quantity tolerance, inspection standard, payment instrument — is set out in a written Sales and Purchase Agreement before any cargo moves.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  This page walks through that process end to end, so buyers — whether a first-time importer or an experienced trading desk — know exactly what to expect at each stage before making contact.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>PROCESS AT A GLANCE</h3>
                {[
                  { label: 'First Step', value: 'ICPO or formal inquiry' },
                  { label: 'Verification', value: 'KYC & sanctions screening' },
                  { label: 'Contract', value: 'Sales and Purchase Agreement (SPA)' },
                  { label: 'Intermediaries', value: 'NCNDA/IMFPA where applicable' },
                  { label: 'Payment', value: 'LC at Sight · SBLC · MT103' },
                  { label: 'Inspection', value: 'SGS / Intertek at load port' },
                  { label: 'Advance Fees', value: 'None required before contract' },
                  { label: 'Experience', value: 'Trading since 2007' },
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
              What a Disciplined Process Gives You
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
              From Inquiry to Delivery
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {tradingSteps.map(({ step, title, desc }) => (
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
              Key Documents in a Trading Transaction
            </h2>
            <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '760px' }}>
              Each document in the process serves a specific purpose — establishing intent, protecting intermediaries, binding the commercial terms, or evidencing payment and delivery.
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
                Start a Transaction →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <RelatedLinks
        links={[
          { title: 'FOB Trading', desc: 'FOB Incoterms mechanics and how buyers arrange their own freight.', href: '/services/fob-trading' },
          { title: 'CIF Petroleum Supply', desc: 'How we handle freight, insurance, and delivery under CIF terms.', href: '/cif-petroleum-supply' },
          { title: 'SGS Verification', desc: 'How independent inspection confirms cargo quality and quantity.', href: '/sgs-verification' },
          { title: 'About Us', desc: 'Our history, values, and 17+ years of FOB trading experience.', href: '/about' },
          { title: 'Products', desc: 'The full range of crude oil and refined petroleum products we supply.', href: '/products' },
          { title: 'Contact Our Trading Desk', desc: 'Submit an inquiry or ICPO to our team in Almaty.', href: '/contact' },
        ]}
      />

      <CTABanner />
    </>
  );
}
