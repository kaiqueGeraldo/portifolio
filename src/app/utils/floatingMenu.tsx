"use client";

import { useEffect, useState } from "react";

export function FloatingMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [blinkEffect, setBlinkEffect] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const shouldShow = window.scrollY > heroBottom - 50;

        if (shouldShow && !showMenu) {
          setShowMenu(true);
          setBlinkEffect(true);
          setTimeout(() => setBlinkEffect(false), 800);
        } else if (!shouldShow) {
          setShowMenu(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMenu]);

  return (
    <nav
        className={`font-colgent overflow-hidden z-20 fixed top-5 left-1/2 transform -translate-x-1/2 hidden lg:flex bg-white/30 text-white p-3 rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300 ${
        showMenu
          ? blinkEffect
            ? "opacity-100"
            : "opacity-10"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="hidden lg:flex gap-4 text-xl">
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
            className="cursor-pointer px-6 py-2 transition-all duration-300 rounded-md hover:bg-primary hover:text-secondary hover:scale-105"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
