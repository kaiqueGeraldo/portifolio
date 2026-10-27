"use client";

import Image from "next/image";
import { Assets } from "@/assets";
import { useTranslations } from "next-intl";

export function AboutMe() {
  const ta = useTranslations("AboutMe");

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center lg:p-10 p-5 pt-10 lg:pt-16"
      id="about-me"
    >
      <div className="relative container">
        <div className="text-left lg:pl-16" data-reveal="fade-up">
          <h2 className="tracking-tight text-4xl font-medium">{ta("title")}</h2>
          <h4 className="font-semibold text-secondary text-lg max-w-2xl lg:max-w-3xl uppercase">
            {ta("subtitle")}
          </h4>
        </div>

        <div className="relative container flex flex-col-reverse lg:flex-row items-center lg:gap-14">
          <div
            className="text-base lg:text-lg leading-relaxed text-muted max-w-xl lg:max-w-3xl lg:pl-6 mt-8 space-y-5"
          >
            {(
              ["aboutText1", "aboutText2", "aboutText3", "aboutText4"] as const
            ).map((key, index) => (
              <p key={key} data-reveal="fade-up" data-reveal-delay={index * 100}>{ta(key)}</p>
            ))}
          </div>

          <div
            className="flex-1 flex justify-center my-10 lg:my-0"
            data-reveal="fade-left"
          >
            <div className="relative mt-24 lg:mt-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-visible shadow-lg border-4 border-primary backdrop-blur-xl bg-white/10">
              <Image
                src={Assets.General.KaiqueCompetidor}
                alt="Kaique"
                priority
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  scale: "1.4",
                  marginTop: "-85px",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
