import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import RelatedLinks from '@/components/shared/RelatedLinks';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terminal Operations — Vessel Discharge & Jetty Management',
  description:
    'TOO Crude Oil manages berthing, cargo discharge, gauging, and jetty scheduling at our Rotterdam, Houston, Jurong, and Fujairah terminals. HSE-compliant terminal operations for crude oil and refined product cargoes.',
  keywords: [
    'terminal operations', 'terminal facilities', 'vessel berthing schedule', 'cargo discharge terminal',
    'jetty operations', 'marine terminal operations', 'petroleum terminal management', 'tank gauging',
    'pipeline transfer terminal', 'marine logistics terminal', 'terminal HSE standards',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/services/terminal-operations' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/services/terminal-operations',
    title: 'Terminal Operations — Berthing, Discharge & Gauging | TOO Crude Oil',
    description: 'HSE-compliant terminal operations — berthing, cargo discharge, gauging, and jetty scheduling — at four global port terminals.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Terminal Operations — TOO Crude Oil' }],
  },
};

const benefits = [
  { title: '24/7 Berth & Jetty Scheduling', desc: 'Marine coordination teams manage vessel arrivals, berth allocation, and jetty scheduling around the clock across all four terminals.' },
  { title: 'Experienced Marine Teams', desc: 'Terminal superintendents and mooring crews with decades of combined experience handling Aframax, Suezmax, and VLCC-class tankers.' },
  { title: 'HSE-First Operations', desc: 'Every discharge and loading operation follows ship/shore safety checklists aligned with OCIMF and ISGOTT industry guidance.' },
  { title: 'Fast, Predictable Turnaround', desc: 'Pre-arrival planning and dedicated pumping capacity keep vessel turnaround times competitive with major independent terminals.' },
  { title: 'Independent Gauging & Sampling', desc: 'Cargo quantity and quality are confirmed by independent surveyors at every discharge or loading operation, not solely by terminal staff.' },
  { title: 'Integrated with Storage & Leasing', desc: 'Terminal operations connect directly into our tank storage and tank leasing services, so cargo moves from vessel to tank under one coordinated process.' },
];

const operationsProcess = [
  { step: '01', title: 'Vessel Nomination', desc: 'Shipping agent submits vessel particulars and estimated time of arrival (ETA); terminal confirms berth availability and scheduling window.' },
  { step: '02', title: 'Pre-Arrival Checks', desc: 'Terminal reviews vessel documentation, tank compatibility, and cargo specification ahead of arrival to avoid delays at berth.' },
  { step: '03', title: 'Berthing & Mooring', desc: 'Pilots and mooring crews bring the vessel alongside; a joint ship/shore safety checklist is completed before hoses are connected.' },
  { step: '04', title: 'Cargo Discharge or Loading', desc: 'Product is pumped between vessel and shore tanks under continuous supervision, with flow rates and line-up managed by the terminal control room.' },
  { step: '05', title: 'Gauging & Sampling', desc: 'Independent surveyors gauge shore tanks and draw samples before and after the operation to establish quantity and quality.' },
  { step: '06', title: 'Departure & Documentation', desc: 'Statement of Facts, Bill of Lading, and gauge reports are finalised and issued once the vessel completes its operation and departs berth.' },
];

const documentation = [
  { name: 'Notice of Readiness (NOR)', desc: 'Formal notice tendered by the vessel confirming it is ready to berth and commence cargo operations.' },
  { name: 'Statement of Facts', desc: 'Chronological record of every stage of the port call — arrival, berthing, hose connection, discharge, and departure — used to calculate laytime.' },
  { name: 'Ship/Shore Safety Checklist', desc: 'A joint checklist completed by vessel and terminal staff before cargo transfer begins, confirming safety systems are in place.' },
  { name: 'Ullage & Gauge Report', desc: 'Independent measurement of shore tank volumes before and after the operation, used to calculate quantity received or loaded.' },
  { name: 'Bill of Lading', desc: 'Issued for loading operations, confirming quantity and grade of product shipped and evidencing title for onward sale or trade finance.' },
];

