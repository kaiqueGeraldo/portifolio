import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#C4A9EE",
        secondary: "#C5BECE",
        surface: "#232127",
        muted: "#B9B4C2",
      },
      fontFamily: {
        colgent: ["var(--font-colgent)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
