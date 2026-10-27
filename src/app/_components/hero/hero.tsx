import { getLocale, getTranslations } from "next-intl/server";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { HeroNavigation } from "./hero-navigation";
import { HeroArtwork } from "./hero-artwork";
import { HeroContact } from "./hero-contact";
import styles from "./hero.module.css";

export async function Hero() {
  const [locale, t] = await Promise.all([getLocale(), getTranslations("Hero")]);
  const cvLanguage = locale === "en" ? "en" : "pt";
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.shell}>
        <HeroNavigation />
        <div className={styles.content}>
          <div className={styles.copy}>
            <p className={styles.eyebrow} data-reveal="fade-up">{t("role")}</p>
            <h1 id="hero-title" className={styles.name} data-reveal="fade-up" data-reveal-delay="120">
              Kaique Geraldo<span>.</span>
            </h1>
            <h2 className={styles.headline} data-reveal="fade-up" data-reveal-delay="240">
              {t("headline")} <em>{t("headlineAccent")}</em>
            </h2>
            <p className={styles.description} data-reveal="fade-up" data-reveal-delay="360">{t("greeting")}</p>
            <p className={styles.employment} data-reveal="fade-up" data-reveal-delay="460">
              {t.rich("employment", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <div className={styles.actions} data-reveal="fade" data-reveal-delay="520">
              <a href="#projects" className={styles.primary}>
                {t("projectsBtn")}
                <ArrowUpRight size={18} aria-hidden />
              </a>
              <HeroContact />
            </div>
            <div className={styles.links} data-reveal="fade-up" data-reveal-delay="600">
              <a
                href="https://linkedin.com/in/kaique-geraldo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} aria-hidden />
                LinkedIn
              </a>
              <a
                href="https://github.com/kaiqueGeraldo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} aria-hidden />
                GitHub
              </a>
              <a
                href={`/curriculo/Curriculo-Kaique-${cvLanguage}.pdf`}
                download
              >
                <Download size={16} aria-hidden />
                {t("cvBtn")}
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
        <div className={styles.bottom} data-reveal="fade" data-reveal-delay="400">
          <span>Java / Spring Boot / React / TypeScript</span>
          <a href="#about-me">
            {t("explore")}
            <ArrowDown size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
