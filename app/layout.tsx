import Navbar from '@/components/Navbar';
import SocialRail from '@/components/SocialRail';
import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/lib/portfolio';
import './globals.css';

const siteUrl = new URL(siteConfig.siteUrl);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    siteConfig.name,
    'Frontend Lead',
    'Full-Stack Engineer',
    'React Native',
    'Next.js',
    'TypeScript',
    'Frontend Engineer',
    'Node.js',
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: '/portfolio-hero.png',
        width: 1536,
        height: 1024,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: ['/portfolio-hero.png'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
   <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <SocialRail />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
