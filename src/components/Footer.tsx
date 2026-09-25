'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/mba-lab', label: 'MBA Lab' },
  { href: '/topics', label: 'Topics' },
  { href: '/essays', label: 'Essays' },
  { href: '/courses', label: 'Courses & Sources' },
  { href: '/about', label: 'About Ahmad' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
  { href: '/rss.xml', label: 'RSS' },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <p className="site-footer-brand">
            MBA Lab
            <span>is an independent record of study.</span>
          </p>
          <nav className="site-footer-links" aria-label="Footer navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer-meta">
          <p>© {new Date().getFullYear()} Ahmad Tavasolinia. MBA Lab is an independent personal project.</p>
          <p>Not affiliated with or endorsed by any university named within.</p>
        </div>
      </div>
    </footer>
  );
}
