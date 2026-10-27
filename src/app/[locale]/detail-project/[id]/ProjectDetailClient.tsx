"use client";

import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github, Share2 } from "lucide-react";
import { Link } from "../../../../i18n/routing";
import { Project } from "../../../data/projects";
import { TechnologyCard } from "@/app/_components/shared/technology-card/technology-card";
import { useLocale, useTranslations } from "next-intl";
import styles from "./project-detail.module.css";
import { EntranceAnimations } from "@/app/_components/shared/motion/entrance-animations";

export default function ProjectDetailClient({ projeto }: { projeto: Project }) {
  const locale = useLocale() as "pt-BR" | "en";
  const t = useTranslations("ProjectDetails");
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({ title: projeto.nome, url: window.location.href })
        .catch(() => {});
    } else {
      alert(t("alert"));
    }
  };
  const technologies = projeto.tecnologias.flatMap((group) =>
    group.nome.map((name, i) => ({
      name,
      image: group.icone[i],
      color: group.color[i] === "#000000" ? "#CBD5E1" : group.color[i],
      light: /SQL Server|GitHub|Kafka|AWS/i.test(name),
    })),
  );

  return (
    <main className={styles.page}>
      <EntranceAnimations pageKey={projeto.id} />
      <div className={styles.container}>
        <nav className={styles.navigation} aria-label={t("title")} data-reveal="fade-down">
          <Link href="/projects" className={styles.back}>
            <ArrowLeft size={18} aria-hidden />
            {t("allProjects")}
          </Link>
          <button type="button" className={styles.share} onClick={handleShare}>
            <Share2 size={17} aria-hidden />
            {t("shareBtn")}
          </button>
        </nav>
        <header className={styles.hero}>
          <div className={styles.intro}>
            <p className={styles.eyebrow} data-reveal="fade-up" data-reveal-delay="80">{t("spotlight")}</p>
            <h1 data-reveal="fade-up" data-reveal-delay="180">{projeto.nome}</h1>
            <div className={styles.actions} data-reveal="fade-up" data-reveal-delay="320">
              {projeto.site && (
                <a
                  href={projeto.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                >
                  {t("visitSite")}
                  <ArrowUpRight size={18} aria-hidden />
                </a>
              )}
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                <Github size={18} aria-hidden />
                {t("viewOnGitHub")}
              </a>
            </div>
          </div>
          <div className={styles.cover} data-reveal="zoom-in" data-reveal-delay="240">
            <Image
              src={projeto.imagem}
              alt={projeto.nome}
              fill
              priority
              sizes="(max-width: 800px) calc(100vw - 40px), 640px"
              className="object-contain"
            />
          </div>
        </header>
        <div className={styles.content}>
          <div>
            <section
              className={styles.overview}
              aria-labelledby="project-overview"
              data-reveal="fade-up"
            >
              <p className={styles.sectionNumber}>01 / {t("overview")}</p>
              <h2 id="project-overview">{t("aboutProject")}</h2>
              <p className={styles.description}>{projeto.descricao[locale]}</p>
              {projeto.contribuicao && (
                <div className={styles.contribution}>
                  <h3>{t("contribution")}</h3>
                  <p>{projeto.contribuicao[locale]}</p>
                </div>
              )}
            </section>
            <section
              className={styles.technologies}
              aria-labelledby="project-technologies"
            >
              <p className={styles.sectionNumber} data-reveal="fade-up">02 / {t("stack")}</p>
              <h2 id="project-technologies" data-reveal="fade-up" data-reveal-delay="100">{t("tabs.technologies")}</h2>
              <ul className={styles.techGrid}>
                {technologies.map((tech, index) => (
                  <li key={tech.name} data-reveal="zoom-in" data-reveal-delay={(index % 4) * 120}>
                    <TechnologyCard skill={tech} />
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <aside className={styles.summary} aria-labelledby="project-summary" data-reveal="fade-up" data-reveal-delay="180">
            <h2 id="project-summary">{t("projectSummary")}</h2>
            <dl>
              <div>
                <dt>{t("status")}</dt>
                <dd>
                  <span className={styles.status}>
                    {projeto.status[locale]}
                  </span>
                </dd>
              </div>
              {projeto.contexto && (
                <div>
                  <dt>{t("context")}</dt>
                  <dd>{projeto.contexto[locale]}</dd>
                </div>
              )}
              {projeto.duracao && (
                <div>
                  <dt>{t("duration")}</dt>
                  <dd>{projeto.duracao}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </div>
    </main>
  );
}
