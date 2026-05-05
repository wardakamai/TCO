'use client';

import { useState } from 'react';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';

const T = { text: '#19140D', muted: '#8A7A65', sub: '#4A3C2A', border: '#E3D9C8', warm: '#F4EDE0', surface: '#FFFFFF', bg: '#FAF8F4', gold: '#B8860B', ink: '#19140D' };

const products = ['REBCO Crude Oil', 'Diesel Fuel EN590', 'Aviation Jet Fuel A1', 'LNG', 'Gasoline RON 92/95', 'Bunker Fuel IFO 180/380', 'Multiple Products', 'Other / General Enquiry'];

const inputBase: React.CSSProperties = {
  width: '100%', padding: '0.75rem 1rem',
  background: T.surface, border: `1px solid ${T.border}`,
  borderRadius: '7px', color: T.text, fontSize: '14px',
  fontFamily: 'DM Sans, sans-serif',
  outline: 'none', transition: 'border-color 0.18s',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '10px', fontFamily: 'DM Sans, sans-serif',
  fontWeight: 700, color: T.gold, letterSpacing: '0.14em', marginBottom: '0.4rem',
  textTransform: 'uppercase',
};

export default function ContactPageContent() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      /* Replace YOUR_FORMSPREE_ID with your Formspree form ID (free at formspree.io) */
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company || 'Not provided',
          email: form.email,
          phone: form.phone || 'Not provided',
          product: form.product || 'Not specified',
          message: form.message,
          _subject: `New Enquiry from ${form.name}${form.company ? ` — ${form.company}` : ''}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === name ? '#B8860B' : T.border,
  });

  return (
    <>
      <PageHero label="Get In Touch" title="Contact Our" highlight="Trading Desk." subtitle="Request FOB pricing, availability, and delivery schedules. Our trading team in Almaty responds within 24 hours." />

      <section style={{ background: T.bg, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid' }} className="contact-grid">

            {/* Form */}
            <SectionReveal direction="left">
              <div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.6rem', color: T.text, marginBottom: '0.5rem' }}>Send Us a Message</h2>
                <p style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.muted, marginBottom: '2rem', lineHeight: 1.65 }}>Fill in the form and our trading team will respond with pricing and availability within one business day.</p>

                {submitted ? (
                  <div style={{ padding: '2.5rem', borderRadius: '12px', background: '#F0FDF4', border: '1px solid #BBF7D0', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', color: T.text, marginBottom: '0.5rem' }}>Message Received</h3>
                    <p style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.65 }}>Thank you, {form.name || 'valued client'}. Our trading desk will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} noValidate>
                    <div style={{ display: 'grid' }} className="form-grid-2">
                      <div>
                        <label style={labelStyle} htmlFor="name">Full Name *</label>
                        <input id="name" name="name" required value={form.name} onChange={handle} placeholder="John Smith" style={inputStyle('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="company">Company</label>
                        <input id="company" name="company" value={form.company} onChange={handle} placeholder="Acme Energy Ltd" style={inputStyle('company')} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} />
                      </div>
                    </div>
                    <div style={{ display: 'grid' }} className="form-grid-2">
                      <div>
                        <label style={labelStyle} htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handle} placeholder="john@company.com" style={inputStyle('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+1 212 555 0100" style={inputStyle('phone')} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="product">Product Interest</label>
                      <select id="product" name="product" value={form.product} onChange={handle} style={{ ...inputStyle('product'), cursor: 'pointer' }} onFocus={() => setFocused('product')} onBlur={() => setFocused(null)}>
                        <option value="">Select a product...</option>
                        {products.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="message">Message *</label>
                      <textarea id="message" name="message" required value={form.message} onChange={handle} rows={5} placeholder="Please describe your requirements — product grade, volume (MT or barrels), preferred port, and delivery timeline..." style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                    </div>

                    {error && (
                      <div style={{ padding: '0.85rem 1rem', borderRadius: '7px', background: '#FEF2F2', border: '1px solid #FECACA', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: '#991B1B' }}>
                        Something went wrong. Please email us directly at <a href="mailto:sales@toocrudeoil.com" style={{ color: '#B91C1C', fontWeight: 600 }}>sales@toocrudeoil.com</a>.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      aria-busy={loading}
                      style={{
                        padding: '0.85rem 2rem', background: loading ? '#8A7A65' : T.ink,
                        color: '#FAF8F4', fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
                        fontSize: '13.5px', borderRadius: '7px',
                        border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                        transition: 'background 0.18s, transform 0.15s', width: 'fit-content',
                      }}
                      onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLElement).style.background = '#B8860B'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; } }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = loading ? '#8A7A65' : T.ink; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                      {loading ? 'Sending…' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>

            {/* Contact info */}
            <SectionReveal direction="right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.6rem', color: T.text, marginBottom: '0.5rem' }}>Direct Contact</h2>
                  <p style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.65 }}>Our trading desk is available during Almaty business hours (UTC+5). For urgent requirements, call us directly.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    {
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                      label: 'Email',
                      content: <><a href="mailto:info@toocrudeoil.com" style={{ display: 'block', fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub, textDecoration: 'none' }}>info@toocrudeoil.com</a><a href="mailto:sales@toocrudeoil.com" style={{ display: 'block', fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub, textDecoration: 'none' }}>sales@toocrudeoil.com</a></>
                    },
                    {
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.001 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" /></svg>,
                      label: 'Phone',
                      content: <a href="tel:+77470639067" style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub, textDecoration: 'none' }}>+7 (747) 063-90-67</a>
                    },
                    {
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>,
                      label: 'HQ Address',
                      content: <span style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub, lineHeight: 1.65 }}>Khodzhanov St 28, Bostandyk audany<br />Almaty, Kazakhstan</span>
                    },
                    {
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>,
                      label: 'WhatsApp',
                      content: <a href="https://wa.me/77470639067" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub, textDecoration: 'none' }}>+7 (747) 063-90-67</a>
                    },
                  ].map(item => (
                    <div key={item.label} style={{ padding: '1.25rem 1.5rem', borderRadius: '10px', background: T.warm, border: `1px solid ${T.border}`, display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: T.surface, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.14em', marginBottom: '0.35rem', textTransform: 'uppercase' as const }}>{item.label}</div>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Terminal presence */}
                <div style={{ padding: '1.5rem', borderRadius: '10px', background: T.warm, border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.14em', marginBottom: '1rem', textTransform: 'uppercase' as const }}>Terminal Presence</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {[{ city: 'Rotterdam', detail: 'Northwest Europe' }, { city: 'Houston', detail: 'Gulf Coast Americas' }, { city: 'Jurong', detail: 'Asia-Pacific' }, { city: 'Fujairah', detail: 'Middle East' }].map(p => (
                      <div key={p.city} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.gold, flexShrink: 0 }} />
                        <span style={{ fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub }}>{p.city} <span style={{ color: T.muted }}>— {p.detail}</span></span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 1.1rem', borderRadius: '999px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, color: '#166534' }}>Typical response: within 24 hours</span>
                </div>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>
    </>
  );
}
