import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllLabEntries, getLabEntry, getLabSlugs, getAllSources } from '@/lib/content';
import { Container, Eyebrow, TopicChip, CodeChip, formatDate } from '@/components/ui';

export async function generateStaticParams() {
  return getLabSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const entry = await getLabEntry(params.slug);
    return { title: entry.title, description: entry.summary };
  } catch {
    return { title: 'Entry not found' };
  }
}

export default async function LabEntryPage({ params }: { params: { slug: string } }) {
  const slugs = getLabSlugs();
  if (!slugs.includes(params.slug)) notFound();

  const entry = await getLabEntry(params.slug);
  const allEntries = await getAllLabEntries();
  const sources = getAllSources().filter((s) => entry.sources.includes(s.slug));
  const connectedEntries = allEntries.filter((e) => entry.connections.includes(e.slug));

  return (
    <article>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-16 md:py-20">
          <Link
            href="/mba-lab"
            className="font-mono text-[11px] uppercase tracking-widest text-ink/40 hover:text-gold dark:text-dark-soft/60"
          >
            ← MBA Lab
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CodeChip>{entry.code}</CodeChip>
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
              {entry.phase}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-ink dark:text-dark-ink md:text-5xl">
            {entry.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink/50 dark:text-dark-soft">
            <span>{formatDate(entry.date)}</span>
            <span>·</span>
            <span>{entry.readingTime}</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.topics.map((t) => (
              <TopicChip key={t} slug={t} />
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14 md:py-20">
        <div className="grid gap-14 md:grid-cols-[1fr,300px] md:gap-16">
          <div className="prose-lab max-w-prose text-ink dark:text-dark-ink" dangerouslySetInnerHTML={{ __html: entry.contentHtml }} />

          <aside className="space-y-10 md:sticky md:top-24 md:self-start">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-gold">
                The central question
              </p>
              <p className="mt-2 font-serif text-lg italic leading-snug text-ink dark:text-dark-ink">
                “{entry.centralQuestion}”
              </p>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                Key ideas
              </p>
              <ul className="mt-3 space-y-3">
                {entry.keyIdeas.map((idea, i) => (
                  <li key={i} className="border-l-2 border-rule pl-3 text-sm leading-relaxed text-ink/70 dark:border-dark-rule dark:text-dark-soft">
                    {idea}
                  </li>
                ))}
              </ul>
            </div>

            {connectedEntries.length > 0 && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                  Connections
                </p>
                <ul className="mt-3 space-y-2">
                  {connectedEntries.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/mba-lab/${c.slug}`}
                        className="text-sm leading-snug text-ink/70 underline decoration-rule underline-offset-4 hover:text-gold dark:text-dark-soft"
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                Final perspective
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-dark-soft">
                {entry.finalPerspective}
              </p>
            </div>

            {sources.length > 0 && (
              <div className="border-t border-rule pt-6 dark:border-dark-rule">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                  Sources &amp; influences
                </p>
                <ul className="mt-3 space-y-3">
                  {sources.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/courses/${s.slug}`}
                        className="block text-sm font-medium text-ink hover:text-gold dark:text-dark-ink"
                      >
                        {s.course}
                      </Link>
                      <span className="text-xs text-ink/50 dark:text-dark-soft/70">
                        {s.institution}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] leading-relaxed text-ink/40 dark:text-dark-soft/50">
                  Academic source above; analysis and interpretation are my own. No official
                  affiliation or endorsement is implied.
                </p>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}
