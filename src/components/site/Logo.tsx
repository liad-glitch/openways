export function Logo({ className }: { className?: string }) {
  return (
    <span className={"inline-flex items-center gap-2.5 " + (className ?? "")}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
        fill="none"
        strokeLinecap="round"
      >
        <path
          d="M31 9.5A15 15 0 1 0 31 30.5"
          stroke="var(--primary)"
          strokeWidth="2.4"
        />
        <path d="M22 20h15" stroke="var(--sky)" strokeWidth="2.4" />
        <path d="M31.5 14.5 37 20l-5.5 5.5" stroke="var(--sky)" strokeWidth="2.4" />
      </svg>
      <span className="text-[1.15rem] tracking-tight text-ink">
        <span className="font-medium">Open</span>
        <span className="display text-[1.35rem] italic">Ways</span>
      </span>
    </span>
  );
}
