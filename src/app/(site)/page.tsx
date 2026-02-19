import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageSectionPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Nordström & Partners | Strategisk Rådgivning',
  description:
    'Vi hjälper nordiska företag navigera komplex förändring, bygga ledarskapskapacitet och leverera hållbar tillväxt.',
  alternates: { canonical: '/' },
};

export const revalidate = 3600;

export default async function HomePage() {
  const heroPhoto = await getPageHeroPhoto('home');
  const sectionPhoto = await getPageSectionPhoto('home');
  const fallback = getPageFallback('home');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ConsultingBusiness',
            name: 'Blomsnes Advisory',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app',
            areaServed: ['SE', 'NO', 'DK', 'FI'],
          }),
        }}
      />

      <section className="relative min-h-[90vh] overflow-hidden">
        <UnsplashImage
          photo={heroPhoto}
          fallback={fallback}
          variant="hero"
          overlay
          overlayOpacity={0.55}
          priority
          parallax
          className="absolute inset-0"
        />
        <div className="relative z-20 flex min-h-[90vh] items-center px-6 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light">
              <span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />
              Strategisk rådgivning
            </p>
            <h1 className="max-w-4xl font-serif text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-paper">
              Från strategi till <em className="text-accent-light">mätbart</em> resultat
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
              Vi hjälper nordiska företag att navigera komplex förändring, bygga
              ledarskapskapacitet och leverera hållbar tillväxt.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/boka" className="inline-flex items-center gap-3 bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-accent-light">
                Boka strategisamtal <span aria-hidden="true">→</span>
              </Link>
              <Link href="/tjanster" className="inline-flex items-center gap-3 border-[1.5px] border-paper/40 px-8 py-4 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper/10">
                Utforska våra tjänster
              </Link>
            </div>
            <div className="mt-20 flex gap-12 border-t border-paper/15 pt-8">
              <div><p className="font-serif text-3xl font-semibold text-paper">150+</p><p className="text-xs text-paper/50">Klienter</p></div>
              <div><p className="font-serif text-3xl font-semibold text-paper">10+</p><p className="text-xs text-paper/50">Års erfarenhet</p></div>
              <div><p className="font-serif text-3xl font-semibold text-paper">92</p><p className="text-xs text-paper/50">NPS</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
            <span className="mr-4 inline-block h-px w-8 bg-accent align-middle" />Vad vi levererar
          </p>
          <h2 className="mb-16 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-light">Resultat som förändrar</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/strategi-till-resultat" className="group border border-border bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-6 font-mono text-xs text-accent">01</p>
              <h3 className="mb-4 text-lg font-semibold">Strategi till Resultat</h3>
              <p className="text-sm text-muted">Från vision till exekvering med mätbara milstolpar.</p>
            </Link>
            <Link href="/coaching" className="group border border-border bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-6 font-mono text-xs text-accent">02</p>
              <h3 className="mb-4 text-lg font-semibold">Executive Coaching</h3>
              <p className="text-sm text-muted">Individuell och teambaserad coaching för senior leaders.</p>
            </Link>
            <Link href="/utbildningar" className="group border border-border bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-6 font-mono text-xs text-accent">03</p>
              <h3 className="mb-4 text-lg font-semibold">Utbildningar &amp; Workshops</h3>
              <p className="text-sm text-muted">Skräddarsydda program för ledarskap och förändring.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative h-64 overflow-hidden">
        <UnsplashImage photo={sectionPhoto} fallback={fallback} variant="background" overlay overlayOpacity={0.3} parallax className="absolute inset-0" />
      </section>

      <section className="border-t border-border bg-warm px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Redo att ta nästa steg?</h2>
          <p className="mb-10 text-sm text-muted">Boka ett kostnadsfritt strategisamtal.</p>
          <Link href="/boka" className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Boka strategisamtal <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
