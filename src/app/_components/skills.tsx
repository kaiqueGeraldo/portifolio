"use client";

import useEmblaCarousel from "embla-carousel-react";
import flutter from "../../../public/img-skills/flutter.webp";
import firebase from "../../../public/img-skills/firebase.webp";
import sqlServer from "../../../public/img-skills/sql_server.webp";
import git from "../../../public/img-skills/git.webp";
import github from "../../../public/img-skills/github.webp";
import ia from "../../../public/img-skills/ia.webp";
import javascript from "../../../public/img-skills/javascript.webp";
import html from "../../../public/img-skills/html.webp";
import css from "../../../public/img-skills/css.webp";
import react from "../../../public/img-skills/react.webp";
import nextJs from "../../../public/img-skills/nextjs.webp";
import nodeJS from "../../../public/img-skills/nodejs.webp";
import typescript from "../../../public/img-skills/typescript.webp";
import tailwind from "../../../public/img-skills/tailwind.webp";
import localFont from "next/font/local";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const minhaFonte = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  display: "swap",
});

const skills = [
  {
    name: "React",
    image: react,
    color: "#61DAFB",
    doc: "https://react.dev/",
  },
  {
    name: "Next Js",
    image: nextJs,
    color: "#000000",
    doc: "https://nextjs.org/docs",
  },
  {
    name: "Node Js",
    image: nodeJS,
    color: "#83CD29",
    doc: "https://nodejs.org/docs/latest/api/",
  },
  {
    name: "TypeScript",
    image: typescript,
    color: "#3178C6",
    doc: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
    color: "#38BDF8",
    doc: "https://tailwindcss.com/docs",
  },
  {
    name: "Git",
    image: git,
    color: "#F05032",
    doc: "https://git-scm.com/doc",
  },
  {
    name: "Github",
    image: github,
    color: "#181717",
    doc: "https://docs.github.com/pt",
  },
  {
    name: "Flutter",
    image: flutter,
    color: "#02569B",
    doc: "https://flutter.dev/docs",
  },
  {
    name: "Firebase",
    image: firebase,
    color: "#FFCA28",
    doc: "https://firebase.google.com/docs",
  },
  {
    name: "HTML",
    image: html,
    color: "#E44D26",
    doc: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    image: css,
    color: "#1572B6",
    doc: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    image: javascript,
    color: "#F7DF1E",
    doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "SQL Server",
    image: sqlServer,
    color: "#CC2927",
    doc: "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
  },
  {
    name: "Inteligência Artificial",
    image: ia,
    color: "#7D00FF",
    doc: "https://theresanaiforthat.com/s/documentation/",
  },
];

