import { SITE_CONFIG } from "@/lib/constants";

interface JsonLdProps {
  locale: string;
}

export function JsonLd({ locale }: JsonLdProps) {
  const orgName = SITE_CONFIG.name;
  const url = SITE_CONFIG.url;

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#organization`,
    name: orgName,
    url,
    logo: `${url}/logo.svg`,
    image: `${url}/hero.jpg`,
    description: locale === "en"
      ? "Strategic business development for Nordic companies and leadership teams."
      : locale === "no"
      ? "Strategisk forretningsutvikling for nordiske selskaper og ledergrupper."
      : "Strategisk affärsutveckling för nordiska företag och ledningsgrupper.",
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SE",
    },
    foundingDate: "2024",
    areaServed: [
      { "@type": "Country", name: "Sweden" },
      { "@type": "Country", name: "Norway" },
      { "@type": "Country", name: "Denmark" },
      { "@type": "Country", name: "Finland" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "en" ? "Services" : locale === "no" ? "Tjenester" : "Tjänster",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "en" ? "Strategic Business Development" : locale === "no" ? "Strategisk forretningsutvikling" : "Strategisk Affärsutveckling",
            url: `${url}/tjanster`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Transformation",
            url: `${url}/tjanster`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "en" ? "Coaching & Leadership" : locale === "no" ? "Coaching & Lederskap" : "Coaching & Ledarskap",
            url: `${url}/coaching`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "en" ? "Strategy to Results" : locale === "no" ? "Strategi til Resultater" : "Strategi till Resultat",
            url: `${url}/strategi-till-resultat`,
          },
        },
      ],
    },
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: orgName,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: locale === "en" ? "en" : locale === "no" ? "nb" : "sv",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
