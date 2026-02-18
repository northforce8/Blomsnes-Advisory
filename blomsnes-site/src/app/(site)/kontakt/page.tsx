import type { Metadata } from 'next';
import Link from 'next/link';
import { getPageHeroPhoto, getPageFallback } from '@/lib/unsplash';
import UnsplashImage from '@/components/ui/UnsplashImage';

export const metadata: Metadata = {
  title: 'Kontakta oss',
  description: 'Berätta om era utmaningar. Vi återkommer inom 24 timmar.',
  alternates: { canonical: '/kontakt' },
};

export const revalidate = 3600;

export default async function KontaktPage() {
  const heroPhoto = await getPageHeroPhoto('kontakt');
  const fallback = getPageFallback('kontakt');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Kontakta Blomsnes Advisory', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blomsnes-site.vercel.app'}/kontakt` }) }} />

      <section className="relative min-h-[45vh] overflow-hidden">
        <UnsplashImage photo={heroPhoto} fallback={fallback} variant="hero" overlay overlayOpacity={0.65} priority className="absolute inset-0" />
        <div className="relative z-20 flex min-h-[45vh] items-end px-6 pb-20 lg:px-12">
          <div className="mx-auto w-full max-w-content">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-light"><span className="mr-4 inline-block h-px w-8 bg-accent-light align-middle" />Kontakt</p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.03em] text-paper">Kontakta oss</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Berätta om era utmaningar. Vi återkommer inom 24 timmar med en skräddarsydd plan.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-prose">
          <form action="/api/kontakt" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">Namn *</label>
              <input id="name" name="name" type="text" required className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">E-post *</label>
              <input id="email" name="email" type="email" required className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent" />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium">Företag</label>
              <input id="company" name="company" type="text" className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent" />
            </div>
            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium">Tjänst</label>
              <select id="service" name="service" className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent">
                <option value="">Välj tjänst</option>
                <option value="strategi">Strategi till Resultat</option>
                <option value="coaching">Executive Coaching</option>
                <option value="utbildning">Utbildningar</option>
                <option value="annat">Annat</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">Meddelande *</label>
              <textarea id="message" name="message" rows={6} required className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent" />
            </div>
            <div className="flex items-start gap-3">
              <input id="consent" name="consent" type="checkbox" required className="mt-1" />
              <label htmlFor="consent" className="text-sm text-muted">Jag godkänner <Link href="/integritetspolicy" className="text-accent underline">integritetspolicyn</Link></label>
            </div>
            <button type="submit" className="bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent">Skicka meddelande</button>
          </form>
        </div>
      </section>
    </>
  );
}
