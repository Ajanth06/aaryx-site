import { SectionLabel } from "../ui/section-label";
import { ServiceIcon } from "../ui/service-icon";
import {
  homeSectionGrid,
  homeSectionHeader,
  homeSectionInner,
  homeSectionPadding,
  homeSectionScrollMargin,
  homeSectionTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

const complianceBadges = ["EU MDR", "ISO 13485", "EUDAMED"];

export function MedsafeUdiSection({ dict }: HomeSectionProps) {
  const m = dict.medsafeUdi;

  return (
    <section
      className={`border-t border-[#171717]/10 bg-white ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="medsafe-udi"
    >
      <div className={homeSectionInner}>
        <div className={homeSectionHeader}>
          <SectionLabel>{m.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{m.title}</h2>
          <p className="mt-3 text-sm font-bold text-[#d24b2f] sm:mt-4 sm:text-lg">
            {m.subtitle}
          </p>

          {/* Compliance badge chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {complianceBadges.map((badge) => (
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-[#171717]/10 bg-[#f7f3ea] px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#171717]/55"
                key={badge}
              >
                <span aria-hidden className="size-1.5 rounded-full bg-[#d24b2f]" />
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-[#3f3a32]/65 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            {m.description}
          </p>
          <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            {m.detail}
          </p>
        </div>

        <div
          className={`${homeSectionGrid} rounded-[1.35rem] border border-[#171717]/10 bg-[#f7f3ea] p-5 shadow-sm shadow-[#171717]/5 sm:p-8 lg:p-10`}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <div>
              <div className="grid size-11 place-items-center rounded-2xl bg-[#171717] text-white shadow-md shadow-[#171717]/10 sm:size-12">
                <ServiceIcon name="document" />
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.12em] text-[#171717]/40 sm:mt-8">
                {m.supportTitle}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2">
                {m.supportItems.map((item) => (
                  <li
                    className="flex gap-2 text-sm leading-6 text-[#3f3a32]/70 sm:text-base"
                    key={item}
                  >
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d24b2f]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prominent CTA */}
            <a
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#d24b2f] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(210,75,47,0.22)] transition hover:-translate-y-0.5 hover:bg-[#b83f28] hover:shadow-[0_14px_34px_rgba(210,75,47,0.3)] sm:w-auto sm:px-8"
              href={m.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {m.cta}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
