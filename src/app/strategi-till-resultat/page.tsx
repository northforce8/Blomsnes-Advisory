import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

export const metadata: Metadata = { title: "Strategi till Resultat", description: "En beprövad metodik från Blomsnes Development som tar er från strategiskt tänkande till konkreta, mätbara resultat." };

const phases = [
  { phase: "Fas 1", title: "Djupdykning & Analys", description: "Vi börjar med att förstå er verksamhet på djupet. Genom intervjuer, dataanalys och marknadsundersökning kartlägger vi er nuvarande situation, era styrkor och de möjligheter som finns.", deliverables: ["Nulägesanalys och gap-analys", "Marknads- och konkurrensöversikt", "Identifierade tillväxtmöjligheter", "Styrke- och sårbarhetskarta"], duration: "2–4 veckor" },
  { phase: "Fas 2", title: "Strategi & Planering", description: "Med insikterna som grund bygger vi en strategi som är specifik, mätbar och genomförbar. Vi definierar tydliga mål, prioriterar insatser och skapar en handlingsplan med konkreta milstolpar.", deliverables: ["Strategisk handlingsplan", "Prioriterade initiativ och milstolpar", "Mål- och KPI-ramverk", "Resurs- och tidsplan"], duration: "2–3 veckor" },
  { phase: "Fas 3", title: "Implementation & Exekvering", description: "Nu omsätter vi strategin i handling. Vi arbetar nära er och ert team för att säkerställa att varje initiativ genomförs med kvalitet.", deliverables: ["Projektledning och koordinering", "Regelbundna avstämningar och checkpoints", "Problemlösning och beslutsunderlag", "Löpande statusrapporter"], duration: "Löpande, typiskt 3–12 månader" },
  { phase: "Fas 4", title: "Mätning & Optimering", description: "Vi mäter kontinuerligt mot uppsatta mål. Genom regelbunden analys identifierar vi vad som fungerar och vilka nya möjligheter som uppstår.", deliverables: ["Resultatrapportering mot KPI:er", "Analys och lärdomar", "Optimeringsförslag", "Plan för nästa fas av tillväxt"], duration: "Löpande med månatliga utvärderingar" },
];

export default function StrategiTillResultatPage() {
  return (
    <>
      <section className="py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="h-px w-12 bg-white/20" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40">Metodik</span></div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">Från strategi<br />till resultat</h1>
                <p className="mt-8 font-body text-lg text-white/50 max-w-lg leading-relaxed">Vår beprövade metodik tar er från nuläge till önskat läge — steg för steg, med tydliga mål och mätbara resultat.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/strategy.jpg" alt="Strategisk process" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
                <div className="absolute inset-0 bg-[#0F172A]/15" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {phases.map((p, i) => (
            <AnimatedSection key={p.phase} delay={i * 40}>
              <div className="py-20 lg:py-24 border-b border-[#0F172A]/[0.06] last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  <div className="lg:col-span-5">
                    <div className="sticky top-28">
                      <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ml-4 font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0F172A]/35">{p.phase}</span>
                      <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-[1.12] tracking-tight">{p.title}</h2>
                      <p className="mt-6 font-body text-[#4B5563] leading-relaxed">{p.description}</p>
                      <p className="mt-6 font-body text-sm text-[#0F172A]/30">Tidsram: {p.duration}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="p-8 lg:p-10" style={{ backgroundColor: "#F5F0EB" }}>
                      <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-6">Leverabler</h3>
                      <ul className="space-y-5">{p.deliverables.map((d) => (<li key={d} className="flex items-start gap-4 font-body text-[#4B5563]"><div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/20 mt-2.5 flex-shrink-0" /><span>{d}</span></li>))}</ul>
                    </div>
                  </div>
                </div>
              </div>
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
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">Redo att gå från strategi till resultat?</h2>
                <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">Varje resa börjar med ett första steg. Boka ett kostnadsfritt samtal så pratar vi om hur denna metodik kan anpassas för er verksamhet.</p>
                <Link href="/boka" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">Boka samtal <ArrowRight className="ml-3 w-4 h-4" /></Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
