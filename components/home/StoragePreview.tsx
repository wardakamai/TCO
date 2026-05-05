'use client';

import Link from 'next/link';
import SectionReveal from '@/components/shared/SectionReveal';

const terminals = [
  { flag: '🇳🇱', city: 'Rotterdam', country: 'Netherlands', region: 'Northwest Europe', desc: "Europe's largest energy hub. Deep-water marine access, extensive pipeline network, and premium blending facilities.", products: ['REBCO', 'Diesel EN590', 'Jet Fuel A1', 'Bunker'], cap: '2.8M m³' },
  { flag: '🇺🇸', city: 'Houston', country: 'Texas, USA', region: 'Gulf Coast Americas', desc: 'Strategic Gulf Coast position with direct pipeline connectivity to US refineries and extensive marine export infrastructure.', products: ['Crude Oil', 'Diesel', 'LNG', 'Gasoline'], cap: '1.6M m³' },
  { flag: '🇸🇬', city: 'Jurong', country: 'Singapore', region: 'Asia-Pacific', desc: 'Asia-Pacific bunkering and bulk liquid specialist with direct access to the Strait of Malacca trade routes.', products: ['Bunker Fuel', 'Jet Fuel A1', 'Diesel', 'LNG'], cap: '1.2M m³' },
  { flag: '🇦🇪', city: 'Fujairah', country: 'UAE', region: 'Middle East / Indian Ocean', desc: 'Strategic Arabian Sea position outside the Strait of Hormuz. World-class bunkering and crude blending hub.', products: ['REBCO', 'Bunker', 'Diesel', 'Jet Fuel'], cap: '1.4M m³' },
];

export default function StoragePreview() {
  return (
    <section style={{ background: '#FFFFFF', padding: '6rem 2rem' }} className="section-pad">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionReveal>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.9rem' }}>
              <span style={{ width: '28px', height: '2px', background: '#B8860B', display: 'inline-block', borderRadius: '1px' }} />
              <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Global Presence</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#19140D', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Four Ports. <span className="gradient-text">One Trusted Partner.</span>
            </h2>
            <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', maxWidth: '520px', lineHeight: 1.78 }}>
              We trade and deliver on FOB terms from four strategically positioned port terminals covering every major energy corridor.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {terminals.map(t => (
              <div key={t.city} style={{
                padding: '1.75rem', borderRadius: '12px',
                background: '#FAF8F4',
                border: '1px solid #E3D9C8',
                transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.22s',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(184,134,11,0.09)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E3D9C8'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{t.flag}</span>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem', color: '#19140D' }}>{t.city}</div>
                    <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65' }}>{t.country}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: '9px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#B8860B', letterSpacing: '0.12em', background: '#F4EDE0', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>FOB</div>
                </div>

                <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: '#B8860B', fontWeight: 600, letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '16px', height: '1px', background: '#B8860B', display: 'inline-block' }} />
                  {t.region}
                </div>

                <p style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', lineHeight: 1.72 }}>{t.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {t.products.map(prod => (
                    <span key={prod} style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#4A3C2A', background: '#EAE0CF', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{prod}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid #E3D9C8' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: '#B8A888' }}>Capacity: {t.cap}</span>
                  <Link href="/storage" style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}>
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
