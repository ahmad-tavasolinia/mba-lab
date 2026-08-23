import Link from 'next/link';
import { phases, getPhaseStatus } from '@/lib/phases';

export default function JourneyPhases() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest text-gold">The journey</p>
      <div className="mt-4 flex items-start">
        {phases.map((phase, i) => {
          const status = getPhaseStatus(phase.slug);
          const isLast = i === phases.length - 1;
          return (
            <div key={phase.slug} className={`flex items-center ${isLast ? '' : 'flex-1'}`}>
              <Link href={`/mba-lab/phase/${phase.slug}`} className="group flex flex-col items-center">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition ${
                    status === 'complete' || status === 'active'
                      ? 'border-gold bg-gold/15 text-ink dark:text-dark-ink'
                      : 'border-rule text-ink/30 dark:border-dark-rule dark:text-dark-soft/40'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`mt-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-wide transition group-hover:text-gold ${
                    status === 'upcoming'
                      ? 'text-ink/30 dark:text-dark-soft/40'
                      : 'text-ink/70 dark:text-dark-soft'
                  }`}
                >
                  {phase.name}
                </span>
              </Link>
              {!isLast && (
                <span
                  className={`mx-2 mt-[-1.1rem] h-px flex-1 ${
                    status === 'complete' ? 'bg-gold' : 'bg-rule dark:bg-dark-rule'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
