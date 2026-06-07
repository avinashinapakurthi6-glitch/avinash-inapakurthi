import React from "react";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navigation } from "./sections/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cyber-void overflow-x-hidden">
      {/* Background Interactive Particles */}
      <ParticleBackground />

      {/* Sticky Navigation */}
      <Navigation />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Home Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Experience & Education Section */}
        <ExperienceSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
