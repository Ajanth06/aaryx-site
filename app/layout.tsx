import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const langHeader = headersList.get("x-lang");
  const lang = langHeader && isLocale(langHeader) ? langHeader : defaultLocale;

  return (
    <html lang={lang} className="antialiased">
      <body>{children}</body>
    </html>
  );
}
