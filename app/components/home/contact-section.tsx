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
    <section className="px-5 py-24 sm:px-8 lg:py-36" id="contact">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#171717] px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black sm:text-6xl">{dict.contact.title}</h2>
          <p className="mt-6 text-lg leading-8 text-white/60">{dict.contact.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
