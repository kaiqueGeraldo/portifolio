import type { Metadata } from "next";
import { AosInit } from "./_components/aos-init";
import "./globals.css";
import SmoothScrollWrapper from "./_components/smooth-scroll";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const colgent = localFont({
  src: "../../public/fonts/Colgent.ttf",
  variable: "--font-colgent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaique Geraldo - Portfólio",
  description:
    "Portfólio de Kaique Geraldo, desenvolvedor Full Stack com foco em soluções web e mobile modernas.",
  metadataBase: new URL("https://kaique.dev.br"),
  openGraph: {
    type: "website",
    url: "https://kaique.dev.br",
    title: "Kaique Geraldo - Portfólio",
    description:
      "Portfólio de Kaique Geraldo, desenvolvedor Full Stack com foco em soluções web e mobile modernas.",
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
    <html lang="pt-BR" className={`${colgent.variable}`}>
      <body className={` text-black`}>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper> <AosInit />
        <Toaster richColors position="bottom-right" expand={true} />
      </body>
    </html>
  );
}
