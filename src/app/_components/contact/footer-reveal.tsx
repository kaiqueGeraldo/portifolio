"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./footer-reveal.module.css";

export function FooterReveal({
  contact,
  footer,
}: {
  contact: ReactNode;
  footer: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    const element = footerRef.current;
    if (!container || !element) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const measure = () => {
      container.dataset.revealFooter = String(
        !media.matches && element.offsetHeight + 80 < window.innerHeight,
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);
    media.addEventListener("change", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      media.removeEventListener("change", measure);
    };
  }, []);

  return (
    <div ref={root} id="contact-me" className={styles.root}>
      <section className={styles.contact}>{contact}</section>
      <div ref={footerRef} className={styles.footer}>
        {footer}
      </div>
    </div>
  );
}
