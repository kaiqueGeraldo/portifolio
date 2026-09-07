"use client";

import { TechnologyCard } from "@/app/_components/shared/technology-card/technology-card";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { skills } from "@/app/data/skills";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("Skills");
  const reducedMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 2,
  });
  return (
    <section
      className="lg:p-10 p-5 pt-10 lg:pt-16 relative overflow-hidden"
      id="skills"
    >
      <div className="container mx-auto">
        <div className="text-left lg:pl-16" data-reveal="zoom-in">
          <h2 className="tracking-tight text-4xl font-medium">{t("title")}</h2>
          <p className="font-semibold text-secondary text-lg max-w-3xl uppercase">
            {t("subtitle")}
          </p>
        </div>
        <ul className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-3 mt-8">
          {skills.map((skill, index) => (
            <li key={skill.name} data-reveal="fade-up" data-reveal-delay={(index % 7) * 90}>
              <TechnologyCard skill={skill} />
            </li>
          ))}
        </ul>
        <div className="md:hidden mt-8" data-reveal="fade-up">
          <div ref={emblaRef} className="overflow-hidden">
            <ul className="flex -ml-3 touch-pan-y">
              {skills.map((skill) => (
                <li key={skill.name} className="min-w-0 flex-[0_0_50%] pl-3">
                  <TechnologyCard skill={skill} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              aria-label={t("previous")}
              onClick={() => emblaApi?.scrollPrev(!!reducedMotion)}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10"
            >
              <ChevronLeft aria-hidden size={20} />
            </button>
            <button
              type="button"
              aria-label={t("next")}
              onClick={() => emblaApi?.scrollNext(!!reducedMotion)}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10"
            >
              <ChevronRight aria-hidden size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
