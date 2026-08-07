import Link from 'next/link';
import { T } from '@/lib/theme';

interface RelatedLink {
  title: string;
  desc: string;
  href: string;
}

export default function RelatedLinks({ heading = 'Related Services', links }: { heading?: string; links: RelatedLink[] }) {
  return (
    <section style={{ background: T.warm, padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: T.text, marginBottom: '2.5rem' }}>
          {heading}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {links.map(({ title, desc, href }) => (
            <Link
              key={href}
              href={href}
              style={{ display: 'block', background: T.surface, borderRadius: '10px', padding: '1.5rem', border: `1px solid ${T.border}`, textDecoration: 'none' }}
            >
              <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, fontFamily: 'DM Sans, sans-serif', marginBottom: '0.5rem' }}>{title} →</div>
              <p style={{ fontSize: '14px', color: T.muted, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
