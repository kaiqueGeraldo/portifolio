"use client";

import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

export function Footer() {
  const tf = useTranslations("Footer");
  return (
    <footer className="w-full min-h-[420px] text-foreground flex flex-col items-center justify-center">
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-6 py-10">
        <h2 className="text-lg font-semibold text-secondary uppercase tracking-wider" data-reveal="fade-up">
          {tf("role")}
        </h2>
        <h2
          className="tracking-tight text-4xl md:text-6xl font-medium text-foreground"
          data-reveal="fade-up" data-reveal-delay="120"
        >
          Kaique Geraldo
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-muted" data-reveal="fade-up" data-reveal-delay="240">
          {tf("thankYou")}
        </p>

        <div className="flex gap-4 mt-4" data-reveal="fade-up" data-reveal-delay="360">
          <a
            href="https://linkedin.com/in/kaique-geraldo"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
          >
            <LinkedinLogo
              className="w-8 h-8 text-primary"
              fill="currentColor"
            />
          </a>
          <a
            href="https://github.com/kaiqueGeraldo"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
          >
            <GithubLogo className="w-8 h-8 text-primary" fill="currentColor" />
          </a>
          <a
            href="mailto:kaiique2404@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Kaique,%20gostaria%20de%20falar%20sobre..."
            aria-label="E-mail"
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
          >
            <Envelope className="w-8 h-8 text-primary" fill="currentColor" />
          </a>
        </div>
      </div>

      <div className="w-full text-center text-md bg-surface text-muted py-3">
        {tf("rights")}
      </div>
    </footer>
  );
}
