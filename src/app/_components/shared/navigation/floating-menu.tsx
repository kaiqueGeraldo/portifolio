"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { navigationItems } from "@/app/data/navigation";

export function FloatingMenu() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("Navigation");
  const th = useTranslations("Hero");

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={th("navigation")}
      inert={!visible}
      className={`z-20 fixed top-5 left-1/2 -translate-x-1/2 hidden lg:block bg-surface/95 backdrop-blur-xl border border-white/10 text-foreground p-2 rounded-xl shadow-lg transition-opacity duration-300 w-max max-w-[95vw] ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ul className="flex items-center justify-center gap-1 text-sm whitespace-nowrap">
        {navigationItems.map((item) => (
          <li key={item.key}>
            <a
              href={`#${item.link}`}
              className="block px-5 py-3 rounded-lg hover:bg-primary/10 hover:text-primary"
            >
              {t(item.key)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
