import Link from "next/link";

type LogoProps = {
  href?: string;
  showClaim?: boolean;
  claim?: string;
  className?: string;
  prominent?: boolean;
};

export function Logo({
  href = "/",
  showClaim = false,
  claim,
  className = "",
  prominent = false,
}: LogoProps) {
  return (
    <Link
      aria-label="AARYX"
      className={`group inline-flex min-w-0 items-center text-[#171717] outline-none ${
        prominent ? "gap-2.5 sm:gap-4" : "gap-2.5"
      } ${className}`}
      href={href}
    >
      <span
        className={`relative grid shrink-0 place-items-center overflow-hidden bg-[#d24b2f] font-black tracking-[-0.06em] text-white shadow-[0_8px_24px_rgba(210,75,47,0.24)] transition duration-300 group-hover:-translate-y-0.5 group-hover:rotate-2 group-hover:shadow-[0_12px_30px_rgba(210,75,47,0.32)] ${
          prominent
            ? "size-11 rounded-[0.9rem] text-sm sm:size-14 sm:rounded-[1.1rem] sm:text-lg"
            : "size-10 rounded-[0.85rem] text-sm"
        }`}
      >
        <span aria-hidden className="absolute inset-[3px] rounded-[inherit] border border-white/25" />
        <span className="relative">AX</span>
      </span>
      <span className="flex min-w-0 flex-col justify-center">
        <span
          className={`logo-word-shine font-black leading-none ${
            prominent
              ? "text-lg tracking-[0.16em] sm:text-[1.7rem] sm:tracking-[0.2em]"
              : "text-xl tracking-[0.18em]"
          }`}
        >
          AARYX
        </span>
        {showClaim && claim ? (
          <span className="mt-1 hidden max-w-sm text-[11px] font-bold leading-tight text-[#d24b2f] sm:block lg:text-xs">
            {claim}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
