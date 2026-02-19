import type { Metadata } from 'next';
import Link from 'next/link';
import { sanityFetch, queries } from '@/lib/sanity';
import { getPageHeroPhoto, getPageFallback, searchPhotos } from '@/lib/unsplash';
import type { CaseStudy, UnsplashPhoto } from '@/types';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Case & Resultat',
  description: 'Se hur vi har hjälpt nordiska företag uppnå mätbara resultat.',
  alternates: { canonical: '/case' },
};

export const revalidate = 60;

const industryQueryMap: Record<string, string> = {
  tech: 'clean technology office modern minimal',
  finans: 'modern financial district architecture',
  industri: 'scandinavian industrial design modern',
  retail: 'modern retail interior scandinavian',
  default: 'modern corporate architecture nordic',
};

function getIndustryQuery(industry: string): string {
  const key = industry.toLowerCase();
  for (const [k, v] of Object.entries(industryQueryMap)) {
    if (key.includes(k)) return v;
  }
  return industryQueryMap['default'];
}

export default async function CasePage() {
  const cases = await sanityFetch<CaseStudy[]>({ query: queries.allCases, params: { lang: 'sv' }, tags: ['case'] }) || [];
  const heroPhoto = await getPageHeroPhoto('case');
  const fallback = getPageFallback('case');

  // Fetch one thumbnail per unique industry
  const thumbs = new Map<string, UnsplashPhoto>();
  if (cases && cases.length > 0) {
    const industries = [...new Set(cases.map((c) => c.industry))];
    for (const ind of industries) {
      const results = await searchPhotos(getIndustryQuery(ind), { perPage: 1 });
      if (results[0]) thumbs.set(ind, results[0]);
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Case & Resultat', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/case` }) }} />

      <section className="relative min-h-[55vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.6} priority parallax className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[55vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Case</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Case &amp; Resultat</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Konkreta resultat från våra engagemang. Varje case representerar ett partnerskap byggt på förtroende.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          {cases && cases.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {cases.map((cs) => (
                <Link key={cs.slug} href={`/case/${cs.slug}`} className="group overflow-hidden border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-[16/9] overflow-hidden">
                    <UnsplashImage
                      photo={thumbs.get(cs.industry) || null}
                      fallback={getPageFallback('case')}
                      variant="thumbnail"
                      overlay
                      overlayOpacity={0.15}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="p-8">
                    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">{cs.industry}</p>
                    <h2 className="mb-2 text-xl font-semibold group-hover:text-accent">{cs.title}</h2>
                    <p className="mb-4 text-sm text-muted">{cs.client}</p>
                    <p className="text-sm leading-relaxed text-muted">{cs.excerpt}</p>
                    {cs.results && (
                      <div className="mt-6 flex gap-6 border-t border-border pt-6">
                        {cs.results.slice(0, 3).map((r) => (
                          <div key={r.metric}><p className="font-serif text-2xl font-semibold">{r.value}</p><p className="text-xs text-muted">{r.metric}</p></div>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">Case-studier publiceras via Sanity CMS.</p>
          )}
        </div>
      </section>
    </>
  );
}
