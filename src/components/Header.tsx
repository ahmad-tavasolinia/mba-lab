'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/mba-lab', label: 'MBA Lab' },
  { href: '/topics', label: 'Topics' },
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === '/';

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  }

  return (
    <>
      <aside className="site-rail hidden md:flex" aria-label="Primary navigation">
        <nav className="rail-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`rail-link ${isActive(item.href) ? 'is-active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="rail-note" aria-label="Site owner">
          <span>Ahmad Tavasolinia</span>
        </div>
      </aside>

      <header className="mobile-header md:hidden">
        <Link href="/" className="mobile-mark" onClick={() => setOpen(false)}>AT</Link>
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
