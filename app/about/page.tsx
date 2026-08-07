import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import { T } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Crude Oil LLP was founded in Almaty, Kazakhstan in 2007. Learn about our 17+ year history, mission, core values, and global FOB oil & gas trading operations across four continents.',
  keywords: [
    'Crude Oil LLP history', 'TOO Crude Oil founded 2007', 'Kazakhstan oil company history',
    'oil trading company Almaty', 'energy company Kazakhstan', 'FOB trading company Central Asia',
    'petroleum supplier history', 'oil gas Almaty Kazakhstan',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/about' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/about',
    title: 'About Crude Oil LLP — Kazakhstan Oil & Gas Company Since 2007',
    description: 'Founded in Almaty, Kazakhstan in 2007. From domestic supplier to international FOB trading partner at Rotterdam, Houston, Jurong and Fujairah.',
  },
};

const timeline = [
  { year: '2007', event: 'Company Founded', detail: 'Crude Oil LLP established in Almaty, Kazakhstan — beginning domestic oil product supply.' },
  { year: '2010', event: 'Rotterdam Terminal', detail: 'Opened first international FOB position at the Port of Rotterdam, Netherlands.' },
  { year: '2014', event: 'Houston Expansion', detail: 'Established trading presence at the Port of Houston, Texas — entering Gulf Coast markets.' },
  { year: '2017', event: 'Jurong Terminal', detail: 'Asia-Pacific operations launch at Jurong, Singapore.' },
  { year: '2020', event: 'Fujairah Hub', detail: 'Middle East position secured at Port of Fujairah, UAE.' },
  { year: '2024', event: 'ISO Certified', detail: 'Achieved ISO certification across core operational and quality management systems.' },
];

const values = [
  { icon: '💡', title: 'Innovation', desc: 'Continuously improving our trading, logistics, and storage operations through technology and expertise.' },
  { icon: '🌱', title: 'Ecological Safety', desc: 'Environmental responsibility embedded in every stage of our supply chain and terminal operations.' },
  { icon: '🤝', title: 'Social Responsibility', desc: 'Supporting Kazakhstani communities and contributing to sustainable energy access globally.' },
  { icon: '🛡️', title: 'HSE Excellence', desc: 'Uncompromising health, safety, and environmental standards across all activities and partnerships.' },
];

function Label({ text }: { text: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.9rem' }}>
      <span style={{ width: '28px', height: '2px', background: T.gold, display: 'inline-block', borderRadius: '1px' }} />
      <span style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>{text}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero label="About Crude Oil LLP" title="Built on Expertise," highlight="Driven by Energy." subtitle="Since 2007, we've grown from a Kazakhstan-based supplier into a global FOB trading partner at four of the world's most strategic port terminals." />

      {/* Story */}
      <section style={{ background: T.surface, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            <SectionReveal direction="left">
              <div>
                <Label text="Our Story" />
                <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, lineHeight: 1.12, marginBottom: '1.25rem' }}>From Kazakhstan to Every Ocean</h2>
                <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82, marginBottom: '1rem' }}>Crude Oil LLP was established on February 26, 2007 in Almaty, Kazakhstan. What began as a domestic supplier of refined petroleum products has grown into an internationally recognised FOB trading company with terminals at four of the world's most strategically significant ports.</p>
                <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82 }}>Today, our trading desk operates across Rotterdam, Houston, Jurong, and Fujairah — providing clients in energy, shipping, aviation, and industry with reliable access to REBCO crude oil, diesel, jet fuel, LNG, and gasoline on flexible FOB terms.</p>
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '420px' }}>
                <Image
                  src="/images/oil-platform.png"
                  alt="Offshore oil platform at dusk"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(25,20,13,0.82) 0%, rgba(25,20,13,0.2) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                  {[{ label: 'BIN', value: '070240013813' }, { label: 'Founded', value: 'Feb 2007' }, { label: 'Headquarters', value: 'Almaty, KZ' }, { label: 'Ports', value: '4 Global' }].map(item => (
                    <div key={item.label} style={{ textAlign: 'center', padding: '0.75rem 0.5rem', background: 'rgba(25,20,13,0.55)', borderRadius: '8px', backdropFilter: 'blur(10px)', border: '1px solid rgba(184,134,11,0.2)' }}>
                      <div style={{ fontSize: '0.85rem', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#B8860B', marginBottom: '0.15rem' }}>{item.value}</div>
                      <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,248,244,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: T.warm, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionReveal><h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, textAlign: 'center', marginBottom: '3rem' }}>Mission &amp; <span className="gradient-text">Vision</span></h2></SectionReveal>
          <SectionReveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="about-grid">
              {[
                { tag: 'MISSION', body: "To provide world-class energy products and reliable supply chain solutions — connecting Kazakhstan's energy resources with global markets through four strategic FOB terminals, underpinned by HSE excellence and trading integrity." },
                { tag: 'VISION', body: 'To become the foremost independent energy trading company originating from Central Asia — setting the standard for transparent FOB trading, environmental responsibility, and client-centric service across every global energy corridor.' },
              ].map(item => (
                <div key={item.tag} style={{ padding: '2rem', borderRadius: '12px', background: T.surface, border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.16em', marginBottom: '0.85rem' }}>{item.tag}</div>
                  <p style={{ fontSize: '1rem', fontFamily: 'DM Sans, sans-serif', color: T.sub, lineHeight: 1.82 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: T.surface, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <SectionReveal><h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, textAlign: 'center', marginBottom: '3.5rem' }}>Our <span className="gradient-text">Journey</span></h2></SectionReveal>
          <SectionReveal stagger>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {timeline.map(item => (
                <div key={item.year} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem', borderRadius: '10px', background: T.warm, border: `1px solid ${T.border}` }}>
                  <div style={{ flexShrink: 0, minWidth: '48px' }}>
                    <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: T.gold, letterSpacing: '0.1em' }}>{item.year}</div>
                    <div style={{ width: '2px', height: '100%', background: T.border, marginTop: '4px' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.95rem', color: T.text, marginBottom: '0.3rem' }}>{item.event}</div>
                    <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.65 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: T.warm, padding: '6rem 2rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionReveal><h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, textAlign: 'center', marginBottom: '3rem' }}>Core <span className="gradient-text">Values</span></h2></SectionReveal>
          <SectionReveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {values.map(v => (
                <div key={v.title} style={{ padding: '2rem', borderRadius: '12px', background: T.surface, border: `1px solid ${T.border}`, textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '0.6rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.72 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
