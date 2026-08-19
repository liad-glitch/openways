import { Reveal } from "./Reveal";
import liadAsset from "@/assets/liad-kaikov-cutout.png.asset.json";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-10 lg:col-start-2">
            <p className="eyebrow">About</p>
            <h2 className="display mt-4 text-[2.4rem] leading-tight sm:text-5xl">
              About <span className="italic text-primary">OpenWays</span>
            </h2>
            <div className="mt-8 max-w-4xl space-y-6 text-lg leading-relaxed text-ink">
              <p>
                OpenWays was founded by Liad Kaikov in Singapore to help companies navigate growth
                when the path forward is not always obvious.
              </p>
              <p>
                With a background spanning business development, partnerships, public policy and
                stakeholder engagement, Liad has worked across complex environments where progress
                depends on understanding the people involved, aligning interests and knowing how to
                move opportunities forward.
              </p>
              <p className="text-ink-soft">
                That perspective shapes how OpenWays works today: combining commercial thinking
                with a strong understanding of relationships, markets and decision-making. Based in
                Singapore, OpenWays supports startups, growing businesses and international
                companies looking to build partnerships, strengthen their business development
                approach or expand across APAC.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-5">
                <div className="relative h-32 w-28 overflow-hidden rounded-t-[3rem] bg-secondary/60 sm:h-40 sm:w-32">
                  <img
                    src={liadAsset.url}
                    alt="Liad Kaikov, Founder of OpenWays"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="pb-2 text-sm text-ink-soft">
                  Liad Kaikov &middot; Founder, OpenWays &middot; Singapore
                </figcaption>
              </div>
              <div
                aria-hidden="true"
                className="hidden h-16 w-40 rounded-tl-[2rem] border-l border-t border-primary/30 sm:block"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
