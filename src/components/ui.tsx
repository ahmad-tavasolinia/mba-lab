import Link from 'next/link';
import { getTopic } from '@/lib/topics';

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-content px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{children}</p>
  );
}

export function CodeChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="code-chip inline-block rounded border border-rule px-2 py-0.5 text-[11px] text-ink/60 dark:border-dark-rule dark:text-dark-soft">
      {children}
    </span>
  );
}

export function TopicChip({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="inline-flex items-center gap-1.5 rounded-full border border-forest/30 bg-forest/5 px-3 py-1 text-[11px] font-medium text-forest transition hover:border-forest hover:bg-forest/10 dark:border-forest-bright/30 dark:bg-forest-bright/10 dark:text-forest-bright"
    >
      {topic.name}
    </Link>
  );
}

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-ink/60 dark:text-dark-soft">{subtitle}</p>
      )}
    </div>
  );
}
