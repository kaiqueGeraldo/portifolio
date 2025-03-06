"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "./footer";
import { ContactMe } from "./contactme";

export function Final() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sectionRef.current, {
      y: "-60vh",
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "top+=60vh",
        scrub: 2.5,
        pin: true,
      },
    });
  }, []);

  return (
    <div id="contact-me" ref={containerRef} className="relative min-h-screen">
      <Footer />

      <section
        ref={sectionRef}
        className="absolute top-0 left-0 w-full h-screen lg:p-10 p-5 rounded-3xl bg-primary flex items-center justify-center shadow-2xl overflow-hidden"
      >
        <ContactMe />
      </section>
    </div>
  );
}
