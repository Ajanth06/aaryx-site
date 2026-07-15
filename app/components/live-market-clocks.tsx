"use client";

import { useEffect, useState } from "react";

type ClockLabels = {
  title: string;
  live: string;
  mapAria: string;
  subtitle: string;
  hubs: string;
  day: string;
  night: string;
};

const clocks = [
  { city: "Berlin", label: "DE", timeZone: "Europe/Berlin", mapX: 116, mapY: 39 },
  { city: "Shanghai", label: "CN", timeZone: "Asia/Shanghai", mapX: 190, mapY: 58 },
  { city: "Chennai", label: "IN", timeZone: "Asia/Kolkata", mapX: 158, mapY: 78 },
  { city: "Dubai", label: "AE", timeZone: "Asia/Dubai", mapX: 141, mapY: 65 },
  { city: "Singapore", label: "SG", timeZone: "Asia/Singapore", mapX: 177, mapY: 88 },
  { city: "Tokyo", label: "JP", timeZone: "Asia/Tokyo", mapX: 210, mapY: 50 },
  { city: "New York", label: "US", timeZone: "America/New_York", mapX: 61, mapY: 43 },
  { city: "Sao Paulo", label: "BR", timeZone: "America/Sao_Paulo", mapX: 81, mapY: 96 },
];

function getClockParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, Number(part.value)]),
  );

  const hour = values.hour ?? 0;
  const minute = values.minute ?? 0;
  const second = values.second ?? 0;

  return {
    digital: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    seconds: String(second).padStart(2, "0"),
    isDaytime: hour >= 7 && hour < 19,
    hourAngle: ((hour % 12) + minute / 60) * 30,
    minuteAngle: (minute + second / 60) * 6,
    secondAngle: second * 6,
  };
}

