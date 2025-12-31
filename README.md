# 👨‍💻 Portfólio Profissional | Kaique Geraldo

> **Engenharia de Software • Java • Full Stack**

Bem-vindo ao repositório do meu portfólio oficial. Este projeto foi arquitetado para demonstrar não apenas meus projetos e habilidades, mas também meu domínio sobre **engenharia de frontend moderna**, performance e boas práticas de desenvolvimento.

O projeto foi atualizado recentemente para **Next.js 16**, garantindo segurança e uso das features mais recentes do React Server Components.

## 🚀 Stack Tecnológica

O projeto utiliza uma arquitetura robusta e tipada:

### **Core & Arquitetura**
- **Next.js 16**
- **React 19**
- **TypeScript**

### **Estilização & UI**
- **Tailwind CSS**
- **Framer Motion**
- **React Portal** 

### **Formulários & Validação**
- **React Hook Form**
- **Zod**
- **Sonner**

### **Utils & Bibliotecas**
- **Embla Carousel**
- **Lucide React / Phosphor Icons**
- **AOS**

---

## 🌐 Demonstração

Acesse a versão de produção:
👉 [Meu Portfólio](https://kaique.dev.br/)

---

## 🛠️ Destaques Técnicos do Projeto

Além do visual, este portfólio implementa soluções técnicas avançadas:

1.  **Modal com React Portal:** O formulário de contato utiliza `createPortal` para renderizar o overlay diretamente no `document.body`, evitando problemas de empilhamento de contexto e garantindo acessibilidade e cobertura total da tela.
2.  **Scroll Chaining Prevention:** Componentes com rolagem interna possuem travas (`overscroll-y-contain`) e controle de eventos (`stopPropagation`) para impedir que a rolagem afete a página principal, melhorando a UX.
3.  **Arquitetura de Dados:** Separação clara entre UI e Dados (`src/app/data`), facilitando a manutenção e escalabilidade das informações.
4.  **Validação de E-mail:** O formulário de contato possui validação em tempo real com **Zod**, garantindo que apenas dados sanitizados cheguem à API.
5.  **Identidade Full Stack:** A seção de habilidades foi estrategicamente organizada para refletir um perfil focado em **Java/Spring Boot** e **Angular/React**, alinhado às demandas do mercado corporativo.

---

## 📌 Instalação e Execução Local

1. Clone este repositório:
   ```bash
   git clone https://github.com/kaiqueGeraldo/portfolio.git
   ```

2. Acesse o diretório do projeto:

   ```sh
   cd portfolio
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

5. Acesse **http://localhost:3000** no navegador.

## 📬 Integração Backend (Email API)

Este frontend se comunica com uma API Backend dedicada para o envio seguro de e-mails.
- [Repositório da API](https://github.com/kaiqueGeraldo/backend-portifolio)
- Tecnologias: Node.js, Express, Resend
- Fluxo: O formulário valida os dados no cliente -> Envia POST para a API -> API processa via SMTP -> Retorna feedback visual para o usuário.

## 📂 Estrutura de Pastas

A estrutura segue o padrão do Next.js App Router:

```
src/
├── app/
│   ├── _components/      # Componentes isolados
│   ├── data/             # Fonte da verdade dos dados
│   ├── projects/         # Rotas de listagem de projetos
│   ├── utils/            # Hooks e funções auxiliares
│   ├── layout.tsx        # Layout global
│   └── page.tsx          # Home Page
├── assets/               # Gerenciador de imports de imagens/ícones
└── styles/               # Configurações globais de CSS
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. Sinta-se à vontade para usar como inspiração ou template.

---

Feito por **Kaique Geraldo** - [LinkedIn](https://www.linkedin.com/in/kaique-geraldo) | [GitHub](https://github.com/kaiqueGeraldo) | [Email](mailto:kaiique2404@gmail.com)
