import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = { title: "Integritetspolicy", description: `Integritetspolicy för ${SITE_CONFIG.name}.` };

const sections = [
  { title: "Personuppgiftsansvarig", content: `${SITE_CONFIG.name} med säte i ${SITE_CONFIG.location} är personuppgiftsansvarig för behandlingen av era personuppgifter i samband med användning av denna webbplats och våra tjänster.` },
  { title: "Vilka uppgifter vi samlar in", content: "Vi samlar in personuppgifter som ni frivilligt lämnar till oss genom våra kontakt- och bokningsformulär. Dessa uppgifter kan inkludera namn, e-postadress, telefonnummer, företagsnamn samt meddelanden och övrig information ni lämnar i formulär." },
  { title: "Hur vi använder era uppgifter", content: "Vi använder era personuppgifter för att besvara era förfrågningar, boka samtal med er, tillhandahålla våra tjänster och kommunicera med er avseende pågående eller planerade uppdrag. Vi delar aldrig era personuppgifter med tredje part utan ert samtycke, om det inte krävs enligt lag." },
  { title: "Rättslig grund", content: "Behandlingen av era personuppgifter baseras på ert samtycke samt på vårt berättigade intresse att besvara förfrågningar och tillhandahålla tjänster ni efterfrågat." },
  { title: "Lagring och säkerhet", content: "Vi lagrar era personuppgifter så länge det är nödvändigt för att uppfylla det syfte för vilket de samlades in. Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda era uppgifter mot obehörig åtkomst, förlust eller manipulation." },
  { title: "Era rättigheter", content: "Enligt GDPR har ni rätt att begära tillgång till, rättelse av och radering av era personuppgifter. Ni har även rätt att invända mot behandlingen, begära begränsning av behandlingen och rätt till dataportabilitet. Ni kan när som helst återkalla ert samtycke." },
  { title: "Cookies", content: "Denna webbplats kan använda cookies för att förbättra er upplevelse. Cookies är små textfiler som lagras på er enhet. Ni kan när som helst ändra era cookie-inställningar i er webbläsare." },
  { title: "Ändringar i policyn", content: "Vi förbehåller oss rätten att uppdatera denna integritetspolicy. Vid väsentliga ändringar informerar vi på vår webbplats. Senast uppdaterad: januari 2025." },
  { title: "Kontakt", content: `Har ni frågor om vår hantering av personuppgifter? Kontakta oss på ${SITE_CONFIG.email}. Ni har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).` },
];

export default function IntegritetspolicyPage() {
  return (
    <>
      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6"><div className="h-px w-12 bg-[#0F172A]/15" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">Juridiskt</span></div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.08] tracking-tight">Integritetspolicy</h1>
              <p className="mt-8 font-body text-lg text-[#4B5563] max-w-2xl leading-relaxed">Er integritet är viktig för oss. Här beskriver vi hur {SITE_CONFIG.name} samlar in, använder och skyddar era personuppgifter.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-28 lg:pb-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[#0F172A]/[0.06]">
            {sections.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 30}>
                <div className="py-10 lg:py-12 border-b border-[#0F172A]/[0.06]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20">
                    <div className="lg:col-span-4">
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-sm font-bold text-[#0F172A]/10 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        <h2 className="font-display text-lg font-bold text-[#0F172A]">{s.title}</h2>
                      </div>
                    </div>
                    <div className="lg:col-span-8"><p className="font-body text-[#4B5563] leading-relaxed max-w-2xl">{s.content}</p></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
