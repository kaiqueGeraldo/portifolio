"use client";

import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";
import { jornada } from "@/app/data/journey";
import { useLocale, useTranslations } from "next-intl";
import { JourneyCard } from "./journey-card";

export function MyJourney() {
  const tj = useTranslations("MyJourney");
  const locale = useLocale() as "pt-BR" | "en";
  return (
    <section className="lg:p-10 p-5 pt-10 lg:pt-28 relative" id="my-journey">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-10" data-reveal="zoom-in">
          <h2 className="tracking-tight text-4xl font-medium">{tj("title")}</h2>
          <h4 className="font-semibold text-secondary text-lg max-w-2xl mx-auto uppercase">
            {tj("subtitle")}
          </h4>
        </div>

        {/* Linha do tempo */}
        <div className="relative flex flex-col items-center">
          {/* Linha vertical */}
          <div className="absolute left-1/2 w-1 bg-primary/30 h-full transform -translate-x-1/2"></div>

          {jornada.map((item, index) => (
            <div
              key={index}
              data-reveal="fade-up"
              className={`relative w-full flex items-center justify-center my-8 ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              {/* Ícone */}
              <div
                className="absolute left-1/2 top-0 transform -translate-x-1/2 translate-y-[-50%] 
  bg-primary p-2 rounded-full text-background shadow-lg z-10"
              >
                {item.type === "academic" ? (
                  <GraduationCap className="w-6 h-6" />
                ) : (
                  <Briefcase className="w-6 h-6" />
                )}
              </div>

              {/* Card */}
              <JourneyCard>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={item.imagem}
                      alt={item.instituicao[locale]}
                      width={80}
                      height={80}
                      className="rounded-lg object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.instituicao[locale]}
                    </h3>
                    <p
                      className="text-muted text-sm leading-relaxed mt-2"
                      dangerouslySetInnerHTML={{
                        __html: item.descricao[locale],
                      }}
                    ></p>
                  </div>
                </div>
              </JourneyCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
