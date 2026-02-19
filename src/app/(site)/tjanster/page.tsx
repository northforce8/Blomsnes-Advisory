import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Tjänster',
  description: 'Skräddarsydda konsulttjänster inom strategi, coaching och utbildning för nordiska företag.',
  alternates: { canonical: '/tjanster' },
};

export const revalidate = 3600;

export default async function TjansterPage() {
  const heroPhoto = await getPageHeroPhoto('tjanster');
  const fallback = getPageFallback('tjanster');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Konsulttjänster', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/tjanster` }) }} />

      <section className="relative min-h-[55vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.6} priority parallax className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[55vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Tjänster</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Våra tjänster</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Skräddarsydda lösningar för nordiska företag som vill växa strategiskt och hållbart.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/strategi-till-resultat" className="group border border-border bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-lg"><p className="mb-6 font-mono text-xs text-accent">01</p><h2 className="mb-4 text-lg font-semibold group-hover:text-accent">Strategi till Resultat</h2><p className="text-sm text-muted">Från vision till exekvering med mätbara milstolpar.</p><p className="mt-6 text-sm font-medium text-accent">Läs mer →</p></Link>
            <Link href="/coaching" className="group border border-border bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-lg"><p className="mb-6 font-mono text-xs text-accent">02</p><h2 className="mb-4 text-lg font-semibold group-hover:text-accent">Executive Coaching</h2><p className="text-sm text-muted">Coaching för C-suite och senior leaders.</p><p className="mt-6 text-sm font-medium text-accent">Läs mer →</p></Link>
            <Link href="/utbildningar" className="group border border-border bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-lg"><p className="mb-6 font-mono text-xs text-accent">03</p><h2 className="mb-4 text-lg font-semibold group-hover:text-accent">Utbildningar &amp; Workshops</h2><p className="text-sm text-muted">Skräddarsydda program inom ledarskap och förändring.</p><p className="mt-6 text-sm font-medium text-accent">Läs mer →</p></Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-12 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Vår process</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="border-l-2 border-accent pl-6"><p className="mb-2 font-mono text-xs text-accent">Fas 1</p><h3 className="mb-2 font-semibold">Diagnostik</h3><p className="text-sm text-muted">Djupanalys av nuläge.</p></div>
            <div className="border-l-2 border-accent pl-6"><p className="mb-2 font-mono text-xs text-accent">Fas 2</p><h3 className="mb-2 font-semibold">Strategi</h3><p className="text-sm text-muted">Skräddarsydd handlingsplan.</p></div>
            <div className="border-l-2 border-accent pl-6"><p className="mb-2 font-mono text-xs text-accent">Fas 3</p><h3 className="mb-2 font-semibold">Exekvering</h3><p className="text-sm text-muted">Implementering med stöd.</p></div>
            <div className="border-l-2 border-accent pl-6"><p className="mb-2 font-mono text-xs text-accent">Fas 4</p><h3 className="mb-2 font-semibold">Mätning</h3><p className="text-sm text-muted">Uppföljning mot mål.</p></div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-warm px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Redo att börja?</h2>
          <Link href="/boka" className="bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Boka strategisamtal</Link>
        </div>
      </section>
    </>
  );
}
