"use client";

import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function JourneyCard({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 160, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 160, damping: 24 });
  return (
    <div
      className="w-full max-w-md [perspective:900px]"
      onPointerMove={(event) => {
        if (
          reduced ||
          event.pointerType !== "mouse" ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 10);
        y.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.article
        style={reduced ? undefined : { rotateX, rotateY }}
        className="relative z-0 bg-surface shadow-md rounded-2xl p-6 border border-white/10 transition-colors hover:border-primary/50 motion-reduce:transition-none motion-reduce:!transform-none"
      >
        {children}
      </motion.article>
    </div>
  );
}
