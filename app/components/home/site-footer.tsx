import { company } from "@/lib/company";
import { localizedPath } from "@/lib/i18n";
import { Logo } from "../logo";
import type { HomePageLinks, HomeSectionProps } from "./types";

type SiteFooterProps = HomeSectionProps & Pick<HomePageLinks, "locale" | "contactHref">;

export function SiteFooter({ dict, locale, contactHref }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] pb-[max(2.5rem,env(safe-area-inset-bottom))] text-white">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-5 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">

          {/* Brand column */}
          <div>
            <Logo href={`/${locale}`} className="mb-6" />
            <p className="max-w-xs text-sm leading-6 text-white/50">
              {dict.footer.description}
            </p>
            {/* Address */}
            <address className="mt-6 not-italic text-sm leading-6 text-white/35">
              <p className="font-semibold text-white/50">{company.name}</p>
              <p>{company.addressStreet}</p>
              <p>{company.addressCity}</p>
              <p>{company.addressCountryDe}</p>
            </address>
            <a
              className="mt-3 block text-sm font-semibold text-white/50 transition hover:text-[#d24b2f]"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
          </div>

          {/* Services column */}
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.14em] text-white/30">
              {dict.footer.services}
            </p>
            <div className="space-y-3 text-sm font-medium text-white/55">
              {dict.footer.serviceItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.14em] text-white/30">
              {dict.footer.company}
            </p>
            <div className="space-y-3 text-sm font-medium text-white/55">
              <a
                className="block transition hover:text-white"
                href={`/${locale}`}
              >
                {dict.nav.home}
              </a>
              <a
                className="block transition hover:text-white"
                href={`/${locale}/services`}
              >
                {dict.nav.services}
              </a>
              <a
                className="block transition hover:text-white"
                href={`/${locale}/medsafe-udi`}
              >
                {dict.nav.medsafeUdi}
              </a>
              <a
                className="block transition hover:text-white"
                href={`/${locale}/cases`}
              >
                {dict.nav.cases}
              </a>
              <a
                className="block transition hover:text-white"
                href={`/${locale}/network`}
              >
                {dict.nav.network}
              </a>
              <a
                className="block transition hover:text-white"
                href={contactHref}
              >
                {dict.footer.contact}
              </a>
            </div>
          </div>

          {/* Legal column */}
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.14em] text-white/30">
              {dict.footer.legal}
            </p>
            <div className="space-y-3 text-sm font-medium text-white/55">
              <a
                className="block transition hover:text-white"
                href={localizedPath(locale, "/imprint")}
              >
                {dict.footer.imprint}
              </a>
              <a
                className="block transition hover:text-white"
                href={localizedPath(locale, "/privacy")}
              >
                {dict.footer.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-5 lg:px-8">
          <p className="text-xs font-medium text-white/25">
            &copy; {year} {company.name}. Alle Rechte vorbehalten.
          </p>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/20">
            <span aria-hidden className="size-1.5 rounded-full bg-[#d24b2f]/60" />
            Made in Germany
          </span>
        </div>
      </div>
    </footer>
  );
}
