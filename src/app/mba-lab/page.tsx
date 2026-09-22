import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllLabEntries } from '@/lib/content';
import { categories } from '@/lib/categories';

export const metadata: Metadata = {
  title: 'MBA Lab',
  description: 'A personal laboratory for exploring the ideas behind business.',
};

const cardImages: Record<string, string> = {
  cases: '/mba-lab/lab-case.jpg',
  essays: '/mba-lab/lab-essay.jpg',
  projects: '/mba-lab/lab-project.jpg',
  interviews: '/mba-lab/lab-interview.jpg',
};

export default async function MbaLabPage() {
  const entries = await getAllLabEntries();

  return (
    <div className="page-mba-lab lab-page">
      <section className="lab-hero">
        <div className="lab-hero-image" aria-hidden="true" />
        <div className="lab-hero-vignette" aria-hidden="true" />
        <div className="lab-hero-copy">
          <span className="lab-eyebrow">The Lab Notebook</span>
          <h1>MBA Lab</h1>
          <p className="lab-tagline">Ideas. Research. Projects. A new chapter.</p>
          <span className="lab-gold-rule" />
          <p className="lab-intro">
            Not a collection of course notes — a public record of an ongoing intellectual journey through the core ideas of business and management, synthesized, connected, and questioned as I study them.
          </p>
        </div>
        <div className="lab-hero-side">
          <p>Better questions.<br />Bigger horizons.</p>
          <span className="lab-gold-rule" />
        </div>
      </section>

      <section className="lab-kinds" id="browse">
        <div className="lab-section-head">
          <div className="lab-section-title">
            <span>Browse by kind</span>
            <i />
          </div>
          <span className="lab-view-all">View all <span>→</span></span>
        </div>

        <div className="lab-card-grid">
          {categories.map((category) => {
            const count = entries.filter((entry) => entry.category === category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/mba-lab/category/${category.slug}`}
                className="lab-kind-card"
                style={{ backgroundImage: `url(${cardImages[category.slug]})` }}
              >
                <div className="lab-card-shade" />
                <div className="lab-card-content">
                  <div className="lab-card-top">
                    <span>{category.code === 'PROJ' ? 'PROJECT' : category.code === 'INTV' ? 'INTERVIEWS' : category.code}</span>
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

      <section className="lab-big-picture">
        <div className="lab-big-picture-image" aria-hidden="true" />
        <div className="lab-big-picture-shade" aria-hidden="true" />
        <div className="lab-big-picture-label">
          <span>The Big Picture</span>
          <i />
        </div>
        <div className="lab-big-picture-copy">
          <p>A straight line is boring.<br />I choose the roller coaster.</p>
          <span className="lab-gold-rule" />
        </div>
      </section>
    </div>
  );
}
