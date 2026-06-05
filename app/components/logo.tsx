import Link from "next/link";

type LogoProps = {
  href?: string;
  showClaim?: boolean;
};

export function Logo({ href = "/", showClaim = false }: LogoProps) {
  return (
    <Link
      className="inline-flex min-w-0 items-center gap-2.5 text-[#171717]"
      href={href}
    >
      <span className="grid size-9 place-items-center rounded-full bg-[#d24b2f] text-xs font-black text-white sm:size-10 sm:text-sm">
        AX
      </span>
      <span className="flex min-w-0 items-baseline gap-3">
        <span className="logo-word-shine text-lg font-black tracking-[0.16em] sm:text-xl sm:tracking-[0.18em]">
          AARYX
        </span>
        {showClaim ? (
          <span className="hidden max-w-[15rem] truncate text-[11px] font-black leading-none text-[#d24b2f] lg:inline">
            Alleine bist du gut. Mit AARYX bist du ein Superheld.
          </span>
        ) : null}
      </span>
    </Link>
  );
}
