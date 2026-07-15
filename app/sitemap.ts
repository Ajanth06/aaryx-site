import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { sectionSlugs } from "@/lib/sections";
import { siteUrl } from "@/lib/site";

const paths = [
  "",
  ...sectionSlugs.map((section) => `/${section}`),
  "/contact",
  "/imprint",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((lang) =>
    paths.map((path) => ({
      url: `${siteUrl}/${lang}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.5,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${siteUrl}/${item}${path}`]),
        ),
      },
    })),
  );
}
