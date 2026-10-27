"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { projetos } from "@/app/data/projects";
import { featuredProjects } from "@/app/data/featured-projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  const router = useRouter();
  const tp = useTranslations("Projects");

  const handleDetalhes = (id: string) => {
    router.push(`/detail-project/${id}`);
  };

  const handleProjetos = () => {
    router.push(`/projects`);
  };

  return (
    <section
      className="lg:p-10 p-5 pt-10 relative overflow-hidden"
      id="projects"
    >
      <div className="relative container mx-auto">
        <div className="flex flex-wrap gap-5 justify-between items-center lg:px-16">
          <div className="text-left" data-reveal="fade-right">
            <h2 className="tracking-tight text-4xl font-medium">
              {tp("title")}
            </h2>
            <h4 className="font-semibold text-secondary text-lg max-w-2xl lg:max-w-3xl uppercase">
              {tp("subtitle")}
            </h4>
          </div>

          <button
            className="py-3 px-6 lg:px-8 border-2 border-primary rounded-lg text-primary font-semibold transition-all duration-300 hover:bg-secondary/50 shadow-lg hover:scale-105"
            aria-label={tp("seeAll")}
            data-reveal="fade-left"
            onClick={() => handleProjetos()}
          >
            {tp("seeAll")} (+{projetos.length - featuredProjects.length})
          </button>
        </div>

        <div className="relative overflow-hidden mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((item, index) => (
            <ProjectCard key={item.id} item={item} onDetails={handleDetalhes} revealDelay={index * 160} />
          ))}
        </div>
      </div>
    </section>
  );
}
