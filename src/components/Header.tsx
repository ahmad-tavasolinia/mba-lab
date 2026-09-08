'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/mba-lab', label: 'The Lab', icon: 'lab' },
  { href: '/topics', label: 'Field Notes', icon: 'note' },
  { href: '/essays', label: 'Library', icon: 'book' },
  { href: '/about', label: 'About', icon: 'person' },
  { href: '/cv', label: 'CV', icon: 'file' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
];

function Icon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.35, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'home') return <svg {...common}><path d="M3.5 10.8 12 3.8l8.5 7v8.7a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5z"/><path d="M9.2 21v-6.1h5.6V21"/></svg>;
  if (name === 'lab') return <svg {...common}><circle cx="12" cy="12" r="8.6"/><path d="m7.8 16.2 3-3 1.6 1.6 4-4"/><circle cx="8.2" cy="8" r="1.2"/><path d="m15.9 5.8 1.3 1.3"/></svg>;
  if (name === 'note') return <svg {...common}><path d="m5.2 18.8 1.1-4.4L15.9 4.8a1.8 1.8 0 0 1 2.5 2.5L8.8 16.9z"/><path d="m14.8 5.9 3.3 3.3M5.2 18.8l4.4-1.1"/></svg>;
  if (name === 'book') return <svg {...common}><path d="M4.5 4.5A2.5 2.5 0 0 1 7 2h4.7v18H7a2.5 2.5 0 0 0-2.5 2z"/><path d="M19.5 4.5A2.5 2.5 0 0 0 17 2h-5.3v18H17a2.5 2.5 0 0 1 2.5 2z"/></svg>;
  if (name === 'person') return <svg {...common}><circle cx="12" cy="7.5" r="3.2"/><path d="M5 21c.6-4.1 3-6.2 7-6.2s6.4 2.1 7 6.2"/></svg>;
  if (name === 'file') return <svg {...common}><path d="M6 2.8h8l4 4V21H6z"/><path d="M14 2.8v4h4M8.5 11h7M8.5 14.5h7M8.5 18h4.5"/></svg>;
  return <svg {...common}><rect x="3.2" y="5" width="17.6" height="14" rx="1.4"/><path d="m4.2 6.2 7.8 6.1 7.8-6.1"/></svg>;
}

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
      <aside className={`site-rail hidden md:flex ${isHome ? 'site-rail-home' : ''}`} aria-label="Primary navigation">
        {isHome && (
          <div className="home-rail-brand">
            <div>MBA LAB</div>
            <span>AHMAD TAVASOLINIA</span>
            <i />
          </div>
        )}
        <nav className="rail-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`rail-link ${isActive(item.href) ? 'is-active' : ''}`}>
              {isHome && <span className="rail-icon"><Icon name={item.icon} /></span>}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        {isHome ? (
          <div className="rail-note-home">
            <span>Better</span>
            <span>questions.</span>
            <span>Deeper</span>
            <span>thinking.</span>
          </div>
        ) : (
          <div className="rail-note" aria-label="Site owner"><span>Ahmad Tavasolinia</span></div>
        )}
      </aside>

      {isHome && <button className="home-menu" aria-label="Open menu" onClick={() => setOpen(v => !v)}><span /><span /></button>}

      <header className="mobile-header md:hidden">
        <Link href="/" className="mobile-mark" onClick={() => setOpen(false)}>MBA LAB</Link>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(v => !v)} className="mobile-menu"><span /><span /></button>
      </header>
      {open && (
        <nav className={`mobile-nav md:hidden ${isHome ? 'mobile-nav-home' : ''}`} aria-label="Mobile navigation">
          {navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={isActive(item.href) ? 'is-active' : ''}>{item.label}</Link>)}
        </nav>
      )}
    </>
  );
}
