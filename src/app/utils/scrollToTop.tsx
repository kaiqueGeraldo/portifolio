"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all ${
        showButton ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } ${invertColors ? "bg-white/30 text-primary" : "bg-primary text-white"}`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  );
}
