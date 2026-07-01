import { localizedPath } from "@/lib/i18n";
import type { HomePageLinks, HomeSectionProps } from "./types";

type SiteFooterProps = HomeSectionProps & Pick<HomePageLinks, "locale" | "contactHref">;

export function SiteFooter({ dict, locale, contactHref }: SiteFooterProps) {
  return (
    <footer className="border-t border-[#171717]/10 bg-white px-4 py-12 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black tracking-[0.18em]">AARYX</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#3f3a32]/60">
            {dict.footer.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-black">{dict.footer.services}</p>
          <div className="mt-4 space-y-3 text-sm font-semibold text-[#3f3a32]/60">
            {dict.footer.serviceItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-black">{dict.footer.company}</p>
          <div className="mt-4 space-y-3 text-sm font-semibold text-[#3f3a32]/60">
            <a className="block transition hover:text-[#171717]" href={contactHref}>
              {dict.footer.contact}
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-black">{dict.footer.legal}</p>
          <div className="mt-4 space-y-3 text-sm font-semibold text-[#3f3a32]/60">
            <a
              className="block transition hover:text-[#171717]"
              href={localizedPath(locale, "/imprint")}
            >
              {dict.footer.imprint}
            </a>
            <a
              className="block transition hover:text-[#171717]"
              href={localizedPath(locale, "/privacy")}
            >
              {dict.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
