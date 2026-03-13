"use client";

import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "sv", label: "SV" },
  { code: "no", label: "NO" },
  { code: "en", label: "EN" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();

  function switchLocale(newLocale: string) {
    document.cookie = `locale=${newLocale};path=/;max-age=${365 * 24 * 60 * 60};samesite=lax`;
    window.location.reload();
  }

  return (
    <div className="flex items-center gap-0.5">
      {LOCALES.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && (
            <span className="text-[#0F172A]/15 mx-0.5 text-[10px] select-none">
              |
            </span>
          )}
          <button
            onClick={() => switchLocale(l.code)}
            className={cn(
              "font-body text-[11px] font-medium tracking-wider transition-colors duration-200 px-0.5",
              locale === l.code
                ? "text-[#0F172A]"
                : "text-[#0F172A]/30 hover:text-[#0F172A]/60"
            )}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
