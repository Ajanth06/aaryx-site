import { homeSectionInner, homeSectionPadding } from "./section-styles";
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
    <section className={`border-t border-[#171717]/10 ${homeSectionPadding}`} id="contact">
      <div className={`${homeSectionInner} rounded-[1.25rem] bg-[#171717] px-5 py-10 text-white sm:rounded-[1.5rem] sm:px-10 sm:py-16 lg:px-16`}>
        <div className="max-w-3xl">
          <h2 className="text-[1.75rem] font-black leading-[1.08] sm:text-4xl lg:text-6xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
            {dict.contact.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#d24b2f] px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b83f28]"
              href={contactHref}
            >
              {dict.contact.cta}
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/50"
              href={bookingHref}
              {...(bookingIsExternal
                ? { rel: "noopener noreferrer", target: "_blank" }
                : {})}
            >
              {dict.contact.ctaCall}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
