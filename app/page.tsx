import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { DesignProcess } from "@/components/DesignProcess";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] text-slate-100 flex flex-col justify-between">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <DesignProcess />
        <Projects />
        <Experience />
        <Achievements />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
