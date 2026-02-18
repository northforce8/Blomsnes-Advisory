import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sanityFetch, queries } from '@/lib/sanity';
import { searchPhotos, getFallbackImage } from '@/lib/unsplash';
import type { CaseStudy, UnsplashPhoto } from '@/types';
import UnsplashImage from '@/components/ui/UnsplashImage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const cases = await sanityFetch<{ slug: string }[]>({
    query: `*[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current }`,
    tags: ['case'],
  });
  return (cases || []).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = await sanityFetch<CaseStudy | null>({ query: queries.caseBySlug, params: { slug, lang: 'sv' } });
  if (!cs) return { title: 'Case hittades inte' };
  return { title: `${cs.title} — ${cs.client}`, description: cs.excerpt, alternates: { canonical: `/case/${slug}` } };
}

export const revalidate = 60;

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = await sanityFetch<CaseStudy | null>({ query: queries.caseBySlug, params: { slug, lang: 'sv' }, tags: ['case'] });
  if (!cs) notFound();

  const heroResults = await searchPhotos(
    `modern ${cs.industry || 'corporate'} architecture minimal`,
    { perPage: 1, orientation: 'landscape' }
  );
  const heroPhoto: UnsplashPhoto | null = heroResults[0] || null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: cs.title, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/case/${slug}`, publisher: { '@type': 'Organization', name: 'Blomsnes Advisory' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Hem', item: process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app' }, { '@type': 'ListItem', position: 2, name: 'Case', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/case` }, { '@type': 'ListItem', position: 3, name: cs.title } ] }) }} />

      <section className="relative min-h-[50vh] overflow-hidden">
        <UnsplashImage
          photo={heroPhoto}
          fallback={getFallbackImage(cs.industry || 'architecture')}
          variant="hero"
          overlay
          overlayOpacity={0.6}
          priority
          parallax
          className="absolute inset-0"
        />
        <div className="relative z-20 flex min-h-[50vh] items-end px-6 pb-16 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-paper/50">
              <Link href="/" className="hover:text-paper/80">Hem</Link><span className="mx-2">/</span>
              <Link href="/case" className="hover:text-paper/80">Case</Link><span className="mx-2">/</span>
              <span className="text-paper/70">{cs.title}</span>
            </nav>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-light">{cs.industry}</p>
            <h1 className="mb-4 font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.025em] text-paper">{cs.title}</h1>
            <p className="text-lg text-paper/70">{cs.client}</p>
          </div>
        </div>
      </section>

      <article className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-content">
          <div className="grid gap-16 lg:grid-cols-2">
            <section><h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Utmaning</h2><p className="leading-relaxed text-muted">{cs.challenge}</p></section>
            <section><h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Lösning</h2><p className="leading-relaxed text-muted">{cs.solution}</p></section>
          </div>

          <section className="mt-16 border-t border-border pt-16">
            <h2 className="mb-12 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Resultat</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {cs.results.map((r) => (
                <div key={r.metric} className="border border-border p-8 text-center">
                  <p className="mb-2 font-serif text-4xl font-semibold text-accent">{r.value}</p>
                  <p className="mb-2 font-semibold">{r.metric}</p>
                  <p className="text-sm text-muted">{r.description}</p>
                </div>
              ))}
            </div>
          </section>

          {cs.testimonial && (
            <section className="mt-16 border-t border-border pt-16">
              <blockquote className="mx-auto max-w-prose">
                <p className="mb-6 font-serif text-2xl font-light italic leading-relaxed">&ldquo;{cs.testimonial.quote}&rdquo;</p>
                <footer className="text-sm text-muted"><cite className="not-italic"><span className="font-medium text-ink">{cs.testimonial.author}</span>, {cs.testimonial.role} — {cs.testimonial.company}</cite></footer>
              </blockquote>
            </section>
          )}

          <div className="mt-16 flex flex-wrap gap-4">
            <Link href="/case" className="border-[1.5px] border-ink px-8 py-4 text-sm font-medium hover:bg-ink hover:text-paper">Alla case</Link>
            <Link href="/boka" className="bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Diskutera er situation</Link>
          </div>
        </div>
      </article>
    </>
  );
}
