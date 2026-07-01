import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", type: "image/png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.ico?v=2"],
  },
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
      <head>
        <link href="/favicon.svg?v=2" rel="icon" type="image/svg+xml" />
        <link href="/favicon.ico?v=2" rel="icon" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
