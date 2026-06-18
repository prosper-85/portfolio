import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroCinematic from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <HeroCinematic />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}
