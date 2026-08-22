'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/mba-lab', label: 'MBA Lab' },
  { href: '/topics', label: 'Topics' },
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur dark:border-dark-rule dark:bg-dark-bg/90">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-lg font-medium tracking-tight text-ink dark:text-dark-ink">
            Ahmad Tavasolinia
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-gold sm:inline">
            / MBA Lab
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-[12px] uppercase tracking-widest transition-colors ${
                isActive(item.href)
                  ? 'text-gold'
                  : 'text-ink/60 hover:text-ink dark:text-dark-soft dark:hover:text-dark-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-ink/20 px-4 py-1.5 font-mono text-[12px] uppercase tracking-widest text-ink transition hover:border-gold hover:text-gold dark:border-dark-ink/30 dark:text-dark-ink"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-rule dark:border-dark-rule"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-rule px-6 py-4 md:hidden dark:border-dark-rule">
          <ul className="flex flex-col gap-4">
            {[...navItems, { href: '/contact', label: 'Contact' }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm uppercase tracking-widest ${
                    isActive(item.href) ? 'text-gold' : 'text-ink/70 dark:text-dark-soft'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
