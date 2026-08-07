import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { T } from '@/lib/theme';

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(1.35rem, 2.6vw, 1.85rem)', color: T.text, lineHeight: 1.25, margin: '2.5rem 0 1.1rem' }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.15rem', color: T.text, lineHeight: 1.3, margin: '2rem 0 0.85rem' }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: T.muted, lineHeight: 1.85, margin: '0 0 1.25rem' }}>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: T.muted, lineHeight: 1.85, margin: '0 0 1.25rem', paddingLeft: '1.4rem' }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: T.muted, lineHeight: 1.85, margin: '0 0 1.25rem', paddingLeft: '1.4rem' }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ marginBottom: '0.5rem' }}>{children}</li>
  ),
  a: ({ href, children }) => (
    <Link href={href ?? '#'} style={{ color: T.gold, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong style={{ color: T.text, fontWeight: 700 }}>{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{ borderLeft: `3px solid ${T.gold}`, background: T.warm, padding: '1rem 1.5rem', margin: '0 0 1.25rem', borderRadius: '0 8px 8px 0', fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', color: T.sub, fontStyle: 'italic' }}>
      {children}
    </blockquote>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
