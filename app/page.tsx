import { Nav } from "@/components/nav";
import { SignalRail } from "@/components/signal-rail";
import { Hero } from "@/components/hero";
import { FieldSection } from "@/components/field-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a href="#field" className="skip">
        Skip to experience
      </a>
      <Nav />
      <div className="frame">
        <SignalRail />
        <main>
          <Hero />
          <FieldSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
