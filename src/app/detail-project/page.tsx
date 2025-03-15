"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { GithubLogo, ArrowLeft, ShareNetwork } from "@phosphor-icons/react";
import { projetos } from "../data/projects";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DetailProject() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const projeto = projetos.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState("descrição");

  if (!projeto) {
    return (
      <section className="flex items-center justify-center h-screen text-center text-gray-700">
        <div>
          <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
          <button
            onClick={() => router.back()}
            className="mt-4 inline-block bg-primary text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-primary/80 transition-all"
          >
            Voltar para o início
          </button>
        </div>
      </section>
    );
  }

  const handleShare = () => {
    if (typeof window === "undefined") return;

    if (navigator.share) {
      navigator
        .share({
          title: projeto.nome,
          url: window.location.href,
        })
        .catch((error) => console.error("Erro ao compartilhar:", error));
    } else {
      alert("Seu navegador não suporta compartilhamento.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center p-6 text-white overflow-hidden">
      <div className="w-full flex justify-between" data-aos="fade-right">
        <button
          onClick={() => router.back()}
          className="flex md:hidden lg:hidden mb-6 gap-2 items-center text-secondary hover:text-secondary/80 transition-all"
        >
          <ArrowLeft className="w-6 h-6" /> Voltar
        </button>
        <span></span>
      </div>
      <div className="max-w-5xl w-full space-y-6">
        {/* Hero Section */}
        <div
          className="relative w-full h-[50vh] rounded-xl overflow-hidden shadow-lg"
          data-aos="zoom-in"
        >
          <Image
            src={projeto.imagem}
            alt={projeto.nome}
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-5xl font-extrabold">{projeto.nome}</h1>
          </div>
        </div>

        {/* Tabs */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg"
          layout
          layoutId="tabs-container"
          transition={{ type: "spring", stiffness: 200, damping: 40 }}
          data-aos="zoom-in"
        >
          {/* Cabeçalho das Tabs */}
          <div className="relative flex gap-6 border-b border-gray-300 pb-2">
            {["descrição", "tecnologias", "detalhes"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 text-lg font-medium transition ${
                  activeTab === tab ? "text-primary" : "text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}

                {/* Barra de indicação animada */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-md"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Conteúdo das abas */}
          <motion.div
            className="mt-6 text-gray-800"
            layout
            transition={{ type: "spring", stiffness: 200, damping: 40 }}
          >
            <AnimatePresence mode="wait">
              {activeTab === "descrição" && (
                <motion.div
                  key="descrição"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg leading-relaxed">{projeto.descricao}</p>
                </motion.div>
              )}

              {activeTab === "tecnologias" && (
                <motion.div
                  key="tecnologias"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                  {projeto.tecnologias.map((tech, index) =>
                    (Array.isArray(tech.icone) ? tech.icone : [tech.icone]).map(
                      (icone, i) => (
                        <motion.div
                          key={`${index}-${i}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex flex-col items-center py-4 group rounded-xl shadow-md"
                          style={{
                            background: `linear-gradient(135deg, ${tech.color[i]}, white)`,
                          }}
                        >
                          <Image
                            src={icone}
                            alt={tech.nome[index]}
                            priority
                            quality={100}
                            width={32}
                            height={32}
                          />
                          <span className="font-medium mt-2 text-lg">
                            {Array.isArray(tech.nome)
                              ? tech.nome[i]
                              : tech.nome}
                          </span>
                        </motion.div>
                      )
                    )
                  )}
                </motion.div>
              )}

              {activeTab === "detalhes" && (
                <motion.div
                  key="detalhes"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <ul className="space-y-2 text-lg">
                    <li>
                      <strong>Duração:</strong> {projeto.duracao}
                    </li>
                    <li>
                      <strong>Status:</strong> {projeto.status}
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Ações */}
        <div className="flex gap-4 justify-between w-full">
          <button
            onClick={() => router.back()}
            className="hidden md:flex lg:flex items-center gap-2 text-primary hover:text-primary/80 transition-all"
          >
            <ArrowLeft className="w-6 h-6" /> Voltar
          </button>
          <div className="flex gap-4">
            <button
              onClick={handleShare}
              className="bg-gray-200/40 text-gray-700 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition"
            >
              <ShareNetwork className="w-5 h-5" /> Compartilhar
            </button>
            {projeto.site && (
              <a
                href={projeto.site}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md hover:bg-primary/80 transition"
              >
                <Globe className="w-5 h-5" /> Visitar Site
              </a>
            )}
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md hover:bg-primary/80 transition"
            >
              <GithubLogo className="w-5 h-5" /> Ver no GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
