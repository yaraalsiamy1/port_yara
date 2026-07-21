import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yara-alsiamy.dev'),
  title: {
    default: 'Yara Ismail Alsiamy — Artificial Intelligence Graduate',
    template: '%s — Yara Ismail Alsiamy',
  },
  description:
    'Yara Ismail Alsiamy is an Artificial Intelligence graduate and Machine Learning engineer building intelligent systems that solve real-world problems across computer vision, NLP, and generative AI.',
  keywords: [
    'Yara Ismail Alsiamy',
    'Artificial Intelligence',
    'Machine Learning Engineer',
    'Computer Vision',
    'Natural Language Processing',
    'Generative AI',
    'Digital Twin',
    'Business Analyst',
    'Umm Al-Qura University',
  ],
  authors: [{ name: 'Yara Ismail Alsiamy' }],
  creator: 'Yara Ismail Alsiamy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yara-alsiamy.dev',
    siteName: 'Yara Ismail Alsiamy',
    title: 'Yara Ismail Alsiamy — Artificial Intelligence Graduate',
    description:
      'Building intelligent systems that solve real-world problems across machine learning, computer vision, and generative AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yara Ismail Alsiamy — Artificial Intelligence Graduate',
    description:
      'Building intelligent systems that solve real-world problems across machine learning, computer vision, and generative AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
