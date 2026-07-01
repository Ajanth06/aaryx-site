import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, isIconName } from "../ui/service-icon";
import type { HomeSectionProps } from "./types";

export function ServicesSection({ dict }: HomeSectionProps) {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-36" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <SectionLabel>{dict.services.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-black sm:text-6xl">{dict.services.title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.services.items.map((item) => (
            <article
              className="rounded-[1.35rem] border border-[#171717]/10 bg-white p-7 shadow-lg shadow-[#171717]/5 transition hover:-translate-y-1 hover:border-[#d24b2f]/40 hover:shadow-2xl hover:shadow-[#171717]/10"
              key={item.title}
            >
              <div className="grid size-12 place-items-center rounded-full bg-[#f7f3ea] text-[#d24b2f]">
                {isIconName(item.icon) ? <ServiceIcon name={item.icon} /> : null}
              </div>
              <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#3f3a32]/70">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
