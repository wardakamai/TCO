import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';
import CTABanner from '@/components/home/CTABanner';
import Link from 'next/link';
import { T } from '@/lib/theme';
import { breadcrumbList, faqPage, service } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fujairah Jet Fuel Supplier — Jet A1 CIF & Fuel Storage UAE',
  description:
    'TOO Crude Oil is a verified Jet A1 and petroleum fuel supplier at Fujairah, UAE. CIF Jet A1 delivery to Asia, Africa, and the Middle East. 1.4M m³ Fujairah fuel storage with direct terminal access.',
  keywords: [
    'Fujairah jet fuel supplier', 'Jet A1 CIF Fujairah', 'Fujairah fuel allocation',
    'Fujairah fuel storage', 'fuel supplier Fujairah', 'petroleum Fujairah UAE',
    'Fujairah oil storage', 'jet fuel UAE', 'aviation fuel Fujairah', 'bunker fuel Fujairah',
    'EN590 Fujairah', 'CIF petroleum Fujairah', 'fuel exporter worldwide', 'global petroleum supplier',
    'international fuel supplier',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/fujairah-jet-fuel-supplier' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/fujairah-jet-fuel-supplier',
    title: 'Fujairah Jet Fuel Supplier — CIF Delivery Worldwide | TOO Crude Oil',
    description: 'Jet A1 and petroleum fuel supply from Fujairah, UAE. 1.4M m³ storage. CIF delivery to Asia, Africa, and the Middle East. SGS verified.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'Fujairah Jet Fuel Supplier — TOO Crude Oil' }],
  },
};

const products = [
  { product: 'Jet Fuel A1', spec: 'ASTM D1655 / DEF STAN 91-091', delivery: 'CIF / FOB', notes: 'Primary Fujairah aviation fuel product. Fast loading for MENA and Asia routes.' },
  { product: 'EN590 Diesel (ULSD)', spec: '≤ 10 PPM sulphur, EN 590', delivery: 'CIF / FOB', notes: 'Available from Fujairah for Indian Ocean rim, East Africa, and South Asia.' },
  { product: 'Gasoline RON 92/95', spec: 'EN 228 compliant', delivery: 'CIF', notes: 'CIF delivery to Persian Gulf, Red Sea, and Indian Ocean ports.' },
  { product: 'Bunker Fuel IFO/VLSFO', spec: 'IFO 180/380 · IMO 2020', delivery: 'EX-PIPE / Barge', notes: 'Fujairah is a top-5 global bunkering port. Vessel-to-vessel transfer available.' },
  { product: 'Crude Oil', spec: 'REBCO · CPC Blend', delivery: 'FOB', notes: 'FOB Fujairah for Asian and Middle Eastern refinery buyers.' },
];

const regions = [
  { region: 'Middle East & Persian Gulf', ports: 'Jeddah · Muscat · Bahrain · Kuwait · Bandar Abbas', time: '1–3 days' },
  { region: 'Indian Subcontinent', ports: 'Mumbai · Karachi · Kolkata · Colombo · Chennai', time: '3–7 days' },
  { region: 'East Africa', ports: 'Mombasa · Dar es Salaam · Djibouti · Maputo', time: '7–12 days' },
  { region: 'South East Asia', ports: 'Singapore · Ho Chi Minh · Bangkok · Jakarta', time: '7–14 days' },
  { region: 'China & Far East', ports: 'Shanghai · Ningbo · Qingdao · Tianjin · Busan', time: '14–20 days' },
  { region: 'Red Sea & Mediterranean', ports: 'Port Said · Aqaba · Suez · Piraeus', time: '5–10 days' },
];

const faqs = [
  { q: 'Why is Fujairah a strategic fuel supply hub?', a: 'Fujairah, located on the east coast of the UAE, is the only emirate with a direct Indian Ocean coastline — bypassing the Strait of Hormuz. This makes it the second-largest bunkering hub in the world and a critical transshipment point for petroleum heading to Asia, Africa, and Europe. Our 1.4M m³ storage allocation provides direct access to this strategic location.' },
  { q: 'Can you supply Jet A1 CIF to airports in Asia?', a: 'Yes. From Fujairah, we supply Jet A1 on CIF terms to major import points serving airports across South Asia (Mumbai, Karachi, Colombo), South East Asia (Singapore, Bangkok, Jakarta), and East Africa (Mombasa, Nairobi via inland transport). Cargo inspection is completed by SGS at Fujairah prior to vessel departure.' },
  { q: 'What is the typical transit time from Fujairah to East Africa?', a: 'Transit times from Fujairah to East African ports average 7–12 days: Mombasa (KE) 8–10 days, Dar es Salaam (TZ) 9–11 days, Djibouti 6–8 days. We provide estimated arrival dates (ETA) and vessel tracking throughout the voyage.' },
  { q: 'Do you offer storage rental at Fujairah?', a: 'Yes. Beyond supply, we offer petroleum product storage at Fujairah terminal on a rental basis for buyers who require their own in-tank position in the UAE. Storage rental is subject to availability and minimum volume commitments. Contact our operations team for current availability and rates.' },
];

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Fujairah Jet Fuel Supplier', path: '/fujairah-jet-fuel-supplier' },
  ]),
  service({
    name: 'Fujairah Jet Fuel Supply',
    description: 'Jet A1 and petroleum fuel supply from Fujairah, UAE, with CIF delivery to Asia, Africa, and the Middle East.',
    path: '/fujairah-jet-fuel-supplier',
    serviceType: 'Petroleum Supply',
    areaServed: 'Fujairah, United Arab Emirates',
  }),
  faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
];

export default function FujairahJetFuelSupplierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="Fujairah, UAE"
        title="Fujairah Fuel"
        highlight="Supplier"
        subtitle="Jet A1, EN590, gasoline, and bunker fuel from our Fujairah terminal — 1.4M m³ storage with CIF delivery to Asia, Africa, and the Middle East. World-class bunkering and aviation fuel supply."
      />

      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '2px', background: T.gold }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: T.gold, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Indian Ocean Hub</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Strategic Fuel Supply from Fujairah, UAE
                </h2>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Crude Oil LLP secured its <strong style={{ color: T.text }}>Fujairah terminal position in 2020</strong>, making it our Middle East and Indian Ocean supply hub. With <strong style={{ color: T.text }}>1.4 million m³ of storage capacity</strong>, Fujairah enables rapid CIF fuel delivery across a region spanning East Africa, the Indian subcontinent, South East Asia, and China.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', marginBottom: '1rem' }}>
                  Fujairah is the world's second-largest bunkering port and a major <strong style={{ color: T.text }}>Jet A1 CIF supply point</strong> for Asia-bound aviation fuel. Our direct terminal allocation avoids third-party trading intermediaries — buyers receive product directly from our in-tank position with SGS inspection and complete documentation.
                </p>
                <p style={{ color: T.muted, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}>
                  We supply <strong style={{ color: T.text }}>Jet Fuel A1, EN590 diesel, gasoline, and bunker fuel</strong> from Fujairah on CIF and FOB terms. Storage rental is also available for buyers requiring their own UAE tank position.
                </p>
              </div>
              <div style={{ background: T.warm, borderRadius: '12px', padding: '2rem', border: `1px solid ${T.border}` }}>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '1.25rem' }}>FUJAIRAH TERMINAL</h3>
                {[
                  { label: 'Location', value: 'Port of Fujairah, UAE' },
                  { label: 'Storage Capacity', value: '1.4 million m³' },
                  { label: 'Terminal Access', value: 'Since 2020' },
                  { label: 'Key Products', value: 'Jet A1 · EN590 · Gasoline · Bunker' },
                  { label: 'Delivery Terms', value: 'CIF / FOB / EX-PIPE / Barge' },
                  { label: 'Primary Markets', value: 'MENA · South Asia · East Africa · Asia' },
                  { label: 'Bunkering', value: 'Yes — vessel-to-vessel available' },
                  { label: 'Inspection', value: 'SGS at load port' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: `1px solid ${T.border}`, gap: '1rem' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted, flexShrink: 0 }}>{label}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: T.text, textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Products */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              Products Available from Fujairah
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {products.map(({ product, spec, delivery, notes }) => (
                <div key={product} style={{ background: T.surface, borderRadius: '10px', padding: '1.25rem 1.5rem', border: `1px solid ${T.border}`, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: T.text }}>{product}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: T.muted }}>{spec}</div>
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.gold, fontWeight: 600 }}>{delivery}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted, lineHeight: 1.6 }}>{notes}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Delivery regions */}
      <SectionReveal direction="up">
        <section style={{ background: T.surface, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
              CIF Delivery Regions from Fujairah
            </h2>
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: `1px solid ${T.border}` }}>
              <div style={{ background: T.warm, overflow: 'hidden', minWidth: '420px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', padding: '0.75rem 1.5rem', background: '#19140D', gap: '1rem' }}>
                  {['Region', 'Key Ports', 'Est. Transit'].map(h => (
                    <span key={h} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</span>
                  ))}
                </div>
                {regions.map(({ region, ports, time }, i) => (
                  <div key={region} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? T.surface : '#FDFAF6', borderBottom: i < regions.length - 1 ? `1px solid ${T.border}` : 'none', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: T.text }}>{region}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.muted }}>{ports}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: T.gold, fontWeight: 600 }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* FAQ */}
      <SectionReveal direction="up">
        <section style={{ background: T.warm, padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}` }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: T.text, marginBottom: '0.6rem' }}>{q}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: T.muted, lineHeight: 1.8, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.75rem 2rem', background: T.gold, color: '#19140D', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }}>
                Request Fujairah Fuel Supply →
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABanner />
    </>
  );
}
