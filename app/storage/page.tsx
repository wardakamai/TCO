import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import { T } from '@/lib/theme';
import { breadcrumbList } from '@/lib/schema';

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Terminal Network', path: '/storage' },
  ]),
];

export const metadata: Metadata = {
  title: 'Terminal Network',
  description: 'TOO Crude Oil holds strategic FOB positions at Rotterdam, Houston, Jurong and Fujairah — four of the world\'s most important oil & gas trading hubs. 7M+ m³ combined storage capacity.',
  keywords: [
    'Rotterdam oil terminal', 'Houston energy terminal', 'Jurong fuel storage', 'Fujairah oil terminal',
    'FOB storage facilities', 'oil terminal network', 'petroleum storage global', 'crude oil terminal Rotterdam',
    'bunker fuel Fujairah', 'Singapore oil storage', 'Gulf Coast energy terminal',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/storage' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/storage',
    title: 'Global Terminal Network — Rotterdam, Houston, Jurong, Fujairah | TOO Crude Oil',
    description: 'Strategic FOB positions at four global energy hubs. 7M+ m³ combined storage capacity across Europe, Americas, Asia-Pacific and Middle East.',
  },
};

const terminals = [
  { flag: '🇳🇱', city: 'Rotterdam', country: 'Netherlands', region: 'Northwest Europe', coords: 'Maasvlakte, Rotterdam', desc: "Rotterdam is Europe's largest seaport and the world's foremost oil trading hub. Our FOB position provides access to the ARA (Amsterdam-Rotterdam-Antwerp) trading hub, with direct pipeline connections to refineries across the European network.", capacity: '2.8 million m³', products: ['REBCO Crude Oil', 'Diesel EN590', 'Jet Fuel A1', 'Gasoline', 'Bunker IFO 180/380'], stats: [{ label: 'Storage Capacity', value: '2.8M m³' }, { label: 'Annual Throughput', value: '18M+ tonnes' }, { label: 'Tank Count', value: '120+ tanks' }, { label: 'Marine Berths', value: '8 dedicated' }], image: '/images/terminal-aerial.jpeg' },
  { flag: '🇺🇸', city: 'Houston', country: 'Texas, USA', region: 'Gulf Coast Americas', coords: 'Port of Houston, TX', desc: 'The Port of Houston is the leading US energy export hub on the Gulf Coast. Our terminal position provides pipeline connectivity to major US refinery clusters and marine access for VLCCs and Suezmax tankers serving Atlantic and Pacific markets.', capacity: '1.6 million m³', products: ['REBCO Crude Oil', 'Diesel EN590', 'LNG', 'Gasoline', 'Bunker Fuel'], stats: [{ label: 'Storage Capacity', value: '1.6M m³' }, { label: 'Annual Throughput', value: '10M+ tonnes' }, { label: 'Pipeline Access', value: '4 trunk lines' }, { label: 'Marine Berths', value: '6 dedicated' }], image: null },
  { flag: '🇸🇬', city: 'Jurong', country: 'Singapore', region: 'Asia-Pacific', coords: 'Jurong Island, Singapore', desc: "Jurong Island is Asia's premier bulk liquid chemical and petroleum hub. Our position provides direct access to the Strait of Malacca — the world's second busiest shipping lane — and serves markets across Southeast Asia, China, Japan, South Korea, and Australia.", capacity: '1.2 million m³', products: ['Bunker Fuel IFO', 'Jet Fuel A1', 'Diesel EN590', 'LNG', 'Gasoline'], stats: [{ label: 'Storage Capacity', value: '1.2M m³' }, { label: 'Annual Throughput', value: '8M+ tonnes' }, { label: 'Ships Serviced', value: '12,000/yr' }, { label: 'Marine Berths', value: '5 dedicated' }], image: '/images/refinery-aerial.png' },
  { flag: '🇦🇪', city: 'Fujairah', country: 'United Arab Emirates', region: 'Middle East / Indian Ocean', coords: 'Port of Fujairah, UAE', desc: 'Fujairah sits outside the Strait of Hormuz on the Gulf of Oman — a critical strategic advantage. The world\'s third-largest bunkering hub after Rotterdam and Singapore, serving Indian Ocean and Arabian Sea routes.', capacity: '1.4 million m³', products: ['REBCO Crude Oil', 'Bunker Fuel IFO', 'Diesel EN590', 'Jet Fuel A1'], stats: [{ label: 'Storage Capacity', value: '1.4M m³' }, { label: 'Annual Throughput', value: '9M+ tonnes' }, { label: 'Bunkering Rank', value: 'World #3' }, { label: 'Marine Berths', value: '7 dedicated' }], image: null },
];

