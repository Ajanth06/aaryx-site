import { ServiceIcon, isIconName } from "../ui/service-icon";
import type { HomeSectionProps } from "./types";

export function TrustSection({ dict }: HomeSectionProps) {
  return (
    <section className="border-y border-[#171717]/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {dict.trust.map((item) => (
          <article
            className="rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#171717]/10"
            key={item.title}
          >
            <div className="grid size-11 place-items-center rounded-full bg-[#171717] text-white">
              {isIconName(item.icon) ? <ServiceIcon name={item.icon} /> : null}
            </div>
            <h2 className="mt-6 text-xl font-black">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
