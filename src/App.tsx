import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import PrintableView from "./components/PrintableView";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 selection:bg-cyan-400 selection:text-black font-sans">
      {/* Immersive interactive desktop cursor */}
      <CustomCursor />

      {/* Exquisite Floating Navigation Suite */}
      <Navbar />

      {/* Primary Content Suite */}
      <main className="relative z-10 overflow-hidden print:overflow-visible">
        <Hero />
        <StatsBanner />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Persistent Back-to-top Trigger & Chat Pill */}
      <FloatingWidgets />

      {/* Hidden layout optimized specifically for flawless PDF output */}
      <PrintableView />
    </div>
  );
}
