"use client";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { useRouter } from "../../../../i18n/routing";

export default function ProjectNotFound() {
  const t = useTranslations("ProjectNotFound");
  const router = useRouter();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center p-4">
      <h1 className="font-colgent text-4xl md:text-5xl font-bold text-primary">
        {t("title")}
      </h1>
      <p className="text-lg text-secondary mt-3 max-w-md">{t("message")}</p>
      <button
        onClick={() => router.back()}
        className="mt-6 py-3 px-6 flex gap-2 items-center bg-primary rounded-lg text-background font-semibold transition-all duration-300 hover:bg-primary/80 shadow-lg hover:scale-105"
        aria-label={t("backBtn")}
      >
        <ArrowLeft size={18} /> {t("backBtn")}
      </button>
    </div>
  );
}
