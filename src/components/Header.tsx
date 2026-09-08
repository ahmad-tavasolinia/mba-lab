'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/mba-lab', label: 'The Lab', icon: 'compass' },
  { href: '/essays', label: 'Field Notes', icon: 'pencil' },
  { href: '/topics', label: 'Library', icon: 'book' },
  { href: '/about', label: 'About', icon: 'person' },
  { href: '/cv', label: 'CV', icon: 'document' },
  { href: '/contact', label: 'Contact', icon: 'envelope' },
] as const;

type IconName = (typeof navItems)[number]['icon'];

function RailIcon({ name }: { name: IconName }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'home':
      return (
        <svg {...common}>
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10.2V19a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-8.8" />
        </svg>
      );
    case 'compass':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.3" />
          <path d="M14.6 9.4 13 13l-3.6 1.6L11 11z" />
        </svg>
      );
    case 'pencil':
      return (
        <svg {...common}>
          <path d="M15.7 4.3 19.7 8.3l-9.9 9.9-4.4 1 1-4.4z" />
          <path d="M14 6.5 17.5 10" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 5.3C4 4.6 4.6 4 5.3 4H11v16H5.3A1.3 1.3 0 0 1 4 18.7z" />
          <path d="M20 5.3C20 4.6 19.4 4 18.7 4H13v16h5.7a1.3 1.3 0 0 0 1.3-1.3z" />
        </svg>
      );
    case 'person':
      return (
        <svg {...common}>
          <circle cx="12" cy="8.2" r="3.2" />
          <path d="M5.3 20c0-3.7 3-6.7 6.7-6.7s6.7 3 6.7 6.7" />
        </svg>
      );
    case 'document':
      return (
        <svg {...common}>
          <path d="M7 3.5h6.8l3.7 3.7V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
          <path d="M13.6 3.5V7.6h4" />
          <path d="M9 13h6M9 16.4h6" />
        </svg>
      );
    case 'envelope':
      return (
        <svg {...common}>
          <rect x="3.3" y="5.5" width="17.4" height="13" rx="1.3" />
          <path d="M4 6.3 12 12.7l8-6.4" />
        </svg>
      );
  }
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
          <Link href="/" className="rail-logo">MBA LAB</Link>
          <p className="rail-sub">AHMAD TAVASOLINIA</p>
        </div>

        <nav className="rail-nav">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href} className={`rail-link ${active ? 'is-active' : ''}`}>
                <span className="rail-dot" aria-hidden="true" />
                <span className="rail-icon"><RailIcon name={item.icon} /></span>
                <span className="rail-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="rail-foot">
          <p className="rail-quote">
            Better<br />questions.<br />Deeper<br />thinking.
          </p>
        </div>
        <div className="rail-texture" aria-hidden="true" />
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
