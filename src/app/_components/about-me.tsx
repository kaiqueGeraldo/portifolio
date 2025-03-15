"use client";

import localFont from "next/font/local";
import Idade from "../utils/idade";
import Image from "next/image";
import kaique from "../../../public/kaique-competidor.png";
import { motion } from "framer-motion";

const minhaFonte = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  display: "swap",
});

export function AboutMe() {
  return (
    <motion.section
      className="relative overflow-hidden flex items-center justify-center lg:p-10 p-5 pt-10 lg:pt-16"
      id="about-me"
    >
      <div className="relative container" data-aos="zoom-in">
        {/* Título */}
        <div className="text-left lg:pl-16">
          <h2 className={`${minhaFonte.className} text-4xl font-bold`}>
            SOBRE MIM
          </h2>
          <h4 className="font-semibold text-secondary text-lg max-w-2xl lg:max-w-3xl">
            UM POUCO SOBRE MINHA HISTÓRIA
          </h4>
        </div>

        <div className="relative container flex flex-col-reverse lg:flex-row items-center lg:gap-14">
          {/* Texto */}
          <motion.p
            className="text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-4xl lg:pl-6 lg:mt-6"
            data-aos="fade-right"
          >
            Tenho{" "}
            <span className="font-semibold text-secondary">
              <Idade /> anos
            </span>{" "}
            e sou apaixonado por tecnologia e inovação. Sou proativo, adaptável
            e focado em aprendizado contínuo, sempre buscando aprimorar minhas
            habilidades e acompanhar as tendências do setor.
            <br />
            <br />
            Tenho experiência em desenvolvimento web e mobile, além de
            conhecimento em bancos de dados e ferramentas de design. Gosto de
            desafios e já participei de competições como a
            <span className="font-semibold text-secondary">
              {" "}
              SP Skills 2024
            </span>
            , onde desenvolvi soluções em um ambiente de alta performance.
            <br />
            <br />
            Trabalho bem em equipe, tenho facilidade em aprender novas
            tecnologias e sou orientado a soluções eficientes. Busco
            oportunidades para aplicar meu conhecimento na prática e contribuir
            com projetos inovadores, sempre visando qualidade e otimização.
          </motion.p>

          {/* Imagem */}
          <motion.div
            className="flex-1 flex justify-center my-10 lg:my-0"
            data-aos="fade-left"
          >
            <div className="relative mt-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-visible shadow-lg border-4 border-primary backdrop-blur-xl bg-white/10">
              <Image
                src={kaique}
                alt="Kaique"
                priority
                quality={100}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  scale: "1.4",
                  marginTop: "-65px",
                  marginLeft: "20px",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
