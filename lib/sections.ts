export const sectionSlugs = [
  "services",
  "medsafe-udi",
  "cases",
  "network",
  "industries",
] as const;

export type SectionSlug = (typeof sectionSlugs)[number];

export function isSectionSlug(value: string): value is SectionSlug {
  return sectionSlugs.includes(value as SectionSlug);
}
