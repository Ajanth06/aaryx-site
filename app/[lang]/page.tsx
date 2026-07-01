import { notFound } from "next/navigation";
import { LangSwitcher } from "../components/lang-switcher";
import { LiveMarketClocks } from "../components/live-market-clocks";
import { Logo } from "../components/logo";
import { getDictionary, isLocale, localizedPath } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/types";
import { contactEmail } from "@/lib/site";

type IconName =
  | "analytics"
  | "approval"
  | "factory"
  | "globe"
  | "network"
  | "package"
  | "shield"
  | "truck";

const iconPaths: Record<IconName, string> = {
  analytics: "M4 19V5M4 19H20M8 16V11M12 16V7M16 16V10M20 16V4",
  approval: "M4 12L9 17L20 6M5 20H19",
  factory: "M4 20V9L9 12V9L14 12V8L20 12V20H4ZM7 16H9M12 16H14M17 16H18",
  globe:
    "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21C14 18.5 15 15.5 15 12C15 8.5 14 5.5 12 3M12 21C10 18.5 9 15.5 9 12C9 8.5 10 5.5 12 3M4 9H20M4 15H20",
  network:
    "M6 8A2 2 0 1 0 6 4A2 2 0 0 0 6 8ZM18 8A2 2 0 1 0 18 4A2 2 0 0 0 18 8ZM12 20A2 2 0 1 0 12 16A2 2 0 0 0 12 20ZM8 7L10.5 16M16 7L13.5 16M8 6H16",
  package: "M4 8L12 4L20 8L12 12L4 8ZM4 8V16L12 20M20 8V16L12 20M12 12V20",
  shield: "M12 21C8 19 5 15.5 5 10V5L12 3L19 5V10C19 15.5 16 19 12 21ZM9 12L11 14L15 9",
  truck:
    "M3 7H14V16H3V7ZM14 10H18L21 13V16H14V10ZM7 19A2 2 0 1 0 7 15A2 2 0 0 0 7 19ZM18 19A2 2 0 1 0 18 15A2 2 0 0 0 18 19Z",
};

const mapNodeCoords = [
  [82, 54],
  [154, 87],
  [162, 106],
  [184, 83],
  [202, 58],
] as const;

function Icon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#d24b2f] sm:text-sm sm:tracking-[0.24em]">
      {children}
    </p>
  );
}

