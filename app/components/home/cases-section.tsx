"use client";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import industrialComponentsImage from "@/public/images/cases/industrial-components.jpg";
import manufacturingRfqImage from "@/public/images/cases/manufacturing-rfq.jpg";
import medicalTechnologyImage from "@/public/images/cases/medical-technology.jpg";
import qualityManagementImage from "@/public/images/cases/quality-management.jpg";
import { ServiceIcon, type IconName } from "../ui/service-icon";
import {
  homeSectionInner,
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

const caseColors = [
  { bg: "bg-[#1a1208]", accent: "bg-[#d24b2f]", border: "border-[#d24b2f]/30" },
  { bg: "bg-[#0e1318]", accent: "bg-[#2a6496]", border: "border-[#2a6496]/30" },
  { bg: "bg-[#121208]", accent: "bg-[#7c6a1e]", border: "border-[#c4a82f]/30" },
  { bg: "bg-[#0e1810]", accent: "bg-[#2a7048]", border: "border-[#2a7048]/30" },
];

export function CasesSection({ dict }: HomeSectionProps) {
  const c = dict.cases;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={`relative overflow-hidden bg-[#111] px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-36 ${homeSectionScrollMargin}`}
      id="cases"
    >
      {/* Subtle noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className={`relative ${homeSectionInner}`}>
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-12 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-16">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#d24b2f]">
              {c.label}
            </p>
            <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {c.title}
            </h2>
          </div>
          {/* Anonymization notice */}
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <svg
              aria-hidden
              className="size-3.5 shrink-0 text-white/40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            </svg>
            <span className="text-[10px] font-semibold text-white/40">
              {c.disclaimer}
            </span>
          </div>
        </div>

        {/* Case accordion rows */}
        <div className="space-y-px">
          {c.items.map((item, index) => {
            const isOpen = openIndex === index;
            const color = caseColors[index % caseColors.length];
            const img = caseImages[index] ?? medicalTechnologyImage;
            const icon = caseIcons[index] ?? "briefcase";
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.title}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${isOpen ? `${color.bg} ${color.border}` : "border-white/8 bg-white/4 hover:bg-white/6"}`}
              >
                {/* Row header — always visible, clickable */}
                <button
                  aria-controls={`case-body-${index}`}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-8 sm:py-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  type="button"
                >
                  {/* Number */}
                  <span
                    className={`shrink-0 font-mono text-[2rem] font-black leading-none tracking-[-0.06em] sm:text-[3rem] ${isOpen ? "text-white/90" : "text-white/20"} transition-colors duration-300`}
                  >
                    {num}
                  </span>

                  {/* Title + industry */}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[9px] font-black uppercase tracking-[0.18em] transition-colors duration-300 ${isOpen ? "text-[#d24b2f]" : "text-white/30"}`}
                    >
                      {item.industry}
                    </p>
                    <p
                      className={`mt-0.5 truncate text-sm font-black leading-snug tracking-[-0.02em] sm:text-lg ${isOpen ? "text-white" : "text-white/60"} transition-colors duration-300`}
                    >
                      {item.title}
                    </p>
                  </div>

                  {/* Icon + chevron */}
                  <div className="flex shrink-0 items-center gap-3">
                    <span
                      className={`hidden size-9 items-center justify-center rounded-xl sm:grid ${isOpen ? `${color.accent} text-white` : "bg-white/8 text-white/40"} transition-colors duration-300`}
                    >
                      <ServiceIcon name={icon} />
                    </span>
                    <span
                      className={`grid size-7 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "border-white/20 bg-white/10 text-white" : "border-white/10 bg-transparent text-white/30"}`}
                    >
                      <svg
                        aria-hidden
                        className={`size-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Expandable body */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
                  id={`case-body-${index}`}
                >
                  <div className="grid gap-0 border-t border-white/8 lg:grid-cols-[1fr_340px]">
                    {/* Details panel */}
                    <div className="space-y-0 divide-y divide-white/8 px-5 py-6 sm:px-8 sm:py-8">
                      {/* Situation */}
                      <div className="pb-6">
                        <p className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                          {c.situationLabel}
                        </p>
                        <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">
                          {item.situation}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="py-6">
                        <p className="mb-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                          {c.actionLabel}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.actions.map((action) => (
                            <span
                              className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[11px] font-semibold text-white/70"
                              key={action}
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Result — full-width highlight bar */}
                      <div className={`rounded-xl ${color.bg} border ${color.border} px-5 py-4 mt-0`}>
                        <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
                          {c.resultLabel}
                        </p>
                        <p className="text-sm font-black leading-snug text-white sm:text-base">
                          {item.result}
                        </p>
                      </div>

                      {/* Confidential owner */}
                      <div className="flex items-center gap-3 pt-6">
                        <span className="grid size-8 place-items-center rounded-lg bg-[#d24b2f] text-[9px] font-black text-white">
                          AX
                        </span>
                        <span
                          aria-label={c.confidentialOwner}
                          className="select-none text-sm font-black tracking-wide text-white/20 blur-[3px]"
                        >
                          {item.owner}
                        </span>
                      </div>
                    </div>

                    {/* Image panel — visible on large screens */}
                    <div className="relative hidden min-h-[280px] lg:block">
                      <Image
                        alt=""
                        className="object-cover"
                        fill
                        placeholder="blur"
                        sizes="340px"
                        src={img}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-r from-[#111]/80 via-transparent to-transparent"
                      />
                      {/* Large number watermark on image */}
                      <span
                        aria-hidden
                        className="absolute bottom-4 right-5 font-mono text-[5rem] font-black leading-none tracking-[-0.08em] text-white/10 select-none"
                      >
                        {num}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom total counter */}
        <div className="mt-10 flex items-center justify-end gap-3 border-t border-white/8 pt-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25">
            {String(c.items.length).padStart(2, "0")} {c.label}
          </span>
        </div>
      </div>
    </section>
  );
}
