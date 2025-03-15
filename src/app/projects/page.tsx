"use client";

import { projetos } from "../data/projects";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  GithubLogo,
  ArrowLeft,
  ArrowArcRight,
} from "@phosphor-icons/react/dist/ssr";
import localFont from "next/font/local";

const minhaFonte = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  display: "swap",
});

export default function ProjectsPage() {
  const router = useRouter();

  const handleDetalhes = (id: string) => {
    router.push(`/detail-project?id=${id}`);
  };

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col md:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-all"
          data-aos="fade-right"
        >
          <ArrowLeft className="w-6 h-6" /> Voltar
        </button>

        <div className="flex flex-col items-center" data-aos="zoom-in">
          <h2
            className={`${minhaFonte.className} text-5xl font-bold mt-8 text-gray-900`}
          >
            Meus Projetos
          </h2>
          <p className="font-semibold text-secondary text-center text-lg max-w-2xl uppercase">
            Confira alguns dos projetos que desenvolvi
          </p>
        </div>
        <span></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projetos.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 group"
            data-aos="zoom-in"
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

            <div className="p-6 text-gray-900">
              <div>
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
                <p className="text-sm mt-2 text-gray-700">{item.descricao}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
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
  );
}
