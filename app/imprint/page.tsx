import Link from "next/link";
import { Logo } from "../components/logo";

const details = [
  ["Provider", "AARYX"],
  ["Address", "Max-Reger-Straße 14, 73430 Aalen, Germany"],
  ["Email", "contact@aaryx.de"],
  ["Represented by", "Ajanth Ragunathan"],
  [
    "VAT ID",
    "VAT Identification Number according to §27a German VAT Act: Currently pending.",
  ],
];

export default function ImprintPage() {
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
            Legal
          </p>
          <h1 className="mt-4 text-5xl font-black sm:text-7xl">
            Imprint / Impressum
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#3f3a32]/60">
            Legal information for AARYX according to German disclosure
            requirements.
          </p>
        </section>

        <section className="grid gap-3 border-y border-[#171717]/10 py-8">
          {details.map(([label, value]) => (
            <div
              className="grid gap-2 rounded-2xl bg-white p-5 sm:grid-cols-[180px_1fr]"
              key={label}
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#171717]/45">
                {label}
              </p>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 py-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-black">Responsible for content</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">
              Ajanth Ragunathan
            </p>
          </div>
          <div>
            <h2 className="text-xl font-black">Disclaimer</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">
              The information on this page is a placeholder and does not
              constitute legal advice.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
