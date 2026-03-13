import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Strategisk Affärsutveckling`,
};

const capabilities = [
  {
    number: "01",
    title: "Strategisk Rådgivning",
    description:
      "Vi identifierar de avgörande vägvalen och bygger strategier som transformerar hela verksamheter — inte bara enskilda funktioner.",
    href: "/tjanster",
  },
  {
    number: "02",
    title: "Digital Transformation",
    description:
      "Vi leder er organisation genom det digitala skiftet med fokus på affärsvärde, förändringsledning och mätbar avkastning.",
    href: "/tjanster",
  },
  {
    number: "03",
    title: "Ledarskap & Exekvering",
    description:
      "Vi stärker ledare och ledningsgrupper att fatta bättre beslut, mobilisera organisationer och leverera resultat under press.",
    href: "/coaching",
  },
];

const methodology = [
  { phase: "Diagnos", text: "Djupgående analys av verksamhet, marknad och organisation. Vi kartlägger den strategiska verkligheten — inte antagandena." },
  { phase: "Strategi", text: "Skräddarsydda strategiska ramverk med tydliga prioriteringar, mätbara mål och konkret handlingsplan." },
  { phase: "Exekvering", text: "Implementeringsstöd som säkerställer att strategin lever i organisationen. Vi står kvar tills resultaten är levererade." },
  { phase: "Resultat", text: "Kontinuerlig mätning, optimering och kunskapsöverföring. Hållbar tillväxt — inte tillfälliga effekter." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ A. HERO ═══ */}
      <section className="relative -mt-20 h-[100svh] min-h-[720px] flex items-center overflow-hidden">
        <Image src="/hero.jpg" alt="Nordisk arkitektur — strategisk miljö" fill priority className="object-cover object-center" sizes="100vw" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/75 via-[#0F172A]/55 to-[#0F172A]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/50 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-white/30" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60">Blomsnes Development</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.04] tracking-tight">
                  Strategier som<br />förändrar företag
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <p className="mt-8 font-body text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
                  Vi hjälper nordiska företag och ledningsgrupper att navigera komplexitet, accelerera tillväxt och bygga organisationer redo för framtiden.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={450}>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Link href="/boka" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">
                    Inled ett samtal <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                  <Link href="/case" className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/[0.06] transition-all duration-300">
                    Se våra resultat
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══ B. STRATEGIC POSITIONING ═══ */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#0F172A]/15" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">Om oss</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">
                  Rådgivning byggd på<br />nordisk precision
                </h2>
                <p className="mt-8 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  Blomsnes Development grundades av Janicke Blomsnes med en övertygelse: att strategisk rådgivning ska leda till verklig förändring. Vi kombinerar analytiskt djup med operativ skärpa och arbetar alltid nära ledningen — från diagnos till leverans.
                </p>
                <p className="mt-6 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  Vårt angreppssätt är förankrat i den nordiska ledarskapstraditionen: transparens, tillit och beslutsamhet.
                </p>
                <Link href="/om" className="inline-flex items-center mt-10 font-body text-sm font-semibold tracking-wide text-[#0F172A] group">
                  <span className="border-b border-[#0F172A]/20 group-hover:border-[#0F172A] transition-colors duration-300">Lär känna oss</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                <Image src="/strategy.jpg" alt="Strategiskt ledarskap i nordisk miljö" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/10 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ C. CAPABILITIES ═══ */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0F172A]/15" />
                <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">Kompetensområden</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">
                Expertis som driver förändring
              </h2>
            </div>
          </AnimatedSection>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0F172A]/[0.08]">
            {capabilities.map((s, i) => (
              <AnimatedSection key={s.number} delay={i * 120}>
                <Link href={s.href} className="group block h-full p-10 lg:p-12 hover:bg-white transition-colors duration-500" style={{ backgroundColor: "#F5F0EB" }}>
                  <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{s.number}</span>
                  <h3 className="mt-6 font-display text-xl lg:text-2xl font-bold text-[#0F172A] leading-tight">{s.title}</h3>
                  <p className="mt-4 font-body text-[#4B5563] leading-relaxed">{s.description}</p>
                  <div className="mt-8 flex items-center font-body text-sm font-semibold text-[#0F172A]/40 group-hover:text-[#0F172A] transition-colors duration-300">
                    <span className="border-b border-current/30 group-hover:border-current transition-colors duration-300">Utforska</span>
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ D. METHODOLOGY ═══ */}
      <section className="py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-white/20" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40">Vår metodik</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight">
                  Från insikt till<br />mätbar förändring
                </h2>
                <p className="mt-8 font-body text-lg text-white/50 max-w-lg leading-relaxed">
                  Vår process är designad för att eliminera gapet mellan strategi och verklighet. Varje fas har tydliga leverabler, ägarskap och mätpunkter.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="mt-12 relative aspect-[4/3] overflow-hidden">
                  <Image src="/leadership.jpg" alt="Ledarskap och strategisk transformation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
                  <div className="absolute inset-0 bg-[#0F172A]/15" />
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:pt-4">
              {methodology.map((step, i) => (
                <AnimatedSection key={step.phase} delay={i * 100}>
                  <div className="py-8 border-t border-white/[0.08]">
                    <div className="flex items-baseline gap-6">
                      <span className="font-display text-sm font-bold text-white/15 tabular-nums w-8 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">{step.phase}</h3>
                        <p className="mt-3 font-body text-white/45 leading-relaxed max-w-md">{step.text}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={500}>
                <div className="mt-10 pl-14">
                  <Link href="/strategi-till-resultat" className="inline-flex items-center font-body text-sm font-semibold tracking-wide text-white group">
                    <span className="border-b border-white/25 group-hover:border-white transition-colors duration-300">Fördjupa dig i vår metodik</span>
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ E. CTA ═══ */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-[#0F172A] px-8 py-20 sm:px-16 sm:py-24 lg:px-24 lg:py-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                  Varje transformation börjar med ett samtal
                </h2>
                <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">
                  Vi bjuder in till ett förutsättningslöst samtal om er verksamhet, era utmaningar och era ambitioner. Inga förpliktelser — bara ett ärligt utbyte mellan seniora rådgivare och beslutsfattare.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Link href="/boka" className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">
                    Boka ett strategiskt samtal <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                  <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/[0.04] transition-all duration-300">
                    Kontakta oss
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
