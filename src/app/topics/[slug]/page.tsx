import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { topics, getTopic } from '@/lib/topics';
import { getAllLabEntries, getAllEssays, getAllSources } from '@/lib/content';
import { getTopicColor } from '@/lib/keyColors';
import { Container, Eyebrow, formatDate } from '@/components/ui';

export async function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const topic = getTopic(params.slug);
  if (!topic) return { title: 'Topic not found' };
  return { title: topic.name, description: topic.description };
}

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopic(params.slug);
  if (!topic) notFound();
  const color = getTopicColor(topic.slug);

  const labEntries = (await getAllLabEntries()).filter((e) => e.topics.includes(topic.slug));
  const essays = (await getAllEssays()).filter((e) => e.topics.includes(topic.slug));
  const sources = getAllSources().filter((s) => s.subject === topic.slug);
  const related = topics.filter((t) => t.slug !== topic.slug).slice(0, 4);

  return (
    <div>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-20 md:py-24">
          <Link
            href="/topics"
            className="font-mono text-[11px] uppercase tracking-widest text-ink/40 hover:text-gold dark:text-dark-soft/60"
          >
            ← Topics
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${color.badge}`}>
              {topic.code}
            </span>
          </div>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-6xl">
            {topic.name}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70 dark:text-dark-soft">
            {topic.description}
          </p>
        </Container>
      </section>

      {labEntries.length > 0 && (
        <section className="border-b border-rule dark:border-dark-rule">
          <Container className="py-14">
            <Eyebrow>MBA Lab entries</Eyebrow>
            <div className="mt-6">
              {labEntries.map((e) => (
                <Link
                  key={e.slug}
                  href={`/mba-lab/${e.slug}`}
                  className="group block border-t border-rule py-6 first:border-t-0 dark:border-dark-rule"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                    {formatDate(e.date)}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-ink transition-colors group-hover:text-gold dark:text-dark-ink">
                    {e.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {essays.length > 0 && (
        <section className="border-b border-rule dark:border-dark-rule">
          <Container className="py-14">
            <Eyebrow>Essays</Eyebrow>
            <div className="mt-6">
              {essays.map((e) => (
                <Link
                  key={e.slug}
                  href={`/essays/${e.slug}`}
                  className="group block border-t border-rule py-6 first:border-t-0 dark:border-dark-rule"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                    {formatDate(e.date)}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-ink transition-colors group-hover:text-gold dark:text-dark-ink">
                    {e.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {sources.length > 0 && (
        <section className="border-b border-rule dark:border-dark-rule">
          <Container className="py-14">
            <Eyebrow>Related sources</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-3">
              {sources.map((s) => (
                <Link
                  key={s.slug}
                  href={`/courses/${s.slug}`}
                  className="rounded-full border border-rule px-4 py-2 text-sm hover:border-gold hover:text-gold dark:border-dark-rule"
                >
                  {s.course}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section>
        <Container className="py-14">
          <Eyebrow>Continue exploring</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((t) => (
              <Link
                key={t.slug}
                href={`/topics/${t.slug}`}
                className="rounded-full border border-forest/30 bg-forest/5 px-4 py-2 text-sm text-forest hover:border-forest dark:border-forest-bright/30 dark:bg-forest-bright/10 dark:text-forest-bright"
              >
                {topic.name} → {t.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
