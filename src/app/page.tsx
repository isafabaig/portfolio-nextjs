import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About/page";
import Contacts from "@/components/Contacts";
import ShutterDropdown from "@/components/ShutterDropdown";

export default function Home() {
  return (
    <main>
      < ShutterDropdown/>
      <Hero />
      <About/>
      <Projects />
      <Skills />
      <Contacts />
    </main>
  )
}