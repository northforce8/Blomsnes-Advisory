import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Shield,
  Flame,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Coaching & Ledarskap",
  description:
    "Personlig coaching för företagsledare och entreprenörer. Utveckla ditt ledarskap med Janicke Blomsnes.",
};

const areas = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Strategiskt tänkande",
    description:
      "Utveckla din förmåga att se helheten, identifiera mönster och fatta beslut som skapar långsiktigt värde.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Beslutsfattande under press",
    description:
      "Bygg tryggheten att fatta svåra beslut i komplexa situationer — med klarhet, mod och eftertanke.",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Motivation & energi",
    description:
      "Hitta tillbaka till din drivkraft och skapa hållbara rutiner som ger dig energi istället för att dränera den.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Vision & riktning",
    description:
      "Klargör din vision, definiera dina mål och skapa en konkret plan för att nå dem.",
  },
];

const forWhom = [
  "VD:ar och företagsledare som vill ta sitt ledarskap till nästa nivå",
  "Entreprenörer som står inför strategiska vägval",
  "Chefer som navigerar förändring och transformation",
  "Ledare som vill utveckla sin förmåga att inspirera och engagera",
  "Grundare som behöver en sparringpartner utanför den egna organisationen",
];

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-sage">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-4">
                Coaching
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Ledarskap börjar inifrån
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Personlig coaching för dig som vill växa som ledare, fatta
                bättre beslut och skapa resultat med större lätthet. Jag möter
                dig där du är och hjälper dig att nå dit du vill.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* What coaching covers */}
      <section className="section-padding bg-white">
        <Container>
          <AnimatedSection>
            <SectionHeading
              tag="Områden"
              title="Vad vi arbetar med"
              description="Coachingen anpassas helt efter dina behov och mål. Här är några av de vanligaste områdena jag arbetar med."
            />
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 100}>
                <div className="p-8 rounded-2xl border border-charcoal-100 hover:border-sage-200 hover:shadow-lg hover:shadow-sage-100/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center mb-6">
                    {area.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal-950 mb-3">
                    {area.title}
                  </h3>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* For whom */}
      <section className="section-padding gradient-warm">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-brand-600 mb-4">
                  Passar det mig?
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-950 leading-tight mb-6">
                  Coaching för ledare och entreprenörer
                </h2>
                <p className="font-body text-lg text-charcoal-600 leading-relaxed mb-8">
                  Min coaching riktar sig till dig som har ambitioner och vilja
                  att utvecklas. Du behöver inte vara i kris — du behöver bara
                  ha en önskan att bli bättre.
                </p>
                <ul className="space-y-4">
                  {forWhom.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                      <span className="font-body text-charcoal-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-10 rounded-2xl bg-white border border-charcoal-100">
                <h3 className="font-display text-2xl font-bold text-charcoal-950 mb-6">
                  Hur det fungerar
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Inledande samtal",
                      desc: "Vi börjar med ett kostnadsfritt samtal för att förstå din situation och dina mål.",
                    },
                    {
                      step: "2",
                      title: "Skräddarsydd plan",
                      desc: "Jag utformar ett coaching-program som är anpassat efter just dina behov.",
                    },
                    {
                      step: "3",
                      title: "Regelbundna sessioner",
                      desc: "Vi träffas regelbundet — digitalt eller fysiskt — för fokuserade coaching-sessioner.",
                    },
                    {
                      step: "4",
                      title: "Löpande stöd",
                      desc: "Mellan sessionerna finns jag tillgänglig för frågor, reflektioner och snabba avstämningar.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center flex-shrink-0 font-body text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-charcoal-950">
                          {item.title}
                        </h4>
                        <p className="font-body text-sm text-charcoal-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Dags att investera i dig själv
              </h2>
              <p className="font-body text-lg text-sage-200 leading-relaxed mb-10 max-w-xl mx-auto">
                Det första steget är alltid det viktigaste. Boka ett
                kostnadsfritt samtal och låt oss utforska vad coaching kan göra
                för dig.
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
