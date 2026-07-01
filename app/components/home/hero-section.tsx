import { SectionLabel } from "../ui/section-label";
import { ProcurementDashboard } from "./procurement-dashboard";
import type { HomePageLinks, HomeSectionProps } from "./types";

type HeroSectionProps = HomeSectionProps &
  Pick<HomePageLinks, "contactHref" | "bookingHref" | "bookingIsExternal">;

export function HeroSection({
  dict,
  contactHref,
  bookingHref,
  bookingIsExternal,
}: HeroSectionProps) {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-start gap-12 px-5 pb-20 pt-5 sm:px-8 sm:pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24 lg:pt-10">
      <div className="motion-safe:animate-[fade-up_700ms_ease-out_both]">
        <SectionLabel>{dict.hero.label}</SectionLabel>
        <h1 className="hero-title-blink mt-6 max-w-4xl text-[3.15rem] font-black leading-[0.96] text-[#171717] min-[390px]:text-6xl sm:text-7xl lg:text-8xl">
          {dict.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#3f3a32] sm:text-2xl sm:leading-9">
          {dict.hero.description}
        </p>
        <div className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#d24b2f] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b83f28] sm:w-auto"
            href={contactHref}
          >
            {dict.hero.ctaProject}
          </a>
          <a
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#171717]/20 px-6 text-sm font-bold text-[#171717] transition hover:-translate-y-0.5 hover:border-[#171717]/50 sm:w-auto"
            href={bookingHref}
            {...(bookingIsExternal
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            {dict.hero.ctaCall}
          </a>
        </div>
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-y border-[#171717]/10 py-5">
          {dict.hero.facts.map((fact) => (
            <div key={fact.label}>
              <p className="text-base font-black sm:text-lg">{fact.value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#3f3a32]/45">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="motion-safe:animate-[fade-up_900ms_ease-out_120ms_both]">
        <ProcurementDashboard dict={dict} />
      </div>
    </section>
  );
}
