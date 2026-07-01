export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aaryx.de";

export const contactEmail = "contact@aaryx.de";

/** Calendly or Microsoft Bookings URL – set NEXT_PUBLIC_BOOKING_URL in Vercel. */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? "";

export function getBookingHref(fallbackMailSubject: string): string {
  if (bookingUrl) {
    return bookingUrl;
  }

  return `mailto:${contactEmail}?subject=${encodeURIComponent(fallbackMailSubject)}`;
}

export function isExternalBookingLink(): boolean {
  return bookingUrl.length > 0;
}
