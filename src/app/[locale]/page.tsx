import { Hero } from "@/app/_components/hero/hero";
import { AboutMe } from "@/app/_components/about-me/about-me";
import { Skills } from "@/app/_components/skills/skills";
import { Projects } from "@/app/_components/projects/projects";
import { MyJourney } from "@/app/_components/journey/my-journey";
import { ContactSection } from "@/app/_components/contact/contact-section";
import { FloatingMenu } from "@/app/_components/shared/navigation/floating-menu";
import { ScrollToTop } from "@/app/_components/shared/navigation/scroll-to-top";
import { setRequestLocale } from "next-intl/server";
import { EntranceAnimations } from "@/app/_components/shared/motion/entrance-animations";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <EntranceAnimations />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <MyJourney />
      <ContactSection />
      <FloatingMenu />
      <ScrollToTop />
    </main>
  );
}
