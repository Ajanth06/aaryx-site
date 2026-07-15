import Image, { type StaticImageData } from "next/image";
import industrialComponentsImage from "@/public/images/cases/industrial-components.jpg";
import manufacturingRfqImage from "@/public/images/cases/manufacturing-rfq.jpg";
import medicalTechnologyImage from "@/public/images/cases/medical-technology.jpg";
import qualityManagementImage from "@/public/images/cases/quality-management.jpg";
import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, type IconName } from "../ui/service-icon";
import {
  homeSectionInner,
  homeSectionPadding,
  homeSectionScrollMargin,
} from "./section-styles";
import type { HomeSectionProps } from "./types";

const caseImages: StaticImageData[] = [
  medicalTechnologyImage,
  qualityManagementImage,
  manufacturingRfqImage,
  industrialComponentsImage,
];

const caseIcons: IconName[] = ["shield", "clipboard", "factory", "package"];

export function CasesSection({ dict }: HomeSectionProps) {
  const c = dict.cases;

  return (
    <section
      className={`relative overflow-hidden ${homeSectionPadding} ${homeSectionScrollMargin}`}
      id="cases"
    >
      <div
        aria-hidden
        className="absolute -right-48 top-24 size-[30rem] rounded-full bg-[#d24b2f]/7 blur-3xl"
      />
      <div className={`relative ${homeSectionInner}`}>
        <div className="max-w-4xl border-b border-[#171717]/10 pb-8 sm:pb-10">
          <SectionLabel>{c.label}</SectionLabel>
          <h1 className="mt-4 text-[2.15rem] font-black leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {c.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-[#3f3a32]/55 sm:text-base sm:leading-7">
            {c.disclaimer}
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 xl:grid-cols-2 xl:gap-6">
          {c.items.map((item, index) => (
            <article
              className="group grid min-w-0 overflow-hidden rounded-[1.35rem] border border-[#171717]/10 bg-white shadow-[0_12px_40px_rgba(23,23,23,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#d24b2f]/30 hover:shadow-[0_20px_55px_rgba(23,23,23,0.11)] sm:grid-cols-[0.86fr_1.14fr]"
              key={item.title}
            >
              <div className="relative min-h-64 overflow-hidden bg-[#e2d7c3] sm:min-h-full">
                <Image
                  alt=""
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 42vw, 22vw"
                  src={caseImages[index] ?? medicalTechnologyImage}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#171717]/28 via-transparent to-transparent"
                />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#171717]/65 px-2.5 py-1 font-mono text-[10px] font-black tracking-[0.18em] text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex min-w-0 flex-col p-4 sm:p-5 lg:p-6">
                <div className="flex items-start gap-2 text-[#d24b2f]">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-[#d24b2f]/10">
                    <ServiceIcon name={caseIcons[index] ?? "briefcase"} />
                  </span>
                  <p className="pt-1 text-[9px] font-black uppercase leading-4 tracking-[0.1em]">
                    {item.industry}
                  </p>
                </div>

                <h2 className="mt-4 text-lg font-black leading-[1.2] tracking-[-0.025em] sm:text-xl">
                  {item.title}
                </h2>

                <dl className="mt-5 space-y-4 text-[11px] leading-5 sm:text-xs">
                  <div className="grid grid-cols-[5.7rem_1fr] gap-3">
                    <dt className="font-black text-[#171717]">{c.ownerLabel}</dt>
                    <dd aria-label={c.confidentialOwner} className="min-w-0">
                      <span
                        aria-hidden
                        className="inline-flex select-none items-center gap-2 blur-[1.6px]"
                      >
                        <span className="grid size-6 place-items-center rounded-md bg-[#d24b2f] text-[8px] font-black text-white">
                          AX
                        </span>
                        <span className="font-black tracking-[0.03em] text-[#171717]/75">
                          {item.owner}
                        </span>
                      </span>
                    </dd>
                  </div>

                  <div className="grid grid-cols-[5.7rem_1fr] gap-3 border-t border-[#171717]/8 pt-4">
                    <dt className="font-black text-[#171717]">{c.situationLabel}</dt>
                    <dd className="text-[#3f3a32]/68">{item.situation}</dd>
                  </div>

                  <div className="grid grid-cols-[5.7rem_1fr] gap-3 border-t border-[#171717]/8 pt-4">
                    <dt className="font-black text-[#171717]">{c.actionLabel}</dt>
                    <dd className="text-[#3f3a32]/68">
                      {item.actions.join(", ")}
                    </dd>
                  </div>

                  <div className="grid grid-cols-[5.7rem_1fr] gap-3 border-t border-[#171717]/8 pt-4">
                    <dt className="font-black text-[#171717]">{c.resultLabel}</dt>
                    <dd className="font-bold text-[#171717]/78">{item.result}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
