import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ToolsCertificationsSection } from "@/components/tools-certifications-section";
import { ProjectsShowcaseSection } from "@/components/projects-showcase-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { MetricsDashboardSection } from "@/components/metrics-dashboard-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ToolsCertificationsSection />
      <ProjectsShowcaseSection />
      <CaseStudiesSection />
      <MetricsDashboardSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
