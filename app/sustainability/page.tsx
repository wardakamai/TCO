import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import { T } from '@/lib/theme';
import { breadcrumbList } from '@/lib/schema';

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Sustainability & HSE', path: '/sustainability' },
  ]),
];

export const metadata: Metadata = {
  title: 'Sustainability & HSE',
  description: 'Crude Oil LLP\'s commitment to responsible energy: HSE excellence, zero-harm safety culture, emissions reduction targets, and community investment in Kazakhstan since 2007.',
  keywords: [
    'oil company sustainability', 'HSE oil gas', 'energy company ESG', 'Kazakhstan energy environment',
    'petroleum company health safety', 'oil trading sustainability', 'crude oil HSE policy',
    'responsible energy trading', 'oil company environmental policy', 'energy community investment',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/sustainability' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/sustainability',
    title: 'Sustainability & HSE — Responsible Energy Trading | TOO Crude Oil',
    description: 'Zero-harm safety culture, 30% emissions reduction target by 2030, and $2M+ community investment. Responsible energy trading from Kazakhstan to the world.',
  },
};

const hsePillars = [
  { icon: '❤️', title: 'Health', desc: 'Protecting the physical and mental wellbeing of all employees, contractors, and communities associated with our operations.', points: ['Occupational health programmes', 'Mental health & wellbeing support', 'Regular health surveillance audits', 'Emergency medical preparedness'] },
  { icon: '🛡️', title: 'Safety', desc: 'Zero-harm ambition across all operational activities. Rigorous risk assessment, incident prevention, and safety management systems.', points: ['Zero-harm safety culture', 'Risk assessment frameworks', 'Incident reporting & investigation', 'Safety training for all personnel'] },
  { icon: '🌍', title: 'Environment', desc: 'Active management of our environmental footprint through emissions tracking, spill prevention, waste reduction, and energy efficiency measures.', points: ['Greenhouse gas emissions monitoring', 'Spill prevention & containment', 'Waste minimisation programmes', 'Biodiversity impact assessments'] },
  { icon: '✅', title: 'Quality', desc: 'Maintaining the highest product quality and operational standards through robust quality management systems and continuous improvement.', points: ['ISO-aligned quality management', 'Independent product testing', 'Supplier quality audits', 'Continuous improvement culture'] },
];

const commitments = [
  { label: 'Emissions Reduction', value: '30%', detail: 'Target reduction in operational carbon intensity by 2030' },
  { label: 'Spill Incidents', value: '0', detail: 'Major spill incidents at any terminal in the past 5 years' },
  { label: 'HSE Training', value: '100%', detail: 'Of operational staff complete HSE training annually' },
  { label: 'Community Investment', value: '$2M+', detail: 'Invested in Kazakhstani community programmes since 2018' },
];

export default function SustainabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero label="Sustainability & HSE" title="Energy Today." highlight="Planet Tomorrow." subtitle="Our commitment to responsible energy trading means embedding health, safety, environmental, and quality standards into every decision we make." />

      {/* Policy statement — full-bleed dramatic background */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '7rem 2rem' }}>
        <Image
          src="/images/bg-flare.jpeg"
          alt="Gas flare tower at night"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(25,20,13,0.88)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ padding: '3rem', borderRadius: '16px', background: 'rgba(25,20,13,0.5)', border: '1px solid rgba(184,134,11,0.22)', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
              <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.18em', marginBottom: '1.25rem', textTransform: 'uppercase' as const }}>Our Commitment</div>
              <p style={{ fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', color: 'rgba(250,248,244,0.88)', lineHeight: 1.9, fontStyle: 'italic', fontWeight: 400 }}>&ldquo;Crude Oil LLP is committed to conducting all business activities in a manner that protects and promotes the health and safety of our people, preserves the natural environment, and contributes positively to the communities in which we operate.&rdquo;</p>
              <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.4)', marginTop: '1.25rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>— Crude Oil LLP, HSE Policy Statement</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* HSE Pillars */}
      <section style={{ background: T.bg, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionReveal><h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, textAlign: 'center', marginBottom: '3.5rem' }}>HSE <span className="gradient-text">Framework</span></h2></SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {hsePillars.map(p => (
              <SectionReveal key={p.title} direction="up">
                <div className="hse-card" style={{ padding: '2rem', borderRadius: '12px', background: T.surface, border: `1px solid ${T.border}`, height: '100%' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.1rem', color: T.text, marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.72, marginBottom: '1.25rem' }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {p.points.map(pt => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: T.gold, flexShrink: 0 }} />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ background: T.warm, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionReveal><h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, textAlign: 'center', marginBottom: '2.5rem' }}>Measurable <span className="gradient-text">Impact</span></h2></SectionReveal>
          <SectionReveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              {commitments.map(c => (
                <div key={c.label} style={{ padding: '1.75rem', borderRadius: '12px', background: T.surface, border: `1px solid ${T.border}`, textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.gold, lineHeight: 1, marginBottom: '0.4rem' }}>{c.value}</div>
                  <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.text, marginBottom: '0.4rem' }}>{c.label}</div>
                  <div style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.5 }}>{c.detail}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Community */}
      <section style={{ background: T.surface, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            <SectionReveal direction="left">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold, display: 'inline-block', borderRadius: '1px' }} />
                  <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Community</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, lineHeight: 1.12, marginBottom: '1.25rem' }}>Investing in Kazakhstan&apos;s Future</h2>
                <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82, marginBottom: '1rem' }}>As a Kazakhstan-founded company, we recognise our responsibility to the communities where our energy supply originates. Our community investment programme focuses on local employment, skills development, and infrastructure support.</p>
                <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82, marginBottom: '1.5rem' }}>We partner with international NGOs to support access to clean energy and economic development in underserved communities along our global supply routes.</p>
                <Link href="/contact" style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.gold, textDecoration: 'none', letterSpacing: '0.04em' }}>Learn more about our HSE policy →</Link>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" stagger>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[{ icon: '👷', title: 'Local Employment', desc: 'Priority hiring from Kazakhstani communities for operational and technical roles.' }, { icon: '📚', title: 'Skills Development', desc: 'Partnerships with Almaty universities for energy industry graduate programmes.' }, { icon: '🏗️', title: 'Infrastructure Investment', desc: 'Supporting road, utility, and community infrastructure near operational areas.' }].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', borderRadius: '10px', background: T.warm, border: `1px solid ${T.border}` }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.9rem', color: T.text, marginBottom: '0.3rem' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
