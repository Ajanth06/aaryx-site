import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, isIconName } from "../ui/service-icon";
import {
  homeSectionGrid,
  homeSectionHeader,
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
      className={`border-t border-[#171717]/10 bg-white ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="competencies"
    >
      <div className={homeSectionInner}>
        <div className={homeSectionHeader}>
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{c.title}</h2>
        </div>
        <div className={`${homeSectionGrid} grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 md:gap-4`}>
          {c.items.map((item) => (
            <article
              className="rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-4 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#171717]/10 sm:p-6"
              key={item.title}
            >
              <div className="grid size-10 place-items-center rounded-full bg-[#171717] text-white sm:size-11">
                {isIconName(item.icon) ? <ServiceIcon name={item.icon} /> : null}
              </div>
              <h3 className={`mt-4 text-base sm:mt-6 sm:text-xl lg:text-2xl ${homeCardTitle}`}>
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
