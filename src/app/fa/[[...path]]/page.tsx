import type { Metadata } from 'next';
import { getPersianMetadata, getPersianRoutePaths, renderPersianPage } from '@/lib/persian-routes';

type PageProps = { params: { path: string[] } };

export function generateStaticParams() {
  return getPersianRoutePaths()
    .filter((path) => path.length > 0)
    .map((path) => ({ path }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  return getPersianMetadata(params.path);
}

export default async function PersianCatchallPage({ params }: PageProps) {
  return renderPersianPage(params.path);
}
