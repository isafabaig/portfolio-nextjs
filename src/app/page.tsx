import Hero from "@/components/Hero";
import About from "./about/page";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  )
}