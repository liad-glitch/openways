import { Reveal } from "./Reveal";

const lenses = [
  "who influences a decision",
  "which relationships matter",
  "where interests align",
  "what may block progress",
  "what needs to happen to move an opportunity forward",
];

export function WhyOpenWays() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-sand-deep/60 py-24 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Why OpenWays</p>
            <h2 className="display mt-4 text-[2.4rem] leading-tight sm:text-[3.4rem]">
              Commercial thinking with a{" "}
              <span className="italic text-primary">stakeholder perspective.</span>
            </h2>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink">
              OpenWays combines business-development thinking with experience working across
              complex stakeholder environments &mdash; connecting strategy, relationships and
              execution rather than treating them separately.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <p className="text-base text-ink-soft">
              That means looking beyond a simple sales funnel, to understand:
            </p>
            <ul className="mt-6 space-y-4">
              {lenses.map((l, i) => (
                <li
                  key={l}
                  className="display text-2xl leading-snug sm:text-[1.75rem]"
                  style={{ paddingLeft: `${i * 0.9}rem` }}
                >
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
