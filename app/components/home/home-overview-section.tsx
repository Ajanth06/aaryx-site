import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";
import { SectionLabel } from "../ui/section-label";
import { ServiceIcon, type IconName } from "../ui/service-icon";
import type { HomeSectionProps } from "./types";

type HomeOverviewSectionProps = HomeSectionProps & {
  locale: Locale;
};

export function HomeOverviewSection({ dict, locale }: HomeOverviewSectionProps) {
  const items: Array<{
    description: string;
    href: string;
    icon: IconName;
    title: string;
  }> = [
    {
      title: dict.nav.services,
      description: dict.services.description,
      href: localizedPath(locale, "/services"),
      icon: "workflow",
    },
    {
      title: dict.nav.medsafeUdi,
      description: dict.medsafeUdi.description,
      href: localizedPath(locale, "/medsafe-udi"),
      icon: "document",
    },
    {
      title: dict.nav.cases,
      description: dict.cases.disclaimer,
      href: localizedPath(locale, "/cases"),
      icon: "briefcase",
    },
    {
      title: dict.nav.network,
      description: dict.network.description,
      href: localizedPath(locale, "/network"),
      icon: "network",
    },
    {
      title: dict.nav.industries,
      description: dict.industries.title,
      href: localizedPath(locale, "/industries"),
      icon: "factory",
    },
    {
      title: dict.nav.contact,
      description: dict.contact.description,
      href: localizedPath(locale, "/contact"),
      icon: "globe",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#171717] px-4 py-20 text-white sm:px-5 sm:py-28 lg:px-8 lg:py-36">
      <div aria-hidden className="absolute -right-32 -top-32 size-96 rounded-full bg-[#d24b2f]/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-48 -left-24 size-[30rem] rounded-full bg-[#e2d7c3]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>{dict.homeOverview.label}</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-[2rem] font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {dict.homeOverview.title}
            </h2>
          </div>
          <p
            className="max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8 lg:justify-self-end"
          >
            {dict.homeOverview.description}
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {items.map((item, index) => (
            <Link
              className="group flex min-h-64 flex-col rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-5 outline-none backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#d24b2f]/70 hover:bg-white/[0.09] focus-visible:ring-2 focus-visible:ring-[#d24b2f] sm:p-7"
              href={item.href}
              key={item.href}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-[#d24b2f] text-white shadow-[0_10px_28px_rgba(210,75,47,0.25)]">
                  <ServiceIcon name={item.icon} />
                </span>
                <span className="text-xs font-black tracking-[0.18em] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-black tracking-[-0.02em] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/50">
                {item.description}
              </p>
              <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-[#ef806a]">
                {dict.homeOverview.openLabel}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
