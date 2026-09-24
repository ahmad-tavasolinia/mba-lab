'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/topics', label: 'Topics' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === '/') return null;

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname?.startsWith(`${href}/`));

  return (
    <>
      <header className="internal-topbar">
        <Link href="/mba-lab" className="internal-wordmark">The Lab Notebook</Link>
        <nav className="internal-topnav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? 'is-active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="internal-menu-button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </header>

      {open && (
        <nav className="internal-mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={isActive(item.href) ? 'is-active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
