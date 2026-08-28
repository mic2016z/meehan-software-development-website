"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

const fieldClass =
  "w-full border border-rule-strong bg-paper px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink-4 transition-colors focus:border-ink focus:outline-none";

export function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  function toggle(title: string) {
    setInterests((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Project enquiry${name ? ` — ${name}` : ""}${
      company ? `, ${company}` : ""
    }`;

    const body = [
      name && `Name: ${name}`,
      company && `Business: ${company}`,
      email && `Email: ${email}`,
      interests.length > 0 && `Interested in: ${interests.join(", ")}`,
      "",
      "What I'm trying to solve:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label block text-ink-3">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`${fieldClass} mt-3`}
          />
        </div>
        <div>
          <label htmlFor="company" className="label block text-ink-3">
            Business <span className="text-ink-4">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={`${fieldClass} mt-3`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="label block text-ink-3">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${fieldClass} mt-3`}
        />
      </div>

      <fieldset>
        <legend className="label text-ink-3">What&rsquo;s this about?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {[...services.map((service) => service.title), "Something else"].map((title) => {
            const checked = interests.includes(title);
            return (
              <label
                key={title}
                className={`cursor-pointer border px-4 py-2.5 text-[0.875rem] transition-colors ${
                  checked
                    ? "border-ink bg-ink text-paper"
                    : "border-rule-strong text-ink-2 hover:border-ink"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggle(title)}
                />
                {title}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="label block text-ink-3">
          What are you trying to solve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="The manual bit, the thing that keeps slipping, or the tool you wish existed. Rough is fine."
          className={`${fieldClass} mt-3 resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="bg-ink px-7 py-4 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-signal"
        >
          Compose the email
        </button>
        <p className="max-w-xs text-[0.8125rem] leading-relaxed text-ink-3">
          This opens your own email app with the details filled in. Nothing is stored
          here &mdash; the site has no database.
        </p>
      </div>

      {sent ? (
        <p role="status" className="border-l-2 border-signal bg-paper-2 px-5 py-4 text-[0.9375rem] text-ink-2">
          Your email client should have opened. If it didn&rsquo;t, send the same details
          to{" "}
          <a href={`mailto:${site.email}`} className="border-b border-signal text-ink">
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
