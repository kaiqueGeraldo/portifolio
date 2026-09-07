# Módulo: `src/i18n`

> Documentação gerada por análise estática do código real deste diretório. Módulo novo, introduzido na Fase 3 do `ROADMAP.md` (internacionalização) — não existia versão anterior deste documento.

## Objetivo do Módulo

Centralizar toda a configuração de internacionalização (`next-intl`) usada pelo `middleware.ts`, pelo `[locale]/layout.tsx` e pelos componentes que precisam de navegação ciente de idioma (`Link`, `useRouter`).

## Responsabilidade Principal

Definir a lista de idiomas suportados, o idioma padrão, a estratégia de prefixo de URL, e a forma como as mensagens de tradução (`messages/*.json`) são carregadas por requisição.

## Funcionalidades Existentes

| Arquivo | Export | Responsabilidade |
|---|---|---|
| `routing.ts` | `routing` (via `defineRouting`) | Define `locales: ["pt-BR", "en"]`, `defaultLocale: "pt-BR"`, `localePrefix: "as-needed"` (idioma padrão invisível na URL, `en` prefixado como `/en`). Também exporta `Link`, `redirect`, `usePathname`, `useRouter` já tipados e cientes do locale, via `createNavigation(routing)`. |
| `request.ts` | `default` (via `getRequestConfig`) | Resolve o locale da requisição atual (`requestLocale`); se ausente ou inválido, cai para `routing.defaultLocale`. Carrega dinamicamente `messages/{locale}.json` correspondente. |

## Dependências Internas

- `../../messages/{locale}.json` — carregado dinamicamente por `request.ts`.

## Dependências Externas

- `next-intl` (`defineRouting`, `createNavigation`, `getRequestConfig`).
- `next-intl/plugin` (usado em `next.config.ts`, fora deste módulo, para injetar a configuração no build do Next.js).

## Módulos Relacionados

- `src/proxy.ts` — consome `routing` para resolver/redirecionar o locale em cada requisição.
- `src/app/[locale]/layout.tsx` — consome `routing` (`generateStaticParams`) e a configuração de `request.ts` (indiretamente, via `NextIntlClientProvider`/`getMessages`).
- Praticamente todos os componentes de `_components/` e todas as rotas sob `[locale]/` — consomem `Link`/`useRouter` deste módulo em vez de `next/link`/`next/navigation`, para que a navegação preserve o idioma atual.

## Pontos de Entrada

`import { routing } from "@/i18n/routing"` (ou caminho relativo `../i18n/routing`), `import { Link, useRouter } from "../i18n/routing"`.

## Fluxos Importantes

```
Requisição chega
 → src/proxy.ts usa `routing` para decidir: manter pt-BR sem prefixo, ou exigir/adicionar /en
 → src/i18n/request.ts resolve o locale final e carrega messages/{locale}.json
 → NextIntlClientProvider (em [locale]/layout.tsx) disponibiliza essas mensagens para os Client Components via useTranslations()
```

## Arquivos Críticos

- **`routing.ts`** — qualquer alteração na lista de `locales` ou no `defaultLocale` propaga-se para o middleware, para o `generateStaticParams` do layout raiz e para toda a navegação localizada do site. Alto raio de explosão para um módulo pequeno.

## Observações Técnicas e Débitos Identificados

1. **Convenção `middleware.ts` deprecated no Next.js 16.1.1**: o build emite `⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.` — gerado pela integração do `next-intl` com o App Router. Não quebra nada hoje, mas é uma migração a acompanhar (depende de uma atualização do `next-intl` para adotar a nova convenção `proxy`, ou de uma migração manual futura).
2. Nenhum teste automatizado cobre a resolução de locale (`request.ts`) nem os redirecionamentos do `middleware.ts` (Fase 4 do `ROADMAP.md`).
