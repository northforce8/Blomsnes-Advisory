import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Om Janicke Blomsnes",
  description: "Lär känna Janicke Blomsnes — erfaren affärsutvecklare och grundare av Blomsnes Development.",
};

const values = [
  { number: "01", title: "Insikt före handling", description: "Varje framgångsrik strategi börjar med djup förståelse. Vi investerar tid i att verkligen förstå er verksamhet innan vi tar ett enda steg." },
  { number: "02", title: "Genuint engagemang", description: "Vi brinner för att se organisationer växa. Ert resultat är vårt resultat — och vi ger aldrig upp förrän vi nått dit." },
  { number: "03", title: "Partnerskap, inte konsulteri", description: "Vi tror på långsiktiga relationer. Istället för att leverera en rapport och gå vidare arbetar vi sida vid sida med er genom hela resan." },
  { number: "04", title: "Resultat som räknas", description: "Strategier utan resultat är bara dokument. Allt vi gör syftar till mätbar förändring som gör verklig skillnad." },
];

export default function OmPage() {
  return (
    <>
      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#0F172A]/15" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">Om oss</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.08] tracking-tight">Janicke Blomsnes</h1>
                <p className="mt-8 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  Jag är grundare av Blomsnes Development och arbetar som strategisk affärsutvecklare och rådgivare. Med mångårig erfarenhet av att hjälpa företag genom förändring och tillväxt har jag utvecklat en djup förståelse för vad som krävs för att navigera en komplex affärsvärld.
                </p>
                <p className="mt-6 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  Min drivkraft är att se ambitiösa företag och ledare nå sin fulla potential. De bästa resultaten uppstår när insikt möter beslutsamhet.
                </p>
                <Link href="/boka" className="inline-flex items-center mt-10 font-body text-sm font-semibold tracking-wide text-[#0F172A] group">
                  <span className="border-b border-[#0F172A]/20 group-hover:border-[#0F172A] transition-colors duration-300">Boka ett samtal</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/leadership.jpg" alt="Janicke Blomsnes — Grundare" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={85} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/10 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <AnimatedSection>
                <div className="sticky top-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-10 bg-[#0F172A]/15" />
                    <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">Min berättelse</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] leading-[1.12] tracking-tight">En resa driven av passion för resultat</h2>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-8">
              <AnimatedSection delay={100}>
                <div className="space-y-8 font-body text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  <p>Under mina år inom affärsutveckling och ledarskap har jag haft förmånen att arbeta med allt från snabbväxande startups till etablerade organisationer. Det som förenar alla framgångsrika förändringsresor jag har varit en del av är en sak: modet att agera på insikt.</p>
                  <p>Jag grundade Blomsnes Development för att kunna erbjuda det jag brinner för mest — att hjälpa företag att gå från tanke till handling, och från strategi till resultat. Min metodik bygger på att kombinera analytiskt skarpsinne med ett genuint människofokus.</p>
                  <p>I varje uppdrag strävar jag efter att inte bara leverera strategiska rekommendationer, utan att stå vid er sida genom hela implementeringen. För mig är det resultaten som räknas — inte presentationerna.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0F172A]/15" />
                <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">Värderingar</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">Det vi tror på</h2>
            </div>
          </AnimatedSection>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0F172A]/[0.08]">
            {values.map((v, i) => (
              <AnimatedSection key={v.number} delay={i * 100}>
                <div className="bg-white p-10 lg:p-12 h-full">
                  <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{v.number}</span>
                  <h3 className="mt-5 font-display text-xl lg:text-2xl font-bold text-[#0F172A] leading-tight">{v.title}</h3>
                  <p className="mt-4 font-body text-[#4B5563] leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-[#0F172A] px-8 py-20 sm:px-16 sm:py-24 lg:px-24 lg:py-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">Låt oss prata om era ambitioner</h2>
                <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">Jag tar mig alltid tid att lyssna. Boka ett samtal så utforskar vi tillsammans hur jag kan bidra till er framgång.</p>
                <Link href="/boka" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">
                  Boka ett kostnadsfritt samtal <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
