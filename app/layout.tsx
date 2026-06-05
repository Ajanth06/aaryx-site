import type { Metadata, Viewport } from "next";
import { HorizontalScrollLock } from "./components/horizontal-scroll-lock";
import "./globals.css";

export const metadata: Metadata = {
  title: "AARYX | Procurement & Operational Systems",
  description:
    "Modern procurement, workflow and digital infrastructure systems for companies across Europe and Asia.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden antialiased">
      <body className="overflow-x-hidden">
        <HorizontalScrollLock />
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
