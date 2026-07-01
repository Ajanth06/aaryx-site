import { SectionLabel } from "../ui/section-label";
import { WorldMap } from "./world-map";
import {
  homeSectionInner,
  homeSectionPadding,
  homeSectionScrollMargin,
  homeSectionTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

export function NetworkSection({ dict }: HomeSectionProps) {
  return (
    <section className={`bg-[#171717] text-white ${homeSectionPadding} ${homeSectionScrollMargin}`} id="network">
      <div className={`${homeSectionInner} grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
        <div>
          <SectionLabel>{dict.network.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{dict.network.title}</h2>
          <p className="mt-4 text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
            {dict.network.description}
          </p>
        </div>
        <WorldMap dict={dict} />
      </div>
    </section>
  );
}
