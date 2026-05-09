import Link from 'next/link';

interface Quote {
  price: number | null;
  change: number | null;
  changePct: number | null;
}

async function fetchQuote(symbol: string): Promise<Quote> {
  try {
    const encoded = encodeURIComponent(symbol);
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encoded}?interval=1d&range=5d`,
      {
        next: { revalidate: 3600 },
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Accept': 'application/json',
        },
        cache: 'no-store',
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const meta = json?.chart?.result?.[0]?.meta;
    if (!meta) throw new Error('no meta');
    const price: number = meta.regularMarketPrice ?? meta.previousClose;
    const prev: number = meta.chartPreviousClose ?? meta.previousClose;
    const change = price - prev;
    const changePct = prev ? (change / prev) * 100 : 0;
    return { price, change, changePct };
  } catch {
    return { price: null, change: null, changePct: null };
  }
}

function PriceCard({
  label, sub, unit, quote, highlight,
}: {
  label: string;
  sub: string;
  unit: string;
  quote: Quote;
  highlight?: boolean;
}) {
  const isUp = quote.change !== null && quote.change >= 0;
  const arrowColor = isUp ? '#4caf82' : '#e05c5c';
  const hasData = quote.price !== null;

  return (
    <div style={{
      background: highlight
        ? 'rgba(184,134,11,0.09)'
        : 'rgba(250,248,244,0.04)',
      border: highlight
        ? '1px solid rgba(184,134,11,0.28)'
        : '1px solid rgba(250,248,244,0.08)',
      borderRadius: '12px',
      padding: '1.5rem',
    }}>
      {/* Label row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '11px',
            color: highlight ? '#B8860B' : 'rgba(250,248,244,0.55)',
            fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem',
          }}>
            {label}
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(250,248,244,0.35)' }}>{sub}</div>
        </div>

        {hasData && (
          <div style={{
            background: isUp ? 'rgba(76,175,130,0.12)' : 'rgba(224,92,92,0.12)',
            borderRadius: '6px', padding: '0.25rem 0.5rem',
            display: 'flex', alignItems: 'center', gap: '0.25rem',
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={arrowColor} strokeWidth="3">
              {isUp
                ? <polyline points="18 15 12 9 6 15" />
                : <polyline points="6 9 12 15 18 9" />}
            </svg>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: arrowColor }}>
              {quote.changePct !== null
                ? `${quote.changePct > 0 ? '+' : ''}${quote.changePct.toFixed(2)}%`
                : '—'}
            </span>
          </div>
        )}
      </div>

      {/* Price */}
      <div style={{
        fontFamily: 'Playfair Display, serif', fontWeight: 800,
        fontSize: hasData ? '2rem' : '1.1rem',
        color: hasData ? '#FAF8F4' : 'rgba(250,248,244,0.25)',
        letterSpacing: '-0.01em', marginBottom: '0.3rem',
      }}>
        {hasData
          ? `$${quote.price!.toFixed(2)}`
          : 'Unavailable'}
      </div>

      {/* Change */}
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(250,248,244,0.4)' }}>
        {hasData && quote.change !== null
          ? `${quote.change >= 0 ? '+' : ''}$${quote.change.toFixed(2)} ${unit}`
          : unit}
      </div>
    </div>
  );
}

export default async function BrentPriceTicker() {
  const [brent, wti, heatingOil, natGas] = await Promise.all([
    fetchQuote('BZ=F'),
    fetchQuote('CL=F'),
    fetchQuote('HO=F'),
    fetchQuote('NG=F'),
  ]);

  /* Brent-WTI spread */
  const spread: Quote = {
    price: brent.price !== null && wti.price !== null ? brent.price - wti.price : null,
    change: brent.change !== null && wti.change !== null ? brent.change - wti.change : null,
    changePct: null,
  };
  if (spread.price !== null && wti.price !== null && spread.change !== null) {
    const prevSpread = spread.price - spread.change;
    spread.changePct = prevSpread ? (spread.change / Math.abs(prevSpread)) * 100 : 0;
  }

  const now = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <section style={{
      background: '#19140D',
      padding: '3.5rem 2rem',
      borderTop: '1px solid rgba(184,134,11,0.15)',
      borderBottom: '1px solid rgba(184,134,11,0.15)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ width: '28px', height: '2px', background: '#B8860B', display: 'inline-block', borderRadius: '1px' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
              Market Prices
            </span>
          </div>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(250,248,244,0.35)', letterSpacing: '0.03em' }}>
            {`Updated ${now} · Indicative only · Source: Yahoo Finance`}
          </span>
        </div>

        {/* 4 price cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <PriceCard label="Brent Crude" sub="ICE Brent Futures (BZ=F)" unit="per barrel" quote={brent} highlight />
          <PriceCard label="WTI Crude" sub="NYMEX WTI Futures (CL=F)" unit="per barrel" quote={wti} />
          <PriceCard label="Gasoil / Heating Oil" sub="NYMEX Heating Oil (HO=F)" unit="per gallon" quote={heatingOil} />
          <PriceCard label="Natural Gas" sub="NYMEX Henry Hub (NG=F)" unit="per MMBtu" quote={natGas} />
        </div>

        {/* Brent–WTI spread banner */}
        {spread.price !== null && (
          <div style={{
            marginTop: '1rem',
            background: 'rgba(250,248,244,0.03)',
            border: '1px solid rgba(250,248,244,0.07)',
            borderRadius: '10px',
            padding: '0.85rem 1.25rem',
            display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
          }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#B8860B', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Brent–WTI Spread
            </span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '1.25rem', color: '#FAF8F4' }}>
              ${spread.price.toFixed(2)}
            </span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(250,248,244,0.4)' }}>
              Brent premium over WTI crude per barrel
            </span>
          </div>
        )}

        {/* Footer row */}
        <div style={{
          marginTop: '2rem', paddingTop: '1.5rem',
          borderTop: '1px solid rgba(250,248,244,0.07)',
          display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(250,248,244,0.5)', margin: 0, lineHeight: 1.6, maxWidth: '600px' }}>
            Our petroleum product pricing is transparently linked to published benchmarks — Platts Urals, Dated Brent, MOPS, or Argus assessments — plus an agreed differential.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.6rem 1.4rem',
              background: '#B8860B', color: '#19140D',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '13px',
              borderRadius: '7px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            Get a Price Offer →
          </Link>
        </div>
      </div>
    </section>
  );
}
