import { Header } from "@/components/Header/Header";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Project } from "@/components/Project/Project";
import { Training } from "@/components/Training/Training";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
        <footer className="w-full flex h-160 justify-center bg-slate-800 text-white">
          <Image src="/background/footer-graphic-large.png" alt="footer" width={1980} height={150} className="w-full object-cover
          " />
        </footer>
      </section>
    </>
  );
}
