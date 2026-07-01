import { notFound } from "next/navigation";
import { CasesSection } from "@/app/components/home/cases-section";
import { ContactSection } from "@/app/components/home/contact-section";
import { HeroSection } from "@/app/components/home/hero-section";
import { IndustriesSection } from "@/app/components/home/industries-section";
import { MedsafeUdiSection } from "@/app/components/home/medsafe-udi-section";
import { NetworkSection } from "@/app/components/home/network-section";
import { ServicesSection } from "@/app/components/home/services-section";
import { SiteFooter } from "@/app/components/home/site-footer";
import { SiteHeader } from "@/app/components/home/site-header";
import { TrustSection } from "@/app/components/home/trust-section";
import { getDictionary, isLocale, localizedPath } from "@/lib/i18n";
import { getBookingHref, isExternalBookingLink } from "@/lib/site";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);
  const links = {
    locale: lang,
    homeHref: localizedPath(lang),
    contactHref: localizedPath(lang, "/contact"),
    bookingHref: getBookingHref(dict.hero.mailSubjectCall),
    bookingIsExternal: isExternalBookingLink(),
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f3ea] text-[#171717]">
      <SiteHeader
        contactHref={links.contactHref}
        dict={dict}
        homeHref={links.homeHref}
        locale={links.locale}
      />
      <HeroSection dict={dict} {...links} />
      <TrustSection dict={dict} />
      <ServicesSection dict={dict} />
      <MedsafeUdiSection dict={dict} />
      <CasesSection dict={dict} />
      <NetworkSection dict={dict} />
      <IndustriesSection dict={dict} />
      <ContactSection dict={dict} {...links} />
      <SiteFooter dict={dict} locale={links.locale} contactHref={links.contactHref} />
    </main>
  );
}
