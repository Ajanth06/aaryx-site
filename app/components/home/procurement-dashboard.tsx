import { LiveMarketClocks } from "../live-market-clocks";
import { ServiceIcon } from "../ui/service-icon";
import type { HomeSectionProps } from "./types";

export function ProcurementDashboard({ dict }: HomeSectionProps) {
  const d = dict.dashboard;

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-3xl bg-[#171717] p-3 shadow-2xl shadow-[#171717]/20 sm:rounded-[2rem] sm:p-6">
        <div className="rounded-[1.15rem] bg-[#fefaf1] p-3 sm:rounded-[1.4rem] sm:p-5">
          <div className="flex items-start justify-between gap-3 border-b border-[#171717]/10 pb-3 sm:gap-4 sm:pb-4">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#171717]/50 sm:text-xs sm:tracking-[0.14em]">
                {d.commandCenter}
              </p>
              <p className="mt-1 text-lg font-black sm:text-xl">AARYX OS</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#171717] px-2.5 py-1.5 text-[10px] font-black text-white sm:gap-2 sm:px-3 sm:py-2 sm:text-xs">
              <span className="size-2 rounded-full bg-[#d24b2f] motion-safe:animate-pulse" />
              {d.live}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:grid-cols-3 sm:gap-3">
            {d.metrics.map((metric) => (
              <div
                className="rounded-2xl border border-[#171717]/10 bg-white p-2.5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#171717]/10 sm:p-3"
                key={metric.label}
              >
                <p className="text-[9px] font-bold uppercase leading-snug tracking-[0.08em] text-[#171717]/45 sm:text-[10px] sm:tracking-[0.1em]">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-black leading-none sm:mt-3 sm:text-3xl">{metric.value}</p>
                <p className="mt-1.5 text-[11px] font-bold leading-snug text-[#3f3a32]/55 sm:mt-2 sm:text-xs">
                  {metric.note}
                </p>
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
                <ServiceIcon name="approval" />
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
