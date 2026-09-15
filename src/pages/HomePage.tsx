import { SiteHeader } from "../components/SiteHeader";
import { HomeHero } from "../components/HomeHero";
import { AboutSection } from "../components/AboutSection";
import { TopicsSection } from "../components/TopicsSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { ProjectSection } from "../components/ProjectSection";
import { SiteFooter } from "../components/SiteFooter";

export function HomePage() {
  return (
    <div className="min-h-dvh bg-sand-50">
      <SiteHeader />
      <main>
        <HomeHero />
        <AboutSection />
        <TopicsSection />
        <HowItWorksSection />
        <ProjectSection />
      </main>
      <SiteFooter />
    </div>
  );
}
