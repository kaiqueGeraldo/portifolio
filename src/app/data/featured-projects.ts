import { projetos } from "./projects";
import { selectProjects } from "./project-selection";

export const featuredProjectIds = [
  "controle-financeiro",
  "hbu-gestao-cirurgias",
  "mind-task",
] as const;
export const featuredProjects = selectProjects(projetos, featuredProjectIds);
