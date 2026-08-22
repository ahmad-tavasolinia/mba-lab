import Link from 'next/link';
import { getAllLabEntries, getAllEssays } from '@/lib/content';
import { topics } from '@/lib/topics';
import { Container, Eyebrow, TopicChip, formatDate, CodeChip } from '@/components/ui';
import SourceFlow from '@/components/SourceFlow';

export default async function HomePage() {
  const labEntries = (await getAllLabEntries()).slice(0, 3);
  const essays = (await getAllEssays()).slice(0, 2);
  const currentTopics = topics.filter((t) =>
    ['strategy', 'finance', 'entrepreneurship', 'artificial-intelligence', 'organizational-behavior'].includes(
      t.slug
    )
  );

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="grid gap-10 py-20 md:grid-cols-[1.3fr,1fr] md:py-28">
          <div className="animate-fadeUp">
            <Eyebrow>Independent study · Business, technology, ideas</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.08] tracking-tight text-ink dark:text-dark-ink md:text-6xl">
              Ahmad Tavasolinia
            </h1>
            <p className="mt-4 font-serif text-xl italic text-ink/70 dark:text-dark-soft md:text-2xl">
              Exploring the intersection of business, technology, ideas, and the future.
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/60 dark:text-dark-soft">
              This site documents my intellectual work: independent research, essays, and a running
              laboratory notebook where I study, question, and synthesize ideas about how
              organizations actually work — before, during, and after an MBA.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/mba-lab"
                className="rounded-full bg-ink px-6 py-3 font-mono text-[12px] uppercase tracking-widest text-paper transition hover:bg-gold dark:bg-dark-ink dark:text-dark-bg"
              >
                Explore MBA Lab →
              </Link>
              <Link
                href="/essays"
                className="font-mono text-[12px] uppercase tracking-widest text-ink/60 underline decoration-rule underline-offset-4 hover:text-gold dark:text-dark-soft"
              >
                Read the essays
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-rule pt-8 font-mono text-xs text-ink/50 dark:border-dark-rule dark:text-dark-soft/70 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-gold">Currently exploring</p>
              <ul className="mt-4 space-y-2">
                {currentTopics.map((t) => (
                  <li key={t.slug} className="flex items-baseline justify-between gap-4">
                    <Link href={`/topics/${t.slug}`} className="hover:text-gold">
                      {t.name}
                    </Link>
                    <span className="text-ink/30 dark:text-dark-soft/40">{t.code}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-10 border-t border-rule pt-4 text-[11px] leading-relaxed text-ink/40 dark:border-dark-rule dark:text-dark-soft/50">
              Log started 2026 · Phase 03 in progress
            </p>
          </div>
        </Container>
      </section>

      {/* MBA Lab intro module */}
      <section className="border-b border-rule bg-paper-dim/60 dark:border-dark-rule dark:bg-dark-paper/40">
        <Container className="py-20">
          <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:gap-16">
            <div>
              <Eyebrow>The centerpiece of this site</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink dark:text-dark-ink">
                MBA Lab
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/70 dark:text-dark-soft">
                MBA Lab is an independent intellectual project exploring the ideas behind business,
                strategy, finance, technology, and leadership.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/70 dark:text-dark-soft">
                Drawing from leading academic sources, real-world cases, and independent analysis, I
                use this space to synthesize what I learn, connect ideas across disciplines, and
                develop my own perspective — not simply to record what I watched.
              </p>
              <div className="mt-8">
                <SourceFlow />
              </div>
              <Link
                href="/mba-lab"
                className="mt-8 inline-block font-mono text-[12px] uppercase tracking-widest text-gold hover:text-gold-bright"
              >
                Explore MBA Lab →
              </Link>
            </div>

            <div className="space-y-0">
              {labEntries.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/mba-lab/${entry.slug}`}
                  className="group block border-t border-rule py-6 first:border-t-0 dark:border-dark-rule"
                >
                  <div className="flex items-center gap-3">
                    <CodeChip>{entry.code}</CodeChip>
                    <span className="font-mono text-[11px] text-ink/40 dark:text-dark-soft/60">
                      {formatDate(entry.date)}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-medium text-ink transition-colors group-hover:text-gold dark:text-dark-ink">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60 dark:text-dark-soft">
                    {entry.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Latest essays */}
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Independent writing</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink dark:text-dark-ink">
                Latest essays
              </h2>
            </div>
            <Link
              href="/essays"
              className="hidden font-mono text-[12px] uppercase tracking-widest text-ink/50 hover:text-gold sm:block"
            >
              All essays →
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {essays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/essays/${essay.slug}`}
                className="group block rounded-lg border border-rule p-7 transition hover:border-gold dark:border-dark-rule"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                  {formatDate(essay.date)} · {essay.readingTime}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-ink transition-colors group-hover:text-gold dark:text-dark-ink">
                  {essay.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-dark-soft">
                  {essay.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Topics */}
      <section>
        <Container className="py-20">
          <Eyebrow>Browse by idea</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink dark:text-dark-ink">
            Topics currently in view
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {topics.map((t) => (
              <TopicChip key={t.slug} slug={t.slug} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
