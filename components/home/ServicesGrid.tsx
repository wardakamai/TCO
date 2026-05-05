'use client';

import Link from 'next/link';
import SectionReveal from '@/components/shared/SectionReveal';

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
    title: 'Fuel Product Supply',
    desc: 'Full-range supply of crude oil, diesel, jet fuel, LNG, and gasoline — tailored to your volume and schedule.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><circle cx="12" cy="14" r="2" /></svg>
    ),
    title: 'Storage & Terminals',
    desc: 'Large-volume tank storage and terminal operations at four strategic ports with advanced inventory monitoring.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
    ),
    title: 'Reliable Logistics',
    desc: 'End-to-end transport via pipeline, marine tanker, and road fleet — from Kazakhstan origins to global FOB terminals.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" /><rect x="9" y="11" width="14" height="10" rx="2" /></svg>
    ),
    title: 'Customised Delivery',
    desc: 'Flexible delivery solutions including scheduled, just-in-time, and emergency response programmes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" /></svg>
    ),
    title: 'Supply Chain Mgmt',
    desc: 'Comprehensive procurement, trading, and distribution management from source to final delivery point.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    title: 'Quality Assurance',
    desc: 'Rigorous product testing, regulatory compliance, and HSE standards across all trading and logistics operations.',
  },
];

export default function ServicesGrid() {
  return (
    <section style={{ background: '#F4EDE0', padding: '6rem 2rem' }} className="section-pad">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionReveal>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.9rem' }}>
              <span style={{ width: '28px', height: '2px', background: '#B8860B', display: 'inline-block', borderRadius: '1px' }} />
              <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', letterSpacing: '0.18em', textTransform: 'uppercase' }}>What We Do</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              fontFamily: 'Playfair Display, serif', fontWeight: 800,
              color: '#19140D', lineHeight: 1.1, marginBottom: '0.75rem',
            }}>
              End-to-End Energy <span className="gradient-text">Solutions</span>
            </h2>
            <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', maxWidth: '520px', lineHeight: 1.78 }}>
              From upstream supply in Kazakhstan to FOB delivery at global ports — we manage every link in the energy supply chain.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {services.map(s => (
              <Link key={s.title} href="/services" style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '2rem', borderRadius: '12px',
                  background: '#FFFFFF',
                  border: '1px solid #E3D9C8',
                  transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.22s',
                  cursor: 'pointer', height: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(184,134,11,0.35)';
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 12px 36px rgba(184,134,11,0.1)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#E3D9C8';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: '#F4EDE0',
                    border: '1px solid #E3D9C8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem', color: '#B8860B',
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: '#19140D', marginBottom: '0.55rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', lineHeight: 1.72 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
              color: '#B8860B', textDecoration: 'none', letterSpacing: '0.04em',
              borderBottom: '1px solid rgba(184,134,11,0.3)', paddingBottom: '2px',
              transition: 'border-color 0.18s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#B8860B'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.3)'}>
              View All Services →
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
