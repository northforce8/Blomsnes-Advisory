import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Users, Lightbulb, Heart } from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Om Janicke Blomsnes",
  description:
    "Lär känna Janicke Blomsnes — erfaren affärsutvecklare, coach och grundare av Blomsnes Development.",
};

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Insikt före handling",
    description:
      "Varje framgångsrik strategi börjar med djup förståelse. Jag investerar tid i att verkligen förstå din verksamhet, dina utmaningar och dina mål innan vi tar ett enda steg.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Genuint engagemang",
    description:
      "Jag brinner för att se människor och organisationer växa. Ditt resultat är mitt resultat — och jag ger aldrig upp förrän vi nått dit.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnerskap, inte konsulteri",
    description:
      "Jag tror på långsiktiga relationer. Istället för att leverera en rapport och gå vidare, arbetar jag sida vid sida med dig genom hela resan.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Resultat som räknas",
    description:
      "Strategier utan resultat är bara dokument. Allt jag gör syftar till mätbar, konkret förändring som gör verklig skillnad för din verksamhet.",
  },
];

export default function OmPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-sage">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-4">
                  Om mig
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                  Janicke Blomsnes
                </h1>
                <p className="font-body text-lg text-charcoal-600 leading-relaxed mb-6">
                  Jag är grundare av Blomsnes Development och arbetar som
                  strategisk affärsutvecklare och coach. Med mångårig erfarenhet
                  av att hjälpa företag genom förändring och tillväxt har jag
                  utvecklat en djup förståelse för vad som krävs för att
                  framgångsrikt navigera en komplex affärsvärld.
                </p>
                <p className="font-body text-lg text-charcoal-600 leading-relaxed mb-8">
                  Min drivkraft är att se ambitiösa företag och ledare nå sin
                  fulla potential. Jag tror på att kombinera strategiskt
                  tänkande med handlingskraft, och att de bästa resultaten
                  uppstår när insikt möter beslutsamhet.
                </p>
                <Link
                  href="/boka"
                  className="inline-flex items-center px-6 py-3 bg-sage-700 text-white font-body text-sm font-medium rounded-lg hover:bg-sage-800 transition-colors duration-200"
                >
                  Boka ett samtal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-sage-200 to-brand-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-sage-700 mx-auto mb-6 flex items-center justify-center">
                    <span className="font-display text-4xl text-white font-bold">
                      JB
                    </span>
                  </div>
                  <p className="font-display text-xl font-bold text-charcoal-950">
                    Janicke Blomsnes
                  </p>
                  <p className="font-body text-charcoal-600 mt-1">
                    Grundare &amp; Affärsutvecklare
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* My story */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                tag="Min berättelse"
                title="En resa driven av passion för utveckling"
                align="left"
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="mt-8 space-y-6 font-body text-lg text-charcoal-600 leading-relaxed">
                <p>
                  Under mina år inom affärsutveckling och ledarskap har jag haft
                  förmånen att arbeta med allt från snabbväxande startups till
                  etablerade organisationer. Det som förenar alla framgångsrika
                  förändringsresor jag har varit en del av är en sak: modet att
                  agera på insikt.
                </p>
                <p>
                  Jag grundade Blomsnes Development för att kunna erbjuda det
                  jag brinner för mest — att hjälpa företag att gå från tanke
                  till handling, och från strategi till resultat. Min metodik
                  bygger på att kombinera analytiskt skarpsinne med ett genuint
                  människofokus.
                </p>
                <p>
                  I varje uppdrag strävar jag efter att inte bara leverera
                  strategiska rekommendationer, utan att stå vid din sida
                  genom hela implementeringen. För mig är det resultaten som
                  räknas — inte presentationerna.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding gradient-warm">
        <Container>
          <AnimatedSection>
            <SectionHeading
              tag="Värderingar"
              title="Det jag tror på"
              description="Dessa principer genomsyrar allt jag gör — i varje möte, varje strategi och varje beslut."
            />
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="p-8 bg-white rounded-2xl border border-charcoal-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal-950 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
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
                Låt oss prata om dina ambitioner
              </h2>
              <p className="font-body text-lg text-sage-200 leading-relaxed mb-10 max-w-xl mx-auto">
                Jag tar mig alltid tid att lyssna. Boka ett samtal så utforskar
                vi tillsammans hur jag kan bidra till din framgång.
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
