"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, type Locale } from "@/lib/i18n";

type LangSwitcherProps = {
  locale: Locale;
  label: string;
  deLabel: string;
  enLabel: string;
};

export function LangSwitcher({
  locale,
  label,
  deLabel,
  enLabel,
}: LangSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      aria-label={label}
      className="inline-flex shrink-0 items-center rounded-full border border-[#171717]/12 bg-white/80 p-0.5 text-[11px] font-bold shadow-sm sm:text-xs"
      role="group"
    >
      {(["de", "en"] as const).map((item) => {
        const isActive = locale === item;
        const href = switchLocalePath(pathname, locale, item);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "inline-flex min-h-9 min-w-8 items-center justify-center rounded-full bg-[#171717] px-2.5 py-1.5 text-white shadow-sm sm:min-w-9 sm:px-3"
                : "inline-flex min-h-9 min-w-8 items-center justify-center rounded-full px-2.5 py-1.5 text-[#171717]/55 outline-none transition hover:bg-[#f7f3ea] hover:text-[#171717] focus-visible:ring-2 focus-visible:ring-[#d24b2f]/40 sm:min-w-9 sm:px-3"
            }
            href={href}
            key={item}
            hrefLang={item}
          >
            {item === "de" ? deLabel : enLabel}
          </Link>
        );
      })}
    </div>
  );
}
