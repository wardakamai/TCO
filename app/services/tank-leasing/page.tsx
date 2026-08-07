import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import RelatedLinks from '@/components/shared/RelatedLinks';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Tank Leasing — Dedicated Petroleum Storage Capacity',
  description:
    'Lease dedicated tank capacity at TOO Crude Oil terminals in Rotterdam, Houston, Jurong, and Fujairah. Fixed-term storage leases for traders, refiners, and governments needing guaranteed, sub-leasable tankage.',
  keywords: [
    'tank leasing', 'tank lease agreement', 'dedicated tank capacity', 'storage capacity lease',
    'terminal tank lease', 'long-term tank lease', 'petroleum storage lease', 'oil tank lease',
    'dedicated tankage', 'strategic storage lease', 'terminal capacity contract',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/services/tank-leasing' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/services/tank-leasing',
    title: 'Tank Leasing — Dedicated Storage Capacity | TOO Crude Oil',
    description: 'Fixed-term leases for dedicated tank capacity at four global terminals, for traders, refiners, and governments needing guaranteed tankage.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Tank Leasing — TOO Crude Oil' }],
  },
};

const benefits = [
  { title: 'Guaranteed Dedicated Capacity', desc: 'Leased tanks are reserved exclusively for the lessee — capacity is not shared with, or subject to reallocation among, other terminal users during the lease term.' },
  { title: 'Cost Certainty Over the Term', desc: 'Lease rates are fixed for the contract period, insulating clients from short-term spikes in spot storage pricing during periods of tight terminal capacity.' },
  { title: 'Sub-Lease and Assignment Rights', desc: 'Many of our lease structures allow the lessee to sub-lease unused capacity to a third party, or assign the lease outright, subject to terminal approval.' },
  { title: 'Long-Term Supply Chain Planning', desc: 'A multi-year lease lets refiners, governments, and large importers plan inbound and outbound logistics around fixed, known storage capacity rather than spot availability.' },
  { title: 'Strategic Reserve Support', desc: 'Government and state-linked buyers use dedicated leased tankage to hold strategic fuel reserves at politically stable, well-connected port locations.' },
  { title: 'Combined Throughput Options', desc: 'Leases can be structured with an integrated throughput agreement, so intake and redelivery handling is priced and scheduled alongside the storage lease itself.' },
];

const leaseProcess = [
  { step: '01', title: 'Capacity Request', desc: 'Client specifies required tank volume, product compatibility, terminal, and target lease duration.' },
  { step: '02', title: 'Commercial Terms', desc: 'We propose lease rate, minimum term, renewal options, and any bundled throughput terms based on available tankage.' },
  { step: '03', title: 'Tank Lease Agreement', desc: 'A formal lease agreement is executed, defining the leased tank(s), rental period, handback condition, and liability allocation.' },
  { step: '04', title: 'Handover & Baseline Gauge', desc: 'The tank is inspected, cleaned to the agreed standard if required, and a baseline gauge report is issued at handover.' },
  { step: '05', title: 'Operating Period', desc: 'The lessee uses the tank for intake, storage, and withdrawal throughout the lease term, subject to the terminal\'s safety and operating procedures.' },
  { step: '06', title: 'Renewal or Handback', desc: 'At term end, the lessee renews under revised terms or hands the tank back following a joint inspection and closing gauge.' },
];

const documentation = [
  { name: 'Tank Lease Agreement', desc: 'The core contract defining leased tank(s), rental period, renewal terms, handback condition, and liability for damage or contamination.' },
  { name: 'Baseline Gauge Certificate', desc: 'An independent gauge report recorded at handover, establishing the tank\'s condition and any residual heel before the lease term begins.' },
  { name: 'Throughput Agreement', desc: 'Where bundled with the lease, this sets out handling fees and procedures for intake and redelivery during the lease term.' },
  { name: 'Insurance Certificate', desc: 'Evidence of storage liability and, where applicable, named-cargo insurance covering product held under the lease.' },
  { name: 'Handback Inspection Report', desc: 'A closing inspection and gauge report confirming tank condition at the end of the lease, used to settle any handback obligations.' },
];

