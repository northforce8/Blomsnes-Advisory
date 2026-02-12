import Link from "next/link";
import { Container } from "@/components/ui";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-white">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center">
                  <span className="font-display text-white text-lg font-bold">
                    B
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold leading-tight">
                    Blomsnes
                  </span>
                  <span className="font-body text-xs text-charcoal-400 tracking-wide uppercase">
                    Development
                  </span>
                </div>
              </div>
              <p className="font-body text-charcoal-300 max-w-md leading-relaxed">
                Janicke Blomsnes hjälper företag att växa genom strategisk
                affärsutveckling, digital transformation och personlig coaching.
                Från strategi till konkreta resultat.
              </p>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-charcoal-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold mb-4">
                Kontakt
              </h3>
              <ul className="space-y-3 font-body text-sm text-charcoal-400">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>{SITE_CONFIG.location}</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/boka"
                  className="inline-flex items-center px-5 py-2.5 bg-sage-700 text-white font-body text-sm font-medium rounded-lg hover:bg-sage-600 transition-colors duration-200"
                >
                  Boka ett samtal
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-charcoal-500">
            © {currentYear} {SITE_CONFIG.name}. Alla rättigheter förbehållna.
          </p>
          <Link
            href="/integritetspolicy"
            className="font-body text-sm text-charcoal-500 hover:text-white transition-colors duration-200"
          >
            Integritetspolicy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
