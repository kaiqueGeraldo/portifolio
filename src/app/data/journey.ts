import { Assets } from "@/assets";
import { StaticImageData } from "next/image";

export type JornadaItem = {
  instituicao: string;
  descricao: string;
  imagem: StaticImageData;
  type: "academic" | "professional";
};

export const jornada: JornadaItem[] = [
  {
    instituicao: "Técnico em Desenvolvimento de Sistemas",
    descricao:
      "Com a reformulação do Ensino Médio, tive a oportunidade de conciliar os estudos com um curso <strong>técnico em Desenvolvimento de Sistemas</strong>, ampliando meus conhecimentos na área de tecnologia (jan/2023-dez/2024).",
    imagem: Assets.Institutions.Senai,
    type: "academic",
  },
  {
    instituicao: "SP SKILLS 2024",
    descricao:
      "Fui selecionado para representar meu município na fase estadual da <strong>SP SKILLS</strong>, na modalidade #08 - Desenvolvimento de Aplicativos Móveis (2024).",
    imagem: Assets.Institutions.WorldSkills,
    type: "academic",
  },
  {
    instituicao: "Bacharelado em Ciência da Computação",
    descricao:
      "Atualmente, estou cursando <strong>Ciência da Computação</strong>, aprofundando meus conhecimentos em tecnologia, programação e desenvolvimento de software (jan/2025 - presente).",
    imagem: Assets.Institutions.Unimar,
    type: "academic",
  },
  {
    instituicao: "Estágio em TI",
    descricao:
      "O estágio na <strong>MyData Cloud</strong> representou um novo e importante desafio na minha jornada. É a minha primeira imersão no mercado de trabalho. (ago/2025 - nov/2025).",
    imagem: Assets.Institutions.MyData,
    type: "professional",
  },
  {
    instituicao: "Desenvolvedor Java Júnior",
    descricao:
      "Iniciando minha carreira como Desenvolvedor Java. Contratado pela <strong>Code Group</strong> e atuando alocado na <strong>Núclea</strong>. Um novo capítulo que marca um grande passo no meu desenvolvimento profissional. (nov/2025 - presente).",
    imagem: Assets.Institutions.Nuclea,
    type: "professional",
  },
];