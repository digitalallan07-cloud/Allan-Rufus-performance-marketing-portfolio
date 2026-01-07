import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
