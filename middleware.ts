import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  defaultLocale,
  getLocaleFromAcceptLanguage,
  isLocale,
  locales,
} from "./lib/i18n";

const legacyPaths = ["/imprint", "/privacy"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocaleFromAcceptLanguage(
    request.headers.get("accept-language"),
  );

  const pathnameHasLocale = locales.some(
    (item) => pathname === `/${item}` || pathname.startsWith(`/${item}/`),
  );

  if (!pathnameHasLocale) {
    if (pathname === "/") {
      const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
      response.headers.set("x-lang", locale);
      return response;
    }

    if (legacyPaths.includes(pathname)) {
      const response = NextResponse.redirect(
        new URL(`/${locale}${pathname}`, request.url),
      );
      response.headers.set("x-lang", locale);
      return response;
    }

    const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
    response.headers.set("x-lang", locale);
    return response;
  }

  const activeLocale = pathname.split("/")[1] ?? defaultLocale;
  const response = NextResponse.next();

  if (isLocale(activeLocale)) {
    response.headers.set("x-lang", activeLocale);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
