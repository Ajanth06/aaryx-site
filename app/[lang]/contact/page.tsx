import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "../../components/contact-form";
import { LangSwitcher } from "../../components/lang-switcher";
import { Logo } from "../../components/logo";
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
    <main className="min-h-screen bg-[#f7f3ea] px-5 py-8 text-[#171717] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between gap-4 border-b border-[#171717]/10 pb-6">
          <Logo href={localizedPath(lang)} />
          <div className="flex items-center gap-3">
            <LangSwitcher
              deLabel={dict.langSwitcher.de}
              enLabel={dict.langSwitcher.en}
              label={dict.langSwitcher.label}
              locale={lang}
            />
            <Link
              className="text-sm font-bold text-[#171717]/55 transition hover:text-[#171717]"
              href={localizedPath(lang)}
            >
              {dict.legal.backHome}
            </Link>
          </div>
        </header>

        <section className="py-12">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
            {copy.label}
          </p>
          <h1 className="mt-4 text-5xl font-black sm:text-6xl">{copy.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#3f3a32]/60">{copy.description}</p>
        </section>

        <ContactForm copy={copy} locale={lang} />
      </div>
    </main>
  );
}
