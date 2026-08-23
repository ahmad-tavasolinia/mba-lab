import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum vitae — Ahmad Tavasolinia.',
};

function Entry({
  role,
  place,
  time,
  children,
}: {
  role: string;
  place: string;
  time: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-t border-rule py-6 first:border-t-0 dark:border-dark-rule">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="font-serif text-xl font-medium text-ink dark:text-dark-ink">{role}</h3>
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
          {time}
        </span>
      </div>
      <p className="text-sm text-ink/50 dark:text-dark-soft/70">{place}</p>
      {children && <div className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70 dark:text-dark-soft">{children}</div>}
    </div>
  );
}

export default function CvPage() {
  return (
    <div>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="flex flex-col gap-6 py-20 sm:flex-row sm:items-end sm:justify-between md:py-24">
          <div>
            <Eyebrow>Curriculum vitae</Eyebrow>
            <h1 className="mt-3 font-serif text-5xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-6xl">
              CV
            </h1>
          </div>
          <a
            href="/cv.pdf"
            className="inline-block rounded-full border border-rule px-6 py-3 text-center font-mono text-[12px] uppercase tracking-widest text-ink transition hover:border-gold hover:text-gold dark:border-dark-rule dark:text-dark-ink"
          >
            Download PDF
          </a>
        </Container>
      </section>

      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-14">
          <Eyebrow>Independent Project</Eyebrow>
          <div className="mt-6">
            <Entry role="Founder & Author — MBA Lab" place="Independent intellectual project" time="2026 – Present">
              <p>
                Founded and developed an independent digital platform exploring business, strategy,
                finance, technology, and management through the synthesis of academic sources,
                real-world cases, and original analysis.
              </p>
              <Link href="/mba-lab" className="mt-3 inline-block font-mono text-[12px] uppercase tracking-widest text-gold hover:text-gold-bright">
                Explore MBA Lab →
              </Link>
            </Entry>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-14">
          <Eyebrow>Education</Eyebrow>
          <div className="mt-6">
            <Entry role="Self-directed graduate-level study" place="MIT OpenCourseWare, Yale open lectures, independent reading" time="2026">
              <p>Strategy, finance, economics, organizational behavior, and the intersection of AI and business — see Courses &amp; Sources for full detail.</p>
            </Entry>
            <Entry role="[Add your degree here]" place="[Add your university]" time="[Years]" />
          </div>
        </Container>
      </section>

      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-14">
          <Eyebrow>Experience</Eyebrow>
          <div className="mt-6">
            <Entry
              role="Business Operations &amp; Strategy"
              place="Small Tech Startup · South Khorasan Science and Technology Park"
              time="Jul 2023 – May 2024 · 5-person team"
            >
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Contributed to product strategy by researching market demand across three product
                  lines and helping the team focus resources on the most viable one
                </li>
                <li>Supported team coordination, including setting project deadlines and tracking progress</li>
                <li>Handled day-to-day office and operational tasks alongside a small founding team</li>
              </ul>
            </Entry>
            <Entry
              role="Sustainability Communication Intern (Remote)"
              place="Sustainable Alignment Association · Zurich, Switzerland"
              time="Mar – Jun 2021"
            >
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Designed and led an educational sustainability project, from concept to execution</li>
                <li>Secured project partners and sponsorship funding</li>
                <li>Managed social media and remote team communication in an international setting</li>
              </ul>
            </Entry>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-14">
          <Eyebrow>Skills</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Strategy', 'Financial Analysis', 'Business Writing', 'AI & Technology', 'Leadership', 'Research & Synthesis', 'SQL', 'Power BI'].map((s) => (
              <span key={s} className="rounded-full border border-rule px-4 py-1.5 text-sm text-ink/70 dark:border-dark-rule dark:text-dark-soft">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <Eyebrow>Honors &amp; Qualifications</Eyebrow>
          <div className="mt-6">
            <Entry
              role="NODET Graduate"
              place="National Organization for Development of Exceptional Talents — Iran's selective national high school program for gifted students"
              time="2016"
            >
              <p>
                Admitted through national entrance examinations to NODET, Iran's most selective
                public high school network for academically gifted students, established to
                cultivate talent in mathematics, science, and analytical thinking from an early age.
              </p>
            </Entry>
            <Entry role="IELTS Academic — Band 7.0 (CEFR C1)" place="English language proficiency" time="2022" />
            <Entry
              role="Management of Smart Cities"
              place="École Polytechnique Fédérale de Lausanne (EPFL), via Coursera"
              time="2022"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
