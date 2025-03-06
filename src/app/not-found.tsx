"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const minhaFonte = localFont({
  src: "../../public/fonts/Colgent.ttf",
  display: "swap",
});

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        className={`${minhaFonte.className} text-8xl font-bold text-primary`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-2xl text-secondary mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Ops! Página não encontrada.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6"
      >
        <Link href="/">
          <button
            className="py-3 px-6 flex gap-2 items-center bg-primary rounded-lg text-secondary font-semibold transition-all duration-300 hover:bg-primary/80 shadow-lg hover:scale-105"
            aria-label="Entrar em Contato"
          >
            <ArrowLeft size={18} /> Voltar para o início
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
