import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import "../globals.css";
import SmoothScrollWrapper from "@/app/_components/shared/motion/smooth-scroll";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { pageMetadata } from "../data/site";
import { routing } from "../../i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const colgent = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  variable: "--font-colgent",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return pageMetadata({ locale, title: t("title"), description: t("description") });
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={colgent.variable} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
          <Toaster richColors position="bottom-right" expand />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
