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
      <div className="lab-page-backdrop" aria-hidden="true" />

      <header className="lab-page-nav">
        <div className="lab-page-nav-inner">
          <Link href="/" className="lab-page-mark" aria-label="The Lab Notebook">THE LAB NOTEBOOK</Link>
          <nav aria-label="MBA Lab navigation">
            <Link href="/" className="is-active">HOME</Link>
            <Link href="/topics">TOPICS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>
      </header>

      <section className="lab-hero lab-room-hero">
        <div className="lab-room-shade" aria-hidden="true" />
        <div className="lab-hero-copy">
          <h1>MBA Lab</h1>
          <p className="lab-tagline">Ideas. Research. Projects. A new chapter.</p>
          <span className="lab-gold-rule" />
          <p className="lab-intro">
            A public record of an ongoing intellectual journey through the core ideas of business and management, synthesized, connected, and questioned as I study them.
          </p>
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
                    <span>{category.code === 'PROJ' ? 'PROJECTS' : category.code === 'INTV' ? 'INTERVIEWS' : category.code === 'CASE' ? 'CASES' : category.code === 'ESSAY' ? 'ESSAYS' : category.code}</span>
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

    </div>
  );
}
