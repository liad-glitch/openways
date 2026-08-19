import { Reveal } from "./Reveal";

const situations = [
  "You are entering a new market and need to understand where you fit.",
  "Meetings and introductions are happening, but they are not turning into opportunities.",
  "You need stronger partnerships, channels or local connections.",
  "Your business development activity lacks structure or clear priorities.",
  "Growth requires internal change, but you need an outside strategic perspective.",
  "You know where you want to grow, but not yet the best route to get there.",
];

export function Situations() {
  return (
    <section className="relative overflow-hidden border-t border-border/70 bg-sand-deep/60 py-24 lg:py-36">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M120 -20 C 120 260 200 380 420 470 C 660 570 700 720 640 940"
          fill="none"
          stroke="var(--sky)"
          strokeWidth="1.2"
        />
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="display text-[2.4rem] leading-tight sm:text-5xl">
              Growth is rarely just about finding more customers.
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
              Companies often reach a point where the opportunity is there, but the next move is
              less obvious.
            </p>
          </Reveal>

          <ul className="lg:col-span-6 lg:col-start-7">
            {situations.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={i * 70}
                className={
                  "border-b border-border/80 py-6 first:pt-0 last:border-0 " +
                  (i % 2 === 1 ? "lg:pl-10" : "")
                }
              >
                <span className="flex gap-5">
                  <span className="display mt-1 text-lg italic text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg leading-snug text-ink sm:text-xl">{s}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
