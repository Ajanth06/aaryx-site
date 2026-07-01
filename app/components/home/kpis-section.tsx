import type { HomeSectionProps } from "./types";

export function KpisSection({ dict }: HomeSectionProps) {
  return (
    <section className="border-b border-[#171717]/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dict.kpis.map((kpi) => (
          <div className="rounded-2xl bg-[#f7f3ea] p-7" key={kpi.label}>
            <p className="text-3xl font-black sm:text-4xl">{kpi.value}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#3f3a32]/45">
              {kpi.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
