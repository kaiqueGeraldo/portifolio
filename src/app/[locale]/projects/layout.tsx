import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "../../data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  return pageMetadata({ locale, path: "/projects", title: `${t("title")} | Kaique Geraldo`, description: t("subtitle") });
}

export default function ProjectsLayout({ children }: { children: ReactNode }) { return children; }
