"use client";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frame: number | undefined;

    function stop() {
      if (frame !== undefined) cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = undefined;
    }

    function syncDialogLock() {
      if (!lenis) return;
      const locked = document.querySelector("dialog[open]") !== null;
      if (locked === lenis.isStopped) return;
      if (locked) lenis.stop();
      else lenis.start();
    }

    function configure() {
      stop();
      if (preference.matches) return;
      lenis = new Lenis({ anchors: true, lerp: 0.1, wheelMultiplier: 0.8 });
      syncDialogLock();
      function raf(time: number) {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      }
      frame = requestAnimationFrame(raf);
    }

    configure();
    // Covers showModal, Escape, close(), and removal during navigation.
    const dialogs = new MutationObserver(syncDialogLock);
    dialogs.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["open"],
      childList: true,
    });
    preference.addEventListener("change", configure);
    return () => {
      dialogs.disconnect();
      preference.removeEventListener("change", configure);
      stop();
    };
  }, []);
  return <>{children}</>;
}
