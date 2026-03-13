import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

export const metadata: Metadata = { title: "Case", description: "Se hur Blomsnes Development har hjälpt företag växa genom strategisk affärsutveckling och coaching." };

const cases = [
  { number: "01", category: "Strategisk Affärsutveckling", title: "Tillväxtstrategi för tjänsteföretag i förändring", challenge: "Ett medelstort tjänsteföretag stod inför stagnerande tillväxt och ökande konkurrens. Den befintliga affärsmodellen hade nått sin gräns.", approach: "Genom djupgående marknads- och konkurrensanalys identifierade vi nya tillväxtmöjligheter och utformade en differentierad positioneringsstrategi.", results: ["Ny strategisk riktning förankrad i hela organisationen", "Tre nya tillväxtområden med hög potential identifierade", "Ökad omsättning inom 12 månader", "Stärkt varumärkesposition"] },
  { number: "02", category: "Digital Transformation", title: "Digital mognad i traditionell bransch", challenge: "En organisation behövde modernisera processer och kundupplevelser för att möta förändrade krav och ny konkurrens från digitala aktörer.", approach: "Vi genomförde en digital mognadsbedömning och skapade en transformationsroadmap med fokus på kundresan och interna processer.", results: ["Digital transformationsplan med tydlig prioritering", "Digitaliserad kundresa med ökad kundnöjdhet", "Effektiviserade processer som frigjorde resurser", "Ny digital kompetens i organisationen"] },
  { number: "03", category: "Coaching & Ledarskap", title: "Ledarskapscoaching för ny VD", challenge: "En nytillträdd VD behövde snabbt etablera sig, bygga förtroende och navigera flera parallella förändringsinitiativ.", approach: "Genom individuell coaching arbetade vi med ledarskapsvisionen, förändringsledning och kommunikation med nyckelintressenter.", results: ["Tydlig ledarskapsvision förankrad i organisationen", "Framgångsrik omorganisation genomförd", "Ökad tillit från styrelse och ledningsgrupp", "Personlig tillväxt och ökat ledarskapsmod"] },
];

export default function CasePage() {
  return (
    <>
      <section className="py-28 lg:py-36 bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6"><div className="h-px w-12 bg-white/20" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40">Case</span></div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">Resultat som talar<br />för sig själva</h1>
              <p className="mt-8 font-body text-lg text-white/50 max-w-2xl leading-relaxed">Varje uppdrag är unikt, men målet är alltid detsamma — verkliga, mätbara resultat som gör skillnad.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {cases.map((c, i) => (
            <AnimatedSection key={c.number} delay={i * 60}>
              <article className="py-20 lg:py-28 border-b border-[#0F172A]/[0.06] last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  <div className="lg:col-span-5">
                    <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{c.number}</span>
                    <span className="ml-4 font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0F172A]/30">{c.category}</span>
                    <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-[1.12] tracking-tight">{c.title}</h2>
                  </div>
                  <div className="lg:col-span-7 space-y-10">
                    <div><h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-3">Utmaning</h3><p className="font-body text-[#4B5563] leading-relaxed">{c.challenge}</p></div>
                    <div><h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-3">Angreppssätt</h3><p className="font-body text-[#4B5563] leading-relaxed">{c.approach}</p></div>
                    <div className="p-8 lg:p-10" style={{ backgroundColor: "#F5F0EB" }}>
                      <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-6">Resultat</h3>
                      <ul className="space-y-4">{c.results.map((r) => (<li key={r} className="flex items-start gap-4 font-body text-[#4B5563]"><div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/20 mt-2.5 flex-shrink-0" /><span>{r}</span></li>))}</ul>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-[#0F172A] px-8 py-20 sm:px-16 sm:py-24 lg:px-24 lg:py-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">Vill ni skapa liknande resultat?</h2>
                <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">Varje framgångshistoria börjar med ett samtal.</p>
                <Link href="/boka" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">Boka samtal <ArrowRight className="ml-3 w-4 h-4" /></Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
