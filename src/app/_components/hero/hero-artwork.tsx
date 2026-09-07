"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { Assets } from "@/assets";
import styles from "./hero-artwork.module.css";

export function HeroArtwork() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const t = useTranslations("Hero");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"],
  });
  const upperY = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const lowerY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotation = useTransform(scrollYProgress, [0, 1], [-14, -5]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(pointerX, { stiffness: 150, damping: 22 });
  const tiltY = useSpring(pointerY, { stiffness: 150, damping: 22 });

  return (
    <div
      ref={ref}
      className={styles.scene}
      data-reveal="zoom-in"
      data-reveal-delay="260"
      role="img"
      aria-label={t("artDescription")}
      onPointerMove={(event) => {
        if (reducedMotion || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(
          -((event.clientY - bounds.top) / bounds.height - 0.5) * 12,
        );
        pointerY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <div className={styles.glow} aria-hidden />
      <div className={styles.orbit} aria-hidden />
      <div className={styles.orbitOuter} aria-hidden />
      <motion.div
        className={styles.stack}
        aria-hidden
        style={reducedMotion ? undefined : { rotateX: tiltX, rotateY: tiltY }}
      >
        <motion.div
          className={`${styles.layer} ${styles.data}`}
          whileHover={reducedMotion ? undefined : { scale: 1.035 }}
          style={
            reducedMotion
              ? undefined
              : { y: lowerY, rotateX: 30, rotateZ: rotation }
          }
        >
          <div className={styles.layerHeader}>
            <span>03 / {t("dataLayer")}</span>
            <span>MCP</span>
          </div>
          <div className={styles.dataBody}>
            <span>◇</span>
            <span>↔</span>
            <span>◎</span>
            <span>↔</span>
            <span>◇</span>
          </div>
          <div className={styles.layerFooter}>
            IA / LLMs + MCP <span>◆</span>
          </div>
        </motion.div>
        <motion.div
          className={`${styles.layer} ${styles.services}`}
          whileHover={reducedMotion ? undefined : { scale: 1.035 }}
          style={
            reducedMotion
              ? undefined
              : { y: upperY, rotateX: 30, rotateZ: rotation }
          }
        >
          <div className={styles.layerHeader}>
            <span>01 / {t("servicesLayer")}</span>
            <Image src={Assets.Skills.Spring} alt="" width={24} height={24} />
          </div>
          <div className={styles.code}>
            <span>@Service</span>
            <br />
            class SolutionService {"{"}
            <br />
            <span className={styles.codeIndent}>process();</span>
            <br />
            {"}"}
          </div>
          <div className={styles.layerFooter}>
            Java + Spring Boot <span>↗</span>
          </div>
        </motion.div>
        <motion.div
          className={`${styles.layer} ${styles.interface}`}
          whileHover={reducedMotion ? undefined : { scale: 1.035 }}
          style={reducedMotion ? undefined : { rotateX: 30, rotateZ: rotation }}
        >
          <div className={styles.layerHeader}>
            <span>02 / {t("interfaceLayer")}</span>
            <div className={styles.dots}>
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className={styles.interfaceBody}>
            <Image src={Assets.Skills.React} alt="" width={58} height={58} />
            <div className={styles.interfaceLines}>
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className={styles.layerFooter}>
            React + Next.js <span>↗</span>
          </div>
        </motion.div>
      </motion.div>
      <span className={styles.caption}>{t("artCaption")}</span>
    </div>
  );
}
