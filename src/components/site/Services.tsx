import { Reveal } from "./Reveal";

const services = [
  {
    title: "Business Development",
    intro: "Building a more deliberate commercial growth process.",
    points: [
      "Commercial strategy planning and opportunity mapping",
      "Lead generation and pipeline development",
      "Sales process strategy and meeting support",
      "Decision-maker access and local representation",
    ],
  },
  {
    title: "Strategic Partnerships",
    intro: "Partnerships built around a clear commercial purpose.",
    points: [
      "Identify and prioritise the right potential partners",
      "Define what each partnership should achieve",
      "Develop the partnership structure and mutual value",
      "Support introductions, negotiations and next steps",
      "Build a clear process for managing partnership opportunities",
    ],
  },
  {
    title: "Market Entry & Expansion",
    intro: "Navigating unfamiliar markets, particularly Singapore and the wider APAC region.",
    points: [
      "Market and opportunity assessment",
      "Entry strategy and commercial priorities",
      "Local positioning and offer adaptation",
      "Customer, partner and stakeholder mapping",
      "Local introductions and representation",
      "Market feedback before committing significant resources",
    ],
  },
  {
    title: "Growth & Commercial Advisory",
    intro: "An external strategic perspective when the approach needs sharpening.",
    points: [
      "Identify commercial gaps and missed opportunities",
      "Review growth priorities and go-to-market choices",
      "Define practical KPIs and ways to measure progress",
      "Challenge assumptions and pressure-test decisions",
      "Turn broad growth ambitions into concrete priorities",
    ],
  },
  {
    title: "Change Management Advisory",
    intro:
      "Support for leadership teams when growth or strategic decisions require internal change. Advisory — not outsourced internal communications or implementation.",
    points: [
      "Assess how a proposed change may affect teams and stakeholders",
      "Identify adoption risks and potential resistance",
      "Advise on communication and stakeholder-alignment approaches",
      "Define indicators to track adoption and progress",
      "Recommend adjustments as implementation develops",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="display mt-4 max-w-[16ch] text-[2.6rem] leading-tight sm:text-6xl">
            How OpenWays <span className="italic text-primary">can help</span>
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={40}>
              <article
                className={
                  "grid gap-6 border-t border-border py-12 lg:grid-cols-12 lg:gap-10 lg:py-16 " +
                  (i % 2 === 1 ? "lg:pl-16" : "")
                }
              >
                <div className="lg:col-span-5">
                  <h3 className="display text-[2rem] leading-tight sm:text-[2.5rem]">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="max-w-prose text-lg leading-relaxed text-ink">{s.intro}</p>
                  <ul className="mt-7 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-base text-ink-soft">
                        <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-primary/50" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
