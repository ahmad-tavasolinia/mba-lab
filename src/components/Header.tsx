'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/mba-lab', label: 'The Lab' },
  { href: '/topics', label: 'Topics' },
  { href: '/courses', label: 'Library' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === '/';
  const pathSegments = pathname?.split('/').filter(Boolean) ?? [];
  const routeParent = pathSegments[pathSegments.length - 2];
  const routeSlug = pathSegments[pathSegments.length - 1];
  const isReaderPage =
    routeParent === 'essays' ||
    (routeParent === 'mba-lab' && routeSlug !== 'mba-lab');

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname?.startsWith(href + '/');
  }

  return (
    <header className={isHome ? 'site-header site-header-home' : 'site-header'}>
      <Link href="/" className="site-brand" aria-label="MBA Lab by Ahmad Tavasolinia">
        <span className="site-brand-name">MBA Lab</span>
        <span className="site-brand-byline">Ahmad Tavasolinia</span>
      </Link>

      <div className="site-header-actions">
        <nav className="site-nav" aria-label="Site navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {isReaderPage && <ThemeToggle />}
      </div>

      <button
        type="button"
        className={open ? 'site-menu-button is-open' : 'site-menu-button'}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="site-mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      {open && (
        <nav id="site-mobile-nav" className="site-mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
