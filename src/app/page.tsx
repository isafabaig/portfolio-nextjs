import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import ShutterDropdown from "@/components/ShutterDropdown";
import About from "./About/page";

export default function Home() {
  return (
    <main>
      < ShutterDropdown/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  )
}