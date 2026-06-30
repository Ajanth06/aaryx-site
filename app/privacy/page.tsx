import Link from "next/link";
import { Logo } from "../components/logo";

const sections = [
  [
    "Overview",
    "This privacy page is a layout preview. Replace this content with a legally reviewed privacy policy before launch.",
    "Diese Datenschutzerklärung ist ein Layout-Entwurf und muss vor dem Launch rechtlich geprüft und mit echten Angaben ergänzt werden.",
  ],
  [
    "Contact",
    "For privacy-related requests, contact contact@aaryx.de until the final legal contact details are added.",
    "Für Datenschutzanfragen vorläufig contact@aaryx.de nutzen, bis die finalen Kontaktdaten ergänzt sind.",
  ],
  [
    "Data processing",
    "The final version should describe hosting, server logs, contact requests, analytics, cookies and third-party services if used.",
    "Die finale Version sollte Hosting, Server-Logs, Kontaktanfragen, Analytics, Cookies und Drittanbieter beschreiben, falls genutzt.",
  ],
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] px-5 py-8 text-[#171717] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between border-b border-[#171717]/10 pb-6">
          <Logo href="/" />
          <Link
            className="text-sm font-bold text-[#171717]/55 transition hover:text-[#171717]"
            href="/"
          >
            Back home
          </Link>
        </header>

        <section className="py-16">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
            Privacy
          </p>
          <h1 className="mt-4 text-5xl font-black sm:text-7xl">
            Privacy / Datenschutz
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#3f3a32]/60">
            A clean legal page template for the AARYX website. The final text
            should be completed with your real business, hosting and data
            processing details.
          </p>
        </section>

        <section className="space-y-4 border-y border-[#171717]/10 py-8">
          {sections.map(([title, english, german]) => (
            <article className="rounded-2xl bg-white p-5" key={title}>
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#3f3a32]/75">
                {english}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#3f3a32]/45">
                {german}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
