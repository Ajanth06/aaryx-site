import Link from "next/link";

type LogoProps = {
  href?: string;
  showClaim?: boolean;
  claim?: string;
};

export function Logo({ href = "/", showClaim = false, claim }: LogoProps) {
  return (
    <Link
      className="inline-flex min-w-0 items-center gap-2.5 text-[#171717]"
      href={href}
    >
      <span className="grid size-9 place-items-center rounded-full bg-[#d24b2f] text-xs font-black text-white sm:size-10 sm:text-sm">
        AX
      </span>
      <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
        <span className="logo-word-shine text-lg font-black tracking-[0.16em] sm:text-xl sm:tracking-[0.18em]">
          AARYX
        </span>
        {showClaim && claim ? (
          <span className="max-w-[11rem] text-[10px] font-black leading-tight text-[#d24b2f] min-[420px]:max-w-none sm:text-[11px]">
            {claim}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
