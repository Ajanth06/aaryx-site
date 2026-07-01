import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const brandIconVersion = "3";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: `/brand/icon.svg?v=${brandIconVersion}`,
        type: "image/svg+xml",
      },
      {
        url: `/brand/icon.ico?v=${brandIconVersion}`,
        sizes: "any",
      },
      {
        url: `/brand/icon-32.png?v=${brandIconVersion}`,
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: `/brand/icon-180.png?v=${brandIconVersion}`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: [`/brand/icon.ico?v=${brandIconVersion}`],
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
        <link
          href={`/brand/icon.svg?v=${brandIconVersion}`}
          rel="icon"
          type="image/svg+xml"
        />
        <link
          href={`/brand/icon.ico?v=${brandIconVersion}`}
          rel="icon"
          sizes="any"
        />
        <link
          href={`/brand/icon-180.png?v=${brandIconVersion}`}
          rel="apple-touch-icon"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
