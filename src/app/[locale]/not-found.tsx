"use client";

"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        className="font-colgent text-8xl font-bold text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h1>
      <motion.p
        className="text-2xl text-secondary mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("message")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6"
      >
        <Link href="/">
          <button
            className="py-3 px-6 flex gap-2 items-center bg-primary rounded-lg text-background font-semibold transition-all duration-300 hover:bg-primary/80 shadow-lg hover:scale-105"
            aria-label={t("backBtn")}
          >
            <ArrowLeft size={18} /> {t("backBtn")}
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
