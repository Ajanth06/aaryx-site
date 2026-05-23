"use client";

import { useEffect, useState } from "react";

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
    hourAngle: ((hour % 12) + minute / 60) * 30,
    minuteAngle: (minute + second / 60) * 6,
    secondAngle: second * 6,
  };
}

function MarketMap() {
  return (
    <div className="rounded-xl bg-[#171717] p-2 shadow-inner">
      <svg
        aria-label="World market map"
        className="h-32 w-full"
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

        <rect width="240" height="132" rx="18" fill="#171717" />
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
        <g fill="none" stroke="#d8a63a" strokeDasharray="3 4" strokeLinecap="round" strokeOpacity="0.62">
          <path d="M116 39C130 45 145 60 158 78" />
          <path d="M141 65C153 69 165 79 177 88" />
          <path d="M158 78C169 65 179 60 190 58" />
          <path d="M190 58C198 55 204 52 210 50" />
          <path d="M61 43C82 34 101 34 116 39" />
          <path d="M61 43C68 62 75 82 81 96" />
        </g>

        {clocks.map((clock, index) => (
          <g filter="url(#goldGlow)" key={clock.city}>
            <circle
              className="motion-safe:animate-pulse"
              cx={clock.mapX}
              cy={clock.mapY}
              fill="#d8a63a"
              r="3.2"
              style={{ animationDelay: `${index * 180}ms` }}
            />
            <circle
              cx={clock.mapX}
              cy={clock.mapY}
              fill="none"
              r="6.2"
              stroke="#d8a63a"
              strokeOpacity="0.35"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function LiveMarketClocks() {
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
    <div className="rounded-2xl border border-[#171717]/10 bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-bold">Market clocks</p>
        <span className="rounded-full bg-[#171717] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
          Live
        </span>
      </div>
      <div className="space-y-2">
        <MarketMap />

        <div className="grid grid-cols-2 gap-1.5">
          {clocks.map((clock) => {
            const time = now
              ? getClockParts(now, clock.timeZone)
              : {
                  digital: "--:--",
                  hourAngle: 0,
                  minuteAngle: 0,
                  secondAngle: 0,
                };

            return (
              <div className="flex items-center gap-2 rounded-xl bg-[#fefaf1] p-1.5" key={clock.city}>
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[#171717]">
                  <div className="relative size-6 rounded-full border border-white/15 bg-[#171717]">
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
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-black uppercase tracking-[0.08em] text-[#171717]/45">
                    {clock.city}
                  </p>
                  <p className="text-xs font-black leading-tight text-[#171717]">
                    {time.digital} {clock.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
