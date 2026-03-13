import type { NavItem, Service } from "@/types";

export const SITE_CONFIG = {
  name: "Blomsnes Development",
  founder: "Janicke Blomsnes",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://blomsnesdevelopment.se",
  email: "kontakt@blomsnesdevelopment.se",
  phone: "+46 70 000 00 00",
  location: "Sverige",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Hem", href: "/" },
  { label: "Om", href: "/om" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Strategi till Resultat", href: "/strategi-till-resultat" },
  { label: "Coaching", href: "/coaching" },
  { label: "Blogg", href: "/blogg" },
  { label: "Case", href: "/case" },
  { label: "Kontakt", href: "/kontakt" },
];

export const SERVICES: Service[] = [
  {
    title: "Strategisk Affärsutveckling",
    description:
      "Jag hjälper dig att identifiera tillväxtmöjligheter, bygga hållbara affärsstrategier och implementera dem med tydliga resultat.",
    href: "/tjanster",
    icon: "target",
  },
  {
    title: "Digital Transformation",
    description:
      "Från analys till implementation — jag guidar din organisation genom den digitala transformationsresan med fokus på verkligt affärsvärde.",
    href: "/tjanster",
    icon: "zap",
  },
  {
    title: "Coaching & Ledarskap",
    description:
      "Personlig coaching för företagsledare och entreprenörer som vill utveckla sitt ledarskap och ta nästa steg i sin karriär.",
    href: "/coaching",
    icon: "compass",
  },
  {
    title: "Från Strategi till Resultat",
    description:
      "En beprövad metodik som tar dig från strategiskt tänkande till konkreta, mätbara resultat i din verksamhet.",
    href: "/strategi-till-resultat",
    icon: "trending-up",
  },
];
