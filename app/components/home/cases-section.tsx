import { SectionLabel } from "../ui/section-label";
import {
  homeSectionGrid,
  homeSectionHeader,
  homeSectionInner,
  homeSectionPadding,
  homeSectionTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

export function CasesSection({ dict }: HomeSectionProps) {
  const c = dict.cases;

  return (
    <section className={`border-t border-[#171717]/10 bg-white ${homeSectionPadding}`} id="cases">
      <div className={homeSectionInner}>
        <div className={homeSectionHeader}>
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className={homeSectionTitle}>{c.title}</h2>
          <p className="mt-4 text-sm font-semibold text-[#3f3a32]/50">{c.disclaimer}</p>
        </div>
        <div className={`${homeSectionGrid} grid gap-4 sm:grid-cols-2 sm:gap-6`}>
          {c.items.map((item) => (
            <article
              className="flex flex-col rounded-[1.35rem] border border-[#171717]/10 bg-[#f7f3ea] p-5 sm:p-7"
              key={item.industry}
            >
              <span className="inline-flex w-fit max-w-full rounded-full bg-[#d24b2f]/10 px-3 py-1 text-[11px] font-bold uppercase leading-snug tracking-[0.1em] text-[#d24b2f] sm:text-xs sm:tracking-[0.12em]">
                {item.industry}
              </span>
              <div className="mt-6 space-y-5 text-sm leading-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#171717]/45">
                    {c.situationLabel}
                  </p>
                  <p className="mt-2 text-[#3f3a32]/75">{item.situation}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#171717]/45">
                    {c.actionLabel}
                  </p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-[#3f3a32]/75">
                    {item.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#171717]/45">
                    {c.resultLabel}
                  </p>
                  <p className="mt-2 font-semibold text-[#171717]">{item.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
