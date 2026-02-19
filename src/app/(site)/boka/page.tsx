import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Boka konsultation',
  description: 'Boka ett kostnadsfritt strategisamtal med en av våra seniora rådgivare.',
  alternates: { canonical: '/boka' },
};

export const revalidate = 3600;

export default async function BokaPage() {
  const heroPhoto = await getPageHeroPhoto('boka');
  const fallback = getPageFallback('boka');

  return (
    <>
      <section className="relative min-h-[45vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.6} priority className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[45vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Boka</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Boka konsultation</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Välj typ av möte och en tid som passar. Första samtalet är kostnadsfritt.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-12 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Välj mötestyp</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">Discovery-samtal</h3>
              <p className="mb-4 font-mono text-xs text-accent">30 min — Kostnadsfritt</p>
              <p className="text-sm leading-relaxed text-muted">Första möte för att diskutera era behov och hur vi kan hjälpa.</p>
            </article>
            <article className="border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">Strategiworkshop</h3>
              <p className="mb-4 font-mono text-xs text-accent">90 min</p>
              <p className="text-sm leading-relaxed text-muted">Fördjupad session kring en specifik strategisk utmaning.</p>
            </article>
            <article className="border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">Coaching-introduktion</h3>
              <p className="mb-4 font-mono text-xs text-accent">45 min</p>
              <p className="text-sm leading-relaxed text-muted">Prova-på-session med en av våra executive coaches.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-prose">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Boka via kontakt</h2>
          <p className="mb-8 text-muted">Kontakta oss via formuläret så återkommer vi med lediga tider inom 24 timmar.</p>
          <Link href="/kontakt" className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Kontakta oss för att boka <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
