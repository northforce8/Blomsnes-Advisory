import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { sanityFetch, queries } from '@/lib/sanity';
import { searchPhotos, getFallbackImage, getCategoryQuery } from '@/lib/unsplash';
import type { BlogPost, UnsplashPhoto } from '@/types';
import { getDemoPost, getRelatedPosts, demoPosts } from '@/data/demo-posts';
import UnsplashImage from '@/components/ui/UnsplashImage';

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="!mt-12 !mb-4 font-serif text-2xl font-medium text-ink">{children}</h2>,
    h3: ({ children }) => <h3 className="!mt-8 !mb-3 font-serif text-xl font-medium text-ink">{children}</h3>,
    h4: ({ children }) => <h4 className="!mt-6 !mb-2 font-semibold text-ink">{children}</h4>,
    normal: ({ children }) => <p className="mb-6 text-[1.05rem] leading-[1.8] text-muted">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-4 border-accent pl-6 italic text-muted">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 list-disc pl-6 text-[1.05rem] leading-[1.8] text-muted">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 list-decimal pl-6 text-[1.05rem] leading-[1.8] text-muted">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="rounded bg-warm px-1.5 py-0.5 font-mono text-sm">{children}</code>,
    link: ({ value, children }) => (
      <a href={value?.href} className="text-accent underline underline-offset-2 hover:text-accent-dark" target={value?.blank ? '_blank' : undefined} rel={value?.blank ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const cmsPosts = await sanityFetch<{ slug: string }[]>({
    query: `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`,
    tags: ['post'],
  });
  const cmsParams = (cmsPosts || []).map((p) => ({ slug: p.slug }));
  const demoParams = demoPosts.map((p) => ({ slug: p.slug }));

  // Merge: CMS slugs take priority, demo fills in
  const seen = new Set(cmsParams.map((p) => p.slug));
  const merged = [...cmsParams];
  for (const dp of demoParams) {
    if (!seen.has(dp.slug)) merged.push(dp);
  }
  return merged;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  let post = await sanityFetch<BlogPost | null>({
    query: queries.postBySlug,
    params: { slug, lang: 'sv' },
  });
  if (!post) {
    const demo = getDemoPost(slug);
    if (demo) post = demo;
  }
  if (!post) return { title: 'Artikel hittades inte' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogg/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt ?? undefined,
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      tags: post.tags ?? undefined,
    },
  };
}

