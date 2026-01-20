import './globals.css';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theactsfoundation.org'),
  title: 'The Acts Foundation | Fighting Food Insecurity in Philadelphia',
  description: 'The Acts Foundation serves 1,000+ families monthly through food support, outreach, and faith in action. Join us in fighting food insecurity in Philadelphia.',
  keywords: ['Philadelphia', 'food insecurity', 'nonprofit', 'charity', 'Acts 20:35', 'donation', 'volunteer', 'community'],
  authors: [{ name: 'The Acts Foundation' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theactsfoundation.org',
    siteName: 'The Acts Foundation',
    title: 'The Acts Foundation | Fighting Food Insecurity in Philadelphia',
    description: 'The Acts Foundation serves 1,000+ families monthly through food support, outreach, and faith in action.',
    images: [
      {
        url: '/taf_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'The Acts Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Acts Foundation | Fighting Food Insecurity in Philadelphia',
    description: 'The Acts Foundation serves 1,000+ families monthly through food support, outreach, and faith in action.',
    images: ['/taf_logo_transparent.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans`}>
        {children}
        <WhatsAppWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonprofitOrganization",
              "name": "The Acts Foundation",
              "url": "https://theactsfoundation.org",
              "logo": "https://theactsfoundation.org/taf_logo_transparent.png",
              "description": "Fighting food insecurity in Philadelphia through faith, action, and community support.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3599 Nottingham Lane Unit K",
                "addressLocality": "Philadelphia",
                "addressRegion": "PA",
                "postalCode": "19114",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-609-309-4280",
                "contactType": "customer service"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
