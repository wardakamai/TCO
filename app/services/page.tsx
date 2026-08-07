import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import { T } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Crude Oil LLP delivers end-to-end energy services: fuel product supply, FOB terminal storage, international logistics, customised delivery, supply chain management and quality assurance.',
  keywords: [
    'oil supply services', 'fuel product supply', 'petroleum logistics', 'oil terminal storage',
    'FOB delivery services', 'supply chain management oil', 'energy logistics Kazakhstan',
    'crude oil quality assurance', 'customised fuel delivery', 'oil trading services',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/services' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/services',
    title: 'Oil & Gas Services — Supply, Storage, Logistics | TOO Crude Oil',
    description: 'Comprehensive energy services from Kazakhstan to global markets: fuel supply, FOB terminal operations, logistics, and quality assurance.',
  },
};

const services = [
  { tag: '01', title: 'Fuel Product Supply', desc: 'We supply a full range of crude oil and refined petroleum products — REBCO, Diesel EN590, Aviation Jet Fuel A1, LNG, and Gasoline. Our flexible FOB trading model allows clients to take delivery at any of our four strategic port terminals, or arrange onward shipment to their preferred destination.', points: ['REBCO Crude Oil (Russian Export Blend)', 'Diesel Fuel EN590 (10PPM Sulphur)', 'Jet Fuel A1 (ASTM D1655)', 'LNG & Gasoline RON 92/95'] },
  { tag: '02', title: 'Storage & Terminal Facilities', desc: 'Our terminal network at Rotterdam, Houston, Jurong, and Fujairah provides large-volume tank storage and blending capabilities. Each facility is equipped with advanced inventory management systems, ensuring real-time visibility of product volumes and condition.', points: ['Large-volume tank storage at 4 ports', 'Advanced inventory monitoring systems', 'Product blending and quality control', 'Marine and pipeline connectivity'] },
  { tag: '03', title: 'Reliable Logistics', desc: 'Crude Oil LLP operates an integrated logistics network spanning pipeline connections in Kazakhstan, marine tanker charters, and last-mile vehicle distribution. We manage the full supply chain from origin to terminal delivery.', points: ['Kazakhstan pipeline & origin logistics', 'Marine tanker chartering & freight', 'Road haulage and distribution', 'Real-time shipment tracking'] },
  { tag: '04', title: 'Customised Delivery Solutions', desc: 'We understand that energy supply requires flexibility. Our team designs bespoke delivery programmes — whether you need scheduled monthly volumes, just-in-time delivery, or emergency product supply to cover shortfalls.', points: ['Scheduled delivery contracts', 'Just-in-time supply programmes', 'Emergency product response', 'Multi-port delivery coordination'] },
  { tag: '05', title: 'Supply Chain Management', desc: 'End-to-end supply chain management from upstream procurement in Kazakhstan to FOB delivery at global ports. We handle all documentary, regulatory, and logistical requirements, providing clients with a single point of contact.', points: ['Upstream procurement & sourcing', 'Export documentation & compliance', 'End-to-end trade management', 'Risk management & hedging support'] },
  { tag: '06', title: 'Quality Assurance & Compliance', desc: 'All products are subject to rigorous quality testing against internationally recognised standards. Our compliance team ensures full adherence to local and international energy regulations at every stage of the supply chain.', points: ['Independent product quality testing', 'Regulatory compliance management', 'HSE standards across all operations', 'Certifications: ISO, BIN, RNN, OKPO'] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero label="What We Offer" title="Comprehensive Energy" highlight="Services." subtitle="From upstream procurement in Kazakhstan to FOB delivery at four global port terminals — we manage every link in the energy supply chain." />

      {/* Aerial refinery image break */}
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
        <Image
          src="/images/refinery-aerial.png"
          alt="Aerial view of oil refinery"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(250,248,244,0.6) 0%, rgba(25,20,13,0.55) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '2.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '3rem' }}>
          {[{ value: '6', label: 'Core Services' }, { value: '4', label: 'Global Terminals' }, { value: '17+', label: 'Years Experience' }].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '2rem', color: '#FAF8F4', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(250,248,244,0.7)', marginTop: '0.25rem', letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: T.surface, padding: '5rem 2rem 6rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {services.map((s, i) => (
            <SectionReveal key={s.tag} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', background: i % 2 !== 0 ? T.warm : 'transparent', padding: i % 2 !== 0 ? '3rem' : '0', borderRadius: i % 2 !== 0 ? '16px' : '0', border: i % 2 !== 0 ? `1px solid ${T.border}` : 'none' }} className="about-grid">
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.18em', marginBottom: '0.75rem', textTransform: 'uppercase' as const }}>Service {s.tag}</div>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, lineHeight: 1.12, marginBottom: '1rem' }}>{s.title}</h2>
                      <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82, marginBottom: '1.5rem' }}>{s.desc}</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {s.points.map(pt => (
                          <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.gold, flexShrink: 0 }} />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ padding: '3rem', borderRadius: '14px', background: T.warm, border: `1px solid ${T.border}`, textAlign: 'center' }}>
                      <div style={{ fontSize: '5rem', fontFamily: 'Playfair Display, serif', fontWeight: 900, color: T.gold, lineHeight: 1, opacity: 0.25 }}>{s.tag}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ padding: '3rem', borderRadius: '14px', background: T.surface, border: `1px solid ${T.border}`, textAlign: 'center' }}>
                      <div style={{ fontSize: '5rem', fontFamily: 'Playfair Display, serif', fontWeight: 900, color: T.gold, lineHeight: 1, opacity: 0.25 }}>{s.tag}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.18em', marginBottom: '0.75rem', textTransform: 'uppercase' as const }}>Service {s.tag}</div>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, lineHeight: 1.12, marginBottom: '1rem' }}>{s.title}</h2>
                      <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82, marginBottom: '1.5rem' }}>{s.desc}</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {s.points.map(pt => (
                          <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.gold, flexShrink: 0 }} />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
