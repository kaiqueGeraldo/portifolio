"use client";
import { useState } from "react";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import DoubleArrow from "../../../public/ChevronDoubleDown.webp";
import localFont from "next/font/local";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const minhaFonte = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  display: "swap",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatAnimation = (direction: string) => ({
    y: direction === "up" ? [-10, 20, -10] : [20, -10, 20],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  });

  return (
    <motion.section
      className="relative flex items-center justify-center lg:p-8 md:p-8 select-none"
      id="hero"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="relative container w-full lg:h-[calc(100vh*0.90)] md:h-[calc(100vh*0.90)] flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg md:rounded-3xl lg:rounded-3xl lg:p-16 rounded-b-3xl shadow-2xl border border-white/20 transition-all duration-300"
        variants={staggerContainer}
      >
        <motion.header
          className={`${minhaFonte.className} w-full flex justify-between items-center p-4`}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold cursor-pointer">KG</h2>

          {/* Botão do menu hamburguer para mobile */}
          <button
            className="lg:hidden p-2 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir Menu"
          >
            <motion.div
              initial={{ rotate: 0, opacity: 1 }}
              animate={{ rotate: menuOpen ? 180 : 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.div>
          </button>

          {/* Menu Mobile */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-20 left-0 w-full bg-white shadow-md p-6 rounded-md flex flex-col items-center gap-4 text-xl z-40"
              >
                {[
                  { label: "Sobre Mim", link: "about-me" },
                  { label: "Habilidades", link: "skills" },
                  { label: "Projetos", link: "projects" },
                  { label: "Jornada", link: "my-journey" },
                  { label: "Contate-me", link: "contact-me" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer px-6 py-2 transition-all duration-300 rounded-md hover:bg-primary hover:text-secondary"
                    onClick={() => {
                      scrollToSection(item.link);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex gap-6 text-xl">
            {[
              { label: "Sobre Mim", link: "about-me" },
              { label: "Habilidades", link: "skills" },
              { label: "Projetos", link: "projects" },
              { label: "Jornada", link: "my-journey" },
              { label: "Contate-me", link: "contact-me" },
            ].map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.link)}
                className="cursor-pointer px-4 py-2 transition-all duration-300 rounded-md hover:bg-primary hover:text-secondary hover:scale-105"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.header>

        <motion.div
          className="flex flex-col items-center text-center gap-6"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-lg font-semibold text-secondary mt-4"
            variants={fadeInUp}
          >
            DESENVOLVEDOR WEB E MOBILE
          </motion.h2>
          <motion.h1
            className={`${minhaFonte.className} text-5xl md:text-7xl font-bold`}
            variants={fadeInUp}
          >
            Kaique Geraldo
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl"
            variants={fadeInUp}
          >
            Bem-vindo ao meu portfólio! Aqui você encontrará informações sobre
            mim, meus projetos e a minha trajetória.
          </motion.p>

          <motion.div
            className="flex gap-6 mt-6 flex-col sm:flex-row"
            variants={fadeInUp}
          >
            {/* Botão */}
            <motion.button
              className="py-3 px-6 bg-primary rounded-lg text-secondary font-semibold transition-all duration-300 hover:bg-primary/80 shadow-lg hover:scale-105"
              aria-label="Entrar em Contato"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
            >
              Entrar em Contato
            </motion.button>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 bg-black/50 lg:rounded-3xl md:rounded-3xl flex justify-center items-center p-4 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center relative"
                >
                  {/* Botão de Fechar */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                  >
                    <X size={24} />
                  </button>

                  <h2 className="text-xl font-bold mb-4">Entre em Contato</h2>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/5518997654874"
                      target="_blank"
                      className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="mailto:kaiique2404@gmail.com"
                      target="_blank"
                      className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                      E-mail
                    </a>
                  </div>
                </motion.div>
              </div>
            )}
            <motion.a
              href="/curriculo/curriculo-kaique.pdf"
              download="curriculo-kaique.pdf"
              className="py-3 px-6 bg-secondary/30 border-2 border-primary rounded-lg text-primary font-semibold transition-all duration-300 hover:bg-secondary/50 shadow-lg hover:scale-105 text-center"
              aria-label="Baixar meu CV"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Baixar meu CV
            </motion.a>
          </motion.div>

          <motion.h2
            className="font-semibold text-secondary"
            variants={fadeInUp}
          >
            REDES SOCIAIS
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <motion.div className="flex gap-6" variants={staggerContainer}>
              <motion.a
                href="https://linkedin.com/in/kaique-geraldo"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary rounded-lg flex items-center justify-center p-3 hover:bg-primary text-primary hover:text-secondary transition-all duration-300 cursor-pointer hover:scale-105 shadow-xl"
                aria-label="LinkedIn"
                animate={floatAnimation("up")}
              >
                <LinkedinLogo className="w-8 h-8" fill="currentColor" />
              </motion.a>
              <motion.a
                href="https://github.com/kaiqueGeraldo"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary rounded-lg flex items-center justify-center p-3 hover:bg-primary text-primary hover:text-secondary transition-all duration-300 cursor-pointer hover:scale-105 shadow-xl"
                aria-label="GitHub"
                animate={floatAnimation("down")}
              >
                <GithubLogo className="w-8 h-8" fill="currentColor" />
              </motion.a>
              <motion.a
                href="mailto:kaiique2404@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Kaique,%20gostaria%20de%20falar%20sobre..."
                target="_blank"
                className="border-2 border-primary rounded-lg flex items-center justify-center p-3 hover:bg-primary text-primary hover:text-secondary transition-all duration-300 cursor-pointer hover:scale-105 shadow-xl"
                aria-label="E-mail"
                animate={floatAnimation("up")}
              >
                <Envelope className="w-8 h-8" fill="currentColor" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="mt-4 animate-bounce" variants={fadeInUp}>
            <Image
              src={DoubleArrow}
              alt={"DoubleArrow"}
              className="w-8 h-8"
              style={{ fill: "currentcolor" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
