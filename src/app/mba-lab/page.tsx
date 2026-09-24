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
    <div className="page-mba-lab lab-reference-page">
      <section className="lab-notebook-hero">
        <div className="lab-notebook-background" aria-hidden="true" />
        <div className="lab-notebook-overlay" aria-hidden="true" />

        <div className="lab-notebook-copy">
          <span className="lab-notebook-eyebrow">The Lab Notebook</span>
          <h1>MBA Lab</h1>
          <p className="lab-notebook-tagline">Ideas. Research. Projects. A new chapter.</p>
          <span className="lab-notebook-rule" aria-hidden="true" />
          <p className="lab-notebook-intro">
            A public record of an ongoing intellectual journey through the core ideas of business and management, synthesized, connected, and questioned as I study them.
          </p>
        </div>
      </section>

      <section className="lab-notebook-kinds" id="browse">
        <div className="lab-notebook-section-title">
          <span>Browse by kind</span>
          <i aria-hidden="true" />
        </div>

        <div className="lab-notebook-grid">
          {categories.map((category) => {
            const count = entries.filter((entry) => entry.category === category.slug).length;
            return (
              <Link key={category.slug} href={`/mba-lab/category/${category.slug}`} className="lab-notebook-kind">
                <span className="lab-notebook-kind-code">{category.code === 'PROJ' ? 'PROJECTS' : category.code === 'INTV' ? 'INTERVIEWS' : category.code === 'CASE' ? 'CASES' : 'ESSAYS'}</span>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <span className="lab-notebook-arrow" aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
