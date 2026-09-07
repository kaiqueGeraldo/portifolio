import { Assets } from "@/assets";

export interface Tecnologia {
  nome: string[];
  icone: string[];
  color: string[];
}

export interface Project {
  id: string;
  nome: string;
  descricao: { "pt-BR": string; en: string };
  imagem: string;
  link: string;
  site?: string;
  tecnologias: Tecnologia[];
  duracao?: string;
  contexto?: { "pt-BR": string; en: string };
  contribuicao?: { "pt-BR": string; en: string };
  status: { "pt-BR": string; en: string };
}

export const projetos: Project[] = [
  {
    id: "controle-financeiro",
    nome: "Controle Financeiro",
    descricao: {
      "pt-BR":
        "Aplicação Full Stack para organizar contas, transações, cartões e faturas, acompanhar investimentos e planejar metas. O backend Java e Spring Boot reúne regras financeiras, autenticação e rotinas agendadas; a interface em Next.js oferece dashboards e acompanhamento do planejamento pessoal.",
      en: "A Full Stack application to organize accounts, transactions, credit cards and invoices, track investments and plan goals. The Java and Spring Boot backend brings together financial rules, authentication and scheduled jobs; the Next.js interface provides dashboards and personal planning views.",
    },
    imagem: Assets.Projects.Finance,
    link: "https://github.com/kaiqueGeraldo/controle-financeiro",
    site: "https://controle-financeiro-kaiquedev.vercel.app",
    tecnologias: [
      {
        nome: ["Java 21", "Spring Boot 4", "Next.js", "PostgreSQL"],
        icone: [
          Assets.Skills.Java,
          Assets.Skills.Spring,
          Assets.Skills.Next,
          Assets.Skills.PostgreSQL,
        ],
        color: ["#E76F00", "#6DB33F", "#e5e7eb", "#336791"],
      },
    ],
    contexto: { "pt-BR": "Projeto pessoal", en: "Personal project" },
    status: { "pt-BR": "Em evolução", en: "Evolving" },
  },
  {
    id: "hbu-gestao-cirurgias",
    nome: "HBU Gestão Cirurgias",
    descricao: {
      "pt-BR":
        "Sistema acadêmico para gestão do fluxo cirúrgico, com agendamento, organização de equipes e salas, acompanhamento de cirurgias e histórico de alterações. Integra backend Java e Spring Boot, PostgreSQL e interface Next.js, com acesso organizado por perfis de usuário.",
      en: "An academic system for managing surgical workflows, including scheduling, team and room organization, surgery tracking and change history. It combines a Java and Spring Boot backend, PostgreSQL and a Next.js interface, with access organized by user roles.",
    },
    imagem: Assets.Projects.HBU,
    link: "https://github.com/kaiqueGeraldo/hbu-gestao-cirurgias",
    site: "https://hbu-gestao-cirurgias.vercel.app",
    tecnologias: [
      {
        nome: ["Java 21", "Spring Boot 4", "Next.js", "PostgreSQL"],
        icone: [
          Assets.Skills.Java,
          Assets.Skills.Spring,
          Assets.Skills.Next,
          Assets.Skills.PostgreSQL,
        ],
        color: ["#E76F00", "#6DB33F", "#e5e7eb", "#336791"],
      },
    ],
    contexto: {
      "pt-BR": "Projeto acadêmico desenvolvido na Unimar",
      en: "Academic project developed at Unimar",
    },
    contribuicao: {
      "pt-BR":
        "Desenvolvimento Full Stack de minha autoria: implementação do frontend e do backend.",
      en: "Full Stack development by me: implementation of the frontend and backend.",
    },
    status: { "pt-BR": "Concluído", en: "Completed" },
  },
  {
    id: "mind-task",
    nome: "MindTask",
    descricao: {
      "pt-BR":
        "Aplicação web full stack para gerenciamento de projetos pessoais com grupos, tarefas em checklist, drag and drop, favoritos e troca de contas vinculadas. Backend estruturado em Node.js com SQL Server (padrão MVC) e autenticação JWT.",
      en: "Full stack web application for managing personal projects with groups, checklist tasks, drag and drop, favorites, and linked account switching. Backend structured in Node.js with SQL Server (MVC pattern) and JWT authentication.",
    },
    imagem: Assets.Projects.MindTask,
    link: "https://github.com/kaiqueGeraldo/mindtask.git",
    site: "https://mindtask-fawn.vercel.app/",
    tecnologias: [
      {
        nome: ["Next JS", "Node JS", "SQL Server"],
        icone: [Assets.Skills.Next, Assets.Skills.Node, Assets.Skills.SQL],
        color: ["#000000", "#83CD29", "#CC2927"],
      },
    ],
    duracao: "30h",
    status: {
      "pt-BR": "Finalizado",
      en: "Completed",
    },
  },
  {
    id: "amazon-scraper",
    nome: "Amazon Scraper",
    descricao: {
      "pt-BR":
        "Aplicação web que permite buscar produtos na Amazon por palavras-chave, exibindo imagem, avaliação e reviews. Scraping realizado via backend Express usando Axios e jsdom. Favoritos persistem no localStorage.",
      en: "Web application that allows searching for products on Amazon by keywords, displaying images, ratings, and reviews. Scraping performed via Express backend using Axios and jsdom. Favorites are persisted in localStorage.",
    },
    imagem: Assets.Projects.Amazon,
    link: "https://github.com/kaiqueGeraldo/amazon-scraper.git",
    site: "https://amazon-scraper-green.vercel.app/",
    tecnologias: [
      {
        nome: ["Next JS", "Node JS"],
        icone: [Assets.Skills.Next, Assets.Skills.Node],
        color: ["#000000", "#83CD29"],
      },
    ],
    duracao: "3h",
    status: {
      "pt-BR": "Finalizado",
      en: "Completed",
    },
  },
  {
    id: "pet-dev",
    nome: "Pet Dev",
    descricao: {
      "pt-BR":
        "Uma plataforma para conectar donos de pets a desenvolvedores de software especializados em soluções para animais de estimação.",
      en: "A platform to connect pet owners with software developers specialized in solutions for companion animals.",
    },
    imagem: Assets.Projects.PetDev,
    link: "https://github.com/kaiqueGeraldo/pet-dev.git",
    site: "https://kaiquegeraldo.github.io/pet-dev/",
    tecnologias: [
      {
        nome: ["Next JS", "Tailwind CSS", "TypeScript"],
        icone: [Assets.Skills.Next, Assets.Skills.Tailwind, Assets.Skills.TS],
        color: ["#000000", "#38BDF8", "#3178C6"],
      },
    ],
    duracao: "2h",
    status: {
      "pt-BR": "Finalizado",
      en: "Completed",
    },
  },
  {
    id: "uber-clone",
    nome: "Uber Clone",
    descricao: {
      "pt-BR":
        "Este aplicativo replica funcionalidades essenciais da Uber, proporcionando uma experiência de corrida segura e eficiente. Passageiros podem solicitar viagens, enquanto motoristas recebem solicitações e navegam até o destino. O Firebase é utilizado para garantir uma integração ágil e confiável entre usuários.",
      en: "This application replicates essential functionalities of Uber, providing a safe and efficient ride experience. Passengers can request rides, while drivers receive requests and navigate to the destination. Firebase is used to ensure agile and reliable integration between users.",
    },
    imagem: Assets.Projects.Uber,
    link: "https://github.com/kaiqueGeraldo/uber.git",
    tecnologias: [
      {
        nome: ["Flutter", "Firebase"],
        icone: [Assets.Skills.Flutter, Assets.Skills.Firebase],
        color: ["#02569B", "#FFCA28"],
      },
    ],
    duracao: "15h",
    status: {
      "pt-BR": "Finalizado",
      en: "Completed",
    },
  },
  {
    id: "olx-clone",
    nome: "OLX Clone",
    descricao: {
      "pt-BR":
        "Este aplicativo recria funcionalidades essenciais da OLX, oferecendo uma experiência intuitiva e eficiente para compra e venda de produtos. Os usuários podem criar anúncios, adicionar itens ao carrinho, simular compras e gerenciar negociações de forma prática. O Firebase garante uma integração ágil e segura entre os usuários, proporcionando uma plataforma confiável para transações.",
      en: "This application recreates essential OLX functionalities, offering an intuitive and efficient experience for buying and selling products. Users can create listings, add items to the cart, simulate purchases, and manage negotiations in a practical way. Firebase ensures agile and secure integration between users, providing a reliable platform for transactions.",
    },
    imagem: Assets.Projects.Olx,
    link: "https://github.com/kaiqueGeraldo/olx.git",
    tecnologias: [
      {
        nome: ["Flutter", "Firebase"],
        icone: [Assets.Skills.Flutter, Assets.Skills.Firebase],
        color: ["#02569B", "#FFCA28"],
      },
    ],
    duracao: "10h",
    status: {
      "pt-BR": "Em Desenvolvimento",
      en: "In Development",
    },
  },
  {
    id: "agita-senai",
    nome: "Agita Senai Cultural",
    descricao: {
      "pt-BR":
        "Este projeto foi desenvolvido para o evento Agita Senai Cultural, com o propósito de representar uma geração. A escolhida pela minha turma foi a Geração Y (Millennials), destacando suas principais características e impacto na sociedade. O design foi pensado exclusivamente para dispositivos móveis.",
      en: "This project was developed for the Agita Senai Cultural event, with the purpose of representing a generation. The chosen generation was Generation Y (Millennials), highlighting their main characteristics and impact on society. The design was thought out exclusively for mobile devices.",
    },
    imagem: Assets.Projects.Agita,
    link: "https://github.com/kaiqueGeraldo/AgitaSenaiCultural.git",
    site: "https://kaiquegeraldo.github.io/AgitaSenaiCultural/caracteristicas",
    tecnologias: [
      {
        nome: ["HTML", "CSS", "JavaScript"],
        icone: [Assets.Skills.HTML, Assets.Skills.CSS, Assets.Skills.JS],
        color: ["#E44D26", "#1572B6", "#F7DF1E"],
      },
    ],
    duracao: "5h",
    status: {
      "pt-BR": "Finalizado",
      en: "Completed",
    },
  },
];
