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
      className="inline-flex shrink-0 items-center rounded-full border border-[#171717]/15 bg-white/80 p-0.5 text-xs font-bold"
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
                ? "rounded-full bg-[#171717] px-2.5 py-1 text-white"
                : "rounded-full px-2.5 py-1 text-[#171717]/55 transition hover:text-[#171717]"
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
