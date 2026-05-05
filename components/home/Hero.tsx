'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/* ── Rotating headlines ── */
const headlines = [
  { line1: 'Global Energy.',      line2: 'Delivered with',  highlight: 'Precision.' },
  { line1: 'Kazakhstan Origin.',  line2: 'World-Class',     highlight: 'Quality.' },
  { line1: 'Four Terminals.',     line2: 'One Trusted',     highlight: 'Partner.' },
  { line1: 'FOB Trading,',        line2: 'Powered by',      highlight: 'Integrity.' },
];

const ports = [
  { city: 'Rotterdam', country: 'NL', products: ['REBCO', 'Diesel', 'Jet-A1'], flag: '🇳🇱' },
  { city: 'Houston',   country: 'TX', products: ['Crude', 'LNG', 'Diesel'],    flag: '🇺🇸' },
  { city: 'Jurong',    country: 'SG', products: ['Bunker', 'Jet-A1', 'Diesel'],flag: '🇸🇬' },
  { city: 'Fujairah',  country: 'AE', products: ['REBCO', 'Bunker', 'Diesel'], flag: '🇦🇪' },
];

export default function Hero() {
  const heroRef     = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const idxRef      = useRef(0);
  const [idx, setIdx] = useState(0);
  const current = headlines[idx];

  /* ── Initial GSAP entrance ── */
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-eyebrow',  { y: -16, opacity: 0, duration: 0.55 }, 0.4)
      .from('.hero-headline', { y: 28,  opacity: 0, duration: 0.75 }, 0.55)
      .from('.hero-body',     { y: 22,  opacity: 0, duration: 0.65 }, 0.85)
      .from('.hero-ctas a',   { y: 16,  opacity: 0, stagger: 0.12, duration: 0.55 }, 1.0)
      .from('.hero-stat-row', { y: 16,  opacity: 0, duration: 0.55 }, 1.1)
      .from('.hero-right-panel', { x: 40, opacity: 0, duration: 0.9, ease: 'power2.out' }, 0.35)
      .from('.port-card',     { y: 24,  opacity: 0, stagger: 0.1, duration: 0.55, ease: 'back.out(1.2)' }, 0.6);
  }, { scope: heroRef });

  /* ── Rotating headline cycle ── */
  useEffect(() => {
    const INTERVAL = 4000;
    const timer = setInterval(() => {
      const el = headlineRef.current;
      if (!el) return;

      /* Slide up + fade out */
      gsap.to(el, {
        y: -28, opacity: 0, duration: 0.42, ease: 'power2.in',
        onComplete: () => {
          idxRef.current = (idxRef.current + 1) % headlines.length;
          setIdx(idxRef.current);
          /* Slide in from below + fade in */
          gsap.fromTo(el,
            { y: 32, opacity: 0 },
            { y: 0,  opacity: 1, duration: 0.55, ease: 'power3.out' },
          );
        },
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* ── Background photo ── */}
      <Image
        src="/images/hero-image-tco.png"
        alt="TOO Crude Oil — Global refinery operations"
        fill priority
        style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
      />

      {/* Base dim */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(25,20,13,0.58)', zIndex: 1 }} />
      {/* Top/bottom gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(25,20,13,0.75) 0%, rgba(25,20,13,0.18) 40%, rgba(25,20,13,0.18) 58%, rgba(25,20,13,0.88) 82%, rgba(25,20,13,0.98) 100%)',
      }} />
      {/* Left anchor gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(25,20,13,0.55) 0%, rgba(25,20,13,0.1) 60%, transparent 100%)',
      }} />

      {/* ── Split layout — normal flow so mobile can scroll ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1280px', margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 390px',
        minHeight: '100vh',
        paddingTop: '114px',
      }} className="hero-split-grid">

        {/* ── LEFT — content ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '0 3rem 5rem 2rem',
        }} className="hero-content-pad">

          {/* Eyebrow */}
          <div className="hero-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B8860B', display: 'inline-block', animation: 'pulseGold 2.2s ease-in-out infinite' }} />
            <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              FOB Trading · Est. 2007 · Almaty, Kazakhstan
            </span>
          </div>

          {/* Rotating headline block */}
          <div ref={headlineRef} className="hero-headline" style={{ marginBottom: '1.75rem' }}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 5.2vw, 5rem)',
              fontWeight: 900, lineHeight: 1.0,
              color: '#FAF8F4',
              marginBottom: '0.04em',
            }}>
              {current.line1}
            </h1>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 5.2vw, 5rem)',
              fontWeight: 900, lineHeight: 1.0,
              color: '#FAF8F4',
            }}>
              {current.line2}{' '}
              <em className="gradient-text" style={{ fontStyle: 'italic' }}>{current.highlight}</em>
            </h1>
          </div>

          {/* Body */}
          <p className="hero-body" style={{
            fontSize: '1.05rem', fontFamily: 'DM Sans, sans-serif',
            color: 'rgba(250,248,244,0.78)', maxWidth: '500px',
            lineHeight: 1.82, marginBottom: '2.25rem',
          }}>
            Crude Oil LLP supplies REBCO, Diesel EN590, Jet Fuel A1, LNG, and Gasoline
            on FOB terms from four strategic global terminals.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/contact" style={{
              padding: '0.85rem 2rem', background: '#B8860B', color: '#19140D',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '13.5px',
              borderRadius: '7px', textDecoration: 'none',
              transition: 'opacity 0.18s, transform 0.15s',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
              Request a Quote →
            </Link>
            <Link href="/products" style={{
              padding: '0.85rem 2rem', background: 'rgba(250,248,244,0.08)', color: '#FAF8F4',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '13.5px',
              borderRadius: '7px', textDecoration: 'none',
              border: '1px solid rgba(250,248,244,0.28)', backdropFilter: 'blur(8px)',
              transition: 'background 0.18s, border-color 0.18s',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,248,244,0.14)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,248,244,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,248,244,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,248,244,0.28)'; }}>
              View Products
            </Link>
          </div>

          {/* Stat strip */}
          <div className="hero-stat-row" style={{ display: 'flex', gap: '0', borderTop: '1px solid rgba(250,248,244,0.12)', paddingTop: '1.5rem' }}>
            {[{ label: '17+', sub: 'Years' }, { label: '4', sub: 'Ports' }, { label: '6', sub: 'Products' }, { label: 'FOB', sub: 'Terms' }].map((s, i) => (
              <div key={s.label} style={{
                flex: 1, textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(250,248,244,0.12)' : 'none',
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.4rem', color: '#B8860B', lineHeight: 1 }}>{s.label}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(250,248,244,0.45)', marginTop: '0.2rem', letterSpacing: '0.06em' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — frosted glass port panel ── */}
        <div className="hero-split-right hero-right-panel" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '3.5rem 2rem', gap: '0.85rem',
          background: 'rgba(25,20,13,0.62)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(184,134,11,0.15)',
        }}>
          <div className="hero-panel-header" style={{ marginBottom: '0.5rem' }}>
            <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#B8860B', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Active Terminal Network</div>
            <div style={{ width: '32px', height: '2px', background: '#B8860B', borderRadius: '1px' }} />
          </div>

          {ports.map((p, i) => (
            <div key={p.city} className="port-card" style={{
              padding: '1rem 1.15rem', borderRadius: '10px',
              background: 'rgba(250,248,244,0.05)',
              border: '1px solid rgba(184,134,11,0.16)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(184,134,11,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.38)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,248,244,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.16)'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#B8860B', display: 'inline-block', animation: 'pulseGold 2.5s ease-in-out infinite', animationDelay: `${i * 0.3}s` }} />
                  <span style={{ fontSize: '1rem' }}>{p.flag}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '13.5px', color: '#FAF8F4' }}>{p.city}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(250,248,244,0.35)', fontFamily: 'DM Sans, sans-serif' }}>{p.country}</span>
                </div>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.12em', background: 'rgba(184,134,11,0.14)', padding: '0.18rem 0.45rem', borderRadius: '3px' }}>FOB</span>
              </div>
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                {p.products.map(prod => (
                  <span key={prod} style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.4)', background: 'rgba(255,255,255,0.06)', padding: '0.18rem 0.45rem', borderRadius: '3px' }}>{prod}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="hero-response-badge" style={{ marginTop: '0.35rem', padding: '0.85rem 1.15rem', borderRadius: '10px', background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)' }}>
            <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#B8860B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Response Time</div>
            <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.6)' }}>Trading desk replies within <strong style={{ color: '#FAF8F4' }}>24 hours</strong></div>
          </div>
        </div>

      </div>
    </section>
  );
}
