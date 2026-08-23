import type { MetadataRoute } from 'next';
import { getLabSlugs, getSourceSlugs } from '@/lib/content';
import { topics } from '@/lib/topics';
import { categories } from '@/lib/categories';

const SITE_URL = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/mba-lab', '/topics', '/courses', '/about', '/cv', '/contact'];

  const labRoutes = getLabSlugs().map((slug) => `/mba-lab/${slug}`);
  const sourceRoutes = getSourceSlugs().map((slug) => `/courses/${slug}`);
  const topicRoutes = topics.map((t) => `/topics/${t.slug}`);
  const categoryRoutes = categories.map((c) => `/mba-lab/category/${c.slug}`);

  const all = [...staticRoutes, ...labRoutes, ...sourceRoutes, ...topicRoutes, ...categoryRoutes];

  return all.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
