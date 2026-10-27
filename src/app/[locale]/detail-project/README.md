# Módulo: `src/app/[locale]/detail-project`

> Documentação gerada por análise estática do código real deste diretório, atualizada após a migração de rota (query string → segmento dinâmico) e introdução de i18n. Inferências estão marcadas como **Hipótese**.

## Objetivo do Módulo

Implementar a rota `/detail-project/[id]` (e `/en/detail-project/[id]`), responsável por exibir o detalhe completo de um único projeto do portfólio, agora identificado via **segmento de rota dinâmico**, não mais via query string.

## Responsabilidade Principal

Localizar, a partir do array `projetos` (`data/projects.ts`), o item cujo `id` corresponde ao segmento de rota, pré-renderizar essa página estaticamente para cada combinação idioma × projeto, gerar metadata de SEO/Open Graph específica, e delegar a renderização interativa (abas, animações, compartilhamento) a um Client Component isolado.

## Funcionalidades Existentes

- **`[id]/page.tsx`** (Server Component):
  - `generateStaticParams`: retorna todas as combinações `{ locale, id }` (8 projetos × 2 idiomas = 16 páginas), pré-renderizadas em tempo de build.
  - `generateMetadata`: gera título, descrição e imagem de Open Graph **específicos do projeto e do idioma** — resolve a limitação documentada anteriormente, em que todas as rotas compartilhavam a mesma metadata estática definida no layout.
  - Busca o projeto (`projetos.find(p => p.id === id)`); se não encontrado, chama `notFound()` (convenção nativa do App Router).
  - Se encontrado, renderiza `<ProjectDetailClient projeto={projeto} />`, passando o projeto já resolvido como prop.
- **`[id]/not-found.tsx`** *(novo)*: tela específica de "Projeto não encontrado", usada quando `notFound()` é chamado a partir de `page.tsx` desta mesma pasta — o Next.js prioriza o `not-found.tsx` mais próximo na árvore de segmentos antes de subir para `[locale]/not-found.tsx` (a 404 genérica do site). Traduzido via namespace `ProjectNotFound`, com botão "Voltar" (`router.back()`).
- **`[id]/ProjectDetailClient.tsx`** (Client Component): concentra toda a interatividade que antes vivia num único `page.tsx` monolítico:
  - Sistema de abas (`activeTab`): descrição, tecnologias, detalhes (duração e status), com indicador animado (`layoutId="tab-indicator"`, Framer Motion).
  - Compartilhamento nativo (`navigator.share`), com fallback via `alert()` nativo (ver observações).
  - Botões: "Voltar" (`router.back()`, oculto em mobile), "Compartilhar", "Visitar Site" (condicional a `projeto.site`), "Ver no GitHub".
  - Textos localizados via `useTranslations("ProjectDetails")`.
- **`loading.tsx`**: mesmo padrão de spinner usado em `projects/loading.tsx`.

## Dependências Internas

- `../../../data/projects.ts` (`projetos`) — a busca do projeto agora acontece no Server Component (`page.tsx`), não mais no Client Component.
- `../../../../i18n/routing` (`useRouter`) — navegação localizada.

## Dependências Externas

- `next/navigation` (`notFound`) — usado no Server Component.
- `@phosphor-icons/react/dist/ssr` — **corrigido nesta rodada**: todos os ícones (`GithubLogo`, `ArrowLeft`, `ShareNetwork`, `Globe`) agora vêm consistentemente de `/dist/ssr`. Antes, três desses ícones eram importados do pacote raiz (`@phosphor-icons/react`) enquanto só `Globe` vinha de `/dist/ssr` — inconsistência eliminada como efeito colateral da reescrita desta rota.
- `framer-motion` (`motion`, `AnimatePresence`).
- `next-intl` (`useTranslations`).
- API nativa do navegador: `navigator.share`.

## Módulos Relacionados

- `src/app/data/projects.ts` — fonte de dados e definição do contrato de `id`.
- `src/app/[locale]/projects` e `src/app/_components/projects.tsx` — ambos direcionam navegação para esta rota via `router.push(`/detail-project/${id}`)`.
- `next.config.ts` — contém o `redirects()` que mapeia o formato de URL legado (`?id=`) para o novo formato de segmento (`/id`).

## Pontos de Entrada

Rota Next.js App Router com segmento dinâmico: `/detail-project/<id>` (ou `/en/detail-project/<id>`) — não mais via query string (`?id=`). Acessível a partir de:
- Cards em destaque na Home.
- Cards na listagem completa (`/projects`).
- Acesso direto por URL (compartilhada via `navigator.share`, agora com metadata própria por projeto).
- **Links legados** no formato `?id=<id>`, redirecionados automaticamente (301) para o novo formato pelo `redirects()` de `next.config.ts`.

## Fluxos Importantes

```
GET /detail-project?id=<id>          (link legado)
 → next.config.ts redirects()        (executa ANTES do middleware de locale)
 → 301 → /detail-project/<id>

GET /detail-project/<id>
 → middleware (next-intl) resolve o locale
 → [id]/page.tsx (Server Component)
     → generateStaticParams já pré-gerou esta combinação locale × id no build
     → generateMetadata retorna título/descrição/OG do projeto, no idioma correto
     → projetos.find(p => p.id === id)
        → encontrado      → <ProjectDetailClient projeto={projeto} />
        → não encontrado  → notFound() → [id]/not-found.tsx (tela específica "Projeto não encontrado", já localizada)
```

**Limitação conhecida de plataforma (Next.js App Router):** esta rota tem `loading.tsx` no nível pai (`detail-project/loading.tsx`), o que cria um boundary implícito de streaming para toda a subárvore. A documentação oficial do Next.js confirma que respostas streamadas com `notFound()` retornam HTTP 200, não 404 (testado e confirmado neste projeto via `curl`) — o status correto só é garantido em respostas não-streamadas. O Next.js mitiga automaticamente o impacto de SEO injetando `<meta name="robots" content="noindex">` nessas páginas (confirmado presente). Ver `docs/ARQUITETURA_DO_SISTEMA.md`, seção 6, para o registro completo dessa decisão.

O compartilhamento (`ProjectDetailClient`) usa `window.location.href` como URL a compartilhar, reforçando que a URL de rota (agora limpa, sem query string) é o identificador público do projeto.

## Arquivos Críticos

- **`[id]/page.tsx`** — ponto único de resolução de dados, metadata e SSG; um erro aqui afeta as 16 páginas geradas.
- **`[id]/ProjectDetailClient.tsx`** — concentra toda a lógica de interação.

## Observações Técnicas e Débitos Identificados

1. **Split Server/Client resolve, de graça, o débito anterior de `useSearchParams()` sem `<Suspense>`**: como o `id` agora vem do segmento de rota (resolvido em tempo de build/request no Server Component), não há mais leitura de `useSearchParams()` nesta rota.
2. **`alert()` nativo como fallback de compartilhamento**: ainda não migrado para o padrão `sonner`/toast usado no restante do projeto (ex.: `contactme.tsx`) — débito herdado, não corrigido nesta rodada.
3. **Ausência de `error.tsx`**: continua sem tratamento de erro dedicado via `error.tsx` nesta pasta.
4. Nenhum teste automatizado cobre esta rota, incluindo o caso de "projeto não encontrado" via `notFound()` (Fase 4 do `ROADMAP.md`).
