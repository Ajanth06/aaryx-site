import Link from "next/link";

type LogoProps = {
  href?: string;
  showClaim?: boolean;
  claim?: string;
  className?: string;
};

export function Logo({
  href = "/",
  showClaim = false,
  claim,
  className = "",
}: LogoProps) {
  return (
    <Link
      className={`inline-flex min-w-0 items-start gap-2 text-[#171717] sm:gap-2.5 ${className}`}
      href={href}
    >
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#d24b2f] text-[11px] font-black text-white sm:mt-1 sm:size-10 sm:text-sm">
        AX
      </span>
      <span className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
        <span className="logo-word-shine text-base font-black tracking-[0.14em] sm:text-xl sm:tracking-[0.18em]">
          AARYX
        </span>
        {showClaim && claim ? (
          <span className="text-[10px] font-black leading-[1.35] text-[#d24b2f] sm:max-w-xs sm:text-[11px] sm:leading-tight lg:max-w-sm">
            {claim}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
