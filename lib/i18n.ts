import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import type { Dictionary } from "./dictionaries/types";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) {
    return defaultLocale;
  }

  const preferred = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase() ?? "");

  if (preferred.some((lang) => lang.startsWith("de"))) {
    return "de";
  }

  if (preferred.some((lang) => lang.startsWith("en"))) {
    return "en";
  }

  return defaultLocale;
}

export function localizedPath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function switchLocalePath(
  pathname: string,
  current: Locale,
  target: Locale,
): string {
  if (pathname === `/${current}`) {
    return `/${target}`;
  }

  if (pathname.startsWith(`/${current}/`)) {
    return pathname.replace(`/${current}`, `/${target}`);
  }

  return `/${target}`;
}
