import { createClient, type QueryParams } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<T> {
  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
        tags,
      },
    });
  } catch {
    return [] as unknown as T;
  }
}

export const queries = {
  allPosts: `*[_type == "post" && language == $lang] | order(publishedAt desc) {
    "slug": slug.current, title, excerpt, category, tags, publishedAt, readTime, image,
    author->{ name, role, image }
  }`,

  postBySlug: `*[_type == "post" && slug.current == $slug && language == $lang][0] {
    "slug": slug.current, title, excerpt, category, tags, publishedAt, readTime, image, body,
    author->{ name, role, image, bio, linkedin },
    "relatedPosts": *[_type == "post" && slug.current != $slug && count(tags[@ in ^.tags]) > 0]
      | order(publishedAt desc)[0...3] { "slug": slug.current, title, excerpt, publishedAt, image, category }
  }`,

  allCases: `*[_type == "caseStudy" && language == $lang] | order(publishedAt desc) {
    "slug": slug.current, title, client, industry, excerpt, tags, publishedAt, image, results
  }`,

  caseBySlug: `*[_type == "caseStudy" && slug.current == $slug && language == $lang][0] {
    "slug": slug.current, title, client, industry, excerpt, challenge, solution,
    results, testimonial, tags, publishedAt, image, body
  }`,

  allTeamMembers: `*[_type == "teamMember"] | order(order asc) {
    name, role, bio, image, linkedin, specialties
  }`,

  allServices: `*[_type == "service" && language == $lang] | order(order asc) {
    "slug": slug.current, title, excerpt, icon, features
  }`,
};
