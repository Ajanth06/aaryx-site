import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, type IconName } from "../ui/service-icon";
import {
  homeSectionGrid,
  homeSectionHeader,
  homeSectionInner,
  homeSectionPadding,
  homeSectionScrollMargin,
  homeSectionTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

/**
 * One icon and a 2–3 word descriptor per industry.
 * Ordered to match dict.industries.items array.
 */
const industryMeta: { icon: IconName; descriptor: string }[] = [
  { icon: "shield", descriptor: "CE · ISO 13485 · MDR" },
  { icon: "factory", descriptor: "Fertigung & Montage" },
  { icon: "package", descriptor: "Produktion & Prozesse" },
  { icon: "truck", descriptor: "Lieferkette & Transport" },
  { icon: "clipboard", descriptor: "Agrar & Qualität" },
];

export function IndustriesSection({ dict }: HomeSectionProps) {
  return (
    <section
      className={`border-t border-[#171717]/10 bg-white ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="industries"
    >
      <div className={homeSectionInner}>
        <div className={homeSectionHeader}>
          <SectionLabel>{dict.industries.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{dict.industries.title}</h2>
        </div>

        <div
          className={`${homeSectionGrid} grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-5 lg:gap-4`}
        >
          {dict.industries.items.map((industry, index) => {
            const meta = industryMeta[index] ?? { icon: "factory" as IconName, descriptor: "" };
            return (
              <div
                className="group rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d24b2f]/30 hover:bg-white hover:shadow-xl hover:shadow-[#171717]/8 sm:p-6"
                key={industry}
              >
                <div className="grid size-10 place-items-center rounded-xl bg-[#171717] text-white shadow-sm shadow-[#171717]/10 transition duration-300 group-hover:bg-[#d24b2f] sm:size-11">
                  <ServiceIcon name={meta.icon} />
                </div>
                <p className="mt-5 text-base font-black leading-snug sm:mt-6 sm:text-lg">
                  {industry}
                </p>
                {meta.descriptor ? (
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3f3a32]/45">
                    {meta.descriptor}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
