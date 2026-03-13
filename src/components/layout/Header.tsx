"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#0F172A]/[0.06]">
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center group"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/logo-dark.svg"
              alt="NorthForce Advisory"
              width={200}
              height={24}
              className="h-6 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 font-body text-[13px] font-medium tracking-wide transition-colors duration-200",
                  pathname === item.href
                    ? "text-[#0F172A]"
                    : "text-[#0F172A]/45 hover:text-[#0F172A]"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/boka"
              className="inline-flex items-center px-6 py-2.5 bg-[#0F172A] text-white font-body text-[13px] font-semibold tracking-wide rounded-none hover:bg-[#0F172A]/90 transition-colors duration-200"
            >
              {t("boka")}
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-[#0F172A]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? tCommon("closeMenu") : tCommon("openMenu")}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#0F172A]/[0.06]">
          <Container>
            <div className="py-6 flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-3 font-body text-[15px] font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "text-[#0F172A]"
                      : "text-[#0F172A]/45 hover:text-[#0F172A]"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="px-3 py-3">
                <LanguageSwitcher />
              </div>
              <Link
                href="/boka"
                className="mt-4 inline-flex items-center justify-center px-6 py-3.5 bg-[#0F172A] text-white font-body text-[15px] font-semibold tracking-wide rounded-none hover:bg-[#0F172A]/90 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {t("boka")}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
