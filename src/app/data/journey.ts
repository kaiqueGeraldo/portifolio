import { Assets } from "@/assets";

export type JornadaItem = {
  instituicao: { "pt-BR": string; en: string };
  descricao: { "pt-BR": string; en: string };
  imagem: string;
  type: "academic" | "professional";
};

export const jornada: JornadaItem[] = [
  {
    instituicao: {
      "pt-BR": "Técnico em Desenvolvimento de Sistemas",
      en: "Technical in Software Development",
    },
    descricao: {
      "pt-BR":
        "Com a reformulação do Ensino Médio, tive a oportunidade de conciliar os estudos com um curso <strong>técnico em Desenvolvimento de Sistemas</strong>, ampliando meus conhecimentos na área de tecnologia (jan/2023-dez/2024).",
      en: "With the reformulation of High School, I had the opportunity to balance my studies with a <strong>technical course in Software Development</strong>, expanding my knowledge in the field of technology (jan/2023-dez/2024).",
    },
    imagem: Assets.Institutions.Senai,
    type: "academic",
  },
  {
    instituicao: {
      "pt-BR": "SP SKILLS 2024",
      en: "SP SKILLS 2024",
    },
    descricao: {
      "pt-BR":
        "Fui selecionado para representar meu município na fase estadual da <strong>SP SKILLS</strong>, na modalidade #08 - Desenvolvimento de Aplicativos Móveis (2024).",
      en: "I was selected to represent my municipality in the state phase of <strong>SP SKILLS</strong>, in the #08 - Mobile App Development category (2024).",
    },
    imagem: Assets.Institutions.WorldSkills,
    type: "academic",
  },
  {
    instituicao: {
      "pt-BR": "Engenharia de Software · Unimar",
      en: "Software Engineering · Unimar",
    },
    descricao: {
      "pt-BR":
        "Graduação em <strong>Engenharia de Software</strong> na <strong>Unimar</strong>, complementando minha atuação profissional em desenvolvimento de software. <strong>Em andamento</strong> (jan/2025 - presente).",
      en: "Undergraduate studies in <strong>Software Engineering</strong> at <strong>Unimar</strong>, complementing my professional work in software development. <strong>In progress</strong> (Jan/2025 - present).",
    },
    imagem: Assets.Institutions.Unimar,
    type: "academic",
  },
  {
    instituicao: {
      "pt-BR": "Estágio em TI",
      en: "IT Internship",
    },
    descricao: {
      "pt-BR":
        "O estágio na <strong>MyData Cloud</strong> representou um novo e importante desafio na minha jornada. É a minha primeira imersão no mercado de trabalho. (ago/2025 - nov/2025).",
      en: "The internship at <strong>MyData Cloud</strong> represented a new and important challenge in my journey. It is my first immersion in the job market. (ago/2025 - nov/2025).",
    },
    imagem: Assets.Institutions.MyData,
    type: "professional",
  },
  {
    instituicao: {
      "pt-BR": "Desenvolvedor Java Pleno",
      en: "Mid-level Java Developer",
    },
    descricao: {
      "pt-BR":
        "Desenvolvedor na <strong>Code Group</strong>, alocado na <strong>Núclea</strong>, desde novembro de 2025. Ingressei como Java Júnior e fui promovido a <strong>Java Pleno em setembro de 2026</strong>, mantendo a atuação no setor financeiro. (nov/2025 - presente).",
      en: "Developer at <strong>Code Group</strong>, assigned to <strong>Núclea</strong>, since November 2025. I joined as a Junior Java Developer and was promoted to <strong>Mid-level Java Developer in September 2026</strong>, continuing to work in the financial sector. (Nov/2025 - present).",
    },
    imagem: Assets.Institutions.Nuclea,
    type: "professional",
  },
];
