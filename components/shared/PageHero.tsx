'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

interface PageHeroProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function PageHero({ label, title, highlight, subtitle }: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (label) tl.from('.phero-label', { y: -16, opacity: 0, duration: 0.5 }, 0.15);
    tl.from('.phero-title .word-inner', { y: '100%', opacity: 0, stagger: 0.045, duration: 0.7 }, label ? 0.3 : 0.15);
    if (highlight) tl.from('.phero-highlight', { y: 18, opacity: 0, duration: 0.7 }, 0.45);
    if (subtitle) tl.from('.phero-sub', { y: 18, opacity: 0, duration: 0.55 }, 0.65);
    tl.from('.phero-rule', { scaleX: 0, duration: 0.6, ease: 'power2.out', transformOrigin: 'left' }, 0.1);
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      style={{
        background: '#F4EDE0',
        paddingTop: '8.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #E3D9C8',
      }}
    >
      {/* Subtle dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

      {/* Gold rule line at top */}
      <div className="phero-rule" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(to right, #B8860B 0%, #D4950C 40%, transparent 100%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        {label && (
          <div className="phero-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#B8860B', display: 'inline-block', borderRadius: '1px' }} />
            <span style={{
              fontSize: '11px', fontWeight: 600, color: '#B8860B',
              letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
            }}>
              {label}
            </span>
          </div>
        )}

        <h1 style={{
          fontSize: 'clamp(1.9rem, 5vw, 3.8rem)',
          color: '#19140D',
          marginBottom: highlight ? '0' : '0.75rem',
          lineHeight: 1.1,
          display: 'block',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 800,
        }}>
          <WordSplit text={title} className="phero-title" />
          {highlight && (
            <>
              {' '}
              <span className="gradient-text phero-highlight">{highlight}</span>
            </>
          )}
        </h1>

        {subtitle && (
          <p
            className="phero-sub"
            style={{
              fontSize: '1.05rem',
              color: '#8A7A65',
              maxWidth: '580px',
              lineHeight: 1.8,
              marginTop: '0.9rem',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
