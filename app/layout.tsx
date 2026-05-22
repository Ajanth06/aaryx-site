import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AARYX | Procurement & Operational Systems",
  description:
    "Modern procurement, workflow and digital infrastructure systems for companies across Europe and Asia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
