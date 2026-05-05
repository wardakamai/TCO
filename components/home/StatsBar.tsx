'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 17, suffix: '+', label: 'Years in Business', sub: 'Founded 2007, Almaty' },
  { value: 4, suffix: '', label: 'Port Terminals', sub: 'Rotterdam · Houston · Jurong · Fujairah' },
  { value: 5, suffix: '', label: 'Product Categories', sub: 'Crude, Diesel, Jet, LNG, Gasoline' },
  { value: 100, suffix: '+', label: 'Global Clients', sub: 'Across 30+ countries' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    stats.forEach((stat, i) => {
      const el = ref.current?.querySelector(`.stat-num-${i}`);
      if (!el) return;
      const proxy = { val: 0 };
      gsap.to(proxy, {
        val: stat.value, duration: 1.8, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(proxy.val) + stat.suffix; },
        scrollTrigger: { trigger: ref.current, start: 'top 82%', toggleActions: 'play none none none' },
      });
    });
    gsap.from('.stat-card', {
      y: 24, opacity: 0, stagger: 0.1, duration: 0.65, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 84%', toggleActions: 'play none none none' },
    });
  }, { scope: ref });

  return (
    <div ref={ref} style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E3D9C8',
      borderBottom: '1px solid #E3D9C8',
      padding: '3.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="stat-card" style={{
            textAlign: 'center',
            padding: '1.5rem 1rem',
            borderRight: i < stats.length - 1 ? '1px solid #E3D9C8' : 'none',
          }}>
            <div
              className={`stat-num-${i}`}
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 800,
                color: '#B8860B',
                lineHeight: 1,
              }}
            >
              0{s.suffix}
            </div>
            <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#19140D', marginTop: '0.4rem' }}>{s.label}</div>
            <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', marginTop: '0.2rem' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