function MarketMap({ labels }: { labels: ClockLabels }) {
  return (
    <div className="relative overflow-hidden rounded-[1.2rem] border border-white/8 bg-[#101010] shadow-inner">
      <div aria-hidden className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d24b2f]/12 blur-3xl" />
      <svg
        aria-label={labels.mapAria}
        className="relative h-36 w-full sm:h-40"
        role="img"
        viewBox="0 0 240 132"
      >
        <defs>
          <filter id="goldGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="240" height="132" rx="18" fill="#101010" />
        <path
          d="M0 33H240M0 66H240M0 99H240M40 0V132M80 0V132M120 0V132M160 0V132M200 0V132"
          stroke="#fefaf1"
          strokeOpacity="0.08"
        />
        <path
          d="M18 40L30 29L49 24L65 31L78 42L73 53L61 58L52 70L39 64L31 55L19 51Z"
          fill="#fefaf1"
          fillOpacity="0.28"
        />
        <path
          d="M66 72L82 80L88 95L80 114L70 126L63 117L66 100L60 88Z"
          fill="#fefaf1"
          fillOpacity="0.28"
        />
        <path
          d="M101 38L114 29L130 35L128 45L115 49L103 44Z"
          fill="#fefaf1"
          fillOpacity="0.32"
        />
        <path
          d="M116 51L136 55L146 73L140 96L126 110L115 98L110 76Z"
          fill="#fefaf1"
          fillOpacity="0.28"
        />
        <path
          d="M129 36L158 27L189 35L214 49L223 64L205 72L187 66L170 75L151 69L137 58L124 49Z"
          fill="#fefaf1"
          fillOpacity="0.3"
        />
        <path
          d="M153 67L164 73L160 90L150 82Z"
          fill="#fefaf1"
          fillOpacity="0.34"
        />
        <path
          d="M186 91L209 96L222 107L210 117L187 112L178 101Z"
          fill="#fefaf1"
          fillOpacity="0.28"
        />
        <g fill="none" stroke="#ef806a" strokeLinecap="round" strokeOpacity="0.72" strokeWidth="1.15">
          <path className="market-route" d="M116 39C130 45 145 60 158 78" pathLength="1" />
          <path className="market-route" d="M141 65C153 69 165 79 177 88" pathLength="1" style={{ animationDelay: "-0.6s" }} />
          <path className="market-route" d="M158 78C169 65 179 60 190 58" pathLength="1" style={{ animationDelay: "-1.2s" }} />
          <path className="market-route" d="M190 58C198 55 204 52 210 50" pathLength="1" style={{ animationDelay: "-1.8s" }} />
          <path className="market-route" d="M61 43C82 34 101 34 116 39" pathLength="1" style={{ animationDelay: "-2.4s" }} />
          <path className="market-route" d="M61 43C68 62 75 82 81 96" pathLength="1" style={{ animationDelay: "-3s" }} />
        </g>

        {clocks.map((clock, index) => (
          <g filter="url(#goldGlow)" key={clock.city}>
            <circle
              className="market-node-ring"
              cx={clock.mapX}
              cy={clock.mapY}
              fill="none"
              r="4"
              stroke="#ef806a"
              style={{ animationDelay: `${index * 180}ms` }}
            />
            <circle
              cx={clock.mapX}
              cy={clock.mapY}
              fill="#ef806a"
              r="2.4"
            />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/8 bg-black/35 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white/45 backdrop-blur">
        <span className="size-1.5 rounded-full bg-[#ef806a] motion-safe:animate-pulse" />
        {String(clocks.length).padStart(2, "0")} {labels.hubs}
      </div>
    </div>
  );
}

export function LiveMarketClocks({ labels }: { labels: ClockLabels }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());

    const frame = window.requestAnimationFrame(update);
    const timer = window.setInterval(update, 1000);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#171717] p-3 text-white shadow-[0_18px_45px_rgba(23,23,23,0.18)]">
      <div className="mb-3 flex items-center justify-between px-1 pt-1">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/38">{labels.subtitle}</p>
          <p className="mt-1 text-sm font-black sm:text-base">{labels.title}</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#ef806a]/25 bg-[#d24b2f]/12 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#ff9a85]">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-[#ef806a] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#ef806a]" />
          </span>
          {labels.live}
        </span>
      </div>
      <div className="min-w-0 space-y-2">
        <MarketMap labels={labels} />

        <div className="grid min-w-0 grid-cols-2 gap-2">
          {clocks.map((clock) => {
            const time = now
              ? getClockParts(now, clock.timeZone)
              : {
                  digital: "--:--",
                  seconds: "--",
                  isDaytime: true,
                  hourAngle: 0,
                  minuteAngle: 0,
                  secondAngle: 0,
                };

            return (
              <div
                className="group relative flex min-w-0 items-center gap-2 overflow-hidden rounded-xl border border-white/8 bg-white/[0.055] p-2 transition hover:border-[#ef806a]/35 hover:bg-white/[0.09]"
                key={clock.city}
              >
                <div aria-hidden className={`absolute -right-5 -top-5 size-14 rounded-full blur-2xl ${time.isDaytime ? "bg-[#d8a63a]/18" : "bg-[#5468ff]/15"}`} />
                <div className="relative grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-black/30">
                  <div className="relative size-7 rounded-full border border-white/15 bg-[#171717]">
                    <span className="absolute left-1/2 top-1 h-1 w-px -translate-x-1/2 rounded-full bg-white/35" />
                    <span className="absolute bottom-1 left-1/2 h-1 w-px -translate-x-1/2 rounded-full bg-white/35" />
                    <span className="absolute left-1 top-1/2 h-px w-1 -translate-y-1/2 rounded-full bg-white/35" />
                    <span className="absolute right-1 top-1/2 h-px w-1 -translate-y-1/2 rounded-full bg-white/35" />
                    <span
                      className="absolute bottom-1/2 left-1/2 h-2 w-0.5 -translate-x-1/2 origin-bottom rounded-full bg-white"
                      style={{ transform: `translateX(-50%) rotate(${time.hourAngle}deg)` }}
                    />
                    <span
                      className="absolute bottom-1/2 left-1/2 h-2.5 w-0.5 -translate-x-1/2 origin-bottom rounded-full bg-white"
                      style={{ transform: `translateX(-50%) rotate(${time.minuteAngle}deg)` }}
                    />
                    <span
                      className="absolute bottom-1/2 left-1/2 h-2.5 w-px -translate-x-1/2 origin-bottom rounded-full bg-[#d24b2f]"
                      style={{ transform: `translateX(-50%) rotate(${time.secondAngle}deg)` }}
                    />
                    <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d24b2f]" />
                  </div>
                </div>
                <div className="relative min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className="truncate text-[9px] font-black uppercase tracking-[0.1em] text-white/48">{clock.city}</p>
                    <span aria-label={time.isDaytime ? labels.day : labels.night} className={`size-1.5 shrink-0 rounded-full ${time.isDaytime ? "bg-[#d8a63a]" : "bg-[#7887ff]"}`} />
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <p className="font-mono text-sm font-black leading-none tracking-[-0.05em] sm:text-base">
                      {time.digital}
                    </p>
                    <span className="font-mono text-[8px] font-bold text-white/28">{time.seconds}</span>
                  </div>
                  <span className="mt-1 inline-flex rounded-full bg-white/8 px-1.5 py-0.5 text-[8px] font-black tracking-[0.12em] text-white/40">{clock.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
