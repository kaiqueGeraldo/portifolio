# Módulo: `src/app/[locale]/projects`

> Documentação gerada por análise estática do código real deste diretório, atualizada após a migração para `[locale]` e a introdução do componente `ProjectCard` único. Inferências estão marcadas como **Hipótese**.

## Objetivo do Módulo

Implementar a rota `/projects` (e `/en/projects`), responsável por exibir a listagem completa de projetos do portfólio.

## Responsabilidade Principal

Renderizar todos os itens de `data/projects.ts` usando o componente `ProjectCard` compartilhado, permitindo navegação para o detalhe de cada projeto (`/detail-project/<id>`) ou acesso direto ao repositório no GitHub.

## Funcionalidades Existentes

- **`page.tsx`** (`ProjectsPage`, Client Component): grade responsiva (`grid-cols-1` / `md:grid-cols-2` / `lg:grid-cols-3`) com todos os itens de `projetos`, renderizados via `<ProjectCard key={item.id} item={item} onDetails={handleDetalhes} />`. Título, subtítulo e botão "Voltar" traduzidos via `useTranslations("ProjectsPage")`.
- **`loading.tsx`**: estado de carregamento exibido automaticamente pelo Next.js durante a transição para esta rota.

## Dependências Internas

- `../../data/projects.ts` (`projetos`).
- `../../_components` (`ProjectCard`, via barrel) — **mudança em relação à versão anterior**: antes esta rota implementava sua própria marcação de card, duplicada em relação à Home; agora consome o mesmo componente usado em `_components/projects.tsx`.
- `../../../i18n/routing` (`useRouter`) — navegação localizada, no lugar de `next/navigation`.

## Dependências Externas

- `@phosphor-icons/react/dist/ssr` (`ArrowLeft`).
- `next-intl` (`useTranslations`).

## Módulos Relacionados

- `src/app/data/projects.ts` — fonte de dados.
- `src/app/[locale]/detail-project/[id]` — destino de navegação do botão "Detalhes".
- `src/app/_components/project-card.tsx` — **agora compartilhado**, não mais duplicado. A duplicação de UI de card apontada na versão anterior deste documento foi eliminada.

## Pontos de Entrada

Rota Next.js App Router: `/projects` ou `/en/projects` (botão "Ver Todos"/"See All" em `_components/projects.tsx`, ou acesso direto por URL).

## Fluxos Importantes

```
Usuário clica "Detalhes"/"Details" em um card
 → handleDetalhes(item.id)
 → router.push(`/detail-project/${item.id}`)   // router localizado, mantém o locale atual
```

O botão "Voltar" usa `router.back()` (navegação de histórico do browser).

## Arquivos Críticos

- **`page.tsx`** — único arquivo funcional da rota; sem `error.tsx` dedicado (comportamento herdado, ainda não corrigido).

## Observações Técnicas e Débitos Identificados

1. **Duplicação de UI de card eliminada**: era o principal débito documentado anteriormente — resolvido com a extração de `ProjectCard`.
2. **Ausência de `error.tsx`**: continua sem tratamento de erro dedicado para esta rota; qualquer exceção não tratada cai no comportamento de erro genérico do Next.js.
3. **Sem paginação/filtro**: inalterado — aceitável para o volume atual (8 itens).
4. Nenhum teste automatizado cobre esta rota (Fase 4 do `ROADMAP.md`).
