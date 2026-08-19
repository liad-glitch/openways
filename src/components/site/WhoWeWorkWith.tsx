import { Reveal } from "./Reveal";

const goals = [
  "Build a stronger business-development pipeline",
  "Develop strategic partnerships",
  "Enter Singapore or expand across APAC",
  "Turn introductions and meetings into commercial opportunities",
  "Create a clearer growth strategy",
  "Navigate growth that requires internal change",
  "Build local relationships without immediately building a full local team",
];

export function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/40 py-24 lg:py-36"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M-20 120 C 420 40 900 300 1460 180"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Who we work with</p>
          <h2 className="display mt-4 text-[2.6rem] leading-tight sm:text-5xl">
            Companies looking to:
          </h2>
        </Reveal>

        <ul className="mt-12 max-w-4xl">
          {goals.map((g, i) => (
            <Reveal
              as="li"
              key={g}
              delay={i * 60}
              className="border-b border-primary/15 py-5 last:border-0"
              // staggered indentation creates a path down the page
            >
              <span
                className="display block text-2xl leading-snug sm:text-[2rem]"
                style={{ paddingLeft: `${Math.min(i, 5) * 1.6}rem` }}
              >
                {g}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-14 max-w-2xl text-base leading-relaxed text-ink-soft">
            That includes startups, growing SMEs and international companies entering Singapore
            or APAC. Every engagement is shaped around where a company actually is &mdash; there
            is no single package that fits all of them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
