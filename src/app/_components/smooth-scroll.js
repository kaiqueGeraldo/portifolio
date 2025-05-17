"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollWrapper({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
            wheelMultiplier: 0.8,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return <>{children}</>;
}
