import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF8F4',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.toocrudeoil.com'),
  title: {
    default: 'TOO Crude Oil — Global Crude Oil Supplier | Crude Oil LLP',
    template: '%s | TOO Crude Oil',
  },
  description:
    'Crude Oil LLP (TOO Crude Oil) — verified global crude oil supplier and petroleum exporter. CIF and FOB trading of REBCO, Diesel EN590, Jet Fuel A1, LNG from Rotterdam, Houston, Jurong and Fujairah. Direct refinery allocation. SGS inspected.',
  keywords: [
    'crude oil supplier', 'global crude oil supplier', 'crude oil exporter', 'petroleum products supplier',
    'oil and gas trading company', 'wholesale petroleum supplier', 'direct refinery supplier',
    'fuel supplier worldwide', 'energy commodity supplier', 'bulk fuel exporter', 'petroleum exporter',
    'verified oil supplier', 'international fuel supplier', 'global petroleum trading',
    'CIF crude oil supplier', 'EN590 supplier Rotterdam', 'Jet A1 CIF supplier',
    'refinery allocation supplier', 'fuel exporter worldwide', 'crude oil supplier Houston',
    'Fujairah fuel allocation', 'global petroleum supplier', 'wholesale diesel supplier',
    'TOO Crude Oil', 'Crude Oil LLP', 'REBCO crude oil', 'Kazakhstan oil company',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com' },
  openGraph: {
    type: 'website',
    siteName: 'TOO Crude Oil — Crude Oil LLP',
    title: 'TOO Crude Oil — Global Oil & Gas Supplier',
    description:
      'Kazakhstan-based international oil & gas supplier. FOB trading of REBCO, Diesel EN590, Jet Fuel A1 and LNG from four strategic global terminals.',
    images: [{ url: '/images/hero-image-tco.png', width: 1200, height: 630, alt: 'TOO Crude Oil — Global Energy Supplier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOO Crude Oil — Global Oil & Gas Supplier',
    description: 'FOB trading of crude oil and petroleum products from Rotterdam, Houston, Jurong and Fujairah.',
    images: ['/images/hero-image-tco.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/images/logo-tco.png',
    shortcut: '/images/logo-tco.png',
    apple: '/images/logo-tco.png',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://www.toocrudeoil.com/#organization',
    name: 'Crude Oil LLP',
    alternateName: ['TOO Crude Oil', 'TCO'],
    url: 'https://www.toocrudeoil.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.toocrudeoil.com/images/logo-tco.png',
      width: 1000,
      height: 623,
    },
    image: 'https://www.toocrudeoil.com/images/hero-image-tco.png',
    foundingDate: '2007-02-26',
    description:
      'Kazakhstan-based international oil and gas supplier specialising in FOB trading of crude oil and petroleum products from four strategic global terminals.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Khodzhanov St 28, Bostandyk audany',
      addressLocality: 'Almaty',
      addressRegion: 'Almaty',
      addressCountry: 'KZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.2220',
      longitude: '76.8512',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+7-747-063-90-67',
        contactType: 'sales',
        email: 'sales@toocrudeoil.com',
        availableLanguage: ['English', 'Russian'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+7-747-063-90-67',
        contactType: 'customer service',
        email: 'info@toocrudeoil.com',
      },
    ],
    sameAs: ['https://www.linkedin.com/company/crude-oil-llp'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.toocrudeoil.com/#website',
    url: 'https://www.toocrudeoil.com',
    name: 'TOO Crude Oil',
    description: 'Kazakhstan-based international oil & gas supplier — CIF and FOB trading from four global terminals.',
    publisher: { '@id': 'https://www.toocrudeoil.com/#organization' },
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What petroleum products does TOO Crude Oil supply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Crude Oil LLP (TOO Crude Oil) supplies REBCO crude oil, Diesel EN590 (ULSD 10 PPM), Jet Fuel A1 (ASTM D1655), LNG, Gasoline RON 92/95, and Bunker Fuel IFO 180/380 and VLSFO on FOB and CIF terms from Rotterdam, Houston, Jurong (Singapore), and Fujairah (UAE).',
        },
      },
      {
        '@type': 'Question',
        name: 'What delivery terms does TOO Crude Oil offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer FOB (Free On Board), CIF (Cost, Insurance & Freight), CFR (Cost & Freight), TTO (Tank-to-Tank Operations), and TTT (Tank-to-Tanker) delivery. CIF delivery is available from all four of our terminals to any major discharge port worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which ports does TOO Crude Oil operate from?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TOO Crude Oil has terminal positions at four strategic global ports: Port of Rotterdam (Netherlands) — 2.8M m³; Port of Houston (Texas, USA) — 1.6M m³; Jurong Island (Singapore) — 1.2M m³; Port of Fujairah (UAE) — 1.4M m³. Total storage: over 7 million m³.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is product quality verified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All cargoes are independently inspected by SGS, Intertek, or Bureau Veritas at the load port before shipment. We issue a Certificate of Quality (CoQ), Certificate of Quantity, and Certificate of Origin with every cargo. SGS certificates are accepted by all major trade finance banks for letter-of-credit processing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum order quantity for crude oil or petroleum products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Minimum cargo sizes: Crude oil — 80,000 MT (Aframax); EN590 diesel — 25,000 MT; Jet A1 — 5,000 MT (spot); Gasoline — 20,000 MT; Bunker fuel — 5,000 MT. Smaller parcels may be available via barge at Rotterdam ARA.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TOO Crude Oil provide CIF petroleum supply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. CIF (Cost, Insurance & Freight) delivery is available for all products from Rotterdam, Houston, Fujairah, and Jurong terminals. We arrange ocean freight with vetted tanker operators, provide marine cargo insurance, and handle all export documentation. CIF is the preferred option for buyers who want a door-to-port supply solution.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment terms are accepted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept confirmed, irrevocable Letters of Credit (LC at sight) from first-class international banks, Standby Letters of Credit (SBLC), and for established counterparties, MT103 wire transfers. All terms are set out in a formal Sales and Purchase Agreement (SPA).',
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
