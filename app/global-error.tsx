'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', background: '#F4EDE0', color: '#19140D' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Something went wrong</h1>
            <p style={{ color: '#8A7A65', marginBottom: '1.5rem' }}>Please try again, or return to the homepage.</p>
            <button
              onClick={() => reset()}
              style={{ padding: '0.75rem 2rem', background: '#B8860B', color: '#19140D', fontWeight: 700, fontSize: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
