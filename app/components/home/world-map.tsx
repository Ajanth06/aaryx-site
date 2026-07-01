import { ServiceIcon } from "../ui/service-icon";
import type { HomeSectionProps } from "./types";

const mapNodeCoords = [
  [82, 54],
  [154, 87],
  [162, 106],
  [184, 83],
  [202, 58],
] as const;

export function WorldMap({ dict }: HomeSectionProps) {
  const n = dict.network;

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#171717]/10 bg-[#171717] p-4 text-white shadow-xl shadow-[#171717]/10">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black">{n.mapTitle}</p>
          <p className="mt-1 text-xs font-semibold text-white/45">{n.mapSub}</p>
        </div>
        <ServiceIcon name="globe" />
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
