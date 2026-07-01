import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n";

export type HomeSectionProps = {
  dict: Dictionary;
};

export type HomePageLinks = {
  locale: Locale;
  homeHref: string;
  contactHref: string;
  bookingHref: string;
  bookingIsExternal: boolean;
};
