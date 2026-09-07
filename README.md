# Portfólio — Kaique Geraldo

Portfólio em Next.js 16, React 19 e TypeScript. Português em `/` e inglês em `/en`, com `next-intl`. Identidade grafite/lilás, Tailwind CSS, Framer Motion, Lenis e entradas progressivas via Web Animations API.

## Executar

Use Node.js 24 e npm:

```sh
npm ci
npm run dev
```

Configure `NEXT_PUBLIC_API_URL` em `.env.local` com a URL completa do endpoint do formulário. O backend é mantido em outro projeto. Não inclua credenciais ou arquivos de ambiente no Git.

- `npm run build`: build de produção e TypeScript.
- `npm run start`: inicia o build de produção.
- `npm run lint`: ESLint.
- `npm test`: testes do catálogo e da seleção de projetos.

O GitHub Actions executa instalação, build, lint e testes. A publicação é feita pela integração Git da Vercel.

## Organização

```text
src/
  app/
    [locale]/                 Rotas, layouts e metadados localizados
      detail-project/[id]/    Página, interface e CSS exclusivos do detalhe
      projects/               Catálogo completo
    _components/
      hero/                   Hero, navegação inicial, arte e diálogo de contato
      about-me/               Apresentação pessoal
      skills/                 Seção de habilidades e carrossel
      projects/               Destaques e ProjectCard reutilizado no catálogo
      journey/                Jornada e card com inclinação 3D
      contact/                Formulário, rodapé e composição da sobreposição
      shared/
        navigation/           Menu flutuante, idiomas e voltar ao topo
        motion/               Entradas e integração do scroll com Lenis
        technology-card/      Card e CSS usados em habilidades e detalhes
    data/                     Projetos, habilidades, jornada, navegação e SEO
    sitemap.ts / robots.ts    Recursos de indexação
  assets/index.ts             Caminhos dos assets usados pela aplicação
  i18n/                       Configuração de idiomas e navegação
messages/                     Textos em pt-BR e en
public/                       Imagens, fontes e currículos publicados
scripts/generate-cv.py        Geração dos currículos PT/EN
```

Componentes e CSS específicos ficam juntos. Imports dentro da mesma pasta são relativos; imports entre seções usam `@/`. As páginas importam seus componentes diretamente, sem um arquivo central de reexports que misture componentes de servidor e cliente.

Não crie uma pasta compartilhada para um componente usado em apenas uma seção. Os detalhes permanecem junto da rota porque não são usados na Home. Dados editoriais e traduções ficam separados da apresentação.

## Conteúdo e assets

- Projetos e sua ordem: `src/app/data/projects.ts`; destaques: `featured-projects.ts`.
- Experiência e formação: `src/app/data/journey.ts`.
- Textos: `messages/pt-BR.json` e `messages/en.json`.
- Capas SVG são fontes editáveis dos WebPs: preserve os dois formatos quando atualizar uma capa.
- Imagens de compartilhamento usam fontes SVG e PNGs PT/EN. `public/og-image.webp` é mantida para compatibilidade com a URL anterior.
- Flutter, Firebase e Tailwind ainda aparecem em projetos do catálogo; seus ícones continuam necessários.
- Licença dos ícones Devicon: `public/img-skills/DEVICON-LICENSE.txt`.

## Currículos

O gerador usa Python com `reportlab` e `pypdf` e as fontes Calibri do Windows. Execute a partir do repositório:

```sh
python scripts/generate-cv.py
```

O script gera os dois PDFs em `output/pdf/`, verifica a extração de texto e a paginação e atualiza `public/curriculo/`, usado pelos downloads. Renderize e confira visualmente os PDFs após alterar seu conteúdo. `output/` e `tmp/` são arquivos locais ignorados pelo Git; os PDFs publicados ficam em `public/curriculo/`.

## Comportamentos a preservar

- HTML legível sem JavaScript; animações respeitam movimento reduzido e foco de teclado.
- Diálogo nativo de contato bloqueia scroll nativo e Lenis; formulário usa React Hook Form e Zod.
- Catálogo retorna à Home; detalhes retornam ao catálogo, sem depender do histórico do navegador.
- Metadados por idioma/projeto, sitemap e 404/noindex para projetos inexistentes.
- Contato ocupa pelo menos uma viewport, podendo crescer no mobile; o rodapé é revelado por sobreposição com fallback acessível.
