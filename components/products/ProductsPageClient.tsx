'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';

gsap.registerPlugin(ScrollTrigger);

const T = { text: '#19140D', muted: '#8A7A65', sub: '#4A3C2A', border: '#E3D9C8', warm: '#F4EDE0', surface: '#FFFFFF', bg: '#FAF8F4', gold: '#B8860B' };

const products = [
  { tag: 'CRUDE OIL', name: 'REBCO Crude Oil', spec: 'Russian Export Blend Crude Oil', details: ['API Gravity: 31–33°', 'Sulphur: 1.2–1.5%', 'Density: 860–875 kg/m³', 'Origin: Kazakhstan / Russia'], desc: 'REBCO (Russian Export Blend Crude Oil) is a medium gravity, high-sulphur crude exported via the Druzhba pipeline system. Widely traded on international markets and priced against Brent benchmark.', avail: 64, ports: ['Rotterdam', 'Fujairah'] },
  { tag: 'DIESEL', name: 'Diesel Fuel EN590', spec: 'Ultra-Low Sulphur Diesel (ULSD)', details: ['Sulphur: 10 PPM max', 'Cetane: 51 min', 'Flash Point: >55°C', 'Standard: EN590:2013'], desc: 'EN590 compliant ultra-low sulphur diesel meeting European emission standards. Suitable for automotive, industrial, and power generation applications across EU and global markets.', avail: 89, ports: ['Rotterdam', 'Houston', 'Jurong'] },
  { tag: 'JET FUEL', name: 'Aviation Jet Fuel A1', spec: 'Kerosene-type Aviation Turbine Fuel', details: ['Freeze Point: −47°C max', 'Flash Point: >38°C', 'Standard: ASTM D1655', 'Density: 775–840 kg/m³'], desc: 'Jet A-1 aviation turbine fuel meeting ASTM D1655 and DEF STAN 91-091 specifications. Supplied to airlines, military, and cargo operators from our international terminals.', avail: 85, ports: ['Rotterdam', 'Houston', 'Fujairah'] },
  { tag: 'LNG', name: 'Liquefied Natural Gas', spec: 'Cryogenic Liquefied Methane', details: ['Methane: >90%', 'Temperature: −162°C', 'Heating Value: 54 MJ/kg', 'Origin: Kazakhstan Fields'], desc: 'LNG sourced from Kazakhstan natural gas fields. Supplied for industrial, power generation, and marine bunkering applications.', avail: 81, ports: ['Jurong', 'Houston'] },
  { tag: 'GASOLINE', name: 'Gasoline RON 92 / RON 95', spec: 'Unleaded Motor Gasoline', details: ['RON: 92 / 95', 'Sulphur: <10 PPM', 'Lead: Unleaded', 'Standard: EN228'], desc: 'High-quality unleaded motor gasoline meeting EN228 specifications. Available in RON 92 and RON 95 grades for automotive and industrial markets.', avail: 73, ports: ['Rotterdam', 'Houston', 'Jurong'] },
  { tag: 'BUNKER FUEL', name: 'Fuel Oil / Bunker', spec: 'IFO 180 / IFO 380 Marine Fuel', details: ['Viscosity: 180–380 cSt', 'Sulphur: <0.5%', 'Standard: ISO 8217', 'Grade: RMG / RMK'], desc: 'Marine fuel oil compliant with IMO 2020 low-sulphur regulations. Available in IFO 180 and IFO 380 grades for ocean-going vessels at all four port terminal locations.', avail: 78, ports: ['Rotterdam', 'Houston', 'Jurong', 'Fujairah'] },
];

function ProductCard({ p }: { p: typeof products[0] }) {
  const barRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(barRef.current, { scaleX: 0 }, {
      scaleX: p.avail / 100, duration: 1.4, ease: 'power3.out',
      scrollTrigger: { trigger: barRef.current, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  return (
    <article
      style={{ padding: '2rem', borderRadius: '14px', background: T.surface, border: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.22s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(184,134,11,0.09)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.14em', background: T.warm, padding: '0.22rem 0.6rem', borderRadius: '4px' }}>{p.tag}</span>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.1rem', color: T.text, marginTop: '0.6rem' }}>{p.name}</h3>
          <div style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: T.muted, marginTop: '0.15rem' }}>{p.spec}</div>
        </div>
        <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: T.gold, fontWeight: 700, textAlign: 'right', flexShrink: 0 }}>
          {p.avail}%<br /><span style={{ color: T.muted, fontWeight: 400 }}>available</span>
        </div>
      </div>
      <p style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.72 }}>{p.desc}</p>
      <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
        {p.details.map(d => (
          <div key={d} style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: T.sub, padding: '0.4rem 0.6rem', background: T.warm, borderRadius: '5px' }}>{d}</div>
        ))}
      </dl>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: T.muted, letterSpacing: '0.06em' }}>AVAILABILITY</span>
          <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold }}>{p.avail}%</span>
        </div>
        <div style={{ height: '5px', background: '#EAE0CF', borderRadius: '3px', overflow: 'hidden' }} role="progressbar" aria-valuenow={p.avail} aria-valuemin={0} aria-valuemax={100} aria-label={`${p.name} availability`}>
          <div ref={barRef} style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, #B8860B, #D4950C)', transformOrigin: 'left center', transform: 'scaleX(0)' }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {p.ports.map(port => (
            <span key={port} style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.sub, background: T.warm, padding: '0.18rem 0.45rem', borderRadius: '4px' }}>{port}</span>
          ))}
        </div>
        <Link href="/contact" style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.gold, textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}
          aria-label={`Enquire about ${p.name}`}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}>
          Enquire →
        </Link>
      </div>
    </article>
  );
}

export default function ProductsPageClient() {
  return (
    <>
      <PageHero label="Our Products" title="Premium Energy" highlight="Products." subtitle="We supply REBCO crude oil, Diesel EN590, Jet Fuel A1, LNG, Gasoline, and Bunker Fuel on FOB terms from four strategic global terminals." />

      <section style={{ background: T.bg, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionReveal>
            <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, maxWidth: '640px', lineHeight: 1.82, marginBottom: '3rem', padding: '1.25rem 1.5rem', borderLeft: `3px solid ${T.gold}`, background: T.warm, borderRadius: '0 8px 8px 0' }}>
              All products are traded on Free On Board (FOB) terms. Prices, volumes, and availability are subject to market conditions. Contact our trading desk for current pricing and delivery schedules.
            </p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {products.map(p => <ProductCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
