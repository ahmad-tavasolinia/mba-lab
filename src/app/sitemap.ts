import type { MetadataRoute } from 'next';
import { getLabSlugs, getEssaySlugs, getSourceSlugs } from '@/lib/content';
import { topics } from '@/lib/topics';

const SITE_URL = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/mba-lab', '/essays', '/topics', '/courses', '/about', '/cv', '/contact'];

  const labRoutes = getLabSlugs().map((slug) => `/mba-lab/${slug}`);
  const essayRoutes = getEssaySlugs().map((slug) => `/essays/${slug}`);
  const sourceRoutes = getSourceSlugs().map((slug) => `/courses/${slug}`);
  const topicRoutes = topics.map((t) => `/topics/${t.slug}`);

  const all = [...staticRoutes, ...labRoutes, ...essayRoutes, ...sourceRoutes, ...topicRoutes];

  return all.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
