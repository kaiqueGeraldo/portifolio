"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function ScrollToTop() {
  const t = useTranslations("Hero");
  const [showButton, setShowButton] = useState(false);
  const [invertColors, setInvertColors] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setShowButton(window.scrollY > 700);

      const contactSection = document.getElementById("contact-me");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setInvertColors(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      inert={!showButton}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all ${
        showButton ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } ${invertColors ? "bg-white/30 text-primary" : "bg-primary text-background"}`}
      aria-label={t("backToTop")}
    >
      <ArrowUp size={24} />
    </button>
  );
}
