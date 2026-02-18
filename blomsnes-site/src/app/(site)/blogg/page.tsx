import type { Metadata } from 'next';
import Link from 'next/link';
import { sanityFetch, queries } from '@/lib/sanity';
import { searchPhotos, getFallbackImage, getCategoryQuery } from '@/lib/unsplash';
import type { BlogPost, UnsplashPhoto } from '@/types';
import { demoPosts } from '@/data/demo-posts';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Blogg & Insikter',
  description:
    'Artiklar, analyser och insikter om strategi, ledarskap och transformation från Nordström & Partners.',
  alternates: {
    canonical: '/blogg',
    languages: { sv: '/blogg', no: '/no/blogg', en: '/en/blog' },
  },
};

export const revalidate = 60;

async function getHeroPhoto(): Promise<UnsplashPhoto | null> {
  const results = await searchPhotos('scandinavian architecture minimal modern', {
    perPage: 1,
    orientation: 'landscape',
  });
  return results[0] || null;
}

async function getThumbnailPhotos(
  categories: string[]
): Promise<Map<string, UnsplashPhoto>> {
  const map = new Map<string, UnsplashPhoto>();

  for (const category of [...new Set(categories)]) {
    const query = getCategoryQuery(category);
    const results = await searchPhotos(query, { perPage: 1 });
    if (results[0]) {
      map.set(category, results[0]);
    }
  }

  return map;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BloggPage() {
  // Fetch posts from CMS, fall back to demo content
  let posts = await sanityFetch<BlogPost[]>({
    query: queries.allPosts,
    params: { lang: 'sv' },
    tags: ['post'],
  });

  if (!posts || posts.length === 0) {
    posts = demoPosts;
  }

  // Fetch Unsplash images
  const heroPhoto = await getHeroPhoto();
  const categories = posts.map((p) => p.category);
  const thumbnailPhotos = await getThumbnailPhotos(categories);

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Blomsnes Advisory Blogg',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/blogg`,
            publisher: {
              '@type': 'Organization',
              name: 'Blomsnes Advisory',
            },
            blogPost: posts.slice(0, 10).map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/blogg/${p.slug}`,
              datePublished: p.publishedAt,
              author: { '@type': 'Person', name: p.author.name },
            })),
          }),
        }}
      />

      {/* ─── HERO ─────────────────────────── */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <UnsplashImage
          photo={heroPhoto}
          fallback={getFallbackImage('architecture')}
          variant="hero"
          overlay
          overlayOpacity={0.65}
          priority
          parallax
          className="absolute inset-0"
        />

        <div className="relative z-20 flex min-h-[60vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light">
              <span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />
              Insikter
            </p>
            <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">
              Blogg &amp; Insikter
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              Tankar om strategi, ledarskap och transformation från vårt team av
              rådgivare och coaches.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST ────────────────── */}
      {featuredPost && (
        <section className="border-b border-border px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-content">
            <p className="mb-12 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
              <span className="mr-4 inline-block h-px w-8 bg-accent align-middle" />
              Utvalt
            </p>
            <Link
              href={`/blogg/${featuredPost.slug}`}
              className="group grid gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <UnsplashImage
                  photo={thumbnailPhotos.get(featuredPost.category) || null}
                  fallback={getFallbackImage(featuredPost.category)}
                  variant="thumbnail"
                  overlay
                  overlayOpacity={0.15}
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
                  {featuredPost.category}
                </p>
                <h2 className="mb-4 font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.15] tracking-[-0.02em] transition-colors group-hover:text-accent">
                  {featuredPost.title}
                </h2>
                <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="font-medium text-ink">
                    {featuredPost.author.name}
                  </span>
                  <span className="text-border">·</span>
                  <time dateTime={featuredPost.publishedAt}>
                    {formatDate(featuredPost.publishedAt)}
                  </time>
                  <span className="text-border">·</span>
                  <span>{featuredPost.readTime} min lästid</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─── POST GRID ────────────────────── */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-16 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light tracking-[-0.015em]">
            Alla artiklar
          </h2>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="group"
              >
                <div className="mb-6 aspect-[16/10] overflow-hidden">
                  <UnsplashImage
                    photo={thumbnailPhotos.get(post.category) || null}
                    fallback={getFallbackImage(post.category)}
                    variant="thumbnail"
                    overlay
                    overlayOpacity={0.1}
                    className="h-full w-full"
                  />
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                  {post.category}
                </p>
                <h3 className="mb-3 font-serif text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="font-medium text-ink">
                    {post.author.name}
                  </span>
                  <span className="text-border">·</span>
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span className="text-border">·</span>
                  <span>{post.readTime} min</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ───────────────── */}
      <section className="border-t border-border bg-ink px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light">
            Prenumerera
          </p>
          <h2 className="mb-4 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light text-paper">
            Få våra insikter direkt
          </h2>
          <p className="mb-10 text-sm text-paper/60">
            Månatliga analyser om strategi, ledarskap och transformation.
            Ingen spam. Avsluta när du vill.
          </p>
          <form className="mx-auto flex max-w-md gap-3">
            <input
              type="email"
              placeholder="din@email.se"
              className="flex-1 border border-paper/20 bg-transparent px-5 py-3 text-sm text-paper placeholder:text-paper/30 outline-none focus:border-accent-light"
              required
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-accent-light px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
            >
              Prenumerera
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
