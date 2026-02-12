import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Map, Rocket, BarChart3 } from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Strategi till Resultat",
  description:
    "En beprövad metodik från Blomsnes Development som tar dig från strategiskt tänkande till konkreta, mätbara resultat.",
};

const phases = [
  {
    icon: <Search className="w-7 h-7" />,
    phase: "Fas 1",
    title: "Djupdykning & Analys",
    description:
      "Vi börjar med att förstå din verksamhet på djupet. Genom intervjuer, dataanalys och marknadsundersökning kartlägger vi din nuvarande situation, dina styrkor och de möjligheter som finns.",
    deliverables: [
      "Nulägesanalys och gap-analys",
      "Marknads- och konkurrensöversikt",
      "Identifierade tillväxtmöjligheter",
      "Styrke- och sårbarhetskarta",
    ],
    duration: "2–4 veckor",
  },
  {
    icon: <Map className="w-7 h-7" />,
    phase: "Fas 2",
    title: "Strategi & Planering",
    description:
      "Med insikterna som grund bygger vi en strategi som är specifik, mätbar och genomförbar. Vi definierar tydliga mål, prioriterar insatser och skapar en handlingsplan med konkreta milstolpar.",
    deliverables: [
      "Strategisk handlingsplan",
      "Prioriterade initiativ och milstolpar",
      "Mål- och KPI-ramverk",
      "Resurs- och tidsplan",
    ],
    duration: "2–3 veckor",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    phase: "Fas 3",
    title: "Implementation & Exekvering",
    description:
      "Nu omsätter vi strategin i handling. Jag arbetar nära dig och ditt team för att säkerställa att varje initiativ genomförs med kvalitet. Vi hanterar utmaningar proaktivt och anpassar kursen vid behov.",
    deliverables: [
      "Projektledning och koordinering",
      "Regelbundna avstämningar och checkpoints",
      "Problemlösning och beslutsunderlag",
      "Löpande kommunikation och statusrapporter",
    ],
    duration: "Löpande, typiskt 3–12 månader",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    phase: "Fas 4",
    title: "Mätning & Optimering",
    description:
      "Vi mäter kontinuerligt mot våra uppsatta mål. Genom regelbunden analys identifierar vi vad som fungerar, vad som behöver justeras och vilka nya möjligheter som uppstår längs vägen.",
    deliverables: [
      "Resultatrapportering mot KPI:er",
      "Analys och lärdomar",
      "Optimeringsförslag",
      "Plan för nästa fas av tillväxt",
    ],
    duration: "Löpande med månatliga utvärderingar",
  },
];

export default function StrategiTillResultatPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-sage">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-4">
                Metodik
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Från strategi till resultat
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Min beprövade metodik tar dig från nuläge till önskat läge —
                steg för steg, med tydliga mål och mätbara resultat. Ingen
                strategi är för komplex att omsätta i verklighet om man har rätt
                process och rätt stöd.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Phases */}
      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-20">
            {phases.map((phase, index) => (
              <AnimatedSection key={phase.phase} delay={index * 50}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-5">
                    <div className="sticky top-28">
                      <div className="w-14 h-14 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center mb-4">
                        {phase.icon}
                      </div>
                      <span className="font-body text-sm font-semibold tracking-widest uppercase text-brand-600">
                        {phase.phase}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-950 mt-2 mb-4">
                        {phase.title}
                      </h2>
                      <p className="font-body text-charcoal-600 leading-relaxed">
                        {phase.description}
                      </p>
                      <p className="mt-4 font-body text-sm text-charcoal-500">
                        <span className="font-semibold">Tidsram:</span>{" "}
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="p-8 rounded-2xl gradient-warm border border-brand-100">
                      <h3 className="font-display text-lg font-semibold text-charcoal-950 mb-6">
                        Leverabler
                      </h3>
                      <ul className="space-y-4">
                        {phase.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 font-body text-charcoal-700"
                          >
                            <div className="w-2 h-2 rounded-full bg-sage-600 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < phases.length - 1 && (
                  <div className="border-b border-charcoal-100 mt-20" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-800">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Redo att gå från strategi till resultat?
              </h2>
              <p className="font-body text-lg text-sage-200 leading-relaxed mb-10 max-w-xl mx-auto">
                Varje resa börjar med ett första steg. Boka ett kostnadsfritt
                samtal så pratar vi om hur denna metodik kan anpassas för din
                verksamhet.
              </p>
              <Link
                href="/boka"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-800 font-body text-base font-medium rounded-lg hover:bg-sage-50 transition-colors duration-200"
              >
                Boka samtal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
