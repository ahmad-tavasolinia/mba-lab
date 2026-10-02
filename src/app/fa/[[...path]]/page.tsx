import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllEssays, getAllLabEntries, getAllSources, getEssay, getEssaySlugs, getLabEntry, getLabSlugs, getSource, getSourceSlugs } from '@/lib/content';
import { categories } from '@/lib/categories';
import { phases } from '@/lib/phases';
import { topics } from '@/lib/topics';
import { faCategories, faEntrySummary, faEntryTitle, faEssaySummaries, faEssayTitles, faPhases, faSourceNames, faTopics } from '@/lib/persian';

type PageProps = { params: { path?: string[] } };
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function generateStaticParams() {
  const paths: string[][] = [
    [], ['mba-lab'], ['topics'], ['about'], ['contact'], ['cv'], ['courses'], ['essays'],
    ...topics.map((topic) => ['topics', topic.slug]),
    ...categories.map((category) => ['mba-lab', 'category', category.slug]),
    ...phases.map((phase) => ['mba-lab', 'phase', phase.slug]),
    ...getLabSlugs().map((slug) => ['mba-lab', slug]),
    ...getEssaySlugs().map((slug) => ['essays', slug]),
    ...getSourceSlugs().map((slug) => ['courses', slug]),
  ];
  return paths.map((path) => ({ path }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return { title: params.path?.length ? 'Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ MBA' : 'Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ MBAØŒ Ø§Ø­Ù…Ø¯ ØªÙˆØ³Ù„ÛŒâ€ŒÙ†ÛŒØ§', description: 'ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒØŒ Ù¾Ú˜ÙˆÙ‡Ø´ Ùˆ Ø³Ø§Ø®ØªÙ† Ø¯Ø± Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±Ø› Ø¨Ù‡ Ø±ÙˆØ§ÛŒØª Ø§Ø­Ù…Ø¯ ØªÙˆØ³Ù„ÛŒâ€ŒÙ†ÛŒØ§.' };
}

function LanguageSwitch() {
  return (
    <nav className="fa-language-switch" aria-label="Ø§Ù†ØªØ®Ø§Ø¨ Ø²Ø¨Ø§Ù†" dir="ltr">
      <Link href="/" lang="en">English</Link><span aria-hidden="true">/</span><span aria-current="page">ÙØ§Ø±Ø³ÛŒ</span>
    </nav>
  );
}

function FaEntryLink({ entry }: { entry: Awaited<ReturnType<typeof getLabEntry>> }) {
  return (
    <Link href={`/fa/mba-lab/${entry.slug}`} className="fa-entry-card">
      <span className="fa-meta"><bdi dir="ltr">{entry.code}</bdi><span>{new Date(entry.date).toLocaleDateString('fa-IR')}</span></span>
      <h3>{faEntryTitle(entry.slug, entry.title)}</h3>
      <p>{faEntrySummary(entry.slug, entry.summary)}</p>
    </Link>
  );
}

function FaEssayLink({ essay }: { essay: Awaited<ReturnType<typeof getEssay>> }) {
  return (
    <Link href={`/fa/essays/${essay.slug}`} className="fa-entry-card">
      <span className="fa-meta">{new Date(essay.date).toLocaleDateString('fa-IR')} <bdi dir="ltr">Â· {essay.readingTime}</bdi></span>
      <h3>{faEssayTitles[essay.slug] ?? essay.title}</h3>
      <p>{faEssaySummaries[essay.slug] ?? essay.summary}</p>
    </Link>
  );
}

function FaHome() {
  return (
      <div className="fa-site" lang="fa" dir="rtl">
      <div className="home-hero">
        <div className="home-hero-background" aria-hidden="true" />
        <section className="home-copy" aria-labelledby="fa-home-title">
          <LanguageSwitch />
          <h1 id="fa-home-title">Ø³Ø§Ø®ØªÙ† ÙØµÙ„ Ø¨Ø¹Ø¯ØŒ<br />Ø¢Ú¯Ø§Ù‡Ø§Ù†Ù‡ Ùˆ Ø³Ù†Ø¬ÛŒØ¯Ù‡.</h1>
          <p className="home-description">Ø§ÛŒØ¯Ù‡â€ŒÙ‡Ø§ Ø±Ø§ Ù…ÛŒâ€ŒÚ©Ø§ÙˆÙ…ØŒ Ù…ÛŒâ€ŒØ¢Ø²Ù…Ø§ÛŒÙ… Ùˆ Ø¨Ù‡ Ù¾Ø±ÙˆÚ˜Ù‡ ØªØ¨Ø¯ÛŒÙ„ Ù…ÛŒâ€ŒÚ©Ù†Ù…Ø›<br />Ø¨Ø±Ø§ÛŒ Ø³ÙØ±ÛŒ Ù…Ø¹Ù†Ø§Ø¯Ø§Ø± Ø¯Ø± Ø¯Ù†ÛŒØ§ÛŒ Ù…Ø¯ÛŒØ±ÛŒØª Ùˆ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±.</p>
          <Link href="/fa/mba-lab" className="home-cta"><span>ÙˆØ±ÙˆØ¯ Ø¨Ù‡ Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡</span><span className="home-arrow" aria-hidden="true">â†</span></Link>
        </section>
        <div className="home-journey">
          <p className="journey-title">Ù…Ø³ÛŒØ± ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ</p>
          <div className="fa-journey-track">
            {phases.map((phase, index) => (
              <Link key={phase.slug} href={`/fa/mba-lab/phase/${phase.slug}`} className={phase.slug === 'phase-2' ? 'fa-journey-phase active' : 'fa-journey-phase'}>
                <span>{String(index + 1).padStart(2, '0')}</span><small>{faPhases[phase.slug].name}</small>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaTopicIndex({ entries }: { entries: Awaited<ReturnType<typeof getAllLabEntries>> }) {
  return <PageFrame hero="topics" eyebrow="Ø¬Ø³Øªâ€ŒÙˆØ¬Ùˆ Ø¨Ø± Ø§Ø³Ø§Ø³ Ù…ÙˆØ¶ÙˆØ¹" title="Ù…ÙˆØ¶ÙˆØ¹â€ŒÙ‡Ø§" intro="Ø§ÛŒØ¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø§ÛŒÙ† Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ Ø¯Ø± Ù…Ø±Ø² ÛŒÚ© Ø±Ø´ØªÙ‡ Ù…ØªÙˆÙ‚Ù Ù†Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. ÛŒÚ© Ù…ÙˆØ¶ÙˆØ¹ Ø±Ø§ Ø¯Ù†Ø¨Ø§Ù„ Ú©Ù†ÛŒØ¯ Ùˆ Ù¾ÛŒÙˆÙ†Ø¯Ù‡Ø§ÛŒØ´ Ø±Ø§ Ù…ÛŒØ§Ù† Ù…ÙˆØ±Ø¯Ù‡Ø§ØŒ Ø¬Ø³ØªØ§Ø±Ù‡Ø§ Ùˆ Ù…Ù†Ø§Ø¨Ø¹ Ø¨Ø¨ÛŒÙ†ÛŒØ¯.">
    <div className="fa-card-grid">{topics.map((topic, i) => <Link key={topic.slug} href={`/fa/topics/${topic.slug}`} className="fa-topic-card"><span className="fa-meta">{String(i + 1).padStart(2, '0')} <bdi dir="ltr">{topic.code}</bdi></span><h2>{faTopics[topic.slug].name}</h2><p>{faTopics[topic.slug].description}</p><small>{entries.filter((e) => e.topics.includes(topic.slug)).length.toLocaleString('fa-IR')} ÛŒØ§Ø¯Ø¯Ø§Ø´Øª</small></Link>)}</div>
  </PageFrame>;
}

function PageFrame({ eyebrow, title, intro, children, hero }: { eyebrow?: string; title: string; intro?: string; children: React.ReactNode; hero?: 'lab' | 'topics' }) {
  return <div className="fa-site" lang="fa" dir="rtl"><section className={`fa-page-heading${hero ? ` fa-visual-heading fa-visual-${hero}` : ''}`}>{hero && <div className={`fa-visual-art fa-art-${hero}`} aria-hidden="true" />}{hero && <div className="fa-visual-shade" aria-hidden="true" />}<div className="fa-heading-copy"><span className="fa-eyebrow">{eyebrow}</span><h1>{title}</h1>{intro && <p>{intro}</p>}</div></section><section className="fa-page-body">{children}</section></div>;
}

function FaCategoryBlocks({ entries }: { entries: Awaited<ReturnType<typeof getAllLabEntries>> }) {
  return <div className="fa-category-list">{categories.map((category) => {
    const items = entries.filter((entry) => entry.category === category.slug);
    if (!items.length) return null;
    return <section key={category.slug}><h2>{faCategories[category.slug].name}</h2><FaEntryLink entry={items[0]} />{items.length > 1 && <details className="fa-load-more"><summary>Ù†Ù…Ø§ÛŒØ´ {Math.max(items.length - 1, 0).toLocaleString('fa-IR')} ÛŒØ§Ø¯Ø¯Ø§Ø´Øª Ø¯ÛŒÚ¯Ø±</summary>{items.slice(1).map((entry) => <FaEntryLink key={entry.slug} entry={entry} />)}</details>}</section>;
  })}</div>;
}

async function FaPage({ path }: { path: string[] }) {
  const route = path.join('/');
  if (!route) return <FaHome />;

  const entries = await getAllLabEntries();
  if (route === 'topics') return <FaTopicIndex entries={entries} />;
  if (route === 'mba-lab') return <PageFrame hero="lab" eyebrow="Ø¯ÙØªØ± Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡" title="Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ MBA" intro="ÙØ¶Ø§ÛŒÛŒ Ø¨Ø±Ø§ÛŒ Ø§Ù†Ø¯ÛŒØ´ÛŒØ¯Ù† Ø¨Ù‡ Ù…Ø³Ø¦Ù„Ù‡â€ŒÙ‡Ø§ÛŒ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±ØŒ Ø¢Ø²Ù…ÙˆØ¯Ù† Ø§ÛŒØ¯Ù‡â€ŒÙ‡Ø§ØŒ Ø³Ø§Ø®ØªÙ† Ù¾Ø±ÙˆÚ˜Ù‡â€ŒÙ‡Ø§ Ùˆ Ø¢Ù…ÙˆØ®ØªÙ† Ø§Ø² Ú©Ø³Ø§Ù†ÛŒ Ú©Ù‡ ØªØ¬Ø±Ø¨Ù‡Ù” Ø³Ø§Ø®ØªÙ† Ø¯Ø§Ø±Ù†Ø¯."><div className="fa-card-grid">{categories.map((category) => { const count = entries.filter((e) => e.category === category.slug).length; return <Link key={category.slug} href={`/fa/mba-lab/category/${category.slug}`} className="fa-topic-card"><span className="fa-meta">{category.code} Â· {count.toLocaleString('fa-IR')} ÛŒØ§Ø¯Ø¯Ø§Ø´Øª</span><h2>{faCategories[category.slug].name}</h2><p>{faCategories[category.slug].description}</p></Link>; })}</div><h2 className="fa-section-title">Ø³Ù‡ Ù…Ø±Ø­Ù„Ù‡Ù” Ù…Ø³ÛŒØ± MBA</h2><div className="fa-card-grid">{phases.map((phase) => <Link key={phase.slug} href={`/fa/mba-lab/phase/${phase.slug}`} className="fa-topic-card"><h2>{faPhases[phase.slug].name}</h2><p>{faPhases[phase.slug].description}</p></Link>)}</div></PageFrame>;

  if (route === 'about') return <PageFrame eyebrow="Ø¯Ø±Ø¨Ø§Ø±Ù‡Ù” Ù…Ù†" title="Ø§Ø­Ù…Ø¯ ØªÙˆØ³Ù„ÛŒâ€ŒÙ†ÛŒØ§"><div className="fa-prose"><p className="fa-lead">Ø¨Ù‡ Ù…Ø³Ø¦Ù„Ù‡â€ŒÙ‡Ø§ÛŒÛŒ Ø¹Ù„Ø§Ù‚Ù‡ Ø¯Ø§Ø±Ù… Ú©Ù‡ Ù¾Ø§Ø³Ø® Ø³Ø§Ø¯Ù‡â€ŒØ§ÛŒ Ù†Ø¯Ø§Ø±Ù†Ø¯.</p><p>Ú©Ø§Ø± Ùˆ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ù† Ø¯Ø± Ù¾ÛŒÙˆÙ†Ø¯ Ù…ÛŒØ§Ù† Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±ØŒ Ø±Ø§Ù‡Ø¨Ø±Ø¯ØŒ Ø¨Ø§Ø²Ø§Ø±ØŒ ÙÙ†Ø§ÙˆØ±ÛŒØŒ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ùˆ Ú©Ø§Ø±Ø¢ÙØ±ÛŒÙ†ÛŒ Ù‚Ø±Ø§Ø± Ø¯Ø§Ø±Ø¯. Ø¨Ù‡ Ù…Ø³Ø¦Ù„Ù‡â€ŒÙ‡Ø§ÛŒÛŒ Ø¬Ø°Ø¨ Ù…ÛŒâ€ŒØ´ÙˆÙ… Ú©Ù‡ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ù†Ø§Ù‚Øµ Ø§Ø³ØªØŒ Ù…Ù†Ø§Ø¨Ø¹ Ù…Ø­Ø¯ÙˆØ¯Ù†Ø¯ Ùˆ Ø¨Ø§Ø§ÛŒÙ†â€ŒØ­Ø§Ù„ Ø¨Ø§ÛŒØ¯ ØªØµÙ…ÛŒÙ… Ú¯Ø±ÙØª.</p><p>Ø§ÛŒÙ† Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ Ø±Ø§ Ø³Ø§Ø®ØªÙ… ØªØ§ Ù…Ø³ÛŒØ± ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒâ€ŒØ§Ù… Ø±Ø§ Ø¹Ù…ÙˆÙ…ÛŒ Ú©Ù†Ù…: Ø§ÛŒØ¯Ù‡â€ŒÙ‡Ø§ Ø±Ø§ Ø¨Ø®ÙˆØ§Ù†Ù…ØŒ ÙØ±Ø¶â€ŒÙ‡Ø§ Ø±Ø§ Ø¨ÛŒØ§Ø²Ù…Ø§ÛŒÙ…ØŒ Ø¨Ø§ Ø¹Ø¯Ø¯Ù‡Ø§ Ø±ÙˆØ¨Ù‡â€ŒØ±Ùˆ Ø´ÙˆÙ… Ùˆ Ø¨Ø¨ÛŒÙ†Ù… Ø¢ÛŒØ§ ØªØ­Ù„ÛŒÙ„ Ø¯Ø± Ø¨Ø±Ø§Ø¨Ø± ÙˆØ§Ù‚Ø¹ÛŒØª Ø¯ÙˆØ§Ù… Ù…ÛŒâ€ŒØ¢ÙˆØ±Ø¯ ÛŒØ§ Ù†Ù‡.</p><p>Ø¨Ù‡â€ŒØ¬Ø§ÛŒ Ø¬Ù…Ø¹â€ŒÚ©Ø±Ø¯Ù† Ø¯Ø§Ù†Ø³ØªÙ‡â€ŒÙ‡Ø§ØŒ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡Ù… Ø§Ø² Ø¢Ù†â€ŒÙ‡Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†Ù…Ø› Ø¨Ø§ Ù†ÙˆØ´ØªÙ†ØŒ ØªØ­Ù„ÛŒÙ„â€ŒÚ©Ø±Ø¯Ù†ØŒ Ø³Ø§Ø®ØªÙ† Ùˆ Ø¢Ø²Ù…ÙˆØ¯Ù† Ø§ÛŒØ¯Ù‡â€ŒÙ‡Ø§.</p><p>Ø§ÛŒÙ† Ø±ÙˆØ²Ù‡Ø§ Ø¨Ù‡â€ŒÙˆÛŒÚ˜Ù‡ Ø¨Ù‡ Ø§Ø«Ø± Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ø¨Ø± Ø§Ù‚ØªØµØ§Ø¯ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±Ù‡Ø§ØŒ ØªØºÛŒÛŒØ± Ø¨Ø§Ø²Ø§Ø±Ù‡Ø§ Ùˆ Ù…Ø²ÛŒØª Ø±Ù‚Ø§Ø¨ØªÛŒØŒ Ùˆ Ø´ÛŒÙˆÙ‡Ù” Ø®Ù„Ù‚ Ùˆ ØªØµØ§Ø­Ø¨ Ø§Ø±Ø²Ø´ Ø¯Ø± Ù…Ø­ÛŒØ·â€ŒÙ‡Ø§ÛŒ Ù…ØªØºÛŒØ± ÙÚ©Ø± Ù…ÛŒâ€ŒÚ©Ù†Ù….</p></div><ul className="fa-interest-list"><li>Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø± Ùˆ Ú©Ø§Ø±Ø¢ÙØ±ÛŒÙ†ÛŒ</li><li>Ø±Ø§Ù‡Ø¨Ø±Ø¯ Ùˆ ØªØ­Ù„ÛŒÙ„ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±</li><li>Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ</li><li>ÙÙ†Ø§ÙˆØ±ÛŒ Ùˆ Ø¨Ø§Ø²Ø§Ø±Ù‡Ø§</li></ul></PageFrame>;

  if (route === 'contact') return <PageFrame eyebrow="Ø¯Ø± ØªÙ…Ø§Ø³ Ø¨Ø§Ø´ÛŒÙ…" title="ØªÙ…Ø§Ø³" intro="Ø§Ú¯Ø± Ú†ÛŒØ²ÛŒ Ø¯Ø± Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ Ù¾Ø±Ø³Ø´ÛŒ Ø¯Ø± Ø°Ù‡Ù†â€ŒØªØ§Ù† Ø§ÛŒØ¬Ø§Ø¯ Ú©Ø±Ø¯Ù‡ØŒ Ø¨Ø§ Ø¢Ù† Ù…Ø®Ø§Ù„ÙÛŒØ¯ ÛŒØ§ Ù¾ÛŒÙˆÙ†Ø¯ ØªØ§Ø²Ù‡â€ŒØ§ÛŒ Ø¨Ù‡ Ù†Ø¸Ø±ØªØ§Ù† Ù…ÛŒâ€ŒØ±Ø³Ø¯ØŒ Ø®ÙˆØ´Ø­Ø§Ù„ Ù…ÛŒâ€ŒØ´ÙˆÙ… Ø¨Ø´Ù†ÙˆÙ…."><div className="fa-contact-grid"><section><span className="fa-eyebrow">Ø§ÛŒÙ…ÛŒÙ„</span><a dir="ltr" href="mailto:amd.tavasolinia@gmail.com">amd.tavasolinia@gmail.com</a></section><section><span className="fa-eyebrow">Ø¯Ø± Ø´Ø¨Ú©Ù‡â€ŒÙ‡Ø§ÛŒ Ø¯ÛŒÚ¯Ø±</span><a dir="ltr" href="https://www.linkedin.com/in/ahmad-tavasolinia-0a4903202/">LinkedIn</a></section></div></PageFrame>;

  if (route === 'cv') return <PageFrame eyebrow="Ø³ÙˆØ§Ø¨Ù‚ ØªØ­ØµÛŒÙ„ÛŒ Ùˆ Ø­Ø±ÙÙ‡â€ŒØ§ÛŒ" title="Ø±Ø²ÙˆÙ…Ù‡"><p className="fa-prose">Ù†Ø³Ø®Ù‡Ù” Ø§Ù†Ú¯Ù„ÛŒØ³ÛŒ Ø±Ø²ÙˆÙ…Ù‡ Ø¨Ø±Ø§ÛŒ Ø¨Ø§Ø±Ú¯ÛŒØ±ÛŒ Ø¯Ø± Ø¯Ø³ØªØ±Ø³ Ø§Ø³Øª.</p><a className="fa-action" href={`${basePath}/cv.pdf`}>Ø¨Ø§Ø±Ú¯ÛŒØ±ÛŒ ÙØ§ÛŒÙ„ PDF</a><h2 className="fa-section-title">Ù¾Ø±ÙˆÚ˜Ù‡Ù” Ù…Ø³ØªÙ‚Ù„</h2><div className="fa-prose"><h3>Ø¨Ù†ÛŒØ§Ù†â€ŒÚ¯Ø°Ø§Ø± Ùˆ Ù†ÙˆÛŒØ³Ù†Ø¯Ù‡Ù” Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ MBA</h3><p>Ù¾Ø±ÙˆÚ˜Ù‡â€ŒØ§ÛŒ Ù…Ø³ØªÙ‚Ù„ Ø¨Ø±Ø§ÛŒ Ø¨Ø±Ø±Ø³ÛŒ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±ØŒ Ø±Ø§Ù‡Ø¨Ø±Ø¯ØŒ Ù…Ø§Ù„ÛŒØŒ ÙÙ†Ø§ÙˆØ±ÛŒ Ùˆ Ù…Ø¯ÛŒØ±ÛŒØªØ› Ø¨Ø§ Ù¾ÛŒÙˆÙ†Ø¯ Ù…ÛŒØ§Ù† Ù…Ù†Ø§Ø¨Ø¹ Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ÛŒØŒ Ù…Ø³Ø¦Ù„Ù‡â€ŒÙ‡Ø§ÛŒ ÙˆØ§Ù‚Ø¹ÛŒ Ùˆ ØªØ­Ù„ÛŒÙ„ Ø´Ø®ØµÛŒ.</p><h3>ØªØ­ØµÛŒÙ„Ø§Øª</h3><p>Ù…Ø·Ø§Ù„Ø¹Ù‡Ù” Ù…Ø³ØªÙ‚Ù„ Ø¯Ø± Ø³Ø·Ø­ ØªØ­ØµÛŒÙ„Ø§Øª ØªÚ©Ù…ÛŒÙ„ÛŒ: Ø±Ø§Ù‡Ø¨Ø±Ø¯ØŒ Ù…Ø§Ù„ÛŒØŒ Ø§Ù‚ØªØµØ§Ø¯ØŒ Ø±ÙØªØ§Ø± Ø³Ø§Ø²Ù…Ø§Ù†ÛŒ Ùˆ Ù¾ÛŒÙˆÙ†Ø¯ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ø¨Ø§ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±.</p><h3>Ù…Ù‡Ø§Ø±Øªâ€ŒÙ‡Ø§</h3><p>Ø±Ø§Ù‡Ø¨Ø±Ø¯ØŒ ØªØ­Ù„ÛŒÙ„ Ù…Ø§Ù„ÛŒØŒ Ù†Ú¯Ø§Ø±Ø´ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±ØŒ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ùˆ ÙÙ†Ø§ÙˆØ±ÛŒØŒ Ø±Ù‡Ø¨Ø±ÛŒØŒ Ù¾Ú˜ÙˆÙ‡Ø´ Ùˆ ØªØ±Ú©ÛŒØ¨ Ø§ÛŒØ¯Ù‡â€ŒÙ‡Ø§ØŒ SQL Ùˆ Power BI.</p></div></PageFrame>;

  if (route === 'courses') {
    const sources = getAllSources();
    return <PageFrame eyebrow="Ø®Ø§Ø³ØªÚ¯Ø§Ù‡ Ø§ÛŒØ¯Ù‡â€ŒÙ‡Ø§" title="Ø¯ÙˆØ±Ù‡â€ŒÙ‡Ø§ Ùˆ Ù…Ù†Ø§Ø¨Ø¹" intro="Ø§ÛŒÙ† ØµÙØ­Ù‡ ÙÙ‡Ø±Ø³Øª Ú¯ÙˆØ§Ù‡ÛŒâ€ŒÙ†Ø§Ù…Ù‡â€ŒÙ‡Ø§ Ù†ÛŒØ³ØªØ› Ø«Ø¨Øª Ú†ÛŒØ²Ù‡Ø§ÛŒÛŒ Ø§Ø³Øª Ú©Ù‡ Ù…Ø·Ø§Ù„Ø¹Ù‡ Ú©Ø±Ø¯Ù… Ùˆ Ù…Ù‡Ù…â€ŒØªØ± Ø§Ø² Ø¢Ù†ØŒ Ú†ÛŒØ²ÛŒ Ú©Ù‡ Ø§Ø² Ø§ÛŒÙ† Ù…Ø·Ø§Ù„Ø¹Ù‡ Ø¨Ù‡â€ŒØ¯Ø³Øª Ø¢Ù…Ø¯."><div className="fa-entry-list">{sources.map((source) => { const faSource = faSourceNames[source.slug]; return <article className="fa-entry-card" key={source.slug}><span className="fa-meta">{source.institution}</span><h2>{faSource?.course ?? source.course}</h2><p>{source.instructor && <>{source.instructor} Â· </>}{faTopics[source.subject]?.name ?? source.subject}</p><p>{faSource?.why ?? source.why}</p><a href={source.courseUrl} target="_blank" rel="noreferrer">Ø±ÙØªÙ† Ø¨Ù‡ Ù…Ù†Ø¨Ø¹ Ø§ØµÙ„ÛŒ â†</a></article>; })}</div><p className="fa-disclaimer">Ù…Ù†Ø§Ø¨Ø¹ Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ÛŒ Ø¨Ø±Ø§ÛŒ Ø´ÙØ§ÙÛŒØª Ø°Ú©Ø± Ø´Ø¯Ù‡â€ŒØ§Ù†Ø¯Ø› Ù‡ÛŒÚ†â€ŒÛŒÚ© Ø§Ø² Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡â€ŒÙ‡Ø§ÛŒ Ù†Ø§Ù…â€ŒØ¨Ø±Ø¯Ù‡ Ø§ÛŒÙ† Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ Ø±Ø§ Ø¨Ø±Ø±Ø³ÛŒ ÛŒØ§ ØªØ£ÛŒÛŒØ¯ Ù†Ú©Ø±Ø¯Ù‡â€ŒØ§Ù†Ø¯.</p></PageFrame>;
  }

  if (route === 'essays') {
    const essays = await getAllEssays();
    return <PageFrame eyebrow="Ù†ÙˆØ´ØªØ§Ø± Ù…Ø³ØªÙ‚Ù„" title="Ø¬Ø³ØªØ§Ø±Ù‡Ø§" intro="Ù†ÙˆØ´ØªÙ‡â€ŒÙ‡Ø§ÛŒÛŒ Ø¯Ø±Ø¨Ø§Ø±Ù‡Ù” Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø±ØŒ ÙÙ†Ø§ÙˆØ±ÛŒ Ùˆ Ø¢ÛŒÙ†Ø¯Ù‡Ù” Ú©Ø§Ø± Ú©Ù‡ Ø§Ø² ÛŒÚ© Ø¯Ø±Ø³ Ù…Ø´Ø®Øµ Ù†ÛŒØ§Ù…Ø¯Ù‡â€ŒØ§Ù†Ø¯."><div className="fa-entry-list">{essays.map((essay) => <FaEssayLink key={essay.slug} essay={essay} />)}</div></PageFrame>;
  }

  if (path[0] === 'topics' && path.length === 2) {
    const topic = topics.find((item) => item.slug === path[1]);
    if (!topic) notFound();
    const topicEntries = entries.filter((entry) => entry.topics.includes(topic.slug));
    return <PageFrame eyebrow="Ù…ÙˆØ¶ÙˆØ¹" title={faTopics[topic.slug].name} intro={faTopics[topic.slug].description}><FaCategoryBlocks entries={topicEntries} /></PageFrame>;
  }

  if (path[0] === 'mba-lab' && path[1] === 'category' && path.length === 3) {
    const category = categories.find((item) => item.slug === path[2]);
    if (!category) notFound();
    const matching = entries.filter((entry) => entry.category === category.slug);
    return <PageFrame eyebrow="Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ MBA" title={faCategories[category.slug].name} intro={faCategories[category.slug].description}><div className="fa-entry-list">{matching.map((entry) => <FaEntryLink key={entry.slug} entry={entry} />)}</div></PageFrame>;
  }

  if (path[0] === 'mba-lab' && path[1] === 'phase' && path.length === 3) {
    const phase = phases.find((item) => item.slug === path[2]);
    if (!phase) notFound();
    const phaseEntries = entries.filter((entry) => entry.journeyPhase === phase.slug);
    return <PageFrame eyebrow={faPhases[phase.slug].title} title={faPhases[phase.slug].name} intro={faPhases[phase.slug].description}><FaCategoryBlocks entries={phaseEntries} /></PageFrame>;
  }

  if (path[0] === 'mba-lab' && path.length === 2 && getLabSlugs().includes(path[1])) {
    const entry = await getLabEntry(path[1]);
    return <PageFrame eyebrow={`${faCategories[entry.category].name} Â· ${new Date(entry.date).toLocaleDateString('fa-IR')}`} title={faEntryTitle(entry.slug, entry.title)} intro={faEntrySummary(entry.slug, entry.summary)}><div className="fa-meta fa-reading-meta"><bdi dir="ltr">{entry.code} Â· {entry.readingTime}</bdi><span>Ù…ÙˆØ¶ÙˆØ¹: {entry.topics.map((topic) => faTopics[topic]?.name ?? topic).join('ØŒ ')}</span></div><p className="fa-original-note">Ù…ØªÙ† Ú©Ø§Ù…Ù„ Ø§ÛŒÙ† ÛŒØ§Ø¯Ø¯Ø§Ø´Øª ÙØ¹Ù„Ø§Ù‹ Ø¨Ù‡ Ø²Ø¨Ø§Ù† Ø§ØµÙ„ÛŒØŒ Ø§Ù†Ú¯Ù„ÛŒØ³ÛŒØŒ Ø¯Ø± Ø¯Ø³ØªØ±Ø³ Ø§Ø³Øª.</p><div className="prose-lab fa-original-content" dir="ltr" lang="en" dangerouslySetInnerHTML={{ __html: entry.contentHtml }} /></PageFrame>;
  }

  if (path[0] === 'essays' && path.length === 2 && getEssaySlugs().includes(path[1])) {
    const essay = await getEssay(path[1]);
    return <PageFrame eyebrow={`Ø¬Ø³ØªØ§Ø± Â· ${new Date(essay.date).toLocaleDateString('fa-IR')}`} title={faEssayTitles[essay.slug] ?? essay.title} intro={faEssaySummaries[essay.slug] ?? essay.summary}><p className="fa-original-note">Ù…ØªÙ† Ú©Ø§Ù…Ù„ Ø§ÛŒÙ† Ø¬Ø³ØªØ§Ø± ÙØ¹Ù„Ø§Ù‹ Ø¨Ù‡ Ø²Ø¨Ø§Ù† Ø§ØµÙ„ÛŒØŒ Ø§Ù†Ú¯Ù„ÛŒØ³ÛŒØŒ Ø¯Ø± Ø¯Ø³ØªØ±Ø³ Ø§Ø³Øª.</p><div className="prose-lab fa-original-content" dir="ltr" lang="en" dangerouslySetInnerHTML={{ __html: essay.contentHtml }} /></PageFrame>;
  }

  if (path[0] === 'courses' && path.length === 2 && getSourceSlugs().includes(path[1])) {
    const source = getSource(path[1]);
    const faSource = faSourceNames[source.slug];
    const outputEntries = entries.filter((entry) => source.outputs.includes(entry.slug));
    return <PageFrame eyebrow={source.institution} title={faSource?.course ?? source.course} intro={faSource?.why ?? source.why}><p className="fa-prose">Ù…Ø¯Ø±Ø³: {source.instructor ?? 'â€”'} Â· Ù…ÙˆØ¶ÙˆØ¹: {faTopics[source.subject]?.name ?? source.subject}</p>{source.courseUrl && <a className="fa-action" href={source.courseUrl} target="_blank" rel="noreferrer">Ù…Ø´Ø§Ù‡Ø¯Ù‡Ù” Ø¯ÙˆØ±Ù‡ Ø¯Ø± ÙˆØ¨â€ŒØ³Ø§ÛŒØª Ø§ØµÙ„ÛŒ â†</a>}<h2 className="fa-section-title">ÛŒØ§Ø¯Ø¯Ø§Ø´Øªâ€ŒÙ‡Ø§ÛŒ Ù…Ø±ØªØ¨Ø·</h2><div className="fa-entry-list">{outputEntries.map((entry) => <FaEntryLink key={entry.slug} entry={entry} />)}</div></PageFrame>;
  }

  notFound();
}

export default async function PersianPage({ params }: PageProps) {
  return FaPage({ path: params.path ?? [] });
}
