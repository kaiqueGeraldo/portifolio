"use client";

import { ArrowArcRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projetos } from "../data/projects";

export function Projects() {
  const router = useRouter();

  const handleDetalhes = (id: string) => {
    router.push(`/detail-project?id=${id}`);
  };

  const handleProjetos = () => {
    router.push(`/projects`);
  };

  return (
    <section
      className="lg:p-10 p-5 pt-10 relative overflow-hidden"
      id="projects"
    >
      <div className="relative container mx-auto">
        <div className="flex justify-between items-center lg:px-16">
          <div className="text-left" data-aos="fade-right">
            <h2 className="font-colgent text-4xl font-bold">
              PROJETOS
            </h2>
            <h4 className="font-semibold text-secondary text-lg max-w-2xl lg:max-w-3xl">
              MEUS PROJETOS DE DESTAQUE
            </h4>
          </div>

          <button
            className="py-3 px-6 lg:px-8 border-2 border-primary rounded-lg text-primary font-semibold transition-all duration-300 hover:bg-secondary/50 shadow-lg hover:scale-105"
            aria-label="Ver Todos"
            data-aos="fade-left"
            onClick={() => handleProjetos()}
          >
            Ver Todos (+{projetos.length - 3})
          </button>
        </div>

        <div className="relative overflow-hidden mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className="group overflow-hidden bg-white/10 shadow-md rounded-lg mb-4"
              data-aos={
                index === 0
                  ? "zoom-in-right"
                  : index === 1
                  ? "zoom-in"
                  : "zoom-in-left"
              }
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  quality={100}
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="grayscale brightness-50 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-active:grayscale-0 group-active:brightness-100 group-hover:scale-110"
                />
              </div>

              <div className="p-4 text-gray-900">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">{item.nome}</h2>

                  <div className="flex gap-2">
                    {item.tecnologias.map((tec, index) => (
                      <div key={index} className="flex gap-2">
                        {tec.icone.map((img, imgIndex) => (
                          <Image
                            key={imgIndex}
                            src={img}
                            alt={tec.nome[index]}
                            priority
                            quality={100}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm mt-2 line-clamp-2 text-gray-700">
                  {item.descricao}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium flex items-center gap-2 px-3 py-2 rounded-md hover:text-secondary/80 transition hover:bg-primary duration-500"
                  >
                    <GithubLogo className="w-6 h-6" />
                    GitHub
                  </a>

                  <button
                    onClick={() => handleDetalhes(item.id)}
                    className="bg-primary text-white px-3 py-2 rounded-lg text-sm hover:bg-primary/80 transition duration-500 flex items-center gap-2"
                  >
                    Detalhes
                    <ArrowArcRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