const faqs = [
  { q: 'What is the difference between tank storage and tank leasing?', a: 'Tank storage (a spot or short-term arrangement, often within shared tankage) is priced per volume stored and per throughput movement. Tank leasing reserves specific, dedicated tanks for a client\'s exclusive use over a fixed term — typically six months to several years — with a fixed rental rate rather than a per-movement fee. Leasing suits clients who need guaranteed, predictable capacity; storage suits those with variable or shorter-term volume needs.' },
  { q: 'What is the minimum lease term?', a: 'Minimum lease terms are typically six months, though most commercial and government leases run one to five years. Shorter terms are occasionally available for smaller tanks subject to availability, but rates are generally less favourable than multi-year commitments.' },
  { q: 'Can I sub-lease capacity I am not using?', a: 'In most of our lease structures, yes — sub-leasing or assigning unused capacity to a third party is permitted subject to the terminal operator\'s approval and standard KYC checks on the sub-lessee. This is set out explicitly in the Tank Lease Agreement.' },
  { q: 'What happens at the end of the lease?', a: 'Before expiry, the lessee can negotiate a renewal, or the tank is handed back following a joint inspection and closing gauge. Any required tank cleaning or repair of damage beyond normal wear is settled per the handback terms agreed in the original lease.' },
  { q: 'Does a tank lease include handling of cargo in and out of the tank?', a: 'Not automatically — a pure tank lease covers only the rental of dedicated capacity. Intake and redelivery handling (berthing, pumping, gauging) is typically arranged under a separate or bundled throughput agreement, priced per movement.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Tank Leasing', path: '/services/tank-leasing' },
  ]),
  service({
    name: 'Tank Leasing',
    description: 'Fixed-term leases of dedicated tank capacity at Rotterdam, Houston, Jurong, and Fujairah for traders, refiners, and governments needing guaranteed storage.',
    path: '/services/tank-leasing',
    serviceType: 'Petroleum Storage Lease',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function TankLeasingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Storage Services"
        title="Tank Leasing"
        highlight="Solutions"
        subtitle="Fixed-term leases of dedicated tank capacity at four global terminals — guaranteed tankage, sub-lease rights, and cost certainty over the lease term."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Dedicated Capacity</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Leasing Tank Capacity as a Long-Term Asset
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  For traders, refiners, and governments with ongoing storage needs, leasing dedicated tank capacity works much like leasing warehouse space — a fixed asset reserved exclusively for the lessee, rather than shared capacity billed per movement. Rather than negotiating storage terms cargo by cargo, a lessee secures a known volume of tankage for months or years at a fixed rental, with full control over how it is used within the terminal's operating rules.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  This distinction matters most during periods of tight terminal capacity. When global storage infrastructure hub demand is high — as it typically is around Rotterdam's ARA complex, the US Gulf Coast, and Fujairah's Indian Ocean bunkering trade — spot tankage can become scarce and expensive. A lease locks in access and pricing regardless of how the spot storage market moves during the term.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  TOO Crude Oil offers dedicated tank leases at all four of its terminals, sized from single tanks to multi-tank blocks, for crude oil, diesel, jet fuel, gasoline, and bunker fuel. Leases can run alongside a throughput agreement for full-service handling, or be arranged as a standalone capacity reservation for clients who manage their own logistics.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  Government and state energy buyers are among the most active users of dedicated leasing, since strategic and emergency fuel reserves require guaranteed, exclusive access rather than capacity that could be reallocated during a supply disruption. Corporate buyers with regular import or export volumes use the same structure to remove storage availability as a variable in their supply planning — locking in tankage years in advance rather than negotiating it cargo by cargo.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>TANK LEASING AT A GLANCE</h3>
                {[
                  { label: 'Terminals', value: 'Rotterdam · Houston · Jurong · Fujairah' },
                  { label: 'Typical Lease Term', value: '6 months – 5 years' },
                  { label: 'Tank Sizing', value: 'Single tank to multi-tank blocks' },
                  { label: 'Products', value: 'Crude · Diesel · Jet A1 · Gasoline · Bunker' },
                  { label: 'Sub-Leasing', value: 'Permitted, subject to terminal approval' },
                  { label: 'Pricing', value: 'Fixed rental for the lease term' },
                  { label: 'Throughput', value: 'Bundled or arranged separately' },
                  { label: 'Renewal', value: 'Negotiable ahead of term expiry' },
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
              Why Clients Choose a Dedicated Lease
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
              How a Tank Lease Is Arranged
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {leaseProcess.map(({ step, title, desc }) => (
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
              Lease Documentation
            </h2>
            <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '760px' }}>
              A dedicated lease is documented from handover to handback, giving both parties a clear record of tank condition, usage terms, and closing obligations.
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
                Discuss Lease Availability →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <RelatedLinks
        links={[
          { title: 'Tank Storage', desc: 'Spot and short-term storage for cargo you already own, without a dedicated lease commitment.', href: '/services/tank-storage' },
          { title: 'Terminal Operations', desc: 'How intake, gauging, and jetty scheduling work at our port terminals.', href: '/services/terminal-operations' },
          { title: 'Terminal Network', desc: 'Explore our four port terminals — Rotterdam, Houston, Jurong, and Fujairah.', href: '/storage' },
          { title: 'Trading Process', desc: 'How a petroleum trading transaction moves from inquiry to settlement.', href: '/services/trading-process' },
          { title: 'Products', desc: 'The full range of crude oil and refined petroleum products we supply.', href: '/products' },
          { title: 'Contact Our Trading Desk', desc: 'Discuss lease terms, tank sizing, and pricing with our team in Almaty.', href: '/contact' },
        ]}
      />

      <CTABanner />
    </>
  );
}
