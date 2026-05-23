import { Logo } from "./components/logo";

export default function Page() {
  const services = [
    [
      "01",
      "Procurement Systems",
      "Supplier onboarding, sourcing pipelines, request flows and procurement infrastructure.",
      "Digitale Beschaffungs- und Lieferantenprozesse.",
    ],
    [
      "02",
      "Operational Dashboards",
      "Internal tracking interfaces for approvals, delivery status, documents and teams.",
      "Interne Dashboards und strukturierte Abläufe.",
    ],
    [
      "03",
      "Digital Infrastructure",
      "Modern web platforms, scalable tools and reliable systems for daily operations.",
      "Skalierbare Webplattformen und digitale Lösungen.",
    ],
  ];

  const audiences = [
    "Import & export companies",
    "Procurement teams",
    "B2B service providers",
    "Operations-heavy businesses",
  ];

  const process = [
    [
      "Discover",
      "Understanding workflows, bottlenecks and operational needs.",
      "Analyse operativer Anforderungen.",
    ],
    [
      "Build",
      "Designing focused systems with clarity and scalability.",
      "Entwicklung klarer Systeme.",
    ],
    [
      "Launch",
      "Shipping production-ready platforms and operational tools.",
      "Bereitstellung produktionsreifer Tools.",
    ],
  ];

  const agentTasks = [
    "Scanning supplier response times",
    "Comparing quote terms",
    "Checking delivery risk",
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#171717]">
      <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-y-4 px-5 py-5 sm:px-8 md:flex-nowrap">
        <Logo href="/" />
        <nav className="order-3 flex w-full items-center justify-between gap-x-3 gap-y-2 text-sm font-medium text-[#171717]/70 md:order-none md:w-auto md:gap-8">
          <a className="whitespace-nowrap transition hover:text-[#171717]" href="#services">
            Services
          </a>
          <a className="whitespace-nowrap transition hover:text-[#171717]" href="#audience">
            Who we help
          </a>
          <a className="whitespace-nowrap transition hover:text-[#171717]" href="#process">
            Process
          </a>
          <a className="whitespace-nowrap transition hover:text-[#171717]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          className="rounded-full bg-[#171717] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
          href="mailto:hello@aaryx.com"
        >
          Start project
        </a>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-12 px-5 pb-12 pt-6 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
            Digital procurement & operational systems
          </p>
          <p className="mt-2 text-sm font-medium text-[#3f3a32]/60">
            Digitale Beschaffungs- & Unternehmenssysteme
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.96] text-[#171717] sm:text-7xl lg:text-8xl">
            Operational systems built for modern procurement teams.
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#3f3a32] sm:text-2xl">
            Digital infrastructure for suppliers, sourcing and business
            operations.
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3f3a32] sm:text-xl">
            AARYX develops procurement workflows, supplier management systems
            and scalable operational platforms for importers, distributors and
            B2B companies across Europe and Asia.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#3f3a32]/60 sm:text-base">
            Digitale Systeme für Einkauf, Lieferantenmanagement und operative
            Unternehmensprozesse.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-y border-[#171717]/10 py-5">
            {[
              ["Germany", "Base"],
              ["EU / Asia", "Markets"],
              ["B2B", "Focus"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-lg font-black">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#3f3a32]/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#d24b2f] px-7 text-sm font-bold text-white transition hover:bg-[#b83f28]"
              href="mailto:hello@aaryx.com"
            >
              <span>Start Project</span>
              <span className="ml-2 text-white/65">Projekt starten</span>
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#171717]/20 px-7 text-sm font-bold text-[#171717] transition hover:border-[#171717]/50"
              href="#services"
            >
              <span>View Services</span>
              <span className="ml-2 text-[#171717]/45">Leistungen ansehen</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#171717] p-4 shadow-2xl shadow-[#171717]/20 sm:p-6">
            <div className="flex h-full flex-col rounded-[1.4rem] bg-[#fefaf1] p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#171717]/50">
                    AI procurement agent
                  </p>
                  <p className="mt-1 text-xl font-black">AARYX OS</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#171717] px-3 py-2 text-xs font-black text-white">
                  <span className="size-2 rounded-full bg-[#d24b2f] motion-safe:animate-pulse" />
                  LIVE
                </div>
              </div>

              <div className="grid flex-1 content-between gap-3 py-4">
                <div className="rounded-2xl bg-[#e2d7c3] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171717]/45">
                        Active analysis
                      </p>
                      <p className="mt-2 text-3xl font-black leading-none">
                        3 quotes
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#171717]/55">
                        Compared in real time
                      </p>
                    </div>
                    <div className="grid size-16 place-items-center rounded-full bg-[#171717] text-sm font-black text-white">
                      AI
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171717]/45">
                      RFQs
                    </p>
                    <p className="mt-2 text-2xl font-black">24</p>
                  </div>
                  <div className="rounded-2xl bg-[#171717] p-3 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                      Risk
                    </p>
                    <p className="mt-2 text-2xl font-black">1</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171717]/45">
                      Ready
                    </p>
                    <p className="mt-2 text-2xl font-black">8</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#171717]/10 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-bold">Live workflow</p>
                    <span className="rounded-full bg-[#2d8b57]/12 px-3 py-1 text-xs font-bold text-[#2d8b57] motion-safe:animate-pulse">
                      Running
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {agentTasks.map((task, index) => (
                      <div className="flex items-center gap-3" key={task}>
                        <span
                          className="size-2 rounded-full bg-[#d24b2f] motion-safe:animate-pulse"
                          style={{ animationDelay: `${index * 250}ms` }}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-bold text-[#171717]/60">
                            {task}
                          </p>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#e2d7c3]">
                            <span
                              className="block h-full rounded-full bg-[#d24b2f] motion-safe:animate-pulse"
                              style={{
                                animationDelay: `${index * 250}ms`,
                                width: `${88 - index * 14}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#171717]/10 bg-white px-5 py-14 sm:px-8"
        id="services"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Systems for procurement and operations.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a32]/60">
              Leistungen für Einkauf, Lieferantenprozesse und operative
              Infrastruktur.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {services.map(([number, title, copy, german]) => (
            <article key={title} className="border-t border-[#171717]/20 pt-5">
              <p className="text-sm font-black text-[#d24b2f]">{number}</p>
              <h2 className="mt-5 text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-[#3f3a32]">{copy}</p>
              <p className="mt-3 text-sm leading-6 text-[#3f3a32]/55">
                {german}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="bg-[#171717] px-5 py-14 text-white sm:px-8"
        id="audience"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e87b61]">
              Who we help
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Built for teams where operations create the advantage.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/45">
              Für Unternehmen, bei denen klare Abläufe, Einkauf und
              Lieferantenprozesse direkt zum Wachstum beitragen.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                className="flex min-h-24 items-end rounded-2xl border border-white/10 bg-white/5 p-5"
                key={audience}
              >
                <p className="text-xl font-black">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]"
        id="process"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
            Process
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            From operational complexity to working systems.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#3f3a32]/60">
            Von komplexen Abläufen zu klaren, nutzbaren Systemen.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {process.map(([step, copy, german]) => (
            <div
              className="min-h-40 rounded-2xl bg-[#171717] p-5 text-white"
              key={step}
            >
              <p className="text-2xl font-black">{step}</p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                {copy}
              </p>
              <p className="mt-3 text-xs leading-5 text-white/45">
                {german}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#171717]/10 bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d24b2f]">
              Start
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Tell us what process needs to work better.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#3f3a32]/60">
              Kurze Beschreibung reicht. Wir melden uns mit den nächsten
              sinnvollen Schritten.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Procurement", "Supplier workflow", "Dashboard", "Web platform"].map(
              (item) => (
                <a
                  className="rounded-2xl border border-[#171717]/10 bg-[#f7f3ea] p-5 text-lg font-black transition hover:border-[#d24b2f]/60"
                  href={`mailto:hello@aaryx.com?subject=AARYX project: ${item}`}
                  key={item}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <footer
        className="bg-[#171717] px-5 py-10 text-white sm:px-8"
        id="contact"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-2xl font-black tracking-[0.18em]">AARYX</p>
            <p className="mt-2 text-sm text-white/55">
              Based in Germany. Building procurement and operational systems
              for Europe and Asia.
            </p>
            <p className="mt-1 text-xs text-white/35">
              ISO 9001:2015 aligned workflows.
            </p>
            <p className="mt-2 text-xs text-white/35">
              Sitz in Deutschland. Systeme für Einkauf und operative Prozesse.
            </p>
            <p className="mt-1 text-xs text-white/25">
              An ISO 9001:2015 ausgerichtete Workflows.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex gap-5 text-sm font-semibold text-white/55">
              <a className="transition hover:text-white" href="/imprint">
                Imprint / Impressum
              </a>
              <a className="transition hover:text-white" href="/privacy">
                Privacy / Datenschutz
              </a>
            </div>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-[#171717] transition hover:bg-[#f7f3ea]"
              href="mailto:hello@aaryx.com"
            >
              hello@aaryx.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