export function Skills() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 2,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  const [flipped, setFlipped] = useState<number | null>(null);

  function toggleFlip(index: number) {
    setFlipped(flipped === index ? null : index);
  }

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section
      className="lg:p-10 p-5 pt-10 lg:pt-16 relative overflow-hidden"
      id="skills"
    >
      <div className="relative container mx-auto">
        <div className="text-left lg:pl-16" data-aos="zoom-in">
          <h2 className={`${minhaFonte.className} text-4xl font-bold`}>
            HABILIDADES
          </h2>
          <h4 className="font-semibold text-secondary text-lg max-w-2xl lg:max-w-3xl">
            MINHA EXPERIÊNCIA ABRANGE UMA AMPLA GAMA DE TECNOLOGIAS E
            FERRAMENTAS. AQUI ESTÃO ALGUMAS DAS PRINCIPAIS HABILIDADES QUE TENHO
            CONHECIMENTO E UTILIZO EM MEUS PROJETOS
          </h4>
        </div>

        {/* Grid para telas grandes */}
        <div className="hidden md:grid gap-4 mt-6">
          {/* Primeira linha - Fade Right */}
          <div
            className="grid grid-cols-4 lg:grid-cols-7 gap-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {skills
              .slice(0, Math.ceil(skills.length / 2))
              .map((skill, index) => (
                <div
                  key={index}
                  className="relative p-14 bg-white/10 shadow-md rounded-lg flex flex-col items-center transition-transform duration-500 overflow-hidden group select-none cursor-pointer"
                  onClick={() => toggleFlip(index)}
                  style={{ perspective: "1000px" }}
                  data-aos="zoom-in"
                >
                  {/* Efeito no hover */}
                  <div
                    className={`absolute inset-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-100 ${
                      flipped === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}, white)`,
                    }}
                  ></div>

                  <div
                    className={`relative z-10 w-auto h-auto flex items-center justify-center transition-transform duration-500 ease-in-out`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform:
                        flipped === index ? "rotateY(180deg)" : "rotateY(0)",
                    }}
                  >
                    {/* Frente do card */}
                    <div
                      className="absolute w-auto h-auto flex flex-col items-center justify-center text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="w-[48px] h-[48px]">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={48}
                          height={48}
                          quality={100}
                          priority
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <p className="mt-2 font-medium">{skill.name}</p>
                    </div>

                    {/* Verso do card */}
                    <div
                      className="absolute w-auto h-auto flex items-center justify-center"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <a
                        href={skill.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-center p-2 rounded-md hover:scale-105 transition-all duration-300"
                      >
                        Ver documentação
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Segunda linha - Fade Left */}
          <div
            className="grid grid-cols-4 lg:grid-cols-7 gap-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <div
                key={index + Math.ceil(skills.length / 2)}
                className="relative p-14 bg-white/10 shadow-md rounded-lg flex flex-col items-center transition-transform duration-500 overflow-hidden group select-none cursor-pointer"
                onClick={() => toggleFlip(index + Math.ceil(skills.length / 2))}
                style={{ perspective: "1000px" }}
                data-aos="zoom-in"
              >
                {/* Efeito no hover */}
                <div
                  className={`absolute inset-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-100 ${
                    flipped === index + Math.ceil(skills.length / 2)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}, white)`,
                  }}
                ></div>

                <div
                  className={`relative z-10 w-auto h-auto flex items-center justify-center transition-transform duration-500 ease-in-out`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      flipped === index + Math.ceil(skills.length / 2)
                        ? "rotateY(180deg)"
                        : "rotateY(0)",
                  }}
                >
                  {/* Frente do card */}
                  <div
                    className="absolute w-auto h-auto flex flex-col items-center justify-center text-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-[48px] h-[48px] flex flex-auto justify-center">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={48}
                        height={48}
                        quality={100}
                        priority
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <p className="mt-2 font-medium w-full">{skill.name}</p>
                  </div>

                  {/* Verso do card */}
                  <div
                    className="absolute w-auto h-auto flex items-center justify-center"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <a
                      href={skill.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-center p-2 rounded-md hover:scale-105 transition-all duration-300"
                    >
                      Ver documentação
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel para telas pequenas */}
        <div
          className="relative md:hidden overflow-hidden mt-6"
          ref={emblaRef}
          data-aos="fade-up"
        >
          <div className="flex justify-between gap-3 px-3 cursor-pointer">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative min-w-0 flex-[0_0_33.333%] p-14 bg-white/10 shadow-md rounded-lg flex flex-col items-center select-none transition-transform duration-500 overflow-hidden group"
                onClick={() => toggleFlip(index)}
                style={{ perspective: "1000px" }}
              >
                {/* Efeito de transição diagonal no hover */}
                <div
                  className={`absolute inset-0 duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-100 ${
                    flipped === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}, white)`,
                  }}
                ></div>

                <div
                  className={`relative z-10 w-auto h-auto flex items-center justify-center transition-transform duration-500 ease-in-out`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      flipped === index ? "rotateY(180deg)" : "rotateY(0)",
                  }}
                >
                  {/* Frente do card */}
                  <div
                    className="absolute flex flex-col items-center justify-center text-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-[48px] h-[48px]">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={48}
                        height={48}
                        quality={100}
                        priority
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <p className="mt-2 font-medium">{skill.name}</p>
                  </div>

                  {/* Verso do card */}
                  <div
                    className="absolute w-auto h-auto flex items-center justify-center  rounded-md"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <a
                      href={skill.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-center p-2 rounded-md hover:scale-105 transition-all duration-300"
                    >
                      Ver documentação
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="absolute top-[70%] left-0 px-1 w-full flex justify-between md:hidden lg:hidden pointer-events-none translate-y-1/2 overflow-visible">
        <button
          onClick={scrollPrev}
          className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 hover:bg-gray-100 transition-all pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={scrollNext}
          className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 hover:bg-gray-100 transition-all pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
