import { SectionLabel } from "../ui/section-label";
import { WorldMap } from "./world-map";
import {
  homeSectionInner,
  homeSectionPadding,
  homeSectionScrollMargin,
  homeSectionTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

const networkStats = [
  { value: "5", label: "Standorte" },
  { value: "3", label: "Kontinente" },
  { value: "B2B", label: "Fokus" },
];

export function NetworkSection({ dict }: HomeSectionProps) {
  return (
    <section
      className={`bg-[#171717] text-white ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="network"
    >
      <div
        className={`${homeSectionInner} grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}
      >
        <div>
          <SectionLabel>{dict.network.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{dict.network.title}</h2>
          <p className="mt-4 text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
            {dict.network.description}
          </p>

          {/* Inline stats row */}
          <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8 sm:mt-10 sm:pt-10">
            {networkStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-3xl font-black leading-none tracking-[-0.04em] text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Node pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {dict.network.nodes.map((node) => (
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-semibold text-white/70"
                key={node}
              >
                <span aria-hidden className="size-1.5 rounded-full bg-[#d24b2f]" />
                {node}
              </span>
            ))}
          </div>
        </div>

        <WorldMap dict={dict} />
      </div>
    </section>
  );
}
