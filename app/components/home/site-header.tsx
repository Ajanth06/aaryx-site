import Link from "next/link";
import { localizedPath } from "@/lib/i18n";
import { LangSwitcher } from "../lang-switcher";
import { Logo } from "../logo";
import type { HomePageLinks, HomeSectionProps } from "./types";

type SiteHeaderProps = HomeSectionProps &
  Pick<HomePageLinks, "locale" | "homeHref" | "contactHref">;

export function SiteHeader({ dict, locale, homeHref, contactHref }: SiteHeaderProps) {
  const navItems = [
    { href: homeHref, label: dict.nav.home },
    { href: localizedPath(locale, "/services"), label: dict.nav.services },
    { href: localizedPath(locale, "/medsafe-udi"), label: dict.nav.medsafeUdi },
    { href: localizedPath(locale, "/cases"), label: dict.nav.cases },
    { href: localizedPath(locale, "/network"), label: dict.nav.network },
    { href: localizedPath(locale, "/industries"), label: dict.nav.industries },
    { href: contactHref, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#171717]/10 bg-[#f7f3ea]/95 pt-[max(0px,env(safe-area-inset-top))] shadow-[0_10px_35px_rgba(23,23,23,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2.5 px-4 py-3 sm:gap-6 sm:px-5 sm:py-4 lg:px-8">
        <Logo
          claim={dict.logo.claim}
          href={homeHref}
          prominent
          showClaim
          className="min-w-0 flex-1"
        />
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div className="hidden sm:block">
            <LangSwitcher
              deLabel={dict.langSwitcher.de}
              enLabel={dict.langSwitcher.en}
              label={dict.langSwitcher.label}
              locale={locale}
            />
          </div>
          <Link
            className="group inline-flex min-h-11 max-w-[6.5rem] items-center justify-center gap-2 rounded-full bg-[#d24b2f] px-3 text-center text-[11px] font-bold leading-tight text-white shadow-[0_8px_22px_rgba(210,75,47,0.2)] outline-none transition hover:-translate-y-0.5 hover:bg-[#b83f28] hover:shadow-[0_10px_26px_rgba(210,75,47,0.3)] focus-visible:ring-2 focus-visible:ring-[#d24b2f] focus-visible:ring-offset-2 sm:max-w-none sm:px-5 sm:text-sm"
            href={contactHref}
          >
            <span>{dict.nav.startProject}</span>
            <span aria-hidden className="hidden transition-transform group-hover:translate-x-0.5 sm:inline">
              →
            </span>
          </Link>
        </div>
      </div>
      <div className="relative border-t border-[#171717]/8 bg-white/30">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#f7f3ea] to-transparent lg:hidden"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f7f3ea] to-transparent lg:hidden"
        />
        <nav className="mx-auto flex w-full max-w-7xl snap-x snap-mandatory items-center gap-1 overflow-x-auto scroll-px-4 px-4 py-2 text-xs font-semibold text-[#171717]/62 [scrollbar-width:none] sm:gap-1.5 sm:px-5 sm:text-sm lg:justify-center lg:overflow-visible lg:px-8 [&::-webkit-scrollbar]:hidden">
          <div className="mr-1 shrink-0 sm:hidden">
            <LangSwitcher
              deLabel={dict.langSwitcher.de}
              enLabel={dict.langSwitcher.en}
              label={dict.langSwitcher.label}
              locale={locale}
            />
          </div>
          {navItems.map((item) => (
            <Link
              className="flex min-h-10 shrink-0 snap-start items-center whitespace-nowrap rounded-full px-3.5 py-2 outline-none transition hover:bg-white hover:text-[#171717] hover:shadow-sm focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#d24b2f]/40 sm:px-4"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