export const revalidate = 60;

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Demo article body sections (used when no CMS body)
function DemoArticleBody({ post }: { post: BlogPost }) {
  return (
    <div className="space-y-6 text-[1.05rem] leading-[1.8] text-muted">
      <p>{post.excerpt}</p>
      <h2 className="!mt-12 !mb-4 font-serif text-2xl font-medium text-ink">
        Bakgrund
      </h2>
      <p>
        I en tid av accelererande förändring står nordiska företag inför
        utmaningar som kräver nya perspektiv och handlingsmodeller. De
        traditionella ramverken — utvecklade för en mer förutsägbar
        marknadsdynamik — räcker inte längre.
      </p>
      <p>
        Vår erfarenhet av att arbeta med ledningsgrupper i hela Norden visar
        att de organisationer som lyckas bäst är de som kombinerar strategisk
        tydlighet med operativ flexibilitet.
      </p>
      <h2 className="!mt-12 !mb-4 font-serif text-2xl font-medium text-ink">
        Nyckelinsikter
      </h2>
      <p>
        Genom vår analys av 200+ transformationsinitiativ har vi identifierat
        tre kritiska framgångsfaktorer: ledarskapsengagemang på alla nivåer,
        systematisk uppföljning mot definierade milstolpar, och en kultur som
        välkomnar snarare än motverkar förändring.
      </p>
      <p>
        Dessa insikter utgör grunden för vår metodik och det ramverk vi
        applicerar i varje klientengagemang.
      </p>
      <h2 className="!mt-12 !mb-4 font-serif text-2xl font-medium text-ink">
        Framåtblick
      </h2>
      <p>
        Nordiska företag har en unik position i det globala landskapet — med
        högt förtroende, starka institutioner och en tradition av innovation.
        Nyckeln framåt är att kanalisera dessa styrkor mot de strategiska
        utmaningar som definierar nästa årtionde.
      </p>
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Try CMS first, then demo content
  let post = await sanityFetch<BlogPost | null>({
    query: queries.postBySlug,
    params: { slug, lang: 'sv' },
    tags: ['post'],
  });
  if (!post) {
    const demo = getDemoPost(slug);
    if (demo) post = demo;
  }
  if (!post) notFound();

  // Fetch hero image based on category
  const categoryQuery = getCategoryQuery(post.category ?? 'business');
  const heroResults = await searchPhotos(categoryQuery, {
    perPage: 1,
    orientation: 'landscape',
  });
  const heroPhoto: UnsplashPhoto | null = heroResults[0] || null;

  // Get related posts
  const related = getRelatedPosts(slug, 3);

  // Fetch thumbnail photos for related
  const relatedPhotos = new Map<string, UnsplashPhoto>();
  for (const rp of related) {
    const q = getCategoryQuery(rp.category ?? 'business');
    const results = await searchPhotos(q, { perPage: 1 });
    if (results[0]) relatedPhotos.set(rp.slug, results[0]);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: { '@type': 'Person', name: post.author.name },
            publisher: {
              '@type': 'Organization',
              name: 'Blomsnes Advisory',
              logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/images/logo.svg`,
              },
            },
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/blogg/${slug}`,
            mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/blogg/${slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Hem', item: process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app' },
              { '@type': 'ListItem', position: 2, name: 'Blogg', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/blogg` },
              { '@type': 'ListItem', position: 3, name: post.title },
            ],
          }),
        }}
      />

      {/* ─── HERO ─────────────────────────── */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <UnsplashImage
          photo={heroPhoto}
          fallback={getFallbackImage(post.category)}
          variant="hero"
          overlay
          overlayOpacity={0.6}
          priority
          parallax
          className="absolute inset-0"
        />

        <div className="relative z-20 flex min-h-[50vh] items-end px-6 pb-16 lg:px-12">
          <div className="mx-auto w-full max-w-prose">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-paper/50">
              <Link href="/" className="transition-colors hover:text-paper/80">
                Hem
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/blogg"
                className="transition-colors hover:text-paper/80"
              >
                Blogg
              </Link>
              <span className="mx-2">/</span>
              <span className="text-paper/70">{post.category ?? 'Artikel'}</span>
            </nav>

            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-light">
              {post.category ?? 'Artikel'}
            </p>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.025em] text-paper">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-paper/60">
              <span className="font-medium text-paper/90">
                {post.author?.name ?? ''}
              </span>
              <span className="text-paper/30">·</span>
              <span>{post.author?.role ?? ''}</span>
              <span className="text-paper/30">·</span>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span className="text-paper/30">·</span>
              <span>{post.readTime} min lästid</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE BODY ─────────────────── */}
      <article className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-prose">
          {post.body && post.body.length > 0 ? (
            <div>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <PortableText value={post.body as any} components={portableTextComponents} />
            </div>
          ) : (
            <DemoArticleBody post={post} />
          )}

          {/* Tags */}
          <footer className="mt-16 border-t border-border pt-8">
            <div className="flex flex-wrap gap-2">
              {(post.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>

          {/* Author */}
          <div className="mt-12 flex items-center gap-6 border-t border-border pt-12">
            <div className="flex h-16 w-16 items-center justify-center bg-warm font-serif text-xl font-semibold text-accent">
              {(post.author?.name ?? 'B')
                .split(' ')
                .map((n: string) => n[0])
                .join('')}
            </div>
            <div>
              <p className="font-semibold">{post.author?.name ?? ''}</p>
              <p className="text-sm text-muted">{post.author?.role ?? ''}</p>
            </div>
          </div>
        </div>
      </article>

      {/* ─── RELATED POSTS ────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-border px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-content">
            <h2 className="mb-12 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light tracking-[-0.015em]">
              Relaterade artiklar
            </h2>
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blogg/${rp.slug}`}
                  className="group"
                >
                  <div className="mb-5 aspect-[16/10] overflow-hidden">
                    <UnsplashImage
                      photo={relatedPhotos.get(rp.slug) || null}
                      fallback={getFallbackImage(rp.category)}
                      variant="thumbnail"
                      overlay
                      overlayOpacity={0.1}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                    {rp.category}
                  </p>
                  <h3 className="mb-2 font-serif text-lg font-medium leading-snug transition-colors group-hover:text-accent">
                    {rp.title}
                  </h3>
                  <p className="text-xs text-muted">
                    {rp.author?.name ?? ''} · {formatDate(rp.publishedAt)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────── */}
      <section className="border-t border-border bg-warm px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">
            Vill du diskutera dessa insikter?
          </h2>
          <p className="mb-10 text-sm text-muted">
            Boka ett strategisamtal där vi tillämpar dessa perspektiv på er
            organisations specifika utmaningar.
          </p>
          <Link
            href="/boka"
            className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Boka strategisamtal <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
