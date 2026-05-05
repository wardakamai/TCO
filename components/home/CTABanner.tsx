'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function WordSplit({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i, arr) => (
        <span key={i} className="word-mask" style={{ marginRight: i < arr.length - 1 ? '0.28em' : 0 }}>
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </span>
  );
}

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.cta-word .word-inner', {
      y: '105%', opacity: 0, stagger: 0.055, duration: 0.72, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 76%', toggleActions: 'play none none none' },
    });
    gsap.from(['.cta-sub', '.cta-btns'], {
      y: 18, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 72%', toggleActions: 'play none none none' },
    });
  }, { scope: ref });

  return (
    <section ref={ref} style={{
      position: 'relative', overflow: 'hidden',
      padding: '7rem 2rem',
    }} className="section-pad">

      {/* Background photo */}
      <Image
        src="/images/bg-energy.png"
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(25,20,13,0.88) 0%, rgba(25,20,13,0.92) 100%)',
      }} />

      {/* Subtle dot grid on dark */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(184,134,11,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(184,134,11,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative ring */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px', width: '380px', height: '380px',
        borderRadius: '50%', border: '1px dashed rgba(184,134,11,0.14)', pointerEvents: 'none',
        animation: 'rotateBorder 35s linear infinite',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.75rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B8860B', animation: 'pulseGold 2s ease-in-out infinite', display: 'inline-block' }} />
          <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: '#B8860B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Ready to Trade</span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05, fontFamily: 'Playfair Display, serif', fontWeight: 900, marginBottom: '1.25rem' }}>
          <span style={{ color: '#FAF8F4' }}><WordSplit text="Start Trading" className="cta-word" /></span>{' '}
          <span className="gradient-text"><WordSplit text="with TCO." className="cta-word" /></span>
        </h2>

        <p className="cta-sub" style={{ fontSize: '1.05rem', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.52)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
          Connect with our trading desk. We respond within 24 hours with FOB pricing, availability, and delivery schedules from your nearest port.
        </p>

        <div className="cta-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.8rem 2rem',
            background: '#B8860B',
            color: '#19140D', fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
            fontSize: '13.5px', borderRadius: '7px',
            textDecoration: 'none', transition: 'opacity 0.18s, transform 0.15s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
            Contact Our Team →
          </Link>
          <Link href="/products" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.8rem 2rem',
            background: 'transparent',
            color: 'rgba(250,248,244,0.75)', fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
            fontSize: '13.5px', borderRadius: '7px',
            textDecoration: 'none', border: '1px solid rgba(184,134,11,0.3)',
            transition: 'border-color 0.18s, color 0.18s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.65)'; (e.currentTarget as HTMLElement).style.color = '#FAF8F4'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.3)'; (e.currentTarget as HTMLElement).style.color = 'rgba(250,248,244,0.75)'; }}>
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
