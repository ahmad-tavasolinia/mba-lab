import Link from 'next/link';
import JourneyPhases from '@/components/JourneyPhases';

export default function HomePage() {
  return (
    <div className="home-hero">
      <div className="home-hero-background" aria-hidden="true" />

      <header className="home-topbar">
        <Link href="/" className="home-wordmark" aria-label="Tavasolinia MBA Lab">
          tavasolinia <span>/</span> mba lab
        </Link>

        <nav className="home-topnav" aria-label="Homepage navigation">
          <Link href="/" className="is-active">HOME</Link>
          <Link href="/topics">TOPICS</Link>
          <Link href="/about">ABOUT</Link>
          <button type="button" className="home-search" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5" />
            </svg>
          </button>
        </nav>
      </header>

      <section className="home-copy" aria-labelledby="home-title">
        <h1 id="home-title">
          Building the next
          <br />
          chapter, deliberately.
        </h1>

        <p className="home-description">
          Exploring ideas, skills and opportunities
          <br />
          for a meaningful MBA journey.
        </p>

        <Link href="/mba-lab" className="home-cta">
          <span>Explore the Lab</span>
          <span className="home-arrow" aria-hidden="true">→</span>
        </Link>
      </section>

      <div className="home-journey" aria-label="MBA journey phases">
        <JourneyPhases />
      </div>
    </div>
  );
}
