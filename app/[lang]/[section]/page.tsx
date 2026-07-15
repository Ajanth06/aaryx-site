import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasesSection } from "@/app/components/home/cases-section";
import { IndustriesSection } from "@/app/components/home/industries-section";
import { MedsafeUdiSection } from "@/app/components/home/medsafe-udi-section";
import { NetworkSection } from "@/app/components/home/network-section";
import { ServicesSection } from "@/app/components/home/services-section";
import { SiteFooter } from "@/app/components/home/site-footer";
import { SiteHeader } from "@/app/components/home/site-header";
import { getDictionary, isLocale, localizedPath } from "@/lib/i18n";
import {
  isSectionSlug,
  sectionSlugs,
  type SectionSlug,
} from "@/lib/sections";
import { siteUrl } from "@/lib/site";

type SectionPageProps = {
  params: Promise<{ lang: string; section: string }>;
};

const sectionComponents = {
  services: ServicesSection,
  "medsafe-udi": MedsafeUdiSection,
  cases: CasesSection,
  network: NetworkSection,
  industries: IndustriesSection,
} satisfies Record<SectionSlug, typeof ServicesSection>;

export function generateStaticParams() {
  return sectionSlugs.map((section) => ({ section }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { lang, section } = await params;

  if (!isLocale(lang) || !isSectionSlug(section)) {
    return {};
  }

  const dict = getDictionary(lang);
  const titleBySection: Record<SectionSlug, string> = {
    services: dict.services.title,
    "medsafe-udi": dict.medsafeUdi.title,
    cases: dict.cases.title,
    network: dict.network.title,
    industries: dict.industries.title,
  };
  const descriptionBySection: Record<SectionSlug, string> = {
    services: dict.services.description,
    "medsafe-udi": dict.medsafeUdi.description,
    cases: dict.cases.disclaimer,
    network: dict.network.description,
    industries: dict.meta.description,
  };
  const path = `/${section}`;

  return {
    title: `${titleBySection[section]} | AARYX`,
    description: descriptionBySection[section],
    alternates: {
      canonical: `${siteUrl}/${lang}${path}`,
      languages: {
        de: `${siteUrl}/de${path}`,
        en: `${siteUrl}/en${path}`,
        "x-default": `${siteUrl}/de${path}`,
      },
    },
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { lang, section } = await params;

  if (!isLocale(lang) || !isSectionSlug(section)) {
    notFound();
  }

  const dict = getDictionary(lang);
  const contactHref = localizedPath(lang, "/contact");
  const Section = sectionComponents[section];

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f7f3ea] text-[#171717]">
      <SiteHeader
        contactHref={contactHref}
        dict={dict}
        homeHref={localizedPath(lang)}
        locale={lang}
      />
      <div className="flex-1">
        <Section dict={dict} />
      </div>
      <SiteFooter dict={dict} locale={lang} contactHref={contactHref} />
    </main>
  );
}
