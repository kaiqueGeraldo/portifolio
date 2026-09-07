import type { Metadata } from "next";

export const siteUrl = "https://kaique.dev.br";
export const siteLocales = ["pt-BR", "en"] as const;

export function localizedUrl(locale: string, path = "/") {
  return `${siteUrl}${locale === "en" ? "/en" : ""}${path === "/" ? "" : path}`;
}

export function languageAlternates(path = "/") {
  return { "pt-BR": localizedUrl("pt-BR", path), en: localizedUrl("en", path), "x-default": localizedUrl("pt-BR", path) };
}

export function pageMetadata({ locale, path = "/", title, description, image, imageHeight = 630 }: {
  locale: string; path?: string; title: string; description: string; image?: string; imageHeight?: number;
}): Metadata {
  const url = localizedUrl(locale, path);
  const cover = image ?? (locale === "en" ? "/og-image-en.png" : "/og-image-pt.png");
  return {
    metadataBase: new URL(siteUrl), title, description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: { type: "website", siteName: "Kaique Geraldo", url, title, description,
      locale: locale === "en" ? "en_US" : "pt_BR", alternateLocale: locale === "en" ? "pt_BR" : "en_US",
      images: [{ url: cover, width: 1200, height: imageHeight, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: cover, alt: title }] },
  };
}
