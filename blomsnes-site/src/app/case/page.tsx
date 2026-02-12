import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case",
  description:
    "Se hur Blomsnes Development har hjälpt företag att växa genom strategisk affärsutveckling och coaching.",
};

const cases = [
  {
    category: "Strategisk Affärsutveckling",
    title: "Tillväxtstrategi för tjänsteföretag i förändring",
    challenge:
      "Ett medelstort tjänsteföretag stod inför stagnerande tillväxt och ökande konkurrens. Den befintliga affärsmodellen hade nått sin gräns och ledningen var osäker på hur de skulle ta nästa steg.",
    approach:
      "Genom djupgående marknads- och konkurrensanalys identifierade vi nya tillväxtmöjligheter. Vi utformade en differentierad positioneringsstrategi och en stegvis handlingsplan med tydliga milstolpar.",
    results: [
      "Ny strategisk riktning förankrad i hela organisationen",
      "Identifierade tre nya tillväxtområden med hög potential",
      "Ökad omsättning inom 12 månader efter implementering",
      "Stärkt varumärkesposition på marknaden",
    ],
  },
  {
    category: "Digital Transformation",
    title: "Digital mognad i traditionell bransch",
    challenge:
      "En organisation inom en traditionell bransch behövde modernisera sina processer och kundupplevelser för att möta förändrade kundkrav och ny konkurrens från digitala aktörer.",
    approach:
      "Vi genomförde en digital mognadsbedömning och skapade en transformationsroadmap. Fokus låg på att digitalisera kundresan och effektivisera interna processer utan att tappa organisationens kärnvärden.",
    results: [
      "Digital transformationsplan med tydlig prioritering",
      "Digitaliserad kundresa som ökade kundnöjdheten",
      "Effektiviserade processer som frigjorde resurser",
      "Ny digital kompetens etablerad i organisationen",
    ],
  },
  {
    category: "Coaching & Ledarskap",
    title: "Ledarskapscoaching för ny VD",
    challenge:
      "En nytillträdd VD behövde snabbt etablera sig i rollen, bygga förtroende med styrelsen och ledningsgruppen, och navigera flera parallella förändringsinitiativ.",
    approach:
      "Genom individuell coaching arbetade vi med att definiera ledarskapsvisionen, bygga strategier för förändringsledning och utveckla effektiva kommunikationsmönster med nyckelintressenter.",
    results: [
      "Tydlig ledarskapsvision förankrad i organisationen",
      "Framgångsrik genomföring av omorganisation",
      "Ökad tillit från styrelse och ledningsgrupp",
      "Personlig tillväxt och ökat ledarskapsmod",
    ],
  },
];

export default function CasePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-sage">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-4">
                Case
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Resultat som talar för sig själva
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Varje uppdrag är unikt, men målet är alltid detsamma —
                verkliga, mätbara resultat som gör skillnad. Här delar jag
                några exempel på hur jag har hjälpt företag att växa och
                förändras.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Cases */}
      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <AnimatedSection key={caseStudy.title} delay={index * 100}>
                <article className="rounded-2xl border border-charcoal-100 overflow-hidden">
                  <div className="p-8 lg:p-12">
                    <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-brand-600 mb-3">
                      {caseStudy.category}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-950 mb-8">
                      {caseStudy.title}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-display text-base font-semibold text-charcoal-950 mb-3">
                          Utmaning
                        </h3>
                        <p className="font-body text-charcoal-600 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-charcoal-950 mb-3">
                          Angreppssätt
                        </h3>
                        <p className="font-body text-charcoal-600 leading-relaxed">
                          {caseStudy.approach}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-charcoal-950 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-sage-600" />
                          Resultat
                        </h3>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result) => (
                            <li
                              key={result}
                              className="flex items-start gap-2 font-body text-sm text-charcoal-700"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-1.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
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
                Vill du skapa liknande resultat?
              </h2>
              <p className="font-body text-lg text-sage-200 leading-relaxed mb-10 max-w-xl mx-auto">
                Varje framgångshistoria börjar med ett samtal. Boka ett
                kostnadsfritt möte och låt oss diskutera dina möjligheter.
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
