import { Topic } from './types';

export const topics: Topic[] = [
  {
    slug: 'strategy',
    name: 'Strategy',
    code: 'STRAT',
    description:
      'How advantage is built, defended, and eventually lost — and what that reveals about the nature of competition itself.',
  },
  {
    slug: 'finance',
    name: 'Finance',
    code: 'FIN',
    description:
      'The mechanics and psychology of capital: how it is priced, allocated, and misunderstood.',
  },
  {
    slug: 'economics',
    name: 'Economics',
    code: 'ECON',
    description:
      'The logic of scarcity, incentives, and markets underneath every business decision.',
  },
  {
    slug: 'entrepreneurship',
    name: 'Entrepreneurship',
    code: 'ENTR',
    description:
      'Building under uncertainty — how opportunity is recognized, tested, and turned into an organization.',
  },
  {
    slug: 'leadership',
    name: 'Leadership',
    code: 'LEAD',
    description: 'The practice of directing people and decisions when the answers are not obvious.',
  },
  {
    slug: 'organizational-behavior',
    name: 'Organizational Behavior',
    code: 'ORGB',
    description: 'Why organizations behave the way they do, and how structure shapes outcome.',
  },
  {
    slug: 'innovation',
    name: 'Innovation',
    code: 'INNO',
    description: 'How new value gets created, and why most organizations struggle to sustain it.',
  },
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    code: 'AI',
    description: 'How intelligence-as-software is changing the cost structure of the firm.',
  },
  {
    slug: 'technology',
    name: 'Technology',
    code: 'TECH',
    description: 'The tools and platforms reshaping how organizations operate and compete.',
  },
  {
    slug: 'business-philosophy',
    name: 'Business Philosophy',
    code: 'PHIL',
    description: 'The underlying assumptions of business thinking — and where they deserve scrutiny.',
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
