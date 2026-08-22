import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Ahmad Tavasolinia and the thinking behind MBA Lab.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-20 md:py-24">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-3 max-w-2xl font-serif text-5xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-6xl">
            Ahmad Tavasolinia
          </h1>
        </Container>
      </section>

      <section>
        <Container className="grid gap-14 py-16 md:grid-cols-[1fr,320px]">
          <div className="prose-lab max-w-prose text-ink dark:text-dark-ink">
            <p className="font-serif text-xl italic leading-relaxed text-ink/80 dark:text-dark-soft">
              I am interested in the questions that emerge between disciplines.
            </p>
            <p>How does technology change business? How does artificial intelligence change the nature of work and entrepreneurship? What can philosophy teach us about leadership, decision-making, and uncertainty?</p>
            <p>MBA Lab is one attempt to explore those questions publicly.</p>
            <h2>What I work on</h2>
            <p>
              I move between business, entrepreneurship, and technology, with a long-standing
              interest in artificial intelligence, architecture, and philosophy as lenses on the
              same underlying questions: how organizations make decisions, how value gets created,
              and how those two things are changing.
            </p>
            <p>
              I started MBA Lab as a way to hold myself accountable to a higher standard than
              passive learning — to study source material from leading academic courses and real
              cases, then do the harder work of forming and publishing my own synthesis, in public,
              including the parts I'm still uncertain about.
            </p>
            <h2>How I think about learning</h2>
            <p>
              I don't think consuming a lecture is the same as understanding an idea. Understanding
              shows up when an idea can be restated in different words, connected to something
              outside its original context, and stress-tested against a real case. That's the bar
              MBA Lab tries to hold itself to.
            </p>
          </div>

          <aside className="space-y-6 md:sticky md:top-24 md:self-start">
            <Image
              src="/me.png"
              alt="Ahmad Tavasolinia"
              width={200}
              height={200}
              className="mx-auto h-40 w-40 rounded-full object-cover md:mx-0"
              priority
            />
            <div className="rounded-lg border border-rule p-6 dark:border-dark-rule">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                Areas of interest
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/70 dark:text-dark-soft">
                <li>Business &amp; entrepreneurship</li>
                <li>Artificial intelligence</li>
                <li>Technology</li>
                <li>Architecture</li>
                <li>Philosophy</li>
                <li>Innovation &amp; learning</li>
              </ul>
            </div>
            <Link
              href="/cv"
              className="block rounded-full bg-ink px-6 py-3 text-center font-mono text-[12px] uppercase tracking-widest text-paper transition hover:bg-gold dark:bg-dark-ink dark:text-dark-bg"
            >
              View CV →
            </Link>
            <Link
              href="/mba-lab"
              className="block rounded-full border border-rule px-6 py-3 text-center font-mono text-[12px] uppercase tracking-widest text-ink transition hover:border-gold hover:text-gold dark:border-dark-rule dark:text-dark-ink"
            >
              Explore MBA Lab
            </Link>
          </aside>
        </Container>
      </section>
    </div>
  );
}
