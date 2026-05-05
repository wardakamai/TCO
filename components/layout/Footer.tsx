'use client';

import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/storage', label: 'Storage' },
  { href: '/products', label: 'Products' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/contact', label: 'Contact' },
];

const services = ['Fuel Product Supply', 'Storage & Terminals', 'Logistics Services', 'Customised Delivery', 'Supply Chain Mgmt', 'Quality Assurance'];

const ports = [
  { city: 'Rotterdam', country: 'Netherlands' },
  { city: 'Houston', country: 'Texas, USA' },
  { city: 'Jurong', country: 'Singapore' },
  { city: 'Fujairah', country: 'UAE' },
];

const linkStyle = { fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.45)' as const, textDecoration: 'none' as const, transition: 'color 0.18s' };

export default function Footer() {
  return (
    <footer style={{ background: '#19140D', borderTop: '1px solid rgba(184,134,11,0.15)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4.5rem 2rem 3rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Image
                src="/images/logo-tco.png"
                alt="TOO Crude Oil — Crude Oil LLP"
                width={56}
                height={35}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(250,248,244,0.5)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '240px', fontFamily: 'DM Sans, sans-serif' }}>
              Kazakhstan-based international oil &amp; gas supplier. FOB trading from four strategic global terminals since 2007.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {ports.map(p => (
                <div key={p.city} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#B8860B', display: 'inline-block', flexShrink: 0,
                    animation: 'pulseGold 2.5s ease-in-out infinite',
                  }} />
                  <span style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.45)' }}>
                    {p.city} <span style={{ opacity: 0.5 }}>— {p.country}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a
                href="https://wa.me/77470639067"
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(250,248,244,0.07)', border: '1px solid rgba(250,248,244,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.18s, border-color 0.18s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,211,102,0.35)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,248,244,0.07)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,248,244,0.1)'; }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(250,248,244,0.55)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/crude-oil-llp"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(250,248,244,0.07)', border: '1px solid rgba(250,248,244,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.18s, border-color 0.18s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(10,102,194,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(10,102,194,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,248,244,0.07)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,248,244,0.1)'; }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(250,248,244,0.55)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={linkStyle}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#FAF8F4')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(250,248,244,0.45)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {services.map(s => (
                <li key={s}>
                  <Link
                    href="/services"
                    style={linkStyle}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#FAF8F4')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(250,248,244,0.45)')}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                <span style={{ fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.45)', lineHeight: 1.65 }}>Khodzhanov St 28<br />Almaty, Kazakhstan</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <div>
                  <a href="mailto:info@toocrudeoil.com" style={{ display: 'block', fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.45)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#B8860B')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,244,0.45)')}>
                    info@toocrudeoil.com
                  </a>
                  <a href="mailto:sales@toocrudeoil.com" style={{ display: 'block', fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.45)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#B8860B')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,244,0.45)')}>
                    sales@toocrudeoil.com
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.001 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" /></svg>
                <a href="tel:+77470639067" style={{ fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.45)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#B8860B')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,244,0.45)')}>
                  +7 (747) 063-90-67
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(184,134,11,0.1)', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '11.5px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.25)' }}>
            © {new Date().getFullYear()} Crude Oil LLP. All rights reserved. BIN: 070240013813
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ fontSize: '11.5px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.25)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(250,248,244,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,244,0.25)')}>
              Privacy Policy
            </Link>
            <Link href="/contact" style={{ fontSize: '11.5px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.25)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(250,248,244,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,244,0.25)')}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
