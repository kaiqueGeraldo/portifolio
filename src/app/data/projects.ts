import uberLogo from "../../../public/img-projects/uber.webp";
import mindtaskLogo from "../../../public/img-projects/mind-task2.webp";
import amazonLogo from "../../../public/img-projects/amazon.webp";
import petDevLogo from "../../../public/img-projects/pet-dev.webp";
import campusSyncLogo from "../../../public/img-projects/campussync.webp";
import senaiLogo from "../../../public/img-instituicoes/senai.webp";
import olxLogo from "../../../public/img-projects/olx.webp";
import flutter from "../../../public/img-skills/flutter.webp";
import firebase from "../../../public/img-skills/firebase.webp";
import csharp from "../../../public/img-skills/csharp.webp";
import net from "../../../public/img-skills/net.webp";
import sqlServer from "../../../public/img-skills/sql_server.webp";
import javascript from "../../../public/img-skills/javascript.webp";
import html from "../../../public/img-skills/html.webp";
import css from "../../../public/img-skills/css.webp";
import nextJs from "../../../public/img-skills/nextjs.webp";
import nodeJs from "../../../public/img-skills/nodeJs.webp";
import typescript from "../../../public/img-skills/typescript.webp";
import tailwind from "../../../public/img-skills/tailwind.webp";

export const projetos = [
  {
    id: "uber-clone",
    nome: "Uber Clone",
    descricao:
      "Este aplicativo replica funcionalidades essenciais da Uber, proporcionando uma experiência de corrida segura e eficiente. Passageiros podem solicitar viagens, enquanto motoristas recebem solicitações e navegam até o destino. O Firebase é utilizado para garantir uma integração ágil e confiável entre usuários.",
    imagem: uberLogo,
    link: "https://github.com/kaiqueGeraldo/uber.git",
    tecnologias: [
      {
        nome: ["Flutter", "Firebase"],
        icone: [flutter, firebase],
        color: ["#02569B", "#FFCA28"],
      },
    ],
    duracao: "15h",
    status: "Finalizado",
  },
  {
    id: "mind-task",
    nome: "MindTask",
    descricao:
      "Aplicação web full stack para gerenciamento de projetos pessoais com grupos, tarefas em checklist, drag and drop, favoritos e troca de contas vinculadas. Backend estruturado em Node.js com SQL Server (padrão MVC) e autenticação JWT.",
    imagem: mindtaskLogo,
    link: "https://github.com/kaiqueGeraldo/mindtask.git",
    site: "https://mindtask-fawn.vercel.app/",
    tecnologias: [
      {
        nome: ["Next JS", "Node JS", "SQL Server"],
        icone: [nextJs, nodeJs, sqlServer],
        color: ["#000000", "#83CD29", "#CC2927"],
      },
    ],
    duracao: "30h",
    status: "Finalizado",
  },
  {
    id: "amazon-scraper",
    nome: "Amazon Scraper",
    descricao:
      "Aplicação web que permite buscar produtos na Amazon por palavras-chave, exibindo imagem, avaliação e reviews. Scraping realizado via backend Express usando Axios e jsdom. Favoritos persistem no localStorage.",
    imagem: amazonLogo,
    link: "https://github.com/kaiqueGeraldo/amazon-scraper.git",
    site: "https://amazon-scraper-green.vercel.app/",
    tecnologias: [
      {
        nome: ["Next JS", "Node JS"],
        icone: [nextJs, nodeJs],
        color: ["#000000", "#83CD29"],
      },
    ],
    duracao: "3h",
    status: "Finalizado",
  },
  {
    id: "pet-dev",
    nome: "Pet Dev",
    descricao:
      "Uma plataforma para conectar donos de pets a desenvolvedores de software especializados em soluções para animais de estimação.",
    imagem: petDevLogo,
    link: "https://github.com/kaiqueGeraldo/pet-dev.git",
    site: "https://kaiquegeraldo.github.io/pet-dev/",
    tecnologias: [
      {
        nome: ["Next JS", "Tailwind CSS", "TypeScript"],
        icone: [nextJs, tailwind, typescript],
        color: ["#000000", "#38BDF8", "#3178C6"],
      },
    ],
    duracao: "2h",
    status: "Finalizado",
  },
  {
    id: "campus-sync-api",
    nome: "CampusSync - API",
    descricao:
      "A API CampusSync fornece funcionalidades para gerenciar faculdades, cursos, alunos, professores, turmas e matrículas. A API é projetada para ser consumida pelo aplicativo CampusSync em Flutter e pode ser utilizada para operações CRUD (Criar, Ler, Atualizar, Deletar) nas entidades do sistema.",
    imagem: campusSyncLogo,
    link: "https://github.com/kaiqueGeraldo/campus_sync.git",
    tecnologias: [
      {
        nome: ["C#", ".NET Framework", ".NET Core", "SQL Server"],
        icone: [csharp, net, net, sqlServer],
        color: ["#9B4F96", "#512BD4", "#512BD4", "#CC2927"],
      },
    ],
    duracao: "30h",
    status: "Finalizado",
  },
  {
    id: "campus-sync",
    nome: "CampusSync",
    descricao:
      "CampusSync é um aplicativo para facilitar a gestão de universidades, oferecendo funcionalidades como cadastro de faculdades, cursos, turmas e muito mais.",
    imagem: campusSyncLogo,
    link: "https://github.com/kaiqueGeraldo/campus_sync.git",
    tecnologias: [
      {
        nome: ["Flutter"],
        icone: [flutter],
        color: ["#02569B"],
      },
    ],
    duracao: "15h",
    status: "Finalizado",
  },
  {
    id: "olx-clone",
    nome: "OLX Clone",
    descricao:
      "Este aplicativo recria funcionalidades essenciais da OLX, oferecendo uma experiência intuitiva e eficiente para compra e venda de produtos. Os usuários podem criar anúncios, adicionar itens ao carrinho, simular compras e gerenciar negociações de forma prática. O Firebase garante uma integração ágil e segura entre os usuários, proporcionando uma plataforma confiável para transações.",
    imagem: olxLogo,
    link: "https://github.com/kaiqueGeraldo/olx.git",
    tecnologias: [
      {
        nome: ["Flutter", "Firebase"],
        icone: [flutter, firebase],
        color: ["#02569B", "#FFCA28"],
      },
    ],
    duracao: "10h",
    status: "Em Desenvolvimento",
  },
  {
    id: "agita-senai",
    nome: "Agita Senai Cultural",
    descricao:
      "Este projeto foi desenvolvido para o evento Agita Senai Cultural, com o propósito de representar uma geração. A escolhida pela minha turma foi a Geração Y (Millennials), destacando suas principais características e impacto na sociedade. Como a apresentação foi feita por meio de um cartaz, adicionamos um QR Code que direcionava para o site do projeto. Por isso, o design foi pensado exclusivamente para dispositivos móveis, tornando a experiência mais dinâmica e acessível.",
    imagem: senaiLogo,
    link: "https://github.com/kaiqueGeraldo/AgitaSenaiCultural.git",
    site: "https://kaiquegeraldo.github.io/AgitaSenaiCultural/caracteristicas",
    tecnologias: [
      {
        nome: ["HTML", "CSS", "JavaScript"],
        icone: [html, css, javascript],
        color: ["#E44D26", "#1572B6", "#F7DF1E"],
      },
    ],
    duracao: "5h",
    status: "Finalizado",
  },
  // Adicione mais projetos aqui
];
