"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { contactEmail } from "@/lib/site";

type ContactFormProps = {
  copy: Dictionary["contactPage"];
  locale: Locale;
};

type FormState = "idle" | "sending" | "success" | "error" | "not_configured";

export function ContactForm({ copy, locale }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!privacyAccepted) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
          locale,
          website: formData.get("website"),
        }),
      });

      if (response.status === 503) {
        setState("not_configured");
        return;
      }

      if (!response.ok) {
        setState("error");
        return;
      }

      form.reset();
      setPrivacyAccepted(false);
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-white p-8">
        <h2 className="text-2xl font-black">{copy.successTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-[#3f3a32]/75">{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form className="space-y-5 rounded-2xl bg-white p-6 sm:p-8" onSubmit={handleSubmit}>
      {(state === "error" || state === "not_configured") && (
        <div
          className="rounded-xl border border-[#d24b2f]/25 bg-[#fff4f1] px-4 py-3 text-sm text-[#7a2d1d]"
          role="alert"
        >
          <p className="font-bold">{copy.errorTitle}</p>
          <p className="mt-1">
            {state === "not_configured" ? copy.errorNotConfigured : copy.errorBody}
          </p>
          {state === "not_configured" && (
            <a
              className="mt-3 inline-flex font-bold text-[#d24b2f] underline-offset-2 hover:underline"
              href={`mailto:${contactEmail}`}
            >
              {copy.mailFallback}
            </a>
          )}
        </div>
      )}

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          {copy.fields.name}
          <input
            className="mt-2 w-full rounded-xl border border-[#171717]/15 bg-[#f7f3ea] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#d24b2f]"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="block text-sm font-bold">
          {copy.fields.email}
          <input
            className="mt-2 w-full rounded-xl border border-[#171717]/15 bg-[#f7f3ea] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#d24b2f]"
            name="email"
            required
            type="email"
          />
        </label>
      </div>

      <label className="block text-sm font-bold">
        {copy.fields.company}
        <input
          className="mt-2 w-full rounded-xl border border-[#171717]/15 bg-[#f7f3ea] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#d24b2f]"
          name="company"
          type="text"
        />
      </label>

      <label className="block text-sm font-bold">
        {copy.fields.message}
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-xl border border-[#171717]/15 bg-[#f7f3ea] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#d24b2f]"
          name="message"
          required
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#3f3a32]/75">
        <input
          checked={privacyAccepted}
          className="mt-1 size-4 rounded border-[#171717]/20"
          onChange={(event) => setPrivacyAccepted(event.target.checked)}
          required
          type="checkbox"
        />
        <span>
          {copy.fields.privacyBefore}
          <Link
            className="font-bold text-[#d24b2f] underline-offset-2 hover:underline"
            href={localizedPath(locale, "/privacy")}
          >
            {copy.fields.privacyLink}
          </Link>
          {copy.fields.privacyAfter}
        </span>
      </label>

      <button
        className="inline-flex h-12 items-center justify-center rounded-full bg-[#d24b2f] px-8 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b83f28] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={state === "sending"}
        type="submit"
      >
        {state === "sending" ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
