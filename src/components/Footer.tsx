import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-rule dark:border-dark-rule">
      <div className="mx-auto max-w-content px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-ink dark:text-dark-ink">MBA Lab</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/60 dark:text-dark-soft">
              An independent record of study — not a course-completion tracker. Source, study,
              synthesis, output.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-gold" href="/mba-lab">MBA Lab</Link></li>
              <li><Link className="hover:text-gold" href="/topics">Topics</Link></li>
              <li><Link className="hover:text-gold" href="/courses">Courses &amp; Sources</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
              About
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-gold" href="/about">About Ahmad</Link></li>
              <li><Link className="hover:text-gold" href="/cv">CV</Link></li>
              <li><Link className="hover:text-gold" href="/contact">Contact</Link></li>
              <li><Link className="hover:text-gold" href="/rss.xml">RSS</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-rule pt-6 text-xs text-ink/40 dark:border-dark-rule dark:text-dark-soft/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ahmad Tavasolinia. MBA Lab is an independent personal project.</p>
          <p>Not affiliated with or endorsed by any university named within.</p>
        </div>
      </div>
    </footer>
  );
}
