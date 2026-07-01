import { LangSwitcher } from "../lang-switcher";
import { Logo } from "../logo";
import type { HomePageLinks, HomeSectionProps } from "./types";

type SiteHeaderProps = HomeSectionProps &
  Pick<HomePageLinks, "locale" | "homeHref" | "contactHref">;

export function SiteHeader({ dict, locale, homeHref, contactHref }: SiteHeaderProps) {
  const navItems = [
    { href: "#services", label: dict.nav.services },
    { href: "#network", label: dict.nav.network },
    { href: "#industries", label: dict.nav.industries },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#171717]/10 bg-[#f7f3ea]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center justify-between gap-3 px-5 py-2 sm:gap-4 sm:px-8">
        <Logo claim={dict.logo.claim} href={homeHref} showClaim />
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LangSwitcher
            deLabel={dict.langSwitcher.de}
            enLabel={dict.langSwitcher.en}
            label={dict.langSwitcher.label}
            locale={locale}
          />
          <a
            className="rounded-full bg-[#171717] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2b2b2b] sm:px-5 sm:text-sm"
            href={contactHref}
          >
            {dict.nav.startProject}
          </a>
        </div>
      </div>
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-5 overflow-x-auto px-5 pb-2 text-xs font-medium text-[#171717]/60 [scrollbar-width:none] sm:px-8 md:hidden [&::-webkit-scrollbar]:hidden">
        {navItems.map((item) => (
          <a
            className="shrink-0 transition hover:text-[#171717]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
