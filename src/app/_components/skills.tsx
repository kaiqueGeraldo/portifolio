"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills } from "../data/skills";

export function Skills() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 2,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

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
          <h2 className="font-colgent text-4xl font-bold">HABILIDADES</h2>
          <h4 className="font-semibold text-secondary text-lg max-w-2xl lg:max-w-3xl">
            MINHA EXPERIÊNCIA ABRANGE UMA AMPLA GAMA DE TECNOLOGIAS E
            FERRAMENTAS. AQUI ESTÃO ALGUMAS DAS PRINCIPAIS HABILIDADES QUE TENHO
            CONHECIMENTO E UTILIZO EM MEUS PROJETOS
          </h4>
        </div>

        {/* Grid para telas grandes */}
        <div className="hidden md:grid gap-4 mt-6">
          {/* Primeira linha */}
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
                  className="relative p-14 bg-white/10 shadow-md rounded-lg flex flex-col items-center group select-none cursor-pointer overflow-hidden"
                  data-aos="zoom-in"
                >
                  {/* Fundo colorido no Hover */}
                  <div
                    className="absolute inset-0 duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}, white)`,
                    }}
                  ></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    
                    <div className="w-[48px] h-[48px] transition-transform duration-1000 ease-in-out group-hover:[transform:rotateY(360deg)]">
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
                </div>
              ))}
          </div>

          {/* Segunda linha */}
          <div
            className="grid grid-cols-4 lg:grid-cols-7 gap-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {skills
              .slice(Math.ceil(skills.length / 2))
              .map((skill, index) => (
                <div
                  key={index + Math.ceil(skills.length / 2)}
                  className="relative p-14 bg-white/10 shadow-md rounded-lg flex flex-col items-center group select-none cursor-pointer overflow-hidden"
                  data-aos="zoom-in"
                >
                  <div
                    className="absolute inset-0 duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}, white)`,
                    }}
                  ></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="w-[48px] h-[48px] transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]">
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
                    <p className="mt-2 font-medium">{skill.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Carrossel Mobile */}
        <div
          className="relative md:hidden overflow-hidden mt-6"
          ref={emblaRef}
          data-aos="fade-up"
        >
          <div className="flex justify-between gap-3 px-3 cursor-pointer">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative min-w-0 flex-[0_0_33.333%] p-14 bg-white/10 shadow-md rounded-lg flex flex-col items-center select-none overflow-hidden group"
              >
                <div
                  className="absolute inset-0 duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}, white)`,
                  }}
                ></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  {/* No mobile, gira ao tocar (active) */}
                  <div className="w-[48px] h-[48px] transition-transform duration-700 ease-in-out group-active:[transform:rotateY(360deg)]">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botões */}
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