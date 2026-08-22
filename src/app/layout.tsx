import type { Metadata } from 'next';
import { Newsreader, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MBA Lab — Ahmad Tavasolinia',
    template: '%s — MBA Lab',
  },
  description:
    'An independent intellectual laboratory exploring business, strategy, finance, technology, and leadership — synthesized from academic sources, real-world cases, and original analysis.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'MBA Lab — Ahmad Tavasolinia',
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

// Inline script to set dark/light class before hydration to avoid a flash.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('mba-lab-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
