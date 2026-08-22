export type TopicSlug =
  | 'strategy'
  | 'finance'
  | 'economics'
  | 'entrepreneurship'
  | 'leadership'
  | 'organizational-behavior'
  | 'innovation'
  | 'artificial-intelligence'
  | 'technology'
  | 'business-philosophy'
  | 'marketing';

export interface Topic {
  slug: TopicSlug;
  name: string;
  code: string; // short monospace code, e.g. STRAT
  description: string;
}

export interface LabEntryFrontmatter {
  title: string;
  date: string;
  code: string; // e.g. "MBA·STRAT·04"
  phase: string; // e.g. "Phase 03 — Strategy and Competition"
  topics: TopicSlug[];
  summary: string;
  centralQuestion: string;
  keyIdeas: string[];
  connections: string[];
  openQuestions: string[];
  finalPerspective: string;
  sources: string[]; // source slugs
}

export interface LabEntry extends LabEntryFrontmatter {
  slug: string;
  contentHtml: string;
  readingTime: string;
}

export interface EssayFrontmatter {
  title: string;
  date: string;
  topics: TopicSlug[];
  summary: string;
  standalone?: boolean;
}

export interface Essay extends EssayFrontmatter {
  slug: string;
  contentHtml: string;
  readingTime: string;
}

export interface SourceFrontmatter {
  institution: string;
  course: string;
  instructor?: string;
  subject: TopicSlug;
  why: string;
  outputs: string[]; // lab entry slugs
}

export interface Source extends SourceFrontmatter {
  slug: string;
}
