"use client";

import { useState } from "react";

type Draft = {
  id: string;
  kind: string;
  trigger: string;
  to: string;
  subject: string;
  body: string[];
  logged: string[];
  confidence: string;
};

const drafts: Draft[] = [
  {
    id: "reply",
    kind: "Reply",
    trigger: "Website enquiry received 11:42pm",
    to: "Sample enquirer",
    subject: "Re: Availability for a site inspection",
    body: [
      "Thanks for getting in touch — happy to help with this.",
      "We have inspection slots open Tuesday morning and Thursday afternoon next week. I've pencilled you in for Tuesday 9:30am; reply here if the other suits you better and I'll move it.",
      "I've attached the pre-inspection checklist so you know what we'll need on the day.",
    ],
    logged: [
      "Contact created in CRM",
      "Source tagged: website form, after hours",
      "Follow-up task set for +2 days if no reply",
    ],
    confidence: "High — matched to standard inspection enquiry",
  },
  {
    id: "quote",
    kind: "Quote",
    trigger: "Scope confirmed in thread, 8:06am",
    to: "Sample client",
    subject: "Quote — stage one, as discussed",
    body: [
      "Here's the quote for stage one, priced from the scope we agreed on Tuesday.",
      "It covers the intake form, the approvals queue and the reporting export. The migration work we flagged is deliberately not in here — that's stage two, and I'd rather price it once stage one is live.",
      "Valid for 30 days. Say the word and I'll get it booked in.",
    ],
    logged: [
      "Draft quote attached from template",
      "Deal stage moved to: quote pending",
      "Line items copied to accounting draft — unsent",
    ],
    confidence: "Medium — pricing needs your eyes before this goes out",
  },
  {
    id: "chase",
    kind: "Follow-up",
    trigger: "No response, day 7",
    to: "Sample contact",
    subject: "Checking in on the proposal",
    body: [
      "Just circling back on the proposal I sent last week — no pressure either way.",
      "If the timing's wrong, tell me and I'll get out of your inbox. If it's a scope question, I'm happy to jump on a quick call and work through it.",
    ],
    logged: [
      "Follow-up #1 recorded against the deal",
      "Next touch scheduled: +10 days",
      "Sequence stops automatically on any reply",
    ],
    confidence: "High — standard follow-up cadence",
  },
];

type Status = "pending" | "approved" | "discarded";

export function ApprovalDemo() {
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState<Status>("pending");
  const draft = drafts[active];

  function select(index: number) {
    setActive(index);
    setStatus("pending");
  }

  return (
    <figure className="border border-rule-strong bg-paper">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-paper-2 px-4 py-3 sm:px-5">
        <div className="label flex items-center gap-2.5 text-ink-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
          Awaiting approval
        </div>
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Queued drafts">
          {drafts.map((item, i) => (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => select(i)}
              className={`label px-3 py-2 transition-colors ${
                i === active
                  ? "bg-ink text-paper"
                  : "border border-rule text-ink-3 hover:border-ink hover:text-ink"
              }`}
            >
              {item.kind}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-6 sm:px-7 sm:py-8">
        <p className="label text-ink-4">{draft.trigger}</p>

        <dl className="mt-5 divide-y divide-[var(--color-rule)] border-y border-rule text-[0.9375rem]">
          <div className="flex gap-4 py-2.5">
            <dt className="label w-16 shrink-0 pt-1 text-ink-4">To</dt>
            <dd className="text-ink-2">{draft.to}</dd>
          </div>
          <div className="flex gap-4 py-2.5">
            <dt className="label w-16 shrink-0 pt-1 text-ink-4">Subject</dt>
            <dd className="text-ink">{draft.subject}</dd>
          </div>
        </dl>

        <div className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-ink-2">
          {draft.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p aria-hidden className="text-ink-4">
            <span className="caret">&#9646;</span>
          </p>
        </div>

        <div className="mt-8 border border-rule bg-paper-2/60 px-4 py-4">
          <p className="label text-ink-4">Already logged</p>
          <ul className="mt-3 space-y-2">
            {draft.logged.map((entry) => (
              <li key={entry} className="flex gap-3 text-[0.875rem] text-ink-2">
                <span aria-hidden className="text-signal">
                  &#10003;
                </span>
                {entry}
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-rule pt-3 text-[0.8125rem] text-ink-3">
            <span className="label text-ink-4">Confidence </span>
            {draft.confidence}
          </p>
        </div>
      </div>

      <div className="border-t border-rule bg-paper-2 px-4 py-4 sm:px-5">
        {status === "pending" ? (
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setStatus("approved")}
              className="label bg-ink px-5 py-3 text-paper transition-colors hover:bg-signal"
            >
              Approve &amp; send
            </button>
            <button
              type="button"
              onClick={() => setStatus("pending")}
              className="label border border-rule-strong px-5 py-3 text-ink transition-colors hover:border-ink"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => setStatus("discarded")}
              className="label px-3 py-3 text-ink-3 underline-offset-4 transition-colors hover:text-signal hover:underline"
            >
              Discard
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="label text-ink-2">
              {status === "approved"
                ? "Sent — logged against the contact, 1 approver"
                : "Discarded — nothing sent, kept in the audit trail"}
            </p>
            <button
              type="button"
              onClick={() => setStatus("pending")}
              className="label border border-rule-strong px-4 py-2.5 text-ink-3 transition-colors hover:border-ink hover:text-ink"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      <figcaption className="border-t border-rule px-4 py-3 text-[0.75rem] leading-relaxed text-ink-4 sm:px-5">
        Illustrative interface showing the approval gate. Sample content — not a real
        customer or enquiry.
      </figcaption>
    </figure>
  );
}
