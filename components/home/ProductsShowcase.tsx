'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionReveal from '@/components/shared/SectionReveal';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: 'REBCO Crude Oil', spec: 'Russian Export Blend', detail: 'API 31–33° · Kazakhstan / Russia', avail: 64, tag: 'CRUDE' },
  { name: 'Diesel Fuel EN590', spec: 'Ultra-Low Sulphur', detail: '10PPM Sulphur · EU/CIS Refineries', avail: 89, tag: 'DIESEL' },
  { name: 'Aviation Jet Fuel A1', spec: 'ASTM D1655', detail: 'Freeze Pt −47°C · CIS Refineries', avail: 85, tag: 'JET FUEL' },
  { name: 'LNG', spec: 'Liquefied Natural Gas', detail: 'CH₄ >90% · Kazakhstan Fields', avail: 81, tag: 'LNG' },
  { name: 'Gasoline RON 92/95', spec: 'Unleaded Motor Gasoline', detail: 'EN228 · CIS Refineries', avail: 73, tag: 'GASOLINE' },
  { name: 'Fuel Oil / Bunker', spec: 'IFO 180 / IFO 380', detail: 'ISO 8217 · Global Blending', avail: 78, tag: 'BUNKER' },
];

function ProductCard({ p }: { p: typeof products[0] }) {
  const barRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(barRef.current, { scaleX: 0 }, {
      scaleX: p.avail / 100, duration: 1.3, ease: 'power3.out',
      scrollTrigger: { trigger: barRef.current, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  return (
    <div style={{
      padding: '1.75rem', borderRadius: '12px',
      background: '#FFFFFF',
      border: '1px solid #E3D9C8',
      transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.22s',
      display: 'flex', flexDirection: 'column', gap: '1rem',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(184,134,11,0.09)'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E3D9C8'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#B8860B', letterSpacing: '0.14em', background: '#F4EDE0', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>{p.tag}</span>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: '#19140D', marginTop: '0.55rem' }}>{p.name}</h3>
        </div>
        <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: '#B8860B', fontWeight: 700, textAlign: 'right', flexShrink: 0 }}>
          {p.avail}%<br />
          <span style={{ color: '#8A7A65', fontWeight: 400 }}>available</span>
        </div>
      </div>

      <div style={{ fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65' }}>
        {p.spec}<br />
        <span style={{ color: '#B8A888', fontSize: '12px' }}>{p.detail}</span>
      </div>

      <div>
        <div style={{ height: '4px', background: '#EAE0CF', borderRadius: '2px', overflow: 'hidden' }}>
          <div ref={barRef} style={{
            height: '100%', borderRadius: '2px',
            background: 'linear-gradient(90deg, #B8860B, #D4950C)',
            transformOrigin: 'left center', transform: 'scaleX(0)',
          }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: '#B8A888', letterSpacing: '0.05em' }}>FOB · 4 GLOBAL PORTS</span>
        <Link href="/products" style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}>
          Enquire →
        </Link>
      </div>
    </div>
  );
}

export default function ProductsShowcase() {
  return (
    <section style={{ background: '#FAF8F4', padding: '6rem 2rem' }} className="section-pad">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionReveal>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.9rem' }}>
              <span style={{ width: '28px', height: '2px', background: '#B8860B', display: 'inline-block', borderRadius: '1px' }} />
              <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Our Products</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#19140D', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Premium <span className="gradient-text">Energy Products</span>
            </h2>
            <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', maxWidth: '520px', lineHeight: 1.78 }}>
              A comprehensive range of oil and gas products traded on FOB terms from four strategic global terminals.
            </p>
          </div>
        </SectionReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {products.map(p => <ProductCard key={p.name} p={p} />)}
        </div>

        <SectionReveal delay={0.15}>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.75rem 2rem',
              background: '#19140D',
              color: '#FAF8F4', fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
              fontSize: '13.5px', borderRadius: '7px',
              textDecoration: 'none', transition: 'background 0.18s, transform 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#B8860B'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#19140D'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
              View Full Product Catalogue →
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
