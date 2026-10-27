"use client";

import { useLayoutEffect } from "react";

/** Server HTML stays readable. Only offscreen content is prepared for a reveal. */
export function EntranceAnimations({ pageKey = "home" }: { pageKey?: string }) {
  useLayoutEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver || !Element.prototype.animate) return;

    const targets = document.querySelectorAll<HTMLElement>("main [data-reveal]");
    const running = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        running.get(element)?.play();
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    // Read geometry together, before applying animations (avoid layout thrashing).
    const positions = Array.from(targets, element => ({ element, bounds: element.getBoundingClientRect() }));
    for (const { element, bounds } of positions) {
      const hero = Boolean(element.closest("#hero"));
      const visible = bounds.top < innerHeight && bounds.bottom > 0;
      // Never rewind visible content or animate the sticky footer beneath its overlay.
      if (!bounds.width || !bounds.height || element.closest("footer") || element.contains(document.activeElement)) continue;
      if (!hero && (visible || bounds.bottom <= 0)) continue;

      const fadeOnly = element.dataset.reveal === "fade";
      const offset = element.dataset.reveal === "fade-down" ? "0 -14px" : "0 22px";
      // No scale: it resamples text and competes with the cards' existing 3D transforms.
      const frames = fadeOnly
        ? [{ opacity: hero ? 1 : 0 }, { opacity: 1 }]
        : [
            { opacity: hero ? 1 : 0, translate: hero ? "0 14px" : offset },
            { opacity: 1, translate: "0 0" },
          ];
      const animation = element.animate(frames, {
        duration: hero ? 1100 : 950,
        delay: Math.min(Number(element.dataset.revealDelay) || 0, hero ? 480 : 240) * (hero ? 0.75 : 1),
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "both",
      });
      animation.pause();
      animation.currentTime = 0;
      running.set(element, animation);
      animation.onfinish = () => {
        animation.cancel();
        running.delete(element);
      };
      if (visible) animation.play();
      else observer.observe(element);
    }

    const revealAll = () => {
      observer.disconnect();
      for (const animation of running.values()) animation.cancel();
      running.clear();
    };
    // Reveal immediately on preference change, without re-hiding on toggle back.
    const onPreference = () => { if (preference.matches) revealAll(); };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      for (const [element, animation] of running) {
        if (element.contains(event.target)) {
          observer.unobserve(element);
          animation.cancel();
          running.delete(element);
        }
      }
    };
    preference.addEventListener("change", onPreference);
    document.addEventListener("focusin", onFocus);
    return () => {
      revealAll();
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("focusin", onFocus);
    };
  }, [pageKey]);

  return null;
}
