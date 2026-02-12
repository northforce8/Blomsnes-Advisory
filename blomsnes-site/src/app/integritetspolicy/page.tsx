import type { Metadata } from "next";
import { Container, AnimatedSection } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: `Integritetspolicy för ${SITE_CONFIG.name}. Läs om hur vi hanterar dina personuppgifter.`,
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <section className="section-padding gradient-sage">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-950 leading-tight mb-6">
                Integritetspolicy
              </h1>
              <p className="font-body text-lg text-charcoal-600 leading-relaxed">
                Din integritet är viktig för oss. Här beskriver vi hur{" "}
                {SITE_CONFIG.name} samlar in, använder och skyddar dina
                personuppgifter.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto prose-container">
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    1. Personuppgiftsansvarig
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    {SITE_CONFIG.name} med säte i {SITE_CONFIG.location} är
                    personuppgiftsansvarig för behandlingen av dina
                    personuppgifter i samband med användning av denna webbplats
                    och våra tjänster. Du når oss på{" "}
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sage-700 hover:text-sage-800 underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    2. Vilka uppgifter vi samlar in
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed mb-4">
                    Vi samlar in personuppgifter som du frivilligt lämnar till
                    oss genom våra kontakt- och bokningsformulär. Dessa
                    uppgifter kan inkludera:
                  </p>
                  <ul className="space-y-2 font-body text-charcoal-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2 flex-shrink-0" />
                      <span>Namn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2 flex-shrink-0" />
                      <span>E-postadress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2 flex-shrink-0" />
                      <span>Telefonnummer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2 flex-shrink-0" />
                      <span>Företagsnamn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2 flex-shrink-0" />
                      <span>Meddelanden och övrig information du lämnar i formulär</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    3. Hur vi använder dina uppgifter
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    Vi använder dina personuppgifter för att besvara dina
                    förfrågningar, boka samtal med dig, tillhandahålla våra
                    tjänster och kommunicera med dig avseende pågående eller
                    planerade uppdrag. Vi delar aldrig dina personuppgifter med
                    tredje part utan ditt samtycke, om det inte krävs enligt
                    lag.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    4. Rättslig grund
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    Behandlingen av dina personuppgifter baseras på ditt
                    samtycke (som du ger genom att skicka in ett formulär) samt
                    på vårt berättigade intresse att besvara förfrågningar och
                    tillhandahålla tjänster du efterfrågat.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    5. Lagring och säkerhet
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    Vi lagrar dina personuppgifter så länge det är nödvändigt
                    för att uppfylla det syfte för vilket de samlades in. Vi
                    vidtar lämpliga tekniska och organisatoriska åtgärder för
                    att skydda dina uppgifter mot obehörig åtkomst, förlust
                    eller manipulation.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    6. Dina rättigheter
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    Enligt GDPR har du rätt att begära tillgång till, rättelse
                    av och radering av dina personuppgifter. Du har även rätt
                    att invända mot behandlingen, begära begränsning av
                    behandlingen och rätt till dataportabilitet. Du kan när som
                    helst återkalla ditt samtycke. Kontakta oss på{" "}
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sage-700 hover:text-sage-800 underline"
                    >
                      {SITE_CONFIG.email}
                    </a>{" "}
                    för att utöva dina rättigheter.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    7. Cookies
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    Denna webbplats kan använda cookies för att förbättra din
                    upplevelse. Cookies är små textfiler som lagras på din enhet.
                    Du kan när som helst ändra dina cookie-inställningar i din
                    webbläsare.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    8. Ändringar i policyn
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    Vi förbehåller oss rätten att uppdatera denna
                    integritetspolicy. Vid väsentliga ändringar kommer vi att
                    informera om detta på vår webbplats. Senast uppdaterad:
                    januari 2025.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal-950 mb-4">
                    9. Kontakt
                  </h2>
                  <p className="font-body text-charcoal-600 leading-relaxed">
                    Har du frågor om vår hantering av personuppgifter? Kontakta
                    oss på{" "}
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sage-700 hover:text-sage-800 underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    . Du har även rätt att lämna klagomål till
                    Integritetsskyddsmyndigheten (IMY).
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
