import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", key: "hem" },
  { href: "/om", key: "om" },
  { href: "/tjanster", key: "tjanster" },
  { href: "/strategi-till-resultat", key: "strategiTillResultat" },
  { href: "/coaching", key: "coaching" },
  { href: "/blogg", key: "blogg" },
  { href: "/case", key: "case" },
  { href: "/kontakt", key: "kontakt" },
] as const;

export async function Footer() {
  const currentYear = new Date().getFullYear();
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="bg-[#0F172A] text-white">
      <Container>
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Image
                src="/logo-light.svg"
                alt="NorthForce Advisory"
                width={200}
                height={24}
                className="h-6 w-auto mb-8"
              />
              <p className="font-body text-white/40 max-w-sm leading-relaxed text-[15px]">
                {t("description")}
              </p>
            </div>

            <div className="lg:col-span-3 lg:col-start-7">
              <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-white/25 mb-6">
                {t("navigation")}
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-[14px] text-white/45 hover:text-white transition-colors duration-200"
                    >
                      {tNav(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-white/25 mb-6">
                {t("contact")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-body text-[14px] text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="font-body text-[14px] text-white/45">
                  {SITE_CONFIG.location}
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/boka"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#0F172A] font-body text-[13px] font-semibold tracking-wide rounded-none hover:bg-white/90 transition-colors duration-200"
                >
                  {t("bookCall")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-[13px] text-white/25">
            &copy; {currentYear} {SITE_CONFIG.name}. {t("rights")}
          </p>
          <Link
            href="/integritetspolicy"
            className="font-body text-[13px] text-white/25 hover:text-white/60 transition-colors duration-200"
          >
            {t("privacy")}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
