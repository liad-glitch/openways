import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-40 w-40 rounded-tl-[2rem] border-l border-t border-primary/30"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[10rem] bg-secondary/60">
                <div className="flex h-full items-end justify-center pb-10">
                  <span className="text-xs tracking-[0.2em] uppercase text-ink-soft">
                    Portrait
                  </span>
                </div>
              </div>
              <figcaption className="mt-4 text-sm text-ink-soft">
                Liad Kaikov &middot; Founder, OpenWays &middot; Singapore
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p className="eyebrow">About</p>
            <h2 className="display mt-4 text-[2.4rem] leading-tight sm:text-5xl">
              About <span className="italic text-primary">OpenWays</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink">
              <p>
                OpenWays was founded by Liad Kaikov in Singapore.
              </p>
              <p>
                Liad&rsquo;s background sits at the intersection of business development,
                partnerships and stakeholder engagement, built in international environments
                where commercial progress depends on understanding people as much as markets.
              </p>
              <p className="text-ink-soft">
                That includes public-policy and cross-sector work alongside commercial roles, and
                direct exposure to the Singapore and wider APAC market &mdash; the perspective
                behind how OpenWays approaches growth today.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
