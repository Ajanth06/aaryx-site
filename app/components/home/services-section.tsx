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

export function ServicesSection({ dict }: HomeSectionProps) {
  return (
    <section
      className={`border-t border-[#171717]/10 ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="services"
    >
      <div className={homeSectionInner}>
        <div className={homeSectionHeader}>
          <SectionLabel>{dict.services.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{dict.services.title}</h2>
          <p className="mt-4 text-base leading-7 text-[#3f3a32]/65 sm:text-lg sm:leading-8">
            {dict.services.description}
          </p>
        </div>

        <div
          className={`${homeSectionGrid} grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6`}
        >
          {dict.services.items.map((item, index) => (
            <article
              className={`group relative overflow-hidden rounded-[1.35rem] border border-[#171717]/10 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,23,23,0.10)] sm:p-7 ${
                index % 3 === 1
                  ? "bg-[#f7f3ea]"
                  : index % 3 === 2
                    ? "bg-white"
                    : "bg-white"
              } hover:border-[#d24b2f]/30`}
              key={item.title}
            >
              {/* Top-edge accent line on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 rounded-b-none rounded-t-[1.35rem] bg-[#d24b2f] transition-transform duration-300 group-hover:scale-x-100"
              />

              {/* Icon — dark container */}
              <div className="grid size-11 place-items-center rounded-2xl bg-[#171717] text-white shadow-md shadow-[#171717]/10 transition duration-300 group-hover:bg-[#d24b2f] sm:size-12">
                {isIconName(item.icon) ? <ServiceIcon name={item.icon} /> : null}
              </div>

              <h3
                className={`mt-6 text-lg sm:mt-7 sm:text-xl lg:text-2xl ${homeCardTitle}`}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65 sm:mt-4 sm:text-[0.9rem] sm:leading-7">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
