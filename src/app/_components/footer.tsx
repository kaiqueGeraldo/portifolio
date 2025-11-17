"use client";

import localFont from "next/font/local";
import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";

const minhaFonte = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  display: "swap",
});

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-[60vh] text-black flex flex-col items-center justify-center">
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-6 py-10">
        <h2 className="text-lg font-semibold text-secondary uppercase tracking-wider">
          Desenvolvedor Web e Mobile
        </h2>
        <h1
          className={`${minhaFonte.className} text-4xl md:text-6xl font-bold text-gray-900`}
        >
          Kaique Geraldo
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          Obrigado pela visita. Estou sempre aberto a conexões profissionais e
          discussões técnicas sobre desenvolvimento de software. Sinta-se à
          vontade para me contatar.
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="https://linkedin.com/in/kaique-geraldo"
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
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
          >
            <GithubLogo className="w-8 h-8 text-primary" fill="currentColor" />
          </a>
          <a
            href="mailto:kaiique2404@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Kaique,%20gostaria%20de%20falar%20sobre..."
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
          >
            <Envelope className="w-8 h-8 text-primary" fill="currentColor" />
          </a>
        </div>
      </div>

      <div className="w-full text-center text-md bg-primary text-secondary py-3">
        © 2025 Kaique Geraldo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
