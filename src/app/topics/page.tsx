import type { Metadata } from 'next';
import Link from 'next/link';
import { topics } from '@/lib/topics';
import { getAllLabEntries, getAllEssays } from '@/lib/content';
import { Container, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Topics',
  description: 'Explore MBA Lab by the ideas that connect it.',
};

export default async function TopicsPage() {
  const labEntries = await getAllLabEntries();
  const essays = await getAllEssays();

  return (
    <div>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-20 md:py-24">
          <Eyebrow>Browse by idea</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-6xl">
            Topics
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70 dark:text-dark-soft">
            Ideas in MBA Lab rarely stay inside one discipline. Use topics to follow a thread —
            strategy into AI, finance into psychology — across entries, essays, and sources.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => {
              const count =
                labEntries.filter((e) => e.topics.includes(t.slug)).length +
                essays.filter((e) => e.topics.includes(t.slug)).length;
              return (
                <Link
                  key={t.slug}
                  href={`/topics/${t.slug}`}
                  className="group flex flex-col justify-between rounded-lg border border-rule p-6 transition hover:border-gold dark:border-dark-rule"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-gold">
                        {t.code}
                      </span>
                      <span className="font-mono text-[11px] text-ink/30 dark:text-dark-soft/50">
                        {count} {count === 1 ? 'piece' : 'pieces'}
                      </span>
                    </div>
                    <h2 className="mt-3 font-serif text-2xl font-medium text-ink transition-colors group-hover:text-gold dark:text-dark-ink">
                      {t.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-dark-soft">
                      {t.description}
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
