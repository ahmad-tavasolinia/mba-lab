import Link from 'next/link';
import { topics } from '@/lib/topics';
import { phases, activePhase } from '@/lib/phases';
import { Container, Eyebrow } from '@/components/ui';
import JourneyPhases from '@/components/JourneyPhases';

export default async function HomePage() {
  const currentTopics = topics;
  const currentPhaseLabel = phases.find((p) => p.slug === activePhase)?.fullLabel ?? '';

  return (
    <div className="flex flex-1 flex-col [zoom:1.25]">
      {/* Hero */}
      <section className="flex flex-1 flex-col justify-center border-b border-rule dark:border-dark-rule">
        <Container className="grid gap-8 py-12 md:grid-cols-[1.3fr,1fr]">
          <div className="animate-fadeUp">
            <Eyebrow>Independent study · Business, technology, ideas</Eyebrow>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-[1.08] tracking-tight text-ink dark:text-dark-ink md:text-6xl">
              Ahmad Tavasolinia
            </h1>
            <p className="mt-3 font-serif text-xl italic text-ink/70 dark:text-dark-soft md:text-2xl">
              Exploring the intersection of business, technology, ideas, and the future.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/60 dark:text-dark-soft">
              This site documents my intellectual work: independent research, essays, and a running
              laboratory notebook where I study, question, and synthesize ideas about how
              organizations actually work — before, during, and after an MBA.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/mba-lab"
                className="rounded-full bg-ink px-6 py-3 font-mono text-[12px] uppercase tracking-widest text-paper transition hover:bg-gold dark:bg-dark-ink dark:text-dark-bg"
              >
                Explore MBA Lab →
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-rule pt-6 font-mono text-xs text-ink/50 dark:border-dark-rule dark:text-dark-soft/70 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-gold">Currently exploring</p>
              <ul className="mt-3 space-y-2">
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

            <div className="mt-6 border-t border-rule pt-5 dark:border-dark-rule">
              <JourneyPhases />
              <p className="mt-4 text-[11px] leading-relaxed text-ink/40 dark:text-dark-soft/50">
                Log started 2026 · {currentPhaseLabel} in progress
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
