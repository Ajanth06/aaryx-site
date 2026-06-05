import Link from "next/link";

type LogoProps = {
  href?: string;
};

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link
      className="inline-flex items-center gap-2.5 text-[#171717]"
      href={href}
    >
      <span className="grid size-9 place-items-center rounded-full bg-[#d24b2f] text-xs font-black text-white sm:size-10 sm:text-sm">
        AX
      </span>
      <span className="logo-word-shine text-lg font-black tracking-[0.16em] sm:text-xl sm:tracking-[0.18em]">
        AARYX
      </span>
    </Link>
  );
}
