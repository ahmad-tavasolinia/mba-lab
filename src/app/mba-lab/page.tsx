import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllLabEntries } from '@/lib/content';
import { categories } from '@/lib/categories';

export const metadata: Metadata = {
  title: 'MBA Lab',
  description: 'A personal laboratory for exploring the ideas behind business.',
};

export default async function MbaLabPage() {
  const entries = await getAllLabEntries();

  return (
    <div className="page-mba-lab lab-page lab-reference-page">
      <section className="lab-hero lab-room-hero">
        <div className="lab-room-image" aria-hidden="true" />
        <div className="lab-room-shade" aria-hidden="true" />
        <div className="lab-hero-copy">
          <span className="lab-eyebrow">The Lab Notebook</span>
          <h1>MBA Lab</h1>
          <p className="lab-tagline">Ideas. Research. Projects. A new chapter.</p>
          <span className="lab-gold-rule" />
          <p className="lab-intro">
            A public record of an ongoing intellectual journey through the core ideas of business and management, synthesized, connected, and questioned as I study them.
          </p>
        </div>
        <div className="lab-hero-side">
          <p>Better questions.<br />Bigger horizons.</p>
          <span className="lab-gold-rule" />
        </div>
      </section>

      <section className="lab-kinds lab-reference-kinds" id="browse">
        <div className="lab-section-head">
          <div className="lab-section-title">
            <span>Browse by kind</span>
            <i />
          </div>
        </div>

        <div className="lab-card-grid">
          {categories.map((category) => {
            const count = entries.filter((entry) => entry.category === category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/mba-lab/category/${category.slug}`}
                className="lab-kind-card lab-reference-card"
              >
                <div className="lab-card-content">
                  <div className="lab-card-top">
                    <span>{category.code === 'PROJ' ? 'PROJ' : category.code === 'INTV' ? 'INTV' : category.code}</span>
                    <small>{count} {count === 1 ? 'piece' : 'pieces'}</small>
                  </div>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <span className="lab-card-arrow">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="lab-featured">
        <div className="lab-featured-copy">
          <span className="lab-featured-eyebrow">Featured</span>
          <h2>The Fundamentals<br />of Business Strategy</h2>
          <p>A structured look at how strategy is built, tested, and adapted in the real world.</p>
          <Link href="/mba-lab/category/essays" className="lab-featured-link">Read essay <span>→</span></Link>
        </div>
        <div className="lab-featured-divider" />
        <div className="lab-featured-quote">
          <span className="lab-gold-rule" />
          <p>A straight line is boring.<br />I choose the roller coaster.</p>
          <svg viewBox="0 0 520 180" aria-hidden="true" className="lab-trajectory">
            <path d="M8 164 C118 112 170 112 246 135 C330 160 383 65 510 31" />
            <path d="M8 177 C118 125 171 125 250 148 C334 173 387 78 510 44" />
            <circle cx="510" cy="31" r="5" />
          </svg>
        </div>
      </section>
    </div>
  );
}
