import Link from 'next/link';
import JourneyPhases from '@/components/JourneyPhases';

export default function HomePage() {
  return (
    <div className="home-hero">
      <div className="home-hero-image" aria-hidden="true" />
      <div className="home-hero-shade" aria-hidden="true" />

      <section className="home-copy" aria-labelledby="home-title">
        <p className="home-eyebrow">MBA LAB</p>
        <h1 id="home-title">
          Ideas today.
          <br />
          Impact <em>tomorrow.</em>
        </h1>
        <p className="home-description">
          A personal intellectual workspace
          <br className="hidden sm:block" />
          to study ideas, build knowledge,
          <br className="hidden sm:block" />
          and prepare for what&apos;s next.
        </p>
        <Link href="/mba-lab" className="home-cta">
          <span>Explore MBA Lab</span>
          <span className="home-arrow" aria-hidden="true">→</span>
        </Link>
      </section>
      <div className="home-journey">
        <JourneyPhases />
      </div>
    </div>
  );
}
