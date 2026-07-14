import { Hero } from "@/sections/Hero";
import { IntroStory } from "@/sections/IntroStory";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStory />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
