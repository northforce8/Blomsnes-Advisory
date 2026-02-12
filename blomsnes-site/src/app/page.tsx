import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Zap,
  Compass,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/components/ui";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Strategisk Affärsutveckling`,
};

const iconMap: Record<string, React.ReactNode> = {
  target: <Target className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  compass: <Compass className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
};

const processSteps = [
  {
    number: "01",
    title: "Analys & Insikt",
    description:
      "Vi börjar med att förstå din nuvarande situation, dina mål och de utmaningar som står i vägen. Genom djupgående analys skapar vi en tydlig bild av var du befinner dig och vart du vill nå.",
  },
  {
    number: "02",
    title: "Strategi & Plan",
    description:
      "Baserat på insikterna utformar vi en skräddarsydd strategi med konkreta milstolpar. Varje steg har tydliga mål och mätbara resultat.",
  },
  {
    number: "03",
    title: "Implementation & Stöd",
    description:
      "Vi omsätter strategin i handling. Jag arbetar nära dig och ditt team för att säkerställa att varje åtgärd genomförs med kvalitet och i rätt tid.",
  },
  {
    number: "04",
    title: "Resultat & Tillväxt",
    description:
      "Vi mäter, utvärderar och optimerar löpande. Målet är alltid hållbar tillväxt och långsiktigt värdeskapande för din verksamhet.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-sage">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <Container>
          <div className="section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-6">
                  Janicke Blomsnes
                </span>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-950 leading-[1.1] mb-8">
                  Strategisk affärsutveckling som skapar{" "}
                  <span className="text-gradient">verkliga resultat</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="font-body text-lg md:text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed mb-10">
                  Jag hjälper ambitiösa företag och ledare att navigera
                  förändring, bygga hållbara strategier och uppnå mätbar
                  tillväxt. Från insikt till implementation — alltid med fokus på
                  resultat.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/boka"
                    className="inline-flex items-center justify-center px-8 py-4 bg-sage-700 text-white font-body text-base font-medium rounded-lg hover:bg-sage-800 transition-all duration-300"
                  >
                    Boka ett kostnadsfritt samtal
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    href="/om"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage-700 text-sage-700 font-body text-base font-medium rounded-lg hover:bg-sage-700 hover:text-white transition-all duration-300"
                  >
                    Lär känna mig
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <Container>
          <AnimatedSection>
            <SectionHeading
              tag="Tjänster"
              title="Hur jag hjälper dig att växa"
              description="Jag erbjuder skräddarsydda tjänster inom strategisk affärsutveckling, digital transformation och ledarskapscoaching."
            />
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group block p-8 lg:p-10 rounded-2xl border border-charcoal-100 hover:border-sage-200 hover:shadow-lg hover:shadow-sage-100/50 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center mb-6 group-hover:bg-sage-100 transition-colors duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center mt-6 font-body text-sm font-medium text-sage-700 group-hover:text-sage-800">
                    Läs mer
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-padding gradient-warm">
        <Container>
          <AnimatedSection>
            <SectionHeading
              tag="Process"
              title="Från strategi till resultat"
              description="En beprövad metodik som tar dig från nuläge till önskat läge — steg för steg, med tydliga mål och mätbara resultat."
            />
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 100}>
                <div className="relative">
                  <span className="font-display text-6xl font-bold text-sage-100">
                    {step.number}
                  </span>
                  <h3 className="font-display text-lg font-bold text-charcoal-950 mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <Link
                href="/strategi-till-resultat"
                className="inline-flex items-center px-6 py-3 bg-sage-700 text-white font-body text-sm font-medium rounded-lg hover:bg-sage-800 transition-colors duration-200"
              >
                Läs mer om min metodik
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Why Blomsnes */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-brand-600 mb-4">
                  Varför Blomsnes Development
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-950 leading-tight mb-6">
                  En partner som förstår din verksamhet
                </h2>
                <p className="font-body text-lg text-charcoal-600 leading-relaxed mb-8">
                  Med gedigen erfarenhet av affärsutveckling och ledarskap
                  förstår jag de utmaningar du ställs inför. Jag arbetar alltid
                  nära dig och ditt team — inte som en extern konsult, utan som
                  en engagerad partner med genuin vilja att se dig lyckas.
                </p>
                <ul className="space-y-4">
                  {[
                    "Skräddarsydda strategier — aldrig standardlösningar",
                    "Fokus på mätbara resultat och konkret värdeskapande",
                    "Personligt engagemang genom hela processen",
                    "Långsiktigt partnerskap som skapar hållbar tillväxt",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                      <span className="font-body text-charcoal-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage-100 to-brand-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-sage-700 mx-auto mb-6 flex items-center justify-center">
                      <span className="font-display text-3xl text-white font-bold">
                        JB
                      </span>
                    </div>
                    <p className="font-display text-2xl font-bold text-charcoal-950">
                      Janicke Blomsnes
                    </p>
                    <p className="font-body text-charcoal-600 mt-2">
                      Grundare, Blomsnes Development
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-800">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Redo att ta nästa steg?
              </h2>
              <p className="font-body text-lg text-sage-200 leading-relaxed mb-10 max-w-xl mx-auto">
                Boka ett kostnadsfritt samtal så diskuterar vi hur jag kan hjälpa
                dig att nå dina mål.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/boka"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-800 font-body text-base font-medium rounded-lg hover:bg-sage-50 transition-colors duration-200"
                >
                  Boka samtal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-body text-base font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  Kontakta mig
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
