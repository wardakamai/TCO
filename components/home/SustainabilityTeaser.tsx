'use client';

import Link from 'next/link';
import SectionReveal from '@/components/shared/SectionReveal';

const pillars = [
  { icon: '🌿', title: 'Environmental Responsibility', desc: 'Active emissions reduction, spill prevention, and ecological impact assessment across all operations.' },
  { icon: '🛡️', title: 'Health, Safety & Quality', desc: 'Rigorous HSE standards across every supply chain link — from Kazakhstan origins to global port delivery.' },
  { icon: '🤝', title: 'Community & Social Impact', desc: 'Local employment, infrastructure investment, and community programmes in Kazakhstan and beyond.' },
];

export default function SustainabilityTeaser() {
  return (
    <section style={{ background: '#F4EDE0', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }} className="section-pad">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">

          <SectionReveal direction="left">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1rem' }}>
                <span style={{ width: '28px', height: '2px', background: '#B8860B', display: 'inline-block', borderRadius: '1px' }} />
                <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Sustainability</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#19140D', lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Energy Today. <span className="gradient-text" style={{ fontStyle: 'italic' }}>Planet Tomorrow.</span>
              </h2>
              <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Crude Oil LLP is committed to responsible energy trading. Our HSE framework governs every aspect of our operations — ensuring environmental compliance, worker safety, and community wellbeing across all four global terminals.
              </p>
              <Link href="/sustainability" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.65rem 1.5rem',
                background: '#19140D',
                color: '#FAF8F4', fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
                fontSize: '13px', borderRadius: '7px',
                textDecoration: 'none', transition: 'background 0.18s, transform 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#B8860B'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#19140D'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                Our Commitment →
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" stagger>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pillars.map(p => (
                <div key={p.title} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1.25rem 1.5rem', borderRadius: '10px',
                  background: '#FFFFFF', border: '1px solid #E3D9C8',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.3)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(184,134,11,0.07)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E3D9C8'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{p.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.95rem', color: '#19140D', marginBottom: '0.3rem' }}>{p.title}</div>
                    <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', lineHeight: 1.65 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
