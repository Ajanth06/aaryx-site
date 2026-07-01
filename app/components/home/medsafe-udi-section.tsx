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
          <p className="mt-3 text-sm font-semibold text-[#d24b2f] sm:mt-4 sm:text-lg">{m.subtitle}</p>
          <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            {m.description}
          </p>
          <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            {m.detail}
          </p>
        </div>
        <div className={`${homeSectionGrid} rounded-[1.35rem] border border-[#171717]/10 bg-[#f7f3ea] p-4 shadow-sm shadow-[#171717]/5 transition hover:-translate-y-1 hover:border-[#d24b2f]/40 hover:shadow-xl hover:shadow-[#171717]/10 sm:p-8 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <div>
              <div className="grid size-11 place-items-center rounded-full bg-white text-[#d24b2f] sm:size-12">
                <ServiceIcon name="document" />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#171717]/45 sm:mt-8">
                {m.supportTitle}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2">
                {m.supportItems.map((item) => (
                  <li className="flex gap-2 text-sm leading-6 text-[#3f3a32]/75 sm:text-base" key={item}>
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d24b2f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b2b2b] sm:w-auto sm:px-6"
              href={m.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden>→</span>
              {m.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
