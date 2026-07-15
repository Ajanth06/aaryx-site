import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "../../components/contact-form";
import { SiteFooter } from "@/app/components/home/site-footer";
import { SiteHeader } from "@/app/components/home/site-header";
import { getDictionary, isLocale, localizedPath } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const { contactPage } = getDictionary(lang);

  return {
    title: contactPage.metaTitle,
    description: contactPage.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${lang}/contact`,
      languages: {
        de: `${siteUrl}/de/contact`,
        en: `${siteUrl}/en/contact`,
        "x-default": `${siteUrl}/de/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);
  const copy = dict.contactPage;

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f7f3ea] text-[#171717]">
      <SiteHeader
        contactHref={localizedPath(lang, "/contact")}
        dict={dict}
        homeHref={localizedPath(lang)}
        locale={lang}
      />
      <div className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <section>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
            {copy.label}
          </p>
          <h1 className="mt-4 text-5xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#3f3a32]/60">{copy.description}</p>
        </section>

        <ContactForm copy={copy} locale={lang} />
      </div>
      <SiteFooter
        contactHref={localizedPath(lang, "/contact")}
        dict={dict}
        locale={lang}
      />
    </main>
  );
}
