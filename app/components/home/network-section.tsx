import { SectionLabel } from "../ui/section-label";
import { WorldMap } from "./world-map";
import type { HomeSectionProps } from "./types";

export function NetworkSection({ dict }: HomeSectionProps) {
  return (
    <section className="bg-[#171717] px-5 py-24 text-white sm:px-8 lg:py-36" id="network">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>{dict.network.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-black sm:text-6xl">{dict.network.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            {dict.network.description}
          </p>
        </div>
        <WorldMap dict={dict} />
      </div>
    </section>
  );
}
