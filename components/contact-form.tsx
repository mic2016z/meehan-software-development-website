"use client";

import { useState } from "react";

const fieldClass =
  "w-full border border-rule-strong bg-paper px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink-4 transition-colors focus:border-ink focus:outline-none";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function sendEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = `Hi, I'd like to make an enquiry.\n\n${message}`;
    window.open(
      `https://wa.me/61413063463?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={sendEnquiry} className="space-y-5">
      <div>
        <label htmlFor="message" className="label block text-ink-3">
          Your enquiry
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell me briefly what you need help with..."
          className={`${fieldClass} mt-3 resize-y`}
        />
      </div>

      <button
        type="submit"
        className="bg-ink px-7 py-4 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-signal"
      >
        Send
      </button>
    </form>
  );
}
