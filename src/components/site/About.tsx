import { Reveal } from "./Reveal";
import liadAsset from "@/assets/liad-kaikov-cutout.png.asset.json";

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
                <img
                  src={liadAsset.url}
                  alt="Liad Kaikov, Founder of OpenWays"
                  className="h-full w-full object-cover"
                />
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
        </div>
      </div>
    </section>
  );
}
