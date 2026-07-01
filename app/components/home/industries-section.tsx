import { SectionLabel } from "../ui/section-label";
import { ServiceIcon } from "../ui/service-icon";
import type { HomeSectionProps } from "./types";

export function IndustriesSection({ dict }: HomeSectionProps) {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:py-36" id="industries">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <SectionLabel>{dict.industries.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-black sm:text-6xl">{dict.industries.title}</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dict.industries.items.map((industry, index) => (
            <div
              className="rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#171717]/10"
              key={industry}
            >
              <div className="grid size-11 place-items-center rounded-full bg-white text-[#d24b2f]">
                <ServiceIcon name={index % 2 ? "factory" : "truck"} />
              </div>
              <p className="mt-8 text-lg font-black">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
