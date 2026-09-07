'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { phases, activePhase } from '@/lib/phases';

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
        <Link href="/" className="rail-mark" aria-label="Ahmad Tavasolinia — Home">AT</Link>
        <nav className="rail-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`rail-link ${isActive(item.href) ? 'is-active' : ''}`}>
              <span className="rail-dot" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {isHome && (
          <div className="rail-journey" aria-label="MBA journey">
            <p className="rail-journey-title">The journey</p>
            <div className="rail-journey-list">
              {phases.map((phase, index) => {
                const active = phase.slug === activePhase;
                return (
                  <Link
                    key={phase.slug}
                    href={`/mba-lab/phase/${phase.slug}`}
                    className={`rail-phase ${active ? 'is-active' : ''}`}
                    aria-current={active ? 'step' : undefined}
                  >
                    <span className="rail-phase-dot" aria-hidden="true" />
                    <span className="rail-phase-copy">
                      <span className="rail-phase-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="rail-phase-name">{phase.name}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
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
