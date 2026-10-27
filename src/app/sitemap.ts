import type { MetadataRoute } from "next";
import { projetos } from "./data/projects";
import { languageAlternates, localizedUrl, siteLocales } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", ...projetos.map(project => `/detail-project/${project.id}`)];
  return paths.flatMap(path => siteLocales.map(locale => ({
    url: localizedUrl(locale, path), alternates: { languages: languageAlternates(path) },
  })));
}
