import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, isIconName } from "../ui/service-icon";
import {
  homeSectionGrid,
  homeSectionInner,
  homeSectionPadding,
  homeSectionScrollMargin,
  homeSectionTitle,
  homeCardTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

export function TrustSection({ dict }: HomeSectionProps) {
  const c = dict.competencies;

  return (
    <section
      className={`relative overflow-hidden bg-white ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="competencies"
    >
      <div aria-hidden className="absolute right-0 top-0 size-72 rounded-full bg-[#d24b2f]/5 blur-3xl" />
      <div className={`relative ${homeSectionInner}`}>
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className={`${homeSectionTitle} mt-0 lg:mt-0`}>{c.title}</h2>
        </div>
        <div className={`${homeSectionGrid} grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 md:gap-4`}>
          {c.items.map((item, index) => (
            <article
              className="group relative min-h-44 overflow-hidden rounded-[1.35rem] border border-[#171717]/9 bg-[#f7f3ea] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d24b2f]/35 hover:bg-white hover:shadow-xl hover:shadow-[#171717]/8 sm:min-h-52 sm:p-7"
              key={item.title}
            >
              <span className="absolute right-5 top-4 text-4xl font-black tracking-[-0.08em] text-[#171717]/[0.035] sm:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="grid size-11 place-items-center rounded-2xl bg-[#171717] text-white shadow-lg shadow-[#171717]/10 transition group-hover:rotate-3 group-hover:bg-[#d24b2f] sm:size-12">
                {isIconName(item.icon) ? <ServiceIcon name={item.icon} /> : null}
              </div>
              <h3 className={`mt-8 max-w-[14rem] text-lg sm:mt-10 sm:text-xl lg:text-2xl ${homeCardTitle}`}>
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
