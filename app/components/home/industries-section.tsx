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

export function IndustriesSection({ dict }: HomeSectionProps) {
  return (
    <section className={`border-t border-[#171717]/10 bg-white ${homeSectionPadding} ${homeSectionScrollMargin}`} id="industries">
      <div className={homeSectionInner}>
        <div className={homeSectionHeader}>
          <SectionLabel>{dict.industries.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{dict.industries.title}</h2>
        </div>
        <div className={`${homeSectionGrid} grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-5 lg:gap-4`}>
          {dict.industries.items.map((industry, index) => (
            <div
              className="rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-4 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#171717]/10 sm:p-5"
              key={industry}
            >
              <div className="grid size-10 place-items-center rounded-full bg-white text-[#d24b2f] sm:size-11">
                <ServiceIcon name={index % 2 ? "factory" : "truck"} />
              </div>
              <p className="mt-5 text-base font-black leading-snug sm:mt-8 sm:text-lg">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
