import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fontVariables = {
  display: 'Georgia, \"Times New Roman\", serif',
  body: 'Arial, Helvetica, sans-serif',
  mono: '\"IBM Plex Mono\", \"Courier New\", monospace',
};

export const metadata: Metadata = {
  title: {
    default: 'MBA Lab, Ahmad Tavasolinia',
    template: '%s, MBA Lab',
  },
  description:
    'An independent intellectual laboratory exploring business, strategy, finance, technology, and leadership, synthesized from academic sources, real-world cases, and original analysis.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'MBA Lab, Ahmad Tavasolinia',
    description:
      'An independent intellectual laboratory exploring business, strategy, finance, technology, and leadership.',
    type: 'website',
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark"
      style={{
        '--font-display': fontVariables.display,
        '--font-body': fontVariables.body,
        '--font-mono': fontVariables.mono,
      } as CSSProperties}
    >
      <head>
      </head>
      <body className="font-sans antialiased">
        <div className="site-bg" aria-hidden="true" />
        <div className="relative z-[1] flex min-h-screen flex-col">
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
