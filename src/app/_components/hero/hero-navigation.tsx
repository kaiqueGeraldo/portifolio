"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { navigationItems } from "@/app/data/navigation";
import { LocaleSwitcher } from "@/app/_components/shared/navigation/locale-switcher";
import styles from "./hero.module.css";

export function HeroNavigation() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navigation");
  const th = useTranslations("Hero");
  return (
    <header className={styles.header} data-reveal="fade-down">
      <a href="#hero" className={styles.logo} aria-label="Kaique Geraldo">
        kg<span>.</span>
      </a>
      <nav className={styles.desktopNav} aria-label={th("navigation")}>
        {navigationItems.map((item) => (
          <a key={item.key} href={`#${item.link}`}>
            {t(item.key)}
          </a>
        ))}
      </nav>
      <div className={styles.headerActions}>
        <LocaleSwitcher />
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="hero-mobile-navigation"
          aria-label={open ? th("closeMenu") : th("openMenu")}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="hero-mobile-navigation"
        className={styles.mobileNav}
        hidden={!open}
        aria-label={th("navigation")}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        {navigationItems.map((item) => (
          <a
            key={item.key}
            href={`#${item.link}`}
            onClick={() => setOpen(false)}
          >
            {t(item.key)}
          </a>
        ))}
      </nav>
    </header>
  );
}
