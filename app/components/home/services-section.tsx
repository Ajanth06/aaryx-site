import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, isIconName } from "../ui/service-icon";
import {
  homeSectionGrid,
  homeSectionHeader,
  homeSectionInner,
  homeSectionPadding,
  homeSectionTitle,
  homeCardTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

export function ServicesSection({ dict }: HomeSectionProps) {
  return (
    <section className={`border-t border-[#171717]/10 ${homeSectionPadding}`} id="services">
      <div className={homeSectionInner}>
        <div className={homeSectionHeader}>
          <SectionLabel>{dict.services.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{dict.services.title}</h2>
          <p className="mt-4 text-base leading-7 text-[#3f3a32]/65 sm:text-lg sm:leading-8">
            {dict.services.description}
          </p>
        </div>
        <div className={`${homeSectionGrid} grid gap-4 sm:grid-cols-2 sm:gap-6`}>
          {dict.services.items.map((item) => (
            <article
              className="rounded-[1.35rem] border border-[#171717]/10 bg-white p-5 shadow-sm shadow-[#171717]/5 transition hover:-translate-y-1 hover:border-[#d24b2f]/40 hover:shadow-xl hover:shadow-[#171717]/10 sm:p-7"
              key={item.title}
            >
              <div className="grid size-11 place-items-center rounded-full bg-[#f7f3ea] text-[#d24b2f] sm:size-12">
                {isIconName(item.icon) ? <ServiceIcon name={item.icon} /> : null}
              </div>
              <h3 className={`mt-6 text-xl sm:mt-8 sm:text-2xl lg:text-3xl ${homeCardTitle}`}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#3f3a32]/70 sm:mt-4 sm:text-base sm:leading-7">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
