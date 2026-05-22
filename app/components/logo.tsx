import Link from "next/link";

type LogoProps = {
  href?: string;
};

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link
      className="inline-flex items-center gap-3 text-[#171717]"
      href={href}
    >
      <span className="grid size-10 place-items-center rounded-full bg-[#d24b2f] text-sm font-black text-white">
        AX
      </span>
      <span className="text-xl font-black tracking-[0.18em]">AARYX</span>
    </Link>
  );
}
