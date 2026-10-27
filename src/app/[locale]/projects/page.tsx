"use client";

import { projetos } from "../../data/projects";
import { Link, useRouter } from "../../../i18n/routing";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { ProjectCard } from "@/app/_components/projects/project-card";
import { useTranslations } from "next-intl";
import { EntranceAnimations } from "@/app/_components/shared/motion/entrance-animations";

export default function ProjectsPage() {
  const router = useRouter();
  const t = useTranslations("ProjectsPage");

  const handleDetalhes = (id: string) => {
    router.push(`/detail-project/${id}`);
  };

  return (
    <main className="container mx-auto px-5 py-10 md:px-10">
      <EntranceAnimations pageKey="projects" />
      <div className="flex flex-col md:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-all"
          data-reveal="fade-right"
        >
          <ArrowLeft className="w-6 h-6" /> {t("backBtn")}
        </Link>

        <div className="flex flex-col items-center" data-reveal="zoom-in">
          <h1 className="tracking-tight text-4xl sm:text-5xl font-medium mt-8 text-foreground">
            {t("title")}
          </h1>
          <p className="font-semibold text-secondary text-center text-lg max-w-2xl uppercase">
            {t("subtitle")}
          </p>
        </div>
        <span></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projetos.map((item, index) => (
          <ProjectCard key={item.id} item={item} onDetails={handleDetalhes} eager={index === 0} revealDelay={(index % 3) * 160} />
        ))}
      </div>
    </main>
  );
}
