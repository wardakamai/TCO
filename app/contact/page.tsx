import type { Metadata } from 'next';
import ContactPageContent from '@/components/contact/ContactPageContent';
import { breadcrumbList } from '@/lib/schema';

const jsonLd = [
  breadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]),
];

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Crude Oil LLP trading desk in Almaty — request FOB pricing, product availability, and delivery schedules. Reply within 24 hours. Call +7 (747) 063-90-67.',
  keywords: [
    'contact crude oil supplier', 'request FOB price', 'oil trading enquiry', 'petroleum quote request',
    'crude oil LLP contact', 'Almaty trading desk', 'sales@toocrudeoil.com', 'oil gas supplier contact',
  ],
  alternates: { canonical: 'https://www.toocrudeoil.com/contact' },
  openGraph: {
    url: 'https://www.toocrudeoil.com/contact',
    title: 'Contact Our Trading Desk | TOO Crude Oil',
    description: 'Request FOB pricing and product availability. Our Almaty trading desk responds within 24 hours.',
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactPageContent />
    </>
  );
}
