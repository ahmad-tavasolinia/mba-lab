'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/mba-lab', label: 'The Lab', icon: 'lab' },
  { href: '/topics', label: 'Topics', icon: 'pen' },
  { href: '/courses', label: 'Library', icon: 'book' },
  { href: '/about', label: 'About', icon: 'person' },
  { href: '/cv', label: 'CV', icon: 'file' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
];

function Icon({ type }: { type: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.35, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (type === 'home') return <svg {...common}><path d="M3.5 10.5 12 3.8l8.5 6.7"/><path d="M5.5 9.8V20h13V9.8"/><path d="M9.5 20v-6h5v6"/></svg>;
  if (type === 'lab') return <svg {...common}><circle cx="12" cy="12" r="8.5"/><path d="m8.3 15.7 7.4-7.4"/><circle cx="9" cy="9" r="1.3"/><circle cx="15" cy="15" r="1.3"/></svg>;
  if (type === 'pen') return <svg {...common}><path d="m4.5 19.5 2.1-5.4L16.8 3.9a1.9 1.9 0 0 1 2.7 2.7L9.3 16.8z"/><path d="m14.8 5.9 3.3 3.3"/><path d="M4.5 19.5 8 18"/></svg>;
  if (type === 'book') return <svg {...common}><path d="M5 4.5h5.2A2.8 2.8 0 0 1 13 7.3V20H7.2A2.2 2.2 0 0 0 5 22z"/><path d="M19 4.5h-5.2A2.8 2.8 0 0 0 11 7.3V20h5.8A2.2 2.2 0 0 1 19 22z"/></svg>;
  if (type === 'person') return <svg {...common}><circle cx="12" cy="7.3" r="3.2"/><path d="M5.2 20.2a6.8 6.8 0 0 1 13.6 0"/></svg>;
  if (type === 'file') return <svg {...common}><path d="M6 3.5h8l4 4V20.5H6z"/><path d="M14 3.5v4h4"/><path d="M9 12h6M9 15h6"/></svg>;
  return <svg {...common}><rect x="3.5" y="5" width="17" height="14" rx="1.5"/><path d="m4.5 6 7.5 6 7.5-6"/></svg>;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  }

  return (
    <>
      <aside className="site-rail hidden md:flex" aria-label="Primary navigation">
        <div className="rail-brand">
          <Link href="/" className="rail-title">MBA LAB</Link>
          <span className="rail-name">AHMAD TAVASOLINIA</span>
          <span className="rail-rule" />
        </div>

        <nav className="rail-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`rail-link ${isActive(item.href) ? 'is-active' : ''}`}>
              <span className="rail-icon"><Icon type={item.icon} /></span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

      </aside>

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
