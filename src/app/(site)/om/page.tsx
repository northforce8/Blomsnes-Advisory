import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'Nordström & Partners — en nordisk managementkonsultfirma som kombinerar strategisk skärpa med operativ handlingskraft.',
  alternates: { canonical: '/om' },
};

export const revalidate = 3600;

export default async function OmPage() {
  const heroPhoto = await getPageHeroPhoto('om');
  const fallback = getPageFallback('om');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'Om Blomsnes Advisory', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/om` }) }} />

      <section className="relative min-h-[55vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.6} priority parallax className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[55vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Om oss</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Om Nordström &amp; Partners</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Vi är en nordisk managementkonsultfirma grundad på övertygelsen att strategi utan exekvering är meningslös.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Vår mission</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">Att hjälpa nordiska organisationer överbrygga gapet mellan strategisk ambition och operativ verklighet — med integritet, precision och orubbligt resultatfokus.</p>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-16 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Våra värderingar</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-border p-8"><h3 className="mb-4 text-lg font-semibold">Resultatfokus</h3><p className="text-sm text-muted">Varje engagemang mäts mot konkreta affärsresultat.</p></article>
            <article className="border border-border p-8"><h3 className="mb-4 text-lg font-semibold">Partnerskap</h3><p className="text-sm text-muted">Vi arbetar sida vid sida med era team.</p></article>
            <article className="border border-border p-8"><h3 className="mb-4 text-lg font-semibold">Integritet</h3><p className="text-sm text-muted">Vi säger vad som behöver sägas, inte vad ni vill höra.</p></article>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-warm px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light">Vill du veta mer?</h2>
          <Link href="/kontakt" className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-accent">Kontakta oss <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
