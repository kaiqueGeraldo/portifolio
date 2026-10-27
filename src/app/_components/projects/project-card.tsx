"use client";

import Image from "next/image";
import { GithubLogo, ArrowArcRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/app/data/projects";
import styles from "./project-card.module.css";
import { useLocale, useTranslations } from "next-intl";

interface ProjectCardProps {
  item: Project;
  onDetails: (id: string) => void;
  revealAnimation?: string;
  eager?: boolean;
  revealDelay?: number;
}

export function ProjectCard({
  item,
  onDetails,
  revealAnimation = "zoom-in",
  eager = false,
  revealDelay = 0,
}: ProjectCardProps) {
  const locale = useLocale() as "pt-BR" | "en";
  const tp = useTranslations("Projects");
  return (
    <article className={styles.card} data-reveal={revealAnimation} data-reveal-delay={revealDelay}>
      <div className={styles.image}>
        <Image
          src={item.imagem}
          alt={item.nome}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className={styles.cover}
        />
      </div>
      <div className={styles.body}>
        <div>
          <div className={styles.heading}>
            <h3>{item.nome}</h3>
            <div className={styles.technologies}>
              {item.tecnologias.map((tec, index) => (
                <div key={index} className="flex gap-2">
                  {tec.icone.map((img, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={img}
                      alt={tec.nome[imgIndex]}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className={styles.description}>{item.descricao[locale]}</p>
        </div>
        <div className={styles.actions}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repository}
            aria-label={`GitHub — ${item.nome}`}
          >
            <GithubLogo className="w-6 h-6" />
            GitHub
          </a>
          <button
            onClick={() => onDetails(item.id)}
            className={styles.details}
            aria-label={`${tp("viewDetails")} — ${item.nome}`}
          >
            {tp("viewDetails")}
            <ArrowArcRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
