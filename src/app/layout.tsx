import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ShopifyQA - Shopify-Only QA Testing Service',
    template: '%s | ShopifyQA',
  },
  description:
    'Protect your Shopify store revenue with expert QA testing. We find checkout bugs, payment failures, and conversion killers that cost you sales.',
  keywords: [
    'Shopify QA',
    'Shopify testing',
    'ecommerce QA',
    'checkout testing',
    'conversion optimization',
    'Shopify bugs',
    'Shopify Plus QA',
  ],
  authors: [{ name: 'ShopifyQA' }],
  creator: 'ShopifyQA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shopifyqa.com',
    siteName: 'ShopifyQA',
    title: 'ShopifyQA - Shopify-Only QA Testing Service',
    description:
      'Protect your Shopify store revenue with expert QA testing. We find checkout bugs, payment failures, and conversion killers that cost you sales.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopifyQA - Shopify-Only QA Testing Service',
    description:
      'Protect your Shopify store revenue with expert QA testing. We find checkout bugs, payment failures, and conversion killers that cost you sales.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
