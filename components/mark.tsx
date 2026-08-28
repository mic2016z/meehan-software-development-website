/**
 * Studio mark: two ascending strokes cut from a solid block — an "M" formed by
 * the negative space rather than drawn. Reads at 20px in the header.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
      role="presentation"
    >
      <rect width="32" height="32" fill="currentColor" />
      <path
        d="M7 24V8.5l4.6 8.2M25 24V8.5l-4.6 8.2M11.6 16.7 16 24.5l4.4-7.8"
        stroke="var(--color-paper)"
        strokeWidth="2.1"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark className="h-[1.375rem] w-[1.375rem] shrink-0 text-ink" />
      <span className="flex flex-col leading-none">
        <span className="display text-[1.0625rem] tracking-[-0.01em]">Meehan</span>
        <span className="label mt-1 text-[0.5625rem] tracking-[0.2em] text-ink-3">
          Software Dev
        </span>
      </span>
    </span>
  );
}
