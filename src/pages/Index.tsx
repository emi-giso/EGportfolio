import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandMarquee } from "@/components/BrandMarquee";
import { Services } from "@/components/Services";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { GlobalSpotlight } from "@/components/GlobalSpotlight";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <GlobalSpotlight />
        <Navbar />
        <Hero />
        <BrandMarquee />
        <Services />
        <Metrics />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
