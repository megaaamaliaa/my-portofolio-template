import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
    </main>
  );
}
