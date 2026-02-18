import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageSectionPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Strategi till Resultat',
  description: 'Vår signaturmetod som tar organisationer från strategisk vision till mätbara affärsresultat.',
  alternates: { canonical: '/strategi-till-resultat' },
};

export const revalidate = 3600;

export default async function StrategiPage() {
  const heroPhoto = await getPageHeroPhoto('strategi-till-resultat');
  const sectionPhoto = await getPageSectionPhoto('strategi-till-resultat');
  const fallback = getPageFallback('strategi-till-resultat');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Strategi till Resultat', provider: { '@type': 'Organization', name: 'Blomsnes Advisory' }, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/strategi-till-resultat` }) }} />

      <section className="relative min-h-[55vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.6} priority parallax className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[55vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Signaturmetod</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Strategi till Resultat</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">De flesta strategier misslyckas inte för att de är fel — de misslyckas för att de aldrig exekveras.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-16 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Metodiken</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <article className="border-l-2 border-accent pl-8"><p className="mb-2 font-mono text-xs text-accent">Fas 1</p><h3 className="mb-4 text-xl font-semibold">Strategisk diagnostik</h3><p className="text-sm text-muted">Djupanalys av strategisk position och interna kapabiliteter.</p></article>
            <article className="border-l-2 border-accent pl-8"><p className="mb-2 font-mono text-xs text-accent">Fas 2</p><h3 className="mb-4 text-xl font-semibold">Strategidesign</h3><p className="text-sm text-muted">Handlingsplan med milstolpar, ägarskap och KPI-ramverk.</p></article>
            <article className="border-l-2 border-accent pl-8"><p className="mb-2 font-mono text-xs text-accent">Fas 3</p><h3 className="mb-4 text-xl font-semibold">Implementeringsstöd</h3><p className="text-sm text-muted">Hands-on stöd med löpande justering baserat på resultat.</p></article>
            <article className="border-l-2 border-accent pl-8"><p className="mb-2 font-mono text-xs text-accent">Fas 4</p><h3 className="mb-4 text-xl font-semibold">Resultatverifiering</h3><p className="text-sm text-muted">Systematisk uppföljning och dokumentation av lärdomar.</p></article>
          </div>
        </div>
      </section>

      <section className="relative h-56 overflow-hidden">
        <UnsplashImage photo={sectionPhoto} fallback={fallback} variant="background" overlay overlayOpacity={0.25} parallax className="absolute inset-0" />
      </section>

      <section className="border-t border-border bg-warm px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Redo att gå från strategi till resultat?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/boka" className="bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Boka strategisamtal</Link>
            <Link href="/case" className="border-[1.5px] border-ink px-8 py-4 text-sm font-medium hover:bg-ink hover:text-paper">Se resultat</Link>
          </div>
        </div>
      </section>
    </>
  );
}
