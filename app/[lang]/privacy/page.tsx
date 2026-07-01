import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  const { privacy } = getDictionary(lang).legal;

  return {
    title: privacy.metaTitle,
    description: privacy.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${lang}/privacy`,
      languages: {
        de: `${siteUrl}/de/privacy`,
        en: `${siteUrl}/en/privacy`,
        "x-default": `${siteUrl}/de/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);
  const privacy = dict.legal.privacy;

  return (
    <main className="min-h-screen bg-[#f7f3ea] px-5 py-8 text-[#171717] sm:px-8">
      <div className="mx-auto max-w-4xl">
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

        <section className="py-16">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
            {privacy.label}
          </p>
          <h1 className="mt-4 text-5xl font-black sm:text-7xl">{privacy.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#3f3a32]/60">{privacy.intro}</p>
          <p className="mt-3 text-xs font-semibold text-[#3f3a32]/45">{privacy.lastUpdated}</p>
        </section>

        <section className="space-y-4 border-y border-[#171717]/10 py-8">
          {privacy.sections.map((section) => (
            <article className="rounded-2xl bg-white p-5" key={section.title}>
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-6 text-[#3f3a32]/75">
                {section.body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
