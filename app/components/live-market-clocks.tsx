"use client";

import { useEffect, useState } from "react";

const clocks = [
  { city: "Berlin", label: "DE", timeZone: "Europe/Berlin" },
  { city: "Shanghai", label: "CN", timeZone: "Asia/Shanghai" },
  { city: "Istanbul", label: "TR", timeZone: "Europe/Istanbul" },
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
      <div className="grid grid-cols-3 gap-2">
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
            <div className="rounded-xl bg-[#fefaf1] p-2" key={clock.city}>
              <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#171717]">
                <div className="relative size-8 rounded-full border border-white/15 bg-[#171717]">
                  <span className="absolute left-1/2 top-1 h-1 w-px -translate-x-1/2 rounded-full bg-white/35" />
                  <span className="absolute bottom-1 left-1/2 h-1 w-px -translate-x-1/2 rounded-full bg-white/35" />
                  <span className="absolute left-1 top-1/2 h-px w-1 -translate-y-1/2 rounded-full bg-white/35" />
                  <span className="absolute right-1 top-1/2 h-px w-1 -translate-y-1/2 rounded-full bg-white/35" />
                  <span
                    className="absolute bottom-1/2 left-1/2 h-2.5 w-0.5 -translate-x-1/2 origin-bottom rounded-full bg-white"
                    style={{ transform: `translateX(-50%) rotate(${time.hourAngle}deg)` }}
                  />
                  <span
                    className="absolute bottom-1/2 left-1/2 h-3 w-0.5 -translate-x-1/2 origin-bottom rounded-full bg-white"
                    style={{ transform: `translateX(-50%) rotate(${time.minuteAngle}deg)` }}
                  />
                  <span
                    className="absolute bottom-1/2 left-1/2 h-3 w-px -translate-x-1/2 origin-bottom rounded-full bg-[#d24b2f]"
                    style={{ transform: `translateX(-50%) rotate(${time.secondAngle}deg)` }}
                  />
                  <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d24b2f]" />
                </div>
              </div>
              <p className="mt-1.5 text-center text-[9px] font-black uppercase tracking-[0.1em] text-[#171717]/45">
                {clock.city}
              </p>
              <p className="text-center text-[11px] font-black text-[#171717]">
                {time.digital} {clock.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
