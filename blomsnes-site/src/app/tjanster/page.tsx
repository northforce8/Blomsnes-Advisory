import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Zap,
  BarChart3,
  Compass,
  Layers,
  Users,
} from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Strategisk affärsutveckling, digital transformation, coaching och ledarskap. Upptäck hur Blomsnes Development kan hjälpa ditt företag att växa.",
};

const services = [
  {
    icon: <Target className="w-7 h-7" />,
    title: "Strategisk Affärsutveckling",
    description:
      "Jag hjälper dig att identifiera tillväxtmöjligheter, bygga hållbara strategier och genomföra dem med tydliga resultat. Genom djupgående analyser av din marknad, dina konkurrenter och din organisation skapar vi en strategi som är unik för din verksamhet.",
    features: [
      "Marknads- och konkurrensanalys",
      "Strategisk positionering",
      "Tillväxtstrategi och affärsplanering",
      "Implementeringsstöd och uppföljning",
    ],
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Digital Transformation",
    description:
      "Digital transformation handlar inte bara om teknik — det handlar om att förändra hur din organisation skapar värde. Jag guidar dig genom hela resan, från vision till verklighet, med fokus på att teknologin tjänar verksamheten.",
    features: [
      "Digital mognadsbedömning",
      "Transformationsstrategi och roadmap",
      "Processoptimering och digitalisering",
      "Förändringsledning och adoption",
    ],
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Från Strategi till Resultat",
    description:
      "Många företag har strategier — men få lyckas omsätta dem till verkliga resultat. Min beprövade metodik tar dig från strategiskt tänkande till konkret handling och mätbar framgång.",
    features: [
      "Strategisk handlingsplan",
      "Mål- och KPI-ramverk",
      "Löpande uppföljning och optimering",
      "Resultatbaserad rapportering",
    ],
  },
  {
    icon: <Compass className="w-7 h-7" />,
    title: "Coaching & Ledarskap",
    description:
      "Personlig coaching för företagsledare och entreprenörer som vill utveckla sitt ledarskap, fatta bättre beslut och navigera komplexa utmaningar med större säkerhet.",
    features: [
      "Individuell ledarskapscoaching",
      "Beslutsfattande och prioritering",
      "Personlig utveckling och tillväxt",
      "Stresshantering och balans",
    ],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Organisationsutveckling",
    description:
      "En stark organisation är grunden för hållbar tillväxt. Jag hjälper dig att bygga en organisation som är redo att möta framtidens utmaningar — med rätt struktur, kultur och kompetens.",
    features: [
      "Organisationsanalys och design",
      "Kulturutveckling och värderingsarbete",
      "Kompetensutveckling och teambuilding",
      "Förändringsledning",
    ],
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Workshops & Föreläsningar",
    description:
      "Inspirerande och handgripliga workshops och föreläsningar som ger ditt team konkreta verktyg att arbeta med. Anpassade efter era behov och er kontext.",
    features: [
      "Strategiworkshops",
      "Ledarskapsutveckling i grupp",
      "Innovationsworkshops",
      "Skräddarsydda föreläsningar",
    ],
  },
];

export default function TjansterPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-sage">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-4">
                Tjänster
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Skräddarsydda lösningar för din tillväxt
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Varje verksamhet är unik. Jag erbjuder ett brett spektrum av
                tjänster som anpassas efter just dina behov och mål — alltid med
                fokus på att skapa verkligt, mätbart värde.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 50}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-950 mb-4">
                      {service.title}
                    </h2>
                    <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <div className="p-8 rounded-2xl gradient-warm border border-brand-100">
                      <h3 className="font-display text-lg font-semibold text-charcoal-950 mb-4">
                        Det ingår
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 font-body text-charcoal-700"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-sage-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-b border-charcoal-100 mt-16" />
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
                Vilken tjänst passar dig bäst?
              </h2>
              <p className="font-body text-lg text-sage-200 leading-relaxed mb-10 max-w-xl mx-auto">
                Osäker på var du ska börja? Boka ett kostnadsfritt samtal så
                hjälper jag dig att identifiera rätt nästa steg.
              </p>
              <Link
                href="/boka"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-800 font-body text-base font-medium rounded-lg hover:bg-sage-50 transition-colors duration-200"
              >
                Boka ett kostnadsfritt samtal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
