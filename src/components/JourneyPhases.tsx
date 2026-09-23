import Link from "next/link";
import { phases, getPhaseStatus } from "@/lib/phases";

export default function JourneyPhases() {
  return (
    <div className="journey-wrapper">
      <div className="journey-track">
        {phases.map((phase, i) => {
          const status = getPhaseStatus(phase.slug);

          return (
            <div key={phase.slug} className="journey-step">
              <Link
                href={`/mba-lab/phase/${phase.slug}`}
                className={`journey-phase ${status}`}
              >
                <span className="journey-circle">{String(i + 1).padStart(2, "0")}</span>
                <span className="journey-name">{phase.name}</span>
              </Link>

              {i < phases.length - 1 && <div className="journey-line" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
