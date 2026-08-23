import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllLabEntries } from '@/lib/content';
import { categories } from '@/lib/categories';
import { getCategoryColor } from '@/lib/keyColors';
import { Container, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'MBA Lab',
  description: 'A personal laboratory for exploring the ideas behind business.',
};

export default async function MbaLabPage() {
  const entries = await getAllLabEntries();

  return (
    <div>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-14 md:py-16">
          <Eyebrow>The lab notebook</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-6xl">
            MBA Lab
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-xl italic text-ink/70 dark:text-dark-soft">
            A personal laboratory for exploring the ideas behind business.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/70 dark:text-dark-soft">
            Not a collection of course notes — a public record of an ongoing intellectual journey
            through the core ideas of business and management, synthesized, connected, and
            questioned as I study them.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-6 md:py-8">
          <Eyebrow>Browse by kind</Eyebrow>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60 dark:text-dark-soft">
            Every entry lives under one of three keys, depending on what kind of work it is.
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const count = entries.filter((e) => e.category === c.slug).length;
              const col = getCategoryColor(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={`/mba-lab/category/${c.slug}`}
                  className={`group flex flex-col justify-between rounded-lg border p-6 transition ${col.border} ${col.bg} ${col.hoverBorder}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[11px] uppercase tracking-widest ${col.code}`}>
                        {c.code}
                      </span>
                      <span className="font-mono text-[11px] text-ink/30 dark:text-dark-soft/50">
                        {count} {count === 1 ? 'piece' : 'pieces'}
                      </span>
                    </div>
                    <h3 className={`mt-3 font-serif text-2xl font-medium text-ink transition-colors dark:text-dark-ink ${col.hoverTitle}`}>
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-dark-soft">
                      {c.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
