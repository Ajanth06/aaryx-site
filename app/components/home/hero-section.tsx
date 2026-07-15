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
    <section className="relative isolate overflow-hidden border-b border-[#171717]/10">
      <div aria-hidden className="hero-grid absolute inset-0 -z-20 opacity-55" />
      <div aria-hidden className="absolute -left-40 top-1/3 -z-10 size-[28rem] rounded-full bg-[#d24b2f]/12 blur-3xl" />
      <div aria-hidden className="absolute -right-32 -top-40 -z-10 size-[34rem] rounded-full bg-white/80 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-5 sm:pb-24 sm:pt-14 lg:min-h-[calc(100vh-150px)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8 lg:py-20">
        <div className="motion-safe:animate-[fade-up_700ms_ease-out_both]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#171717]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-[#d24b2f] shadow-[0_0_0_5px_rgba(210,75,47,0.1)]" />
            <SectionLabel>{dict.hero.label}</SectionLabel>
          </div>
          <h1 className="mt-6 max-w-4xl text-[2.35rem] font-black leading-[0.98] tracking-[-0.055em] text-[#171717] min-[390px]:text-[2.75rem] sm:mt-8 sm:text-6xl lg:text-[4.75rem]">
            {dict.hero.title}
          </h1>
          <div className="mt-6 h-1 w-20 rounded-full bg-[#d24b2f] sm:mt-8" />
          <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-[#3f3a32]/78 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            {dict.hero.description}
          </p>
          <div className="mt-8 flex max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#d24b2f] px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(210,75,47,0.22)] transition hover:-translate-y-0.5 hover:bg-[#b83f28] hover:shadow-[0_16px_38px_rgba(210,75,47,0.3)] sm:w-auto"
              href={contactHref}
            >
              {dict.hero.ctaProject}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              className="inline-flex h-13 w-full items-center justify-center rounded-full border border-[#171717]/15 bg-white/55 px-7 text-sm font-bold text-[#171717] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#171717]/35 hover:bg-white sm:w-auto"
              href={bookingHref}
              {...(bookingIsExternal
                ? { rel: "noopener noreferrer", target: "_blank" }
                : {})}
            >
              {dict.hero.ctaCall}
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-2 min-[400px]:grid-cols-3 sm:mt-12 sm:gap-3">
            {dict.hero.facts.map((fact) => (
              <div
                className="rounded-2xl border border-[#171717]/8 bg-white/55 px-4 py-3 backdrop-blur min-[400px]:text-center"
                key={fact.label}
              >
                <p className="text-sm font-black break-words sm:text-base">{fact.value}</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#3f3a32]/42">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative motion-safe:animate-[fade-up_900ms_ease-out_120ms_both]">
          <div aria-hidden className="absolute -inset-5 -z-10 rotate-2 rounded-[2.5rem] border border-[#d24b2f]/15 bg-white/35" />
          <ProcurementDashboard dict={dict} />
        </div>
      </div>
    </section>
  );
}
