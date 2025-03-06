import { Hero } from "./_components/hero";
import { AboutMe } from "./_components/about-me";
import { Skills } from "./_components/skills";
import { Projects } from "./_components/projects";
import { MyJourney } from "./_components/my-journey";
import { Final } from "./_components/final";
import { FloatingMenu } from "./utils/floatingMenu";
import { ScrollToTop } from "./utils/scrollToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <MyJourney />
      <Final />
      <FloatingMenu />
      <ScrollToTop />
    </main>
  );
}
