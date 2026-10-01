import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// Below-the-fold sections: SSR'd (no layout shift, anchor links keep
// working) but their client JS is split into separate chunks.
const About = dynamic(() => import("./components/About"));
const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  return (
    <div className="min-h-screen font-body text-white selection:bg-indigo-400 selection:text-[#0b1020]">
      <Navbar />
      <main className="flex flex-col overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
