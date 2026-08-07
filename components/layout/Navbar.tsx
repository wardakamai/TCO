'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '/',               label: 'Home' },
  { href: '/about',          label: 'About' },
  { href: '/services',       label: 'Services' },
  { href: '/products',       label: 'Products' },
  { href: '/storage',        label: 'Storage' },
  { href: '/sustainability',  label: 'Sustainability' },
  { href: '/blog',           label: 'Blog' },
  { href: '/contact',        label: 'Contact' },
];

const marketsMenu = [
  { href: '/en590-supplier',            label: 'EN590 Supplier',           desc: 'Ultra-Low Sulphur Diesel 10 PPM' },
  { href: '/jet-a1-supplier',           label: 'Jet A1 Supplier',          desc: 'Aviation Turbine Fuel CIF/FOB' },
  { href: '/crude-oil-supplier',        label: 'Crude Oil Supplier',       desc: 'REBCO & Caspian crude grades' },
  { href: '/cif-petroleum-supply',      label: 'CIF Petroleum Supply',     desc: 'Cost, Insurance & Freight delivery' },
  { href: '/rotterdam-fuel-allocation', label: 'Rotterdam Allocation',     desc: 'FOB ARA — Europe\'s oil hub' },
  { href: '/fujairah-jet-fuel-supplier',label: 'Fujairah Fuel Storage',    desc: '1.4M m³ — Indian Ocean hub' },
  { href: '/jurong-fuel-supply',        label: 'Jurong Fuel Supply',       desc: 'Singapore Asia-Pacific hub' },
  { href: '/houston-crude-oil-supplier',label: 'Houston Petroleum Export', desc: 'FOB USGC — Gulf Coast crude' },
  { href: '/sgs-verification',          label: 'SGS Verification',         desc: 'Quality inspection process' },
  { href: '/global-fuel-logistics',     label: 'Global Fuel Logistics',    desc: 'End-to-end supply chain' },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);
  const marketsRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/';
  const isMarketsActive = marketsMenu.some(item => pathname === item.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setMobileMarketsOpen(false); setMarketsOpen(false); }, [pathname]);

  /* Close markets dropdown on outside click */
  useEffect(() => {
    if (!marketsOpen) return;
    const handler = (e: MouseEvent) => {
      if (marketsRef.current && !marketsRef.current.contains(e.target as Node)) {
        setMarketsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [marketsOpen]);

  /* ── Derived nav appearance ── */
  const navBg = scrolled ? 'rgba(25,20,13,0.94)' : 'transparent';

  const linkColor = (active: boolean): string => {
    if (scrolled) return active ? '#B8860B' : '#FAF8F4';
    if (isHome)   return active ? '#B8860B' : '#FAF8F4';
    return active ? '#B8860B' : '#19140D';
  };

  const linkHoverColor = '#B8860B';
  const linkHoverRestColor = (scrolled || isHome) ? '#FAF8F4' : '#19140D';

  const borderColor = scrolled
    ? 'rgba(184,134,11,0.18)'
    : isHome ? 'rgba(250,248,244,0.1)' : 'rgba(227,217,200,0.6)';

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, overflow: 'visible' }}>

      {/* ── TOP BAR ── */}
      <div
        className="nav-topbar"
        style={{ background: '#201912', borderBottom: '1px solid rgba(184,134,11,0.15)', justifyContent: 'center' }}
      >
        <div style={{
          maxWidth: '1280px', width: '100%', margin: '0 auto',
          padding: '10px 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.8">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.6)', letterSpacing: '0.02em' }}>
              Khodzhanov St 28, Bostandyk, Almaty, Kazakhstan
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:sales@toocrudeoil.com" style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#B8860B'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,248,244,0.6)'}>
                sales@toocrudeoil.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.001 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
              <a href="tel:+77470639067" style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#B8860B'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,248,244,0.6)'}>
                +7 (747) 063-90-67
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav
        className="nav-inner"
        style={{
          maxWidth: '100%',
          background: navBg,
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: `1px solid ${borderColor}`,
          transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
        }}
      >
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '72px',
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <Image src="/images/logo-tco.png" alt="TOO Crude Oil" width={80} height={50} style={{ objectFit: 'contain' }} priority />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-desktop-links" style={{ gap: '0.05rem', alignItems: 'center' }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: '0.4rem 0.9rem',
                    fontSize: '13.5px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: active ? 600 : 400,
                    color: linkColor(active),
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'color 0.18s, background 0.18s',
                    background: active ? 'rgba(184,134,11,0.1)' : 'transparent',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = linkHoverColor; }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = linkHoverRestColor; }}
                >
                  {label}
                </Link>
              );
            })}

            {/* Markets dropdown */}
            <div
              ref={marketsRef}
              style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
            >
              <button
                onClick={() => setMarketsOpen(v => !v)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.4rem 0.9rem',
                  fontSize: '13.5px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: isMarketsActive || marketsOpen ? 600 : 400,
                  color: marketsOpen ? '#B8860B' : linkColor(isMarketsActive),
                  background: isMarketsActive || marketsOpen ? 'rgba(184,134,11,0.1)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'color 0.18s, background 0.18s',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
                aria-haspopup="true"
                aria-expanded={marketsOpen}
              >
                Markets
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: 'transform 0.2s', transform: marketsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {marketsOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: '-120px',
                    width: '560px',
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 20px 60px rgba(25,20,13,0.18), 0 4px 16px rgba(25,20,13,0.08)',
                    border: '1px solid #E3D9C8',
                    padding: '1rem',
                    zIndex: 100,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.35rem',
                  }}
                >
                  {/* Dropdown header */}
                  <div style={{ gridColumn: '1 / -1', padding: '0.4rem 0.5rem 0.75rem', borderBottom: '1px solid #F0E8D8', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                      Market Specialisations
                    </span>
                  </div>

                  {marketsMenu.map(({ href, label, desc }) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        style={{
                          display: 'flex', flexDirection: 'column', gap: '0.2rem',
                          padding: '0.65rem 0.75rem',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          background: active ? 'rgba(184,134,11,0.08)' : 'transparent',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = '#FAF8F4'; }}
                        onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                      >
                        <span style={{
                          fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
                          fontWeight: active ? 700 : 500,
                          color: active ? '#B8860B' : '#19140D',
                          lineHeight: 1.3,
                        }}>
                          {label}
                        </span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8A7A65', lineHeight: 1.4 }}>
                          {desc}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="/contact"
              className="nav-cta-desktop"
              style={{
                padding: '0.5rem 1.35rem',
                background: scrolled || isHome ? '#B8860B' : '#19140D',
                color: scrolled || isHome ? '#19140D' : '#FAF8F4',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600, fontSize: '13px', letterSpacing: '0.03em',
                borderRadius: '7px', textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s, transform 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#D4950C';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = scrolled || isHome ? '#B8860B' : '#19140D';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Get a Quote →
            </Link>

            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: 'none',
                border: `1px solid ${scrolled || isHome ? 'rgba(250,248,244,0.3)' : '#E3D9C8'}`,
                cursor: 'pointer', padding: '0.45rem 0.5rem',
                color: scrolled || isHome ? '#FAF8F4' : '#19140D',
                borderRadius: '6px',
                alignItems: 'center', justifyContent: 'center',
              }}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {menuOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid #E3D9C8',
          padding: '1rem 2rem 1.5rem',
          boxShadow: '0 8px 32px rgba(25,20,13,0.12)',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}>
          <div style={{ padding: '0.75rem 0', marginBottom: '0.5rem', borderBottom: '1px solid #F0E8D8', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <a href="mailto:sales@toocrudeoil.com" style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: '#B8860B', textDecoration: 'none' }}>sales@toocrudeoil.com</a>
            <a href="tel:+77470639067" style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: '#8A7A65', textDecoration: 'none' }}>+7 (747) 063-90-67</a>
          </div>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'block', padding: '0.7rem 0',
                fontSize: '15px', fontFamily: 'DM Sans, sans-serif',
                fontWeight: pathname === href ? 600 : 400,
                color: pathname === href ? '#B8860B' : '#19140D',
                textDecoration: 'none',
                borderBottom: '1px solid #F0E8D8',
              }}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Markets accordion */}
          <button
            onClick={() => setMobileMarketsOpen(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', padding: '0.7rem 0',
              fontSize: '15px', fontFamily: 'DM Sans, sans-serif',
              fontWeight: isMarketsActive ? 600 : 400,
              color: isMarketsActive ? '#B8860B' : '#19140D',
              background: 'none', border: 'none', cursor: 'pointer',
              borderBottom: '1px solid #F0E8D8',
            }}
          >
            Markets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ transition: 'transform 0.2s', transform: mobileMarketsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {mobileMarketsOpen && (
            <div style={{ background: '#FDFAF6', borderRadius: '8px', padding: '0.5rem', margin: '0.25rem 0 0.5rem', border: '1px solid #F0E8D8' }}>
              {marketsMenu.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'block', padding: '0.55rem 0.75rem',
                    fontSize: '14px', fontFamily: 'DM Sans, sans-serif',
                    fontWeight: pathname === href ? 600 : 400,
                    color: pathname === href ? '#B8860B' : '#4A3C2A',
                    textDecoration: 'none',
                    borderRadius: '6px',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            style={{
              display: 'block', marginTop: '1rem',
              padding: '0.75rem 1.5rem', textAlign: 'center',
              background: '#B8860B', color: '#19140D',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
              fontSize: '14px', borderRadius: '7px', textDecoration: 'none',
            }}
          >
            Get a Quote →
          </Link>
        </div>
      )}
    </header>
  );
}
