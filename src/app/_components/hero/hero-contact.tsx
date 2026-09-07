"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail, MessageCircle, X } from "lucide-react";
import styles from "./hero.module.css";

export function HeroContact() {
  const dialog = useRef<HTMLDialogElement>(null);
  const t = useTranslations("Hero");
  return (
    <>
      <button
        type="button"
        className={styles.secondary}
        onClick={() => dialog.current?.showModal()}
      >
        {t("contactBtn")}
        <ArrowUpRight size={18} aria-hidden />
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby="hero-contact-title"
        aria-describedby="hero-contact-description"
        data-lenis-prevent
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.dialogContent}>
          <button
            type="button"
            className={styles.closeDialog}
            onClick={() => dialog.current?.close()}
            aria-label={t("closeModal")}
          >
            <X size={22} />
          </button>
          <p className={styles.eyebrow}>{t("contactBtn")}</p>
          <h2 id="hero-contact-title">{t("modalTitle")}</h2>
          <p id="hero-contact-description">{t("modalDesc")}</p>
          <a
            href="https://wa.me/5518997654874"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            <MessageCircle size={20} aria-hidden />
            {t("whatsapp")}
          </a>
          <a href="mailto:kaiique2404@gmail.com" className={styles.secondary}>
            <Mail size={20} aria-hidden />
            {t("email")}
          </a>
        </div>
      </dialog>
    </>
  );
}
