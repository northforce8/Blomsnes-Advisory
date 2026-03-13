import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — Strategisk Affärsutveckling`,
    template: `%s — ${SITE_CONFIG.name}`,
  },
  description:
    "Janicke Blomsnes hjälper företag att växa genom strategisk affärsutveckling, digital transformation och personlig coaching.",
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
