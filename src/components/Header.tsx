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
  const isPersian = pathname === '/fa' || pathname?.startsWith('/fa/');
  const routePath = isPersian ? pathname?.replace(/^\/fa(?=\/|$)/, '') || '/' : pathname;
  const isHome = routePath === '/';
  const pathSegments = routePath?.split('/').filter(Boolean) ?? [];
  const routeParent = pathSegments[pathSegments.length - 2];
  const routeSlug = pathSegments[pathSegments.length - 1];
  const isReaderPage = !isPersian && (
    routeParent === 'essays' ||
    (routeParent === 'mba-lab' && routeSlug !== 'mba-lab'));

  const localizedNavItems = navItems.map((item, index) => ({
    ...item,
    baseHref: item.href,
    href: isPersian ? `/fa${item.href === '/' ? '' : item.href}` : item.href,
    label: isPersian ? ['خانه', 'آزمایشگاه', 'موضوع‌ها', 'کتابخانه', 'درباره', 'تماس'][index] : item.label,
  }));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return routePath === '/';
    return routePath === href || routePath?.startsWith(href + '/');
  }

  return (
    <header lang={isPersian ? 'fa' : 'en'} dir={isPersian ? 'rtl' : 'ltr'} className={isHome ? 'site-header site-header-home' : 'site-header'}>
      <Link href={isPersian ? '/fa' : '/'} className="site-brand" aria-label={isPersian ? 'آزمایشگاه MBA، احمد توسلی‌نیا' : 'MBA Lab by Ahmad Tavasolinia'}>
        <span dir="ltr" className="site-brand-name">MBA Lab</span>
        <span dir="ltr" className="site-brand-byline">Ahmad Tavasolinia</span>
      </Link>

      <div className="site-header-actions">
        <nav className="site-nav" aria-label="Site navigation">
          {localizedNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.baseHref) ? 'page' : undefined}
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
        aria-label={isPersian ? (open ? 'بستن فهرست' : 'باز کردن فهرست') : (open ? 'Close navigation' : 'Open navigation')}
        aria-expanded={open}
        aria-controls="site-mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      {open && (
        <nav id="site-mobile-nav" className="site-mobile-nav" aria-label={isPersian ? 'پیمایش' : 'Mobile navigation'}>
          {localizedNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.baseHref) ? 'page' : undefined}
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
