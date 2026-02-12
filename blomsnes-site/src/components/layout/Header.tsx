"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-charcoal-100">
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-sage-700 flex items-center justify-center">
              <span className="font-display text-white text-lg font-bold">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-charcoal-950 leading-tight">
                Blomsnes
              </span>
              <span className="font-body text-xs text-charcoal-500 tracking-wide uppercase">
                Development
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "text-sage-700 bg-sage-50"
                    : "text-charcoal-700 hover:text-sage-700 hover:bg-sage-50/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/boka"
              className="inline-flex items-center px-5 py-2.5 bg-sage-700 text-white font-body text-sm font-medium rounded-lg hover:bg-sage-800 transition-colors duration-200"
            >
              Boka samtal
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-charcoal-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-charcoal-100">
          <Container>
            <div className="py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 rounded-lg font-body text-base font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "text-sage-700 bg-sage-50"
                      : "text-charcoal-700 hover:text-sage-700 hover:bg-sage-50/50"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/boka"
                className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-sage-700 text-white font-body text-base font-medium rounded-lg hover:bg-sage-800 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Boka samtal
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
