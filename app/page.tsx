import Career from "./components/main/Career";
import Contact from "./components/main/Contact";
// import Encryption from "./components/main/Encryption";
import Hero from "./components/main/Hero";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Career />
        {/* <Encryption /> */}
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