function ProcurementDashboard({ dict }: { dict: Dictionary }) {
  const d = dict.dashboard;

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#3f3a32]/45">
        {d.illustration}
      </p>
      <div className="overflow-hidden rounded-[2rem] bg-[#171717] p-4 shadow-2xl shadow-[#171717]/20 sm:p-6">
        <div className="rounded-[1.4rem] bg-[#fefaf1] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4 border-b border-[#171717]/10 pb-4">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#171717]/50 sm:text-xs">
                {d.commandCenter}
              </p>
              <p className="mt-1 text-xl font-black">AARYX OS</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-3 py-2 text-xs font-black text-white">
              <span className="size-2 rounded-full bg-[#d24b2f] motion-safe:animate-pulse" />
              {d.live}
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {d.metrics.map((metric) => (
              <div
                className="rounded-2xl border border-[#171717]/10 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#171717]/10"
                key={metric.label}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#171717]/45">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-black leading-none">{metric.value}</p>
                <p className="mt-2 text-xs font-bold text-[#3f3a32]/55">{metric.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-[#171717]/10 bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black">{d.approvalPipeline}</p>
                  <p className="mt-1 text-xs font-semibold text-[#3f3a32]/50">
                    {d.approvalSub}
                  </p>
                </div>
                <Icon name="approval" />
              </div>
              <div className="mt-4 space-y-4">
                {d.workflow.map((item) => (
                  <div key={item.stage}>
                    <div className="flex justify-between gap-3 text-xs font-bold">
                      <span>{item.stage}</span>
                      <span className="text-[#3f3a32]/50">{item.status}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e2d7c3]">
                      <span
                        className="block h-full rounded-full bg-[#d24b2f]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#e2d7c3] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-black">{d.analytics}</p>
                  <p className="mt-1 text-xs font-semibold text-[#3f3a32]/55">
                    {d.analyticsSub}
                  </p>
                </div>
                <span className="rounded-full bg-[#171717] px-3 py-1 text-xs font-black text-white">
                  92%
                </span>
              </div>
              <div className="mt-6 flex h-32 items-end gap-2">
                {[46, 64, 52, 78, 68, 92, 84].map((height, index) => (
                  <span
                    className="flex-1 rounded-t-lg bg-[#171717]"
                    key={height + index}
                    style={{
                      height: `${height}%`,
                      opacity: index % 2 ? 0.45 : 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-[#171717]/10 bg-white p-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-black">{d.operationalStatus}</p>
              <span className="rounded-full bg-[#2d8b57]/12 px-3 py-1 text-xs font-bold text-[#2d8b57]">
                {d.running}
              </span>
            </div>
            <LiveMarketClocks labels={d.clocks} />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorldMap({ dict }: { dict: Dictionary }) {
  const n = dict.network;

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#171717]/10 bg-[#171717] p-4 text-white shadow-xl shadow-[#171717]/10">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black">{n.mapTitle}</p>
          <p className="mt-1 text-xs font-semibold text-white/45">{n.mapSub}</p>
        </div>
        <Icon name="globe" />
      </div>
      <svg aria-label={n.mapAria} role="img" viewBox="0 0 240 128">
        <defs>
          <filter id="mapGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect fill="#171717" height="128" rx="16" width="240" />
        <path
          d="M0 32H240M0 64H240M0 96H240M40 0V128M80 0V128M120 0V128M160 0V128M200 0V128"
          stroke="#fefaf1"
          strokeOpacity="0.08"
        />
        <path d="M78 42L96 31L120 36L114 50L92 55Z" fill="#fefaf1" fillOpacity="0.24" />
        <path d="M125 52L152 54L167 74L159 105L137 98L130 75Z" fill="#fefaf1" fillOpacity="0.22" />
        <path d="M151 37L185 31L218 47L224 66L199 72L176 63L157 70L135 55Z" fill="#fefaf1" fillOpacity="0.25" />
        <path d="M158 95L169 105L164 116L154 108Z" fill="#fefaf1" fillOpacity="0.3" />
        <g fill="none" stroke="#d24b2f" strokeLinecap="round" strokeWidth="1.8">
          <path className="motion-safe:animate-pulse" d="M82 54C110 46 132 60 154 87" strokeDasharray="4 5" />
          <path className="motion-safe:animate-pulse" d="M82 54C116 36 160 37 202 58" strokeDasharray="4 5" />
          <path className="motion-safe:animate-pulse" d="M154 87C166 85 176 83 184 83" strokeDasharray="4 5" />
          <path className="motion-safe:animate-pulse" d="M162 106C171 98 178 90 184 83" strokeDasharray="4 5" />
        </g>
        {n.nodes.map((label, index) => {
          const [x, y] = mapNodeCoords[index] ?? [0, 0];
          return (
            <g filter="url(#mapGlow)" key={label}>
              <circle cx={x} cy={y} fill="#d24b2f" r="4" />
              <circle cx={x} cy={y} fill="none" r="8" stroke="#d24b2f" strokeOpacity="0.32" />
              <text fill="#fefaf1" fontSize="6" fontWeight="700" x={x + 8} y={y - 5}>
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);
  const homeHref = localizedPath(lang);

  const navItems = [
    { href: "#services", label: dict.nav.services },
    { href: "#network", label: dict.nav.network },
    { href: "#industries", label: dict.nav.industries },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f3ea] text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-[#171717]/10 bg-[#f7f3ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center justify-between gap-3 px-5 py-2 sm:gap-4 sm:px-8">
          <Logo claim={dict.logo.claim} href={homeHref} showClaim />
          <nav className="hidden min-w-0 items-center gap-8 text-sm font-medium text-[#171717]/70 md:flex">
            {navItems.map((item) => (
              <a
                className="whitespace-nowrap transition hover:text-[#171717]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LangSwitcher
              deLabel={dict.langSwitcher.de}
              enLabel={dict.langSwitcher.en}
              label={dict.langSwitcher.label}
              locale={lang}
            />
            <a
              className="rounded-full bg-[#171717] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2b2b2b] sm:px-5 sm:text-sm"
              href={`mailto:${contactEmail}`}
            >
              {dict.nav.startProject}
            </a>
          </div>
        </div>
        <nav className="mx-auto flex w-full max-w-7xl items-center gap-5 overflow-x-auto px-5 pb-2 text-xs font-medium text-[#171717]/60 [scrollbar-width:none] sm:px-8 md:hidden [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <a
              className="shrink-0 transition hover:text-[#171717]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-start gap-12 px-5 pb-20 pt-5 sm:px-8 sm:pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24 lg:pt-10">
        <div className="motion-safe:animate-[fade-up_700ms_ease-out_both]">
          <SectionLabel>{dict.hero.label}</SectionLabel>
          <h1 className="hero-title-blink mt-6 max-w-4xl text-[3.15rem] font-black leading-[0.96] text-[#171717] min-[390px]:text-6xl sm:text-7xl lg:text-8xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#3f3a32] sm:text-2xl sm:leading-9">
            {dict.hero.description}
          </p>
          <div className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#d24b2f] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b83f28] sm:w-auto"
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(dict.hero.mailSubjectProject)}`}
            >
              {dict.hero.ctaProject}
            </a>
            <a
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#171717]/20 px-6 text-sm font-bold text-[#171717] transition hover:-translate-y-0.5 hover:border-[#171717]/50 sm:w-auto"
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(dict.hero.mailSubjectCall)}`}
            >
              {dict.hero.ctaCall}
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-y border-[#171717]/10 py-5">
            {dict.hero.facts.map((fact) => (
              <div key={fact.label}>
                <p className="text-base font-black sm:text-lg">{fact.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#3f3a32]/45">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="motion-safe:animate-[fade-up_900ms_ease-out_120ms_both]">
          <ProcurementDashboard dict={dict} />
        </div>
      </section>

      <section className="border-y border-[#171717]/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {dict.trust.map((item) => (
            <article
              className="rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#171717]/10"
              key={item.title}
            >
              <div className="grid size-11 place-items-center rounded-full bg-[#171717] text-white">
                <Icon name={item.icon as IconName} />
              </div>
              <h2 className="mt-6 text-xl font-black">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#3f3a32]/65">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-36" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>{dict.services.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-black sm:text-6xl">{dict.services.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dict.services.items.map((item) => (
              <article
                className="rounded-[1.35rem] border border-[#171717]/10 bg-white p-7 shadow-lg shadow-[#171717]/5 transition hover:-translate-y-1 hover:border-[#d24b2f]/40 hover:shadow-2xl hover:shadow-[#171717]/10"
                key={item.title}
              >
                <div className="grid size-12 place-items-center rounded-full bg-[#f7f3ea] text-[#d24b2f]">
                  <Icon name={item.icon as IconName} />
                </div>
                <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#3f3a32]/70">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-24 text-white sm:px-8 lg:py-36" id="network">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>{dict.network.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-black sm:text-6xl">{dict.network.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              {dict.network.description}
            </p>
          </div>
          <WorldMap dict={dict} />
        </div>
      </section>

      <section className="border-b border-[#171717]/10 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.kpis.map((kpi) => (
            <div className="rounded-2xl bg-[#f7f3ea] p-7" key={kpi.label}>
              <p className="text-3xl font-black sm:text-4xl">{kpi.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#3f3a32]/45">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:py-36" id="industries">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>{dict.industries.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-black sm:text-6xl">{dict.industries.title}</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {dict.industries.items.map((industry, index) => (
              <div
                className="rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#171717]/10"
                key={industry}
              >
                <div className="grid size-11 place-items-center rounded-full bg-white text-[#d24b2f]">
                  <Icon name={index % 2 ? "factory" : "truck"} />
                </div>
                <p className="mt-8 text-lg font-black">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-36" id="contact">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[#171717] px-6 py-16 text-white sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black sm:text-6xl">{dict.contact.title}</h2>
            <p className="mt-6 text-lg leading-8 text-white/60">{dict.contact.description}</p>
            <a
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-[#d24b2f] px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b83f28]"
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(dict.contact.mailSubject)}`}
            >
              {dict.contact.cta}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#171717]/10 bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-[0.18em]">AARYX</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#3f3a32]/60">
              {dict.footer.description}
            </p>
          </div>
          <div>
            <p className="text-sm font-black">{dict.footer.services}</p>
            <div className="mt-4 space-y-3 text-sm font-semibold text-[#3f3a32]/60">
              {dict.footer.serviceItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-black">{dict.footer.company}</p>
            <div className="mt-4 space-y-3 text-sm font-semibold text-[#3f3a32]/60">
              <a className="block transition hover:text-[#171717]" href="#industries">
                {dict.footer.about}
              </a>
              <a className="block transition hover:text-[#171717]" href={`mailto:${contactEmail}`}>
                {dict.footer.contact}
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-black">{dict.footer.legal}</p>
            <div className="mt-4 space-y-3 text-sm font-semibold text-[#3f3a32]/60">
              <a
                className="block transition hover:text-[#171717]"
                href={localizedPath(lang, "/imprint")}
              >
                {dict.footer.imprint}
              </a>
              <a
                className="block transition hover:text-[#171717]"
                href={localizedPath(lang, "/privacy")}
              >
                {dict.footer.privacy}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
