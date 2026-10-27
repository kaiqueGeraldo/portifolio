import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
  {
    rules: {
      // Regra voltada para adoção do React Compiler (ainda não usado neste
      // projeto). O padrão "setState após useEffect no mount" para valores
      // só-de-cliente (ex.: window.innerHeight, guarda de hidratação SSR)
      // é idiomático e documentado pelo próprio React; mantido como aviso,
      // não erro, até o projeto avaliar a adoção do React Compiler.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
