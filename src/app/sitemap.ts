import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity';
import { demoPosts } from '@/data/demo-posts';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '', '/om', '/tjanster', '/strategi-till-resultat', '/coaching',
    '/utbildningar', '/blogg', '/case', '/kontakt', '/boka', '/integritetspolicy',
  ].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
    changeFrequency: (p === '/blogg' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: p === '' ? 1.0 : 0.7,
  }));

  const posts = await sanityFetch<{ slug: string; publishedAt: string }[]>({
    query: `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { "slug": slug.current, publishedAt }`,
    tags: ['post'],
  });

  const source = posts.length > 0 ? posts : demoPosts;
  const blogRoutes = source.map((p) => ({
    url: `${BASE}/blogg/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
