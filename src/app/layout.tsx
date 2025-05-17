import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AosInit } from "./_components/aos-init";
import "./globals.css";
import SmoothScrollWrapper from "./_components/smooth-scroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kaique Geraldo - Portfólio",
  description:
    "Portfólio de Kaique Geraldo, desenvolvedor Full Stack com foco em soluções web e mobile modernas, utilizando tecnologias como React, Next.js, Node.js, Flutter e Firebase.",
  metadataBase: new URL("https://kaique.dev.br"),
  openGraph: {
    type: "website",
    url: "https://kaique.dev.br",
    title: "Kaique Geraldo - Portfólio",
    description:
      "Portfólio de Kaique Geraldo, desenvolvedor Full Stack com foco em soluções web e mobile modernas, utilizando tecnologias como React, Next.js, Node.js, Flutter e Firebase.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kaique Geraldo - Portfólio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} text-black`}>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper> <AosInit />
      </body>
    </html>
  );
}
