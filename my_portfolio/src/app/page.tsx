import { Header } from "@/components/Header/Header";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Project } from "@/components/Project/Project";
import { Training } from "@/components/Training/Training";

export default function Home() {
  return (
    <>
      <Header />
      <section id="about" className="scroll-mt-30">
        <AboutMe />
      </section>
      <section id="project" className="scroll-mt-20">
        <Project />
      </section>
      <section id="training" className="scroll-mt-0">
        <Training />
      </section>
    </>
  );
}
