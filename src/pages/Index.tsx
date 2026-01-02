import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ConclusionSection from "@/components/ConclusionSection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ConclusionSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
