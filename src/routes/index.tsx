import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Situations } from "@/components/site/Situations";
import { Services } from "@/components/site/Services";
import { WhoWeWorkWith } from "@/components/site/WhoWeWorkWith";
import { HowWeWork } from "@/components/site/HowWeWork";
import { WhyOpenWays } from "@/components/site/WhyOpenWays";
import { About } from "@/components/site/About";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

const title = "OpenWays | Business Development, Partnerships & Market Expansion";
const description =
  "OpenWays helps companies grow through business development, strategic partnerships, market expansion and commercial advisory in Singapore and across APAC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Situations />
        <Services />
        <WhoWeWorkWith />
        <HowWeWork />
        <WhyOpenWays />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
