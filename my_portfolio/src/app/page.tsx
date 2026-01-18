import { Header } from "@/components/Header/Header";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Project } from "@/components/Project/Project";
import { Training } from "@/components/Training/Training";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <section id="about" className="scroll-top-0">
          <AboutMe />
        </section>
        <section id="project" className="scroll-mt-0">
          <Project />
        </section>
        <section id="training" className="scroll-mt-0">
          <Training />
        </section>
        <section id="footer" className="scroll-mt-0">
          <Footer />
        </section>
      </div>
    </>
  );
}
