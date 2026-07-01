export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#d24b2f] sm:text-sm sm:tracking-[0.2em]">
      {children}
    </p>
  );
}
