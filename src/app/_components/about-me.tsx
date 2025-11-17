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
            Tenho
            <span className="font-semibold text-secondary">
              {" "}
              <Idade /> anos{" "}
            </span>
            e sou um Desenvolvedor de Software apaixonado por tecnologia. Sou
            proativo, adaptável e meu foco é o aprendizado contínuo e a
            excelência técnica.
            <br />
            <br />
            Atualmente, atuo como Desenvolvedor Java Júnior alocado na
            <span className="font-semibold text-secondary"> Nuclea</span>
            , aplicando meu conhecimento para construir soluções de alta
            performance para o setor financeiro.
            <br />
            <br />
            Minha trajetória inclui uma base sólida em desenvolvimento Full
            Stack e Mobile. Participei da
            <span className="font-semibold text-secondary">
              {" "}
              SP Skills 2024
            </span>
            , o que consolidou minha capacidade de resolver problemas em
            ambientes de alta pressão.
            <br />
            <br />
            Essa experiência diversificada, que vai do Full Stack ao mobile , me
            proporciona uma base sólida para me adaptar a novos ecossistemas.
          </motion.p>

          {/* Imagem */}
          <motion.div
            className="flex-1 flex justify-center my-10 lg:my-0"
            data-aos="fade-left"
          >
            <div className="relative mt-24 lg:mt-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-visible shadow-lg border-4 border-primary backdrop-blur-xl bg-white/10">
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
                  marginTop: "-85px",
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
