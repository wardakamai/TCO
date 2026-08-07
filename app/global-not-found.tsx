import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { T } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Page Not Found | TOO Crude Oil',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', background: T.warm }}>
          <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '3rem', color: T.gold, marginBottom: '1rem' }}>404</div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.75rem', color: T.text, marginBottom: '1rem' }}>
              Page Not Found
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: T.muted, lineHeight: 1.8, marginBottom: '2rem' }}>
              The page you're looking for doesn't exist or may have moved.
            </p>
            <Link
              href="/"
              style={{ display: 'inline-block', padding: '0.75rem 2rem', background: T.gold, color: '#19140D', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', borderRadius: '8px', textDecoration: 'none' }}
            >
              Return Home →
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
