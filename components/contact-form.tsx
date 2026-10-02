"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

const fieldClass =
  "w-full border border-rule-strong bg-paper px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink-4 transition-colors focus:border-ink focus:outline-none";

export function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);

  function toggle(title: string) {
    setInterests((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  }

  return (
    <form action={`https://formsubmit.co/${site.email}`} method="POST" className="space-y-8">
      <input type="hidden" name="_subject" value="New project enquiry — Meehan Software Development" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${site.url}/contact/thanks`} />
      <input type="hidden" name="interests" value={interests.join(", ") || "Not specified"} />
      <div hidden aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>
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
            maxLength={150}
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
            maxLength={200}
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
          maxLength={254}
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
          maxLength={10000}
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
          Send enquiry
        </button>
        <p className="max-w-xs text-[0.8125rem] leading-relaxed text-ink-3">
          Your details are sent securely through FormSubmit to my inbox.
          You may be asked to complete a spam check before sending.
        </p>
      </div>

    </form>
  );
}
