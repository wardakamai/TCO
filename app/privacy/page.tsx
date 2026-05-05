import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Crude Oil LLP (TOO Crude Oil). Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.toocrudeoil.com/privacy' },
  robots: { index: false, follow: false },
};

const T = { text: '#19140D', muted: '#8A7A65', sub: '#4A3C2A', border: '#E3D9C8', warm: '#F4EDE0', bg: '#FAF8F4', gold: '#B8860B' };

const sections = [
  {
    title: '1. Introduction',
    body: 'Crude Oil LLP ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard personal information submitted through this website at toocrudeoil.com.',
  },
  {
    title: '2. Information We Collect',
    body: 'We collect information you voluntarily provide through our contact form, including: full name, company name, email address, phone number, product interest, and enquiry details. We do not collect information automatically beyond standard server logs.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'We use your information solely to respond to your enquiries, provide pricing and product information, and fulfil any trading or commercial relationship. We do not sell, rent, or share your personal data with third parties except as required by applicable law.',
  },
  {
    title: '4. Data Retention',
    body: 'We retain enquiry data for up to 24 months or as required for commercial and legal purposes. You may request deletion of your data at any time by contacting info@toocrudeoil.com.',
  },
  {
    title: '5. Cookies',
    body: 'This website does not use tracking or advertising cookies. No third-party analytics or advertising scripts are loaded. Essential functional behaviour relies only on browser-native mechanisms.',
  },
  {
    title: '6. International Transfers',
    body: 'As a Kazakhstan-headquartered company with global operations, your data may be processed by our team members located in jurisdictions outside your country of residence, including Kazakhstan, the Netherlands, USA, Singapore, and UAE.',
  },
  {
    title: '7. Your Rights',
    body: 'You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at info@toocrudeoil.com. We will respond within 30 days.',
  },
  {
    title: '8. Contact',
    body: 'For any privacy-related enquiries: info@toocrudeoil.com — Crude Oil LLP, Khodzhanov St 28, Bostandyk audany, Almaty, Kazakhstan.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy" highlight="Policy." subtitle="How Crude Oil LLP collects, uses, and protects your personal information." />

      <section style={{ background: T.bg, padding: '5rem 2rem 7rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '12.5px', fontFamily: 'DM Sans, sans-serif', color: T.muted, marginBottom: '2.5rem' }}>
            Last updated: January 2025
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sections.map(s => (
              <div key={s.title}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: T.text, marginBottom: '0.5rem' }}>{s.title}</h2>
                <p style={{ fontSize: '0.95rem', fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.82 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', padding: '1.5rem', borderRadius: '10px', background: T.warm, border: `1px solid ${T.border}` }}>
            <p style={{ fontSize: '13.5px', fontFamily: 'DM Sans, sans-serif', color: T.sub, lineHeight: 1.72 }}>
              Questions about this policy? <Link href="/contact" style={{ color: T.gold, textDecoration: 'none', fontWeight: 600 }}>Contact us →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