const faqs = [
  { q: 'What does "terminal operations" actually cover?', a: 'Terminal operations refers to the physical handling of a cargo at the port — berth scheduling, vessel mooring, pumping product between vessel and shore tanks, tank gauging, sampling, and the documentation that accompanies each step. It is distinct from the commercial storage contract (tank storage or tank leasing) governing why the product is at the terminal in the first place.' },
  { q: 'How is vessel turnaround time managed?', a: 'Turnaround is managed through pre-arrival planning — reviewing vessel and cargo details before the ship arrives — combined with dedicated pumping capacity and jetty scheduling designed to minimise time waiting for berth. Typical discharge operations for a product tanker are completed within 24–48 hours of berthing, depending on cargo volume and grade.' },
  { q: 'What safety standards apply during discharge or loading?', a: 'Operations follow ship/shore safety checklists consistent with OCIMF (Oil Companies International Marine Forum) and ISGOTT (International Safety Guide for Oil Tankers and Terminals) guidance, covering fire safety, static electricity precautions, emergency shutdown procedures, and communication protocols between vessel and terminal.' },
  { q: 'Who verifies the quantity of cargo discharged or loaded?', a: 'Cargo quantity is confirmed by independent surveyors — typically SGS, Intertek, or Bureau Veritas — through tank gauging before and after the operation, not solely by terminal staff. This independent verification is what allows the resulting figures to be relied upon in a Bill of Lading or Certificate of Quantity.' },
  { q: 'Can terminal operations be combined with a storage or lease agreement?', a: 'Yes — in practice, most clients use terminal operations alongside either a tank storage arrangement or a dedicated tank lease, so cargo intake and redelivery handling is scheduled as part of the same overall service rather than negotiated separately for each vessel call.' },
  { q: 'What happens if a vessel arrives before its scheduled berth window?', a: 'The vessel typically waits at anchorage until the nominated berth becomes available, unless an earlier slot has opened up due to another vessel completing operations ahead of schedule. Waiting time and any resulting demurrage is calculated from the Statement of Facts and allocated per the terms agreed between charterer and terminal.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Terminal Operations', path: '/services/terminal-operations' },
  ]),
  service({
    name: 'Terminal Operations',
    description: 'Berthing, cargo discharge and loading, gauging, and jetty scheduling at Rotterdam, Houston, Jurong, and Fujairah, following OCIMF/ISGOTT safety guidance.',
    path: '/services/terminal-operations',
    serviceType: 'Marine Terminal Operations',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function TerminalOperationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Storage Services"
        title="Terminal"
        highlight="Operations"
        subtitle="Berthing, cargo discharge, gauging, and jetty scheduling — the operational backbone connecting vessel to shore tank at four strategic port terminals."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Marine & Jetty Handling</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Where Vessel Meets Shore Tank
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Every cargo of crude oil or refined product that moves through our network passes through a physical handover between vessel and terminal — mooring, hose connection, pumping, gauging — that has to happen safely, quickly, and with an accurate record at every step. This is terminal operations: the practical, day-to-day work of running a marine terminal, distinct from the commercial arrangement (tank storage or tank leasing) that determines why the cargo is there.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  At each of our four terminals — Rotterdam, Houston, Jurong, and Fujairah — dedicated marine coordination teams manage berth scheduling, vessel mooring, and pipeline transfer between ship and shore tank, working alongside independent surveyors who verify cargo quantity and quality throughout the operation.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Because product often changes hands — sold, stored, blended, and resold — while sitting in the same physical tank, disciplined terminal operations are what keep custody, quality, and quantity records reliable enough for banks, insurers, and buyers to trust without physically inspecting every cargo themselves.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  The role also extends beyond a single vessel call. Terminal teams coordinate pipeline transfer schedules with upstream refineries at Rotterdam and Houston, manage line-up between multiple shore tanks during blending operations, and maintain the marine infrastructure — pumps, hoses, fenders, mooring equipment — that keeps berths available and safe for continuous throughput across the year.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>TERMINAL OPERATIONS AT A GLANCE</h3>
                {[
                  { label: 'Terminals', value: 'Rotterdam · Houston · Jurong · Fujairah' },
                  { label: 'Vessel Classes', value: 'Aframax · Suezmax · VLCC' },
                  { label: 'Marine Berths', value: '26 dedicated across the network' },
                  { label: 'Safety Standard', value: 'OCIMF / ISGOTT-aligned procedures' },
                  { label: 'Quantity Verification', value: 'Independent gauging & sampling' },
                  { label: 'Coordination', value: '24/7 berth & jetty scheduling' },
                  { label: 'Connectivity', value: 'Marine berths + pipeline (Rotterdam/Houston)' },
                  { label: 'Typical Turnaround', value: '24–48 hours per operation' },
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
              What Sets Our Terminal Operations Apart
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
              A Typical Vessel Operation, Step by Step
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {operationsProcess.map(({ step, title, desc }) => (
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
              Documentation From Every Vessel Call
            </h2>
            <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '760px' }}>
              Each stage of a discharge or loading operation produces a document that buyers, banks, and insurers rely on — together forming a complete, auditable record of the port call.
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
                Discuss a Vessel Nomination →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <RelatedLinks
        links={[
          { title: 'Tank Storage', desc: 'Commercial storage agreements for product held at our terminals.', href: '/services/tank-storage' },
          { title: 'Tank Leasing', desc: 'Dedicated, fixed-term tank capacity leases for traders and governments.', href: '/services/tank-leasing' },
          { title: 'SGS Verification', desc: 'How independent inspection confirms cargo quality and quantity.', href: '/sgs-verification' },
          { title: 'Terminal Network', desc: 'Explore our four port terminals — Rotterdam, Houston, Jurong, and Fujairah.', href: '/storage' },
          { title: 'Global Fuel Logistics', desc: 'Freight, insurance, and documentation for the full shipping journey.', href: '/global-fuel-logistics' },
          { title: 'Contact Our Trading Desk', desc: 'Discuss a vessel nomination or terminal schedule with our team.', href: '/contact' },
        ]}
      />

      <CTABanner />
    </>
  );
}
