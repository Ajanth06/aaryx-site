import { company } from "@/lib/company";
import { homeSectionInner, homeSectionPadding, homeSectionScrollMargin } from "./section-styles";
import type { HomePageLinks, HomeSectionProps } from "./types";

type ContactSectionProps = HomeSectionProps &
  Pick<HomePageLinks, "contactHref" | "bookingHref" | "bookingIsExternal">;

export function ContactSection({
  dict,
  contactHref,
  bookingHref,
  bookingIsExternal,
}: ContactSectionProps) {
  return (
    <section
      className={`border-t border-[#171717]/10 ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="contact"
    >
      <div
        className={`${homeSectionInner} overflow-hidden rounded-[1.35rem] bg-[#171717] text-white sm:rounded-[1.75rem]`}
      >
        <div className="grid gap-8 px-6 py-10 sm:px-10 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-16 lg:py-20">
          {/* Left — headline + CTAs */}
          <div className="max-w-2xl">
            <h2 className="text-[1.65rem] font-black leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {dict.contact.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/55 sm:mt-5 sm:text-lg sm:leading-8">
              {dict.contact.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#d24b2f] px-7 text-sm font-bold text-white shadow-[0_10px_28px_rgba(210,75,47,0.28)] transition hover:-translate-y-0.5 hover:bg-[#b83f28] hover:shadow-[0_14px_34px_rgba(210,75,47,0.36)] sm:w-auto"
                href={contactHref}
              >
                {dict.contact.cta}
              </a>
              <a
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/8 sm:w-auto"
                href={bookingHref}
                {...(bookingIsExternal
                  ? { rel: "noopener noreferrer", target: "_blank" }
                  : {})}
              >
                {dict.contact.ctaCall}
              </a>
            </div>
          </div>

          {/* Right — address trust block */}
          <address className="not-italic">
            <div className="flex flex-col gap-2 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/30">
                Kontakt & Anschrift
              </p>
              <a
                className="mt-1 text-sm font-semibold text-white/70 transition hover:text-white"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
              <p className="text-sm leading-6 text-white/45">
                {company.addressStreet}
                <br />
                {company.addressCity}
                <br />
                {company.addressCountryDe}
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white/30">
                <span aria-hidden className="size-1.5 rounded-full bg-[#d24b2f]" />
                Made in Germany
              </p>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