export default function StoragePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero label="Terminal Network" title="Four Ports." highlight="One Trusted Partner." subtitle="We hold strategic FOB positions at four of the world's most important energy trading hubs — providing global reach with local terminal expertise." />

      {/* FOB explanation */}
      <section style={{ background: T.surface, padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ padding: '2rem 2.5rem', borderRadius: '14px', background: T.warm, border: `1px solid ${T.border}` }}>
              <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.16em', marginBottom: '0.75rem', textTransform: 'uppercase' as const }}>How FOB Trading Works</div>
              <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.sub, lineHeight: 1.82 }}>Under Free On Board (FOB) terms, Crude Oil LLP delivers product to your nominated vessel at one of our port terminals. Risk and title pass to the buyer once product crosses the ship&apos;s rail. You arrange and pay for freight, insurance, and onward delivery — giving you full control of your logistics and cost structure.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Panoramic terminal image break */}
      <section style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
        <Image
          src="/images/storage-tanks.jpeg"
          alt="Oil storage terminals at dawn"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25,20,13,0.72) 0%, rgba(25,20,13,0.2) 50%, rgba(25,20,13,0.72) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#B8860B', letterSpacing: '0.22em', textTransform: 'uppercase' as const }}>Our Network</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', color: '#FAF8F4', textAlign: 'center', lineHeight: 1.1 }}>
            7M+ m³ of Combined<br />Storage Capacity
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(250,248,244,0.6)', textAlign: 'center' }}>
            Across Rotterdam · Houston · Jurong · Fujairah
          </p>
        </div>
      </section>

      {/* Terminal sections */}
      {terminals.map((t, i) => (
        <section key={t.city} style={{ background: i % 2 === 0 ? T.bg : T.surface, padding: '6rem 2rem' }} className="section-pad">
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
              {i % 2 === 0 ? (
                <>
                  <SectionReveal direction="left">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '2.5rem' }}>{t.flag}</span>
                        <div>
                          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: T.text, lineHeight: 1 }}>{t.city}</h2>
                          <div style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: T.muted }}>{t.country} · {t.region}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: T.gold, fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '16px', height: '1px', background: T.gold, display: 'inline-block' }} />{t.coords}
                      </div>
                      <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82, marginBottom: '1.5rem' }}>{t.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                        {t.products.map(prod => (
                          <span key={prod} style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.sub, background: T.warm, padding: '0.25rem 0.6rem', borderRadius: '4px' }}>{prod}</span>
                        ))}
                      </div>
                      <Link href="/contact" style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.gold, textDecoration: 'none', letterSpacing: '0.04em' }}>Enquire about {t.city} →</Link>
                    </div>
                  </SectionReveal>
                  <SectionReveal direction="right">
                    {t.image ? (
                      <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '380px' }}>
                        <Image src={t.image} alt={`${t.city} terminal`} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(25,20,13,0.7) 0%, transparent 55%)' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                          {t.stats.map(stat => (
                            <div key={stat.label} style={{ padding: '0.65rem', background: 'rgba(25,20,13,0.6)', borderRadius: '7px', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(184,134,11,0.2)' }}>
                              <div style={{ fontSize: '0.95rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#B8860B', lineHeight: 1, marginBottom: '0.2rem' }}>{stat.value}</div>
                              <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.6)' }}>{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {t.stats.map(stat => (
                          <div key={stat.label} style={{ padding: '1.25rem', borderRadius: '10px', background: T.warm, border: `1px solid ${T.border}`, textAlign: 'center' }}>
                            <div style={{ fontSize: '1.15rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.gold, lineHeight: 1, marginBottom: '0.3rem' }}>{stat.value}</div>
                            <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: T.muted }}>{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </SectionReveal>
                </>
              ) : (
                <>
                  <SectionReveal direction="left">
                    {t.image ? (
                      <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '380px' }}>
                        <Image src={t.image} alt={`${t.city} terminal`} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(25,20,13,0.7) 0%, transparent 55%)' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                          {t.stats.map(stat => (
                            <div key={stat.label} style={{ padding: '0.65rem', background: 'rgba(25,20,13,0.6)', borderRadius: '7px', backdropFilter: 'blur(10px)', textAlign: 'center', border: '1px solid rgba(184,134,11,0.2)' }}>
                              <div style={{ fontSize: '0.95rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#B8860B', lineHeight: 1, marginBottom: '0.2rem' }}>{stat.value}</div>
                              <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.6)' }}>{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {t.stats.map(stat => (
                          <div key={stat.label} style={{ padding: '1.25rem', borderRadius: '10px', background: T.warm, border: `1px solid ${T.border}`, textAlign: 'center' }}>
                            <div style={{ fontSize: '1.15rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.gold, lineHeight: 1, marginBottom: '0.3rem' }}>{stat.value}</div>
                            <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: T.muted }}>{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </SectionReveal>
                  <SectionReveal direction="right">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '2.5rem' }}>{t.flag}</span>
                        <div>
                          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: T.text, lineHeight: 1 }}>{t.city}</h2>
                          <div style={{ fontSize: '12px', fontFamily: 'DM Sans, sans-serif', color: T.muted }}>{t.country} · {t.region}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: T.gold, fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '16px', height: '1px', background: T.gold, display: 'inline-block' }} />{t.coords}
                      </div>
                      <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82, marginBottom: '1.5rem' }}>{t.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                        {t.products.map(prod => (
                          <span key={prod} style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.sub, background: T.warm, padding: '0.25rem 0.6rem', borderRadius: '4px' }}>{prod}</span>
                        ))}
                      </div>
                      <Link href="/contact" style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.gold, textDecoration: 'none', letterSpacing: '0.04em' }}>Enquire about {t.city} →</Link>
                    </div>
                  </SectionReveal>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  );
}
