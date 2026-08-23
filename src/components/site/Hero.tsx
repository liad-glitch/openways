import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-52 lg:pb-40">
      {/* single brand gesture: a broad cropped arc opening to the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[26rem] -top-[22rem] size-[52rem] rounded-full border border-primary/15 sm:-right-[20rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 size-[560px] rounded-full bg-secondary/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <p className="label-rule">Singapore &middot; APAC &middot; Growth advisory</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display mt-7 max-w-[15ch] text-[3.4rem] leading-[0.98] sm:text-7xl lg:text-[6.5rem]">
            Open ways
            <span className="block pl-[0.12em] italic text-primary sm:pl-[1.5em]">to growth.</span>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12">
          <Reveal delay={140} className="lg:col-span-5 lg:col-start-2">
            <p className="text-lg leading-relaxed text-ink sm:text-xl">
              Practical growth through business development, partnerships and local
              representation.
            </p>
          </Reveal>
          <Reveal delay={220} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-prose text-base leading-relaxed text-ink-soft">
              From finding the right opportunities and partners to entering new markets and
              strengthening commercial strategy, we help companies work out where to go next
              &mdash; and how to get there.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground transition-all duration-300 hover:gap-5"
            >
              Let&rsquo;s talk
              <span aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
