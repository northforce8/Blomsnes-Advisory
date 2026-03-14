import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { formatDate } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { getTranslations, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

/* ── Slug → translation key mapping ── */

const SLUG_MAP: Record<string, { key: string; readTime: string; date: string }> = {
  "strategi-inte-lever": { key: "featured", readTime: "6 min", date: "2025-01-15" },
  "lyssna-innan-du-leder": { key: "post1", readTime: "5 min", date: "2024-12-20" },
  "digital-transformation-inte-tekniken": { key: "post2", readTime: "7 min", date: "2024-11-28" },
  "fran-osakerhet-till-beslutskraft": { key: "post3", readTime: "8 min", date: "2024-11-05" },
  "mata-det-som-raknas": { key: "post4", readTime: "6 min", date: "2024-10-12" },
  "forandringsinitiativ-misslyckas": { key: "post5", readTime: "7 min", date: "2024-09-18" },
};

const SLUG_ORDER = Object.keys(SLUG_MAP);

/* ── Metadata ── */

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = SLUG_MAP[slug];
  if (!entry) return {};

  const t = await getTranslations("blog");
  const title = t(`${entry.key}Title`);
  const description = t(`${entry.key}Excerpt`);

  return {
    title: `${title} — NorthForce Advisory`,
    description,
    openGraph: { title, description },
  };
}

/* ── Static params ── */

export function generateStaticParams() {
  return SLUG_ORDER.map((slug) => ({ slug }));
}

/* ── Page ── */

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = SLUG_MAP[slug];
  if (!entry) notFound();

  const t = await getTranslations("blog");
  const locale = await getLocale();

  const title = t(`${entry.key}Title`);
  const excerpt = t(`${entry.key}Excerpt`);
  const category = t(`${entry.key}Category`);
  const body: string[] = [];
  for (let i = 1; i <= 20; i++) {
    try {
      const key = `${entry.key}Body${i}`;
      const p = t(key);
      // next-intl returns the key path when translation is missing
      if (!p || p === key || p === `blog.${key}` || p.endsWith(`Body${i}`)) break;
      body.push(p);
    } catch {
      break;
    }
  }

  /* ── Next / Prev ── */
  const currentIndex = SLUG_ORDER.indexOf(slug);
  const prevSlug = currentIndex > 0 ? SLUG_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUG_ORDER.length - 1 ? SLUG_ORDER[currentIndex + 1] : null;
  const prevTitle = prevSlug ? t(`${SLUG_MAP[prevSlug].key}Title`) : null;
  const nextTitle = nextSlug ? t(`${SLUG_MAP[nextSlug].key}Title`) : null;

  /* ── JSON-LD Article Schema ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/logo.svg` },
    },
    datePublished: entry.date,
    dateModified: entry.date,
    mainEntityOfPage: `${SITE_CONFIG.url}/blogg/${slug}`,
    inLanguage: locale === "en" ? "en" : locale === "no" ? "nb" : "sv",
    articleSection: category,
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: t("label"), href: "/blogg" }, { name: title, href: `/blogg/${slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── Header ── */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/blogg" className="inline-flex items-center font-body text-sm text-[#0F172A]/40 hover:text-[#0F172A]/70 transition-colors duration-200 mb-10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("label")}
            </Link>
            <div className="max-w-3xl">
              <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/30">{category}</span>
              <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-[1.08] tracking-tight">{title}</h1>
              <p className="mt-8 font-body text-xl text-[#4B5563] leading-relaxed">{excerpt}</p>
              <div className="mt-8 flex items-center gap-4 font-body text-sm text-[#0F172A]/30">
                <span className="text-[#0F172A]/50 font-semibold">NorthForce Advisory</span>
                <span className="w-1 h-1 rounded-full bg-[#0F172A]/15" />
                <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                <span className="w-1 h-1 rounded-full bg-[#0F172A]/15" />
                <span>{entry.readTime}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="pb-28 lg:pb-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="border-t border-[#0F172A]/[0.06] pt-12 space-y-6">
                {body.map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return <h2 key={i} className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight tracking-tight pt-8">{paragraph.slice(3)}</h2>;
                  }
                  if (paragraph.startsWith("### ")) {
                    return <h3 key={i} className="font-display text-xl md:text-2xl font-bold text-[#0F172A] leading-tight tracking-tight pt-4">{paragraph.slice(4)}</h3>;
                  }
                  return <p key={i} className="font-body text-lg text-[#4B5563] leading-relaxed">{paragraph}</p>;
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Prev / Next Navigation ── */}
      <section className="py-16 lg:py-20 border-t border-[#0F172A]/[0.06] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevSlug && prevTitle ? (
              <Link href={`/blogg/${prevSlug}`} className="group">
                <span className="font-body text-sm text-[#0F172A]/30">&larr;</span>
                <span className="block mt-2 font-display text-lg font-bold text-[#0F172A] group-hover:text-[#0F172A]/60 transition-colors duration-300">{prevTitle}</span>
              </Link>
            ) : <div />}
            {nextSlug && nextTitle ? (
              <Link href={`/blogg/${nextSlug}`} className="group text-right">
                <span className="font-body text-sm text-[#0F172A]/30">&rarr;</span>
                <span className="block mt-2 font-display text-lg font-bold text-[#0F172A] group-hover:text-[#0F172A]/60 transition-colors duration-300">{nextTitle}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 lg:py-36 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">{t("ctaTitle")}</h2>
              <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">{t("ctaDesc")}</p>
              <Link href="/kontakt" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">{t("ctaCta")} <ArrowRight className="ml-3 w-4 h-4" /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
