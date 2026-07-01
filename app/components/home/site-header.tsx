import { LangSwitcher } from "../lang-switcher";
import { Logo } from "../logo";
import type { HomePageLinks, HomeSectionProps } from "./types";

type SiteHeaderProps = HomeSectionProps &
  Pick<HomePageLinks, "locale" | "homeHref" | "contactHref">;

export function SiteHeader({ dict, locale, homeHref, contactHref }: SiteHeaderProps) {
  const navItems = [
    { href: "#services", label: dict.nav.services },
    { href: "#medsafe-udi", label: dict.nav.medsafeUdi },
    { href: "#cases", label: dict.nav.cases },
    { href: "#network", label: dict.nav.network },
    { href: "#industries", label: dict.nav.industries },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#171717]/10 bg-[#f7f3ea]/90 pt-[max(0px,env(safe-area-inset-top))] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-2 px-4 py-2 sm:items-center sm:gap-4 sm:px-5 lg:px-8">
        <Logo claim={dict.logo.claim} href={homeHref} showClaim className="min-w-0 flex-1 pr-1 sm:flex-none sm:pr-0" />
        <nav className="hidden min-w-0 items-center gap-8 text-sm font-medium text-[#171717]/70 md:flex">
          {navItems.map((item) => (
            <a
              className="whitespace-nowrap transition hover:text-[#171717]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 pt-0.5 sm:gap-3 sm:pt-0">
          <LangSwitcher
            deLabel={dict.langSwitcher.de}
            enLabel={dict.langSwitcher.en}
            label={dict.langSwitcher.label}
            locale={locale}
          />
          <a
            className="inline-flex min-h-11 max-w-[7.5rem] items-center justify-center rounded-full bg-[#171717] px-3 text-[11px] font-semibold leading-tight text-white transition hover:bg-[#2b2b2b] sm:max-w-none sm:px-5 sm:text-sm"
            href={contactHref}
          >
            {dict.nav.startProject}
          </a>
        </div>
      </div>
      <div className="relative md:hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f7f3ea] to-transparent"
        />
        <nav className="mx-auto flex w-full max-w-7xl snap-x snap-mandatory items-center gap-1 overflow-x-auto scroll-px-4 px-4 pb-2 pt-0.5 text-xs font-medium text-[#171717]/60 [scrollbar-width:none] sm:gap-2 sm:px-5 lg:px-8 [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <a
              className="flex min-h-11 shrink-0 snap-start items-center whitespace-nowrap rounded-full px-3 py-2 transition hover:text-[#171717]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
