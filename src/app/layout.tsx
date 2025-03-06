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
  description: "Meu portfólio",
  
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
