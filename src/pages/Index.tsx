import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionTransition from "@/components/SectionTransition";

const Scene3D = lazy(() => import("@/components/Scene3D"));

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-overlay">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SectionTransition direction="up">
          <AboutSection />
        </SectionTransition>
        <SectionTransition direction="right" delay={0.05}>
          <ExperienceSection />
        </SectionTransition>
        <SectionTransition direction="left" delay={0.05}>
          <ProjectsSection />
        </SectionTransition>
        <SectionTransition direction="up">
          <SkillsSection />
        </SectionTransition>
        <SectionTransition direction="right" delay={0.05}>
          <CertificationsSection />
        </SectionTransition>
        <SectionTransition direction="up">
          <ContactSection />
        </SectionTransition>
      </main>
      <SectionTransition direction="up">
        <Footer />
      </SectionTransition>
    </div>
  );
};

export default Index;
