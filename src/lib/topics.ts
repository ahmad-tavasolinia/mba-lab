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
    slug: 'marketing',
    name: 'Marketing',
    code: 'MKT',
    description: 'How value gets communicated, positioned, and made desirable in the mind of the customer.',
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
