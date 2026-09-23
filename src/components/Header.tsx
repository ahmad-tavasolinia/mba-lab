'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/mba-lab', label: 'The Lab', icon: 'lab' },
  { href: '/topics', label: 'Topics', icon: 'pen' },
  { href: '/courses', label: 'Library', icon: 'book' },
  { href: '/about', label: 'About', icon: 'person' },
  { href: '/cv', label: 'CV', icon: 'file' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [readingTheme, setReadingTheme] = useState<'dark' | 'light'>('dark');

  const isHome = pathname === '/';

  const isReadingPage = Boolean(
    pathname && (
      (pathname.startsWith('/mba-lab/') && pathname !== '/mba-lab' &&
        !pathname.startsWith('/mba-lab/category/') &&
        !pathname.startsWith('/mba-lab/phase/')) ||
      pathname.startsWith('/essays/')
    )
  );

  useEffect(() => {
    if (!isReadingPage) {
      delete document.body.dataset.readingPage;
      return;
    }

    document.body.dataset.readingPage = 'true';
    const saved = window.localStorage.getItem('mba-lab-reading-theme');
    const next = saved === 'light' ? 'light' : 'dark';
    setReadingTheme(next);
    document.body.dataset.readingTheme = next;

    return () => {
      delete document.body.dataset.readingPage;
    };
  }, [isReadingPage]);

  function toggleReadingTheme() {
    const next = readingTheme === 'dark' ? 'light' : 'dark';
    setReadingTheme(next);
    document.body.dataset.readingTheme = next;
    window.localStorage.setItem('mba-lab-reading-theme', next);
  }

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  }

  if (isHome) return null;

  return (
    <>
      {isReadingPage && (
        <button
          type="button"
          className="reading-theme-toggle"
          onClick={toggleReadingTheme}
          aria-label={readingTheme === 'dark' ? 'Switch to light reading mode' : 'Switch to dark reading mode'}
          title={readingTheme === 'dark' ? 'Light reading mode' : 'Dark reading mode'}
        >
          {readingTheme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/></svg>
          )}
        </button>
      )}

      <header className="mobile-header md:hidden">
        <Link href="/" className="mobile-mark">MBA LAB</Link>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(v => !v)} className="mobile-menu">
          <span /><span />
        </button>
      </header>
      {open && (
        <nav className="mobile-nav md:hidden" aria-label="Mobile navigation">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={isActive(item.href) ? 'is-active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
