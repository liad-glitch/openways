import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-52 lg:pb-40">
      {/* flowing path lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] w-full"
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
      >
        <path
          d="M-40 610 C 300 590 430 300 760 250 C 1050 206 1240 240 1500 130"
          fill="none"
          stroke="var(--sky)"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <path
          d="M-40 680 C 340 660 470 400 820 340 C 1120 288 1280 320 1500 210"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1"
          opacity="0.28"
        />
        <circle cx="760" cy="250" r="4" fill="var(--primary)" opacity="0.5" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 size-[560px] rounded-full bg-secondary/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Singapore &middot; APAC &middot; Growth advisory</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display mt-6 max-w-[15ch] text-[3.4rem] leading-[0.98] sm:text-7xl lg:text-[6.5rem]">
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
