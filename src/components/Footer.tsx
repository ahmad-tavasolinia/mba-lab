import Link from 'next/link';

const links = [
  { href: '/mba-lab', label: 'MBA Lab' },
  { href: '/topics', label: 'Topics' },
  { href: '/courses', label: 'Courses & Sources' },
  { href: '/about', label: 'About Ahmad' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
  { href: '/rss.xml', label: 'RSS' },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule dark:border-dark-rule">
      <div className="mx-auto max-w-content px-6 py-5 md:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-base text-ink dark:text-dark-ink">
            MBA Lab
            <span className="ml-2 font-sans text-xs font-normal text-ink/50 dark:text-dark-soft">
              — an independent record of study, not a course-completion tracker.
            </span>
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60 dark:text-dark-soft">
            {links.map((l) => (
              <Link key={l.href} className="hover:text-gold" href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-3 flex flex-col gap-1 border-t border-rule pt-3 text-[11px] text-ink/40 dark:border-dark-rule dark:text-dark-soft/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ahmad Tavasolinia. MBA Lab is an independent personal project.</p>
          <p>Not affiliated with or endorsed by any university named within.</p>
        </div>
      </div>
    </footer>
  );
}
