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

  const { imprint } = getDictionary(lang).legal;

  return {
    title: imprint.metaTitle,
    description: imprint.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${lang}/imprint`,
      languages: {
        de: `${siteUrl}/de/imprint`,
        en: `${siteUrl}/en/imprint`,
        "x-default": `${siteUrl}/de/imprint`,
      },
    },
  };
}

export default async function ImprintPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);
  const legal = dict.legal.imprint;

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
            {legal.label}
          </p>
          <h1 className="mt-4 text-5xl font-black sm:text-7xl">{legal.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#3f3a32]/60">{legal.intro}</p>
        </section>

        <section className="grid gap-3 border-y border-[#171717]/10 py-8">
          {legal.fields.map((field) => (
            <div
              className="grid gap-2 rounded-2xl bg-white p-5 sm:grid-cols-[180px_1fr]"
              key={field.label}
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#171717]/45">
                {field.label}
              </p>
              <p className="font-semibold">{field.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 py-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-black">{legal.responsibleTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">
              {legal.responsibleBody}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-black">{legal.disclaimerTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">{legal.disclaimerBody}</p>
          </div>
          <div>
            <h2 className="text-xl font-black">{legal.linkLiabilityTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">
              {legal.linkLiabilityBody}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-black">{legal.copyrightTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">{legal.copyrightBody}</p>
          </div>
        </section>

        <section className="pb-10">
          <h2 className="text-xl font-black">{legal.disputeTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">{legal.disputeBody}</p>
        </section>
      </div>
    </main>
  );
}
