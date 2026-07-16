import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, isIconName } from "../ui/service-icon";
import {
  homeSectionGrid,
  homeSectionInner,
  homeSectionPadding,
  homeSectionScrollMargin,
  homeSectionTitle,
  homeCardTitle,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

/**
 * Static micro-descriptions keyed by icon name.
 * One sentence per competency — bilingual fallback is acceptable since
 * titles already come from the dictionary.
 */
const competencyDesc: Record<string, string> = {
  clipboard:
    "Strukturierte Bewertung von Lieferanten nach Qualität, Compliance und Leistungsfähigkeit.",
  shield:
    "Prozessoptimierung und Dokumentation nach EU MDR, ISO 13485 und internationalen Normen.",
  approval:
    "Planung und Durchführung von Lieferanten- und Systemaudits mit Maßnahmenverfolgung.",
  package:
    "RFQ-Management, Freigabe-Workflows und digitale Beschaffungsinfrastruktur.",
  document:
    "Unterstützung bei EU MDR, ISO 13485 und regulatorischen Dokumentationsanforderungen.",
  workflow:
    "Digitale Dashboards und Prozessstrukturen für transparente internationale Beschaffung.",
};

export function TrustSection({ dict }: HomeSectionProps) {
  const c = dict.competencies;

  return (
    <section
      className={`relative overflow-hidden bg-white ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="competencies"
    >
      <div aria-hidden className="absolute right-0 top-0 size-72 rounded-full bg-[#d24b2f]/5 blur-3xl" />

      <div className={`relative ${homeSectionInner}`}>
        {/* Trust bar — credentials from existing hero facts */}
        <div className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-[#171717]/8 pb-8 sm:mb-12 sm:pb-10">
          {dict.hero.facts.map((fact) => (
            <div key={fact.label} className="flex items-center gap-2.5">
              <span aria-hidden className="size-1.5 rounded-full bg-[#d24b2f]" />
              <span className="text-sm font-black text-[#171717]">{fact.value}</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-[#3f3a32]/45">
                {fact.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className={`${homeSectionTitle} mt-0 lg:mt-0`}>{c.title}</h2>
        </div>

        <div
          className={`${homeSectionGrid} grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 md:gap-4`}
        >
          {c.items.map((item, index) => (
            <article
              className={`group relative overflow-hidden rounded-[1.35rem] border border-[#171717]/9 bg-[#f7f3ea] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d24b2f]/35 hover:bg-white hover:shadow-xl hover:shadow-[#171717]/8 sm:p-7 motion-safe:animate-[fade-up_600ms_ease-out_both] stagger-${index + 1}`}
              key={item.title}
            >
              {/* Watermark number */}
              <span className="absolute right-5 top-4 text-4xl font-black tracking-[-0.08em] text-[#171717]/[0.04] transition-colors duration-300 group-hover:text-[#d24b2f]/[0.08] sm:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="grid size-11 place-items-center rounded-2xl bg-[#171717] text-white shadow-lg shadow-[#171717]/10 transition duration-300 group-hover:rotate-3 group-hover:bg-[#d24b2f] sm:size-12">
                {isIconName(item.icon) ? <ServiceIcon name={item.icon} /> : null}
              </div>

              {/* Title */}
              <h3
                className={`mt-6 max-w-[14rem] text-lg sm:mt-8 sm:text-xl lg:text-2xl ${homeCardTitle}`}
              >
                {item.title}
              </h3>

              {/* Micro-description */}
              {competencyDesc[item.icon] ? (
                <p className="mt-3 text-[13px] leading-5 text-[#3f3a32]/55 sm:mt-4 sm:text-sm sm:leading-6">
                  {competencyDesc[item.icon]}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
