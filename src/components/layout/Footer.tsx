import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: SITE_CONFIG.socials.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "X",
    href: SITE_CONFIG.socials.twitter,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: SITE_CONFIG.socials.youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: SITE_CONFIG.socials.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: SITE_CONFIG.socials.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
] as const;

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
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="font-body text-[14px] text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="font-body text-[14px] text-white/45 leading-relaxed">
                  {SITE_CONFIG.address}<br />
                  {SITE_CONFIG.postalCode} {SITE_CONFIG.city}<br />
                  {SITE_CONFIG.country}
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

        <div className="border-t border-white/[0.06] py-12">
          <h3 className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-white/25 mb-8 text-center">
            {t("followUs")}
          </h3>
          <div className="flex items-center justify-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
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
