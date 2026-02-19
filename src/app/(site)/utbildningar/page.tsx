import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Utbildningar & Workshops',
  description: 'Skräddarsydda utbildningsprogram inom ledarskap, strategi och förändringsledning.',
  alternates: { canonical: '/utbildningar' },
};

export const revalidate = 3600;

export default async function UtbildningarPage() {
  const heroPhoto = await getPageHeroPhoto('utbildningar');
  const fallback = getPageFallback('utbildningar');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: 'Blomsnes Advisory Utbildningar', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/utbildningar` }) }} />

      <section className="relative min-h-[55vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.6} priority parallax className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[55vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Utbildningar</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Utbildningar &amp; Workshops</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Kompetensutveckling som ger omedelbar effekt. Våra program kombinerar forskning med praktisk tillämpning.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-16 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Program</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-border p-8">
              <h3 className="mb-4 text-lg font-semibold">Strategiskt Ledarskap</h3>
              <p className="mb-4 font-mono text-xs text-accent">3 dagar</p>
              <p className="text-sm leading-relaxed text-muted">Intensivprogram för ledare som vill stärka sin förmåga att formulera och driva strategisk förändring.</p>
            </article>
            <article className="border border-border p-8">
              <h3 className="mb-4 text-lg font-semibold">Förändringsledning i Praktiken</h3>
              <p className="mb-4 font-mono text-xs text-accent">2 dagar</p>
              <p className="text-sm leading-relaxed text-muted">Workshop med fokus på att leda organisationer genom komplex transformation.</p>
            </article>
            <article className="border border-border p-8">
              <h3 className="mb-4 text-lg font-semibold">Skräddarsydda Program</h3>
              <p className="mb-4 font-mono text-xs text-accent">Anpassat</p>
              <p className="text-sm leading-relaxed text-muted">Vi designar och levererar utbildningar baserat på er organisations specifika behov.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-warm px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Diskutera ert utbildningsbehov</h2>
          <Link href="/kontakt" className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Kontakta oss <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
