const items = [
  "After-hours AI reception",
  "Knowledge management",
  "Custom web apps",
  "Approval-gated agents",
  "Client portals",
  "Quoting & booking tools",
  "Internal dashboards",
  "Systems integration",
];

/** Horizontal ticker. The track is duplicated so the -50% loop is seamless. */
export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-rule bg-paper-2 py-4">
      <div className="marquee-track flex w-max items-center">
        {track.map((item, i) => (
          <span key={i} className="label flex items-center text-ink-3">
            <span className="px-6">{item}</span>
            <span aria-hidden className="text-signal">
              &#9679;
            </span>
          </span>
        ))}
      </div>
      <span className="sr-only">
        Services: {items.join(", ")}.
      </span>
    </div>
  );
}
