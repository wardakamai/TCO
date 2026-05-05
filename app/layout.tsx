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
    default: 'TOO Crude Oil — Global Oil & Gas Supplier | Crude Oil LLP',
    template: '%s | TOO Crude Oil',
  },
  description:
    'Crude Oil LLP (TOO Crude Oil) — Kazakhstan-based international oil & gas supplier. FOB trading of REBCO, Diesel EN590, Jet Fuel A1, LNG and Gasoline from terminals in Rotterdam, Houston, Jurong and Fujairah.',
  keywords: [
    'crude oil supplier', 'Kazakhstan oil company', 'REBCO crude oil', 'Diesel EN590',
    'Jet Fuel A1', 'LNG supplier', 'FOB oil trading', 'Rotterdam oil terminal',
    'Houston energy terminal', 'Jurong fuel storage', 'Fujairah bunker fuel',
    'TOO Crude Oil', 'Crude Oil LLP', 'oil and gas Kazakhstan', 'petroleum trading',
    'oil FOB trading', 'energy supplier Central Asia', 'crude oil Almaty',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Petroleum Products',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'REBCO Crude Oil', description: 'Russian Export Blend Crude Oil, medium gravity' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Diesel Fuel EN590', description: 'Ultra-Low Sulphur Diesel, 10 PPM' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Aviation Jet Fuel A1', description: 'ASTM D1655 kerosene-type turbine fuel' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Liquefied Natural Gas', description: 'LNG from Kazakhstan gas fields' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gasoline RON 92/95', description: 'Unleaded motor gasoline EN228' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Bunker Fuel IFO 180/380', description: 'Marine fuel oil, IMO 2020 compliant' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.toocrudeoil.com/#website',
    url: 'https://www.toocrudeoil.com',
    name: 'TOO Crude Oil',
    description: 'Kazakhstan-based international oil & gas supplier — FOB trading from four global terminals.',
    publisher: { '@id': 'https://www.toocrudeoil.com/#organization' },
    inLanguage: 'en',
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
