import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  locale?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const company = body.company?.trim() || "k. A.";
  const locale = body.locale === "en" ? "en" : "de";

  if (
    !name ||
    !email ||
    !message ||
    !emailPattern.test(email) ||
    name.length > 120 ||
    email.length > 254 ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const from =
    process.env.RESEND_FROM_EMAIL ?? "AARYX Website <onboarding@resend.com>";
  const subject =
    locale === "de"
      ? `Neue Projektanfrage von ${name}`
      : `New project enquiry from ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Locale: ${locale}`,
    "",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [contactEmail],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
