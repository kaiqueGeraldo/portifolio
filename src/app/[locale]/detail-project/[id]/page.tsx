import { Metadata } from "next";
import { pageMetadata } from "../../../data/site";
import { notFound } from "next/navigation";
import { projetos } from "../../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = {
  params: Promise<{
    locale: "pt-BR" | "en";
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;

  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) {
    notFound();
  }

  return pageMetadata({ locale, path: `/detail-project/${id}`, title: `${projeto.nome} | Kaique Geraldo`, description: projeto.descricao[locale], image: projeto.imagem, imageHeight: 720 });
}

export function generateStaticParams() {
  return projetos.flatMap((projeto) => [
    {
      locale: "pt-BR",
      id: projeto.id,
    },
    {
      locale: "en",
      id: projeto.id,
    },
  ]);
}

export default async function DetailProjectPage({ params }: Props) {
  const { id } = await params;

  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) {
    notFound();
  }

  return <ProjectDetailClient projeto={projeto} />;
}
