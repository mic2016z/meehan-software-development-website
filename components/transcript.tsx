const turns = [
  {
    from: "visitor" as const,
    text: "Hi — are you able to take on a job in the next couple of weeks? It's fairly urgent.",
  },
  {
    from: "assistant" as const,
    text: "You've caught us after hours, but I can get this in front of the team first thing. Two quick things so they can give you a straight answer: what's the job, and where are you located?",
  },
  {
    from: "visitor" as const,
    text: "Hot water system replacement, we're in Ballarat.",
  },
  {
    from: "assistant" as const,
    text: "That's within the service area, and replacements are usually booked within the fortnight. I can't confirm the slot myself — that's a person's call in the morning. What's the best number and time to reach you?",
  },
  {
    from: "visitor" as const,
    text: "Before 9am is best. 04xx xxx xxx.",
  },
  {
    from: "assistant" as const,
    text: "Got it. You're first in the queue when the office opens at 7:30, flagged as urgent, callback before 9am. You'll get a confirmation email in a moment.",
  },
];

export function Transcript() {
  return (
    <figure className="border border-rule-strong bg-paper">
      <div className="label flex items-center gap-2.5 border-b border-rule bg-paper-2 px-4 py-3 text-ink-3 sm:px-5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
        Website chat &middot; 10:14pm
      </div>

      <ol className="divide-y divide-[var(--color-rule)]">
        {turns.map((turn, i) => (
          <li key={i} className="px-4 py-5 sm:px-7">
            <p
              className={`label ${
                turn.from === "assistant" ? "text-signal" : "text-ink-4"
              }`}
            >
              {turn.from === "assistant" ? "Assistant" : "Visitor"}
            </p>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
              {turn.text}
            </p>
          </li>
        ))}
      </ol>

      <div className="border-t border-rule bg-ink px-4 py-5 sm:px-7">
        <p className="label text-paper/45">7:30am &mdash; what the owner sees</p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/85">
          1 urgent callback &middot; Ballarat &middot; hot water replacement &middot;
          contactable before 9am &middot; within service area &middot; no quote or booking
          promised.
        </p>
      </div>

      <figcaption className="border-t border-rule px-4 py-3 text-[0.75rem] leading-relaxed text-ink-4 sm:px-7">
        Illustrative conversation showing how intake and hand-off work. Sample content
        &mdash; not a real customer.
      </figcaption>
    </figure>
  );
}
