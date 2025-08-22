"use client";

import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import mydatalogo from "../../../public/img-instituicoes/mydata.webp";
import senaiLogo from "../../../public/img-instituicoes/senai.webp";
import wordSkillsLogo from "../../../public/img-instituicoes/world-skills.webp";
import unimarLogo from "../../../public/img-instituicoes/unimar.webp";

const minhaFonte = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  display: "swap",
});

const jornada = [
  {
    instituicao: "Técnico em Desenvolvimento de Sistemas",
    descricao:
      "Com a reformulação do Ensino Médio, tive a oportunidade de conciliar os estudos com um curso técnico em Desenvolvimento de Sistemas, ampliando meus conhecimentos na área de tecnologia (2023-2024).",
    imagem: senaiLogo,
  },
  {
    instituicao: "SP SKILLS 2024",
    descricao:
      "Fui selecionado para representar meu município na fase estadual da SP SKILLS, na modalidade #08 - Desenvolvimento de Aplicativos Móveis (2024).",
    imagem: wordSkillsLogo,
  },
  {
    instituicao: "Bacharelado em Ciência da Computação",
    descricao:
      "Atualmente, estou cursando Ciência da Computação, aprofundando meus conhecimentos em tecnologia, programação e desenvolvimento de software (jan/2025 - presente).",
    imagem: unimarLogo,
  },
  {
    instituicao: "Estágio em TI",
    descricao:
      "O estágio na MyData Cloud representa um novo e importante desafio na minha jornada. É a minha primeira imersão no mercado de trabalho, onde busco aplicar minha dedicação para aprender, colaborar com a equipe e adquirir uma visão prática do universo da tecnologia. (ago/2025 - presente).",
    imagem: mydatalogo,
  },
];

export function MyJourney() {
  return (
    <section className="lg:p-10 p-5 pt-10 lg:pt-28 relative" id="my-journey">
      <div className="relative max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10" data-aos="zoom-in">
          <h2 className={`${minhaFonte.className} text-4xl font-bold`}>
            MINHA JORNADA ACADÊMICA
          </h2>
          <h4 className="font-semibold text-secondary text-lg max-w-2xl mx-auto">
            ACOMPANHE O QUE PASSEI ATÉ O MOMENTO
          </h4>
        </div>

        {/* Linha do tempo */}
        <div className="relative flex flex-col items-center">
          {/* Linha vertical */}
          <div className="absolute left-1/2 w-1 bg-primary/30 h-full transform -translate-x-1/2"></div>

          {jornada.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className={`relative w-full flex items-center justify-center my-8 ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              {/* Ícone */}
              <div
                className="absolute left-1/2 top-0 transform -translate-x-1/2 translate-y-[-50%] 
  bg-primary p-2 rounded-full text-white shadow-lg z-10"
              >
                <GraduationCap className="w-6 h-6" />
              </div>

              {/* Card */}
              <div
                className={`relative z-0 bg-white/60 lg:bg-white/10 shadow-md rounded-lg p-6 max-w-md transition-all duration-300 hover:scale-105 border-2"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={item.imagem}
                      alt={item.instituicao}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.instituicao}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.descricao}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
