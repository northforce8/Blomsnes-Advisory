import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Executive Coaching',
  description: 'Individuell och teambaserad executive coaching för C-suite och senior leaders.',
  alternates: { canonical: '/coaching' },
};

export const revalidate = 3600;

export default async function CoachingPage() {
  const heroPhoto = await getPageHeroPhoto('coaching');
  const fallback = getPageFallback('coaching');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Executive Coaching', provider: { '@type': 'Organization', name: 'Blomsnes Advisory' }, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/coaching` }) }} />

      <section className="relative min-h-[55vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.6} priority parallax className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[55vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Coaching</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Executive Coaching</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Ledarskap på högsta nivå kräver kontinuerlig utveckling. Våra ICF-certifierade coaches arbetar med C-suite och senior leaders.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-16 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Coachingprogram</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-border p-8">
              <h3 className="mb-4 text-lg font-semibold">1:1 Executive Coaching</h3>
              <p className="mb-4 font-mono text-xs text-accent">6–12 månader</p>
              <p className="text-sm leading-relaxed text-muted">Individuellt anpassat program för VD:ar, C-suite och seniora ledare med bi-veckovisa sessioner.</p>
            </article>
            <article className="border border-border p-8">
              <h3 className="mb-4 text-lg font-semibold">Ledarteam-coaching</h3>
              <p className="mb-4 font-mono text-xs text-accent">4–8 månader</p>
              <p className="text-sm leading-relaxed text-muted">Utvecklar ledningsgruppens samarbete, beslutsfattande och strategiska alignment.</p>
            </article>
            <article className="border border-border p-8">
              <h3 className="mb-4 text-lg font-semibold">Transition Coaching</h3>
              <p className="mb-4 font-mono text-xs text-accent">3–6 månader</p>
              <p className="text-sm leading-relaxed text-muted">Intensivt stöd vid rollbyten, organisationsförändringar eller krisledarskap.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-warm px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Intresserad?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/boka" className="bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Boka introduktionssamtal</Link>
            <Link href="/om" className="border-[1.5px] border-ink px-8 py-4 text-sm font-medium hover:bg-ink hover:text-paper">Möt våra coaches</Link>
          </div>
        </div>
      </section>
    </>
  );
}
