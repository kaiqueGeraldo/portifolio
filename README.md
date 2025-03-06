# 🎨 Portfólio Pessoal

Este é o meu portfólio desenvolvido com **Next.js**, destacando meus projetos, habilidades e formas de contato. O site consome uma **API de envio de e-mails** para facilitar a comunicação.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para renderização e otimização de páginas.
- **React.js** - Biblioteca para construção da interface do usuário.
- **Tailwind CSS** - Framework para estilização rápida e responsiva.
- **Framer Motion** - Biblioteca para animações fluidas e interativas.
- **Nodemailer** - Utilizado no backend para envio de emails.

## 🌐 Demonstração

Acesse meu portfólio online:
👉 [Meu Portfólio](https://kaiquegeraldo.github.io/portifolio/)

## 📌 Instalação e Execução Local

1. Clone este repositório:

   ```sh
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

## 📬 API de Contato

O portfólio integra uma API para envio de e-mails. O backend desta API está disponível aqui:
👉 [Repositório da API](https://github.com/kaiqueGeraldo/backend-portifolio)

**Como funciona o envio de e-mail?**

O formulário de contato envia os dados preenchidos para a API através de uma requisição POST utilizando fetch. A API está hospedada no Railway e processa o envio do e-mail com nodemailer. Antes de submeter o formulário, há uma validação para garantir que todos os campos estejam preenchidos.

Para configurar o envio de e-mails, defina a URL do servidor e faça o fetch:

```sh
const API_URL = "https://backend-portifolio.up.railway.app/enviar-email";

const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

const data = await res.json();
```

## 🛠️ Estrutura do Projeto

```
/
├── public/                  # Arquivos públicos (imagens, etc.)
├── src/
│   ├── app/                 # Diretório principal do Next.js
│   │   ├── _components/      # Componentes reutilizáveis
│   │   │   ├── about-me.tsx  # Seção "Sobre mim"
│   │   │   ├── contactme.tsx # Formulário de contato
│   │   │   ├── projects.tsx  # Seção de projetos
│   │   │   ├── skills.tsx    # Seção de habilidades
│   │   │   ├── footer.tsx    # Rodapé
│   │   │   ├── hero.tsx      # Seção inicial (hero)
│   │   │   ├── my-journey.tsx # Linha do tempo da minha jornada
│   │   │   ├── final.tsx     # Seção final do portfólio
│   │   │   ├── aos-init.tsx  # Inicialização de animações
│   │   │   ├── smooth-scroll.js # Script para rolagem suave
│   │   ├── data/             # Dados utilizados no portfólio
│   │   │   ├── projects.ts   # Lista de projetos
│   │   ├── projects/         # Páginas de projetos
│   │   │   ├── page.tsx      # Página principal de projetos
│   │   │   ├── loading.tsx   # Componente de carregamento
│   │   ├── detail-project/   # Página de detalhes de um projeto
│   │   │   ├── page.tsx      # Exibição detalhada do projeto
│   │   │   ├── loading.tsx   # Componente de carregamento
│   │   ├── utils/            # Funções utilitárias
│   │   │   ├── floatingMenu.tsx   # Menu flutuante
│   │   │   ├── idade.tsx   # Componente para o calculo da minha idade automática
│   │   │   ├── scrollToTop.tsx   # Componente de scroll para o topo
│   │   ├── layout.tsx        # Layout principal
│   │   ├── not-found.tsx     # Página 404
│   │   ├── page.tsx          # Página principal
│   │   ├── globals.css       # Estilos globais
├── .env.local                # Variáveis de ambiente
├── next.config.js            # Configuração do Next.js
├── package.json              # Dependências do projeto
├── README.md                 # Documentação
```

## ✨ Recursos

- 💡 **Design Moderno** - Interface elegante e responsiva.
- 🎬 **Animações Suaves** - Transições fluidas com Framer Motion.
- 🔗 **Seção de Projetos** - Exibição interativa de trabalhos realizados.
- 📧 **Formulário de Contato** - Integração com API para envio de emails.
- 📱 **Responsivo** - Adaptado para desktop e mobile.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. Sinta-se à vontade para utilizar e modificar conforme necessário. 😊

---

Feito com ❤️ por **Kaique Geraldo** - [LinkedIn](https://www.linkedin.com/in/kaique-geraldo) | [GitHub](https://github.com/kaiqueGeraldo) | [Email](mailto:kaiique2404@gmail.com)
