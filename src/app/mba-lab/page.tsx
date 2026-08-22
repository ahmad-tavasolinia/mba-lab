import type { Metadata } from 'next';
import { getAllLabEntries } from '@/lib/content';
import { Container, Eyebrow } from '@/components/ui';
import LabLibrary from '@/components/LabLibrary';

export const metadata: Metadata = {
  title: 'MBA Lab',
  description: 'A personal laboratory for exploring the ideas behind business.',
};

export default async function MbaLabPage() {
  const entries = await getAllLabEntries();

  return (
    <div>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-20 md:py-24">
          <Eyebrow>The lab notebook</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-6xl">
            MBA Lab
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-xl italic text-ink/70 dark:text-dark-soft">
            A personal laboratory for exploring the ideas behind business.
          </p>
          <div className="mt-8 max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/70 dark:text-dark-soft">
            <p>MBA Lab is not a collection of course notes.</p>
            <p>
              It is a public record of an ongoing intellectual journey through the core ideas of
              business and management. I study concepts from academic courses, books, research, and
              real-world cases, then attempt to synthesize them, connect them, question them, and
              develop my own understanding.
            </p>
            <p className="font-medium text-ink dark:text-dark-ink">
              The goal is not simply to collect knowledge. The goal is to learn how to think about
              business.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <Eyebrow>Latest lab notes</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink dark:text-dark-ink">
            All entries
          </h2>
          <div className="mt-8">
            <LabLibrary entries={entries} />
          </div>
        </Container>
      </section>
    </div>
  );
}
