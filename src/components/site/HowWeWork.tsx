import { Reveal } from "./Reveal";

const steps = [
  { label: "Understand", note: "The commercial objective, the market, the obstacles." },
  { label: "Prioritise", note: "Where external support creates the most value." },
  { label: "Connect", note: "The right people, partners and conversations." },
  { label: "Move forward", note: "Concrete next steps, measured as they progress." },
];

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">How we work</p>
            <h2 className="display mt-4 text-[2.4rem] leading-tight sm:text-5xl">
              Built around the opportunity,{" "}
              <span className="italic text-primary">not a fixed playbook.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-prose text-lg leading-relaxed text-ink">
              Every company reaches growth differently. OpenWays starts by understanding the
              commercial objective, the market and the obstacles in the way. From there, we
              define where external support can create the most value.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-8 hidden h-24 w-full lg:block"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M40 78 C 260 78 300 20 520 20 C 740 20 780 78 1000 78 C 1090 78 1130 52 1170 30"
              fill="none"
              stroke="var(--sky)"
              strokeWidth="1.5"
            />
          </svg>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.label}
                delay={i * 120}
                className={
                  "border-l border-primary/25 pl-5 lg:border-l-0 lg:pl-0 " +
                  (i % 2 === 0 ? "lg:pt-24" : "lg:pt-2")
                }
              >
                <span
                  aria-hidden="true"
                  className="mb-4 hidden size-2.5 rounded-full bg-primary lg:block"
                />
                <h3 className="display text-2xl sm:text-3xl">{s.label}</h3>
                <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-ink-soft">{s.note}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={80}>
          <p className="mt-20 max-w-2xl border-t border-border pt-8 text-base leading-relaxed text-ink-soft">
            Engagements can range from focused advisory sessions to ongoing business-development,
            partnership or market-entry support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
