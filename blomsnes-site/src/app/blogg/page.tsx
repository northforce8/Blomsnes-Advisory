import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/components/ui";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blogg",
  description:
    "Insikter och reflektioner om affärsutveckling, ledarskap och tillväxt från Janicke Blomsnes.",
};

const posts = [
  {
    title: "Fem tecken på att din strategi inte lever i organisationen",
    excerpt:
      "Många företag har ambitiösa strategidokument som aldrig omsätts i handling. Här är fem vanliga tecken på att din strategi har stannat på papperet — och vad du kan göra åt det.",
    date: "2025-01-15",
    readTime: "6 min",
    category: "Strategi",
  },
  {
    title: "Ledarskapets tysta kraft: att lyssna innan du leder",
    excerpt:
      "De bästa ledarna är inte de som pratar mest — utan de som lyssnar djupast. En reflektion om lyssnandets underskattade roll i modernt ledarskap.",
    date: "2024-12-20",
    readTime: "5 min",
    category: "Ledarskap",
  },
  {
    title: "Digital transformation: det handlar inte om tekniken",
    excerpt:
      "Företag som lyckas med digital transformation förstår att tekniken bara är ett verktyg. Den verkliga förändringen sker i kultur, processer och tankesätt.",
    date: "2024-11-28",
    readTime: "7 min",
    category: "Digital Transformation",
  },
  {
    title: "Från osäkerhet till beslutskraft: en coachingresa",
    excerpt:
      "Hur en VD gick från att skjuta upp svåra beslut till att fatta dem med trygghet och klarhet — och vad det innebar för organisationen.",
    date: "2024-11-05",
    readTime: "8 min",
    category: "Coaching",
  },
  {
    title: "Att mäta det som verkligen räknas",
    excerpt:
      "KPI:er, OKR:er, dashboards — vi mäter allt. Men mäter vi rätt saker? En diskussion om hur rätt mätetal kan driva verklig tillväxt.",
    date: "2024-10-12",
    readTime: "6 min",
    category: "Strategi",
  },
  {
    title: "Varför de flesta förändringsinitiativ misslyckas",
    excerpt:
      "Forskning visar att majoriteten av alla organisatoriska förändringar inte når sina mål. Jag delar tre kritiska faktorer som skiljer framgång från misslyckande.",
    date: "2024-09-18",
    readTime: "7 min",
    category: "Förändringsledning",
  },
];

export default function BloggPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-sage">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-sage-600 mb-4">
                Blogg
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Insikter &amp; reflektioner
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Tankar om affärsutveckling, ledarskap, förändring och tillväxt.
                Här delar jag erfarenheter och perspektiv som jag hoppas kan
                inspirera och ge dig nya insikter.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 80}>
                <article className="group flex flex-col h-full rounded-2xl border border-charcoal-100 hover:border-sage-200 hover:shadow-lg hover:shadow-sage-100/50 transition-all duration-300 overflow-hidden">
                  <div className="aspect-[16/9] bg-gradient-to-br from-sage-50 to-brand-50 flex items-center justify-center">
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-sage-500 px-3 py-1 rounded-full bg-white/80">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 font-body text-xs text-charcoal-500 mb-3">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="w-1 h-1 rounded-full bg-charcoal-300" />
                      <span>{post.readTime} läsning</span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-charcoal-950 mb-3 group-hover:text-sage-700 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="font-body text-sm text-charcoal-600 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center mt-4 font-body text-sm font-medium text-sage-700 group-hover:text-sage-800">
                      Läs mer
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
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
                Vill du diskutera vidare?
              </h2>
              <p className="font-body text-lg text-sage-200 leading-relaxed mb-10 max-w-xl mx-auto">
                Har du tankar om något du läst, eller vill du prata om hur det
                kan appliceras i din verksamhet? Hör av dig.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-800 font-body text-base font-medium rounded-lg hover:bg-sage-50 transition-colors duration-200"
              >
                Kontakta mig
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
