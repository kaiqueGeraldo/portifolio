import { Hero, AboutMe, Skills, Projects, MyJourney, Final } from "./_components";
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
