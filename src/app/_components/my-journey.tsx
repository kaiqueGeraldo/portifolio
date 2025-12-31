"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { jornada } from "../data/journey";

export function MyJourney() {
  return (
    <section className="lg:p-10 p-5 pt-10 lg:pt-28 relative" id="my-journey">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-10" data-aos="zoom-in">
          <h2 className="font-colgent text-4xl font-bold">
            MINHA JORNADA
          </h2>
          <h4 className="font-semibold text-secondary text-lg max-w-2xl mx-auto">
            ACOMPANHE MINHA TRAJETÓRIA ATÉ O MOMENTO
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
                {item.type === "academic" ? (
                  <GraduationCap className="w-6 h-6" />
                ) : (
                  <Briefcase className="w-6 h-6" />
                )}
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
                      className="rounded-lg object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.instituicao}
                    </h3>
                    <p
                      className="text-gray-700 text-sm"
                      dangerouslySetInnerHTML={{ __html: item.descricao }}
                    ></p>
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
