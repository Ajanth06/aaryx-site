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
    <section className="mx-auto grid w-full max-w-7xl items-start gap-8 px-4 pb-14 pt-4 sm:gap-12 sm:px-5 sm:pb-20 sm:pt-5 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-24 lg:pt-10">
      <div className="motion-safe:animate-[fade-up_700ms_ease-out_both]">
        <SectionLabel>{dict.hero.label}</SectionLabel>
        <h1 className="hero-title-blink mt-4 max-w-4xl text-[2rem] font-black leading-[1.02] text-[#171717] min-[390px]:text-[2.35rem] sm:mt-6 sm:text-6xl sm:leading-[0.96] lg:text-8xl">
          {dict.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#3f3a32] sm:mt-6 sm:text-lg sm:leading-8 lg:text-2xl lg:leading-9">
          {dict.hero.description}
        </p>
        <div className="mt-7 flex max-w-xl flex-col gap-3 sm:mt-9 sm:flex-row">
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
        <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 border-y border-[#171717]/10 py-4 min-[400px]:grid-cols-3 min-[400px]:gap-2 sm:mt-10 sm:gap-3 sm:py-5">
          {dict.hero.facts.map((fact) => (
            <div className="min-[400px]:text-center" key={fact.label}>
              <p className="text-sm font-black break-words sm:text-lg">{fact.value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#3f3a32]/45 sm:text-[10px] sm:tracking-[0.1em]">
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
