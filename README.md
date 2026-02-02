

## 🛒 Mini-Ecommerce
Uma aplicação de um mini e-commerce moderno desenvolvida com Next.js, focada em performance, escalabilidade e experiência do usuário.

## ❓Escolha do framework
A escolha do Next.js como framework principal foi baseada nos seguintes pilares:

Static Site Generation para páginas de produtos, garantindo performance extrema.

Roteamento simples e API Routes que facilita a manutenção e a criação de rotas complexas e dinâmicas como por exemplo `/product/[id]`

Otimização de Imagens nativa como o componente `next/image` que gerencia automaticamente o redimensionamento e lazy-loading das fotos dos produtos.

Zero Configurações e suporte nativo a TypeScript, Fast Refresh e TailwindCSS que traz rapidez ao desenvolvimento e reponsividade.

## 📂 Estrutura de Pastas
O projeto segue uma arquitetura modular e escalável:

```

src/
├── app/                # App Router (Rotas, Layouts, Template)
├── components/         # Componentes reutilizáveis (UI, Cart, SideBar)
├── context/            # Gerenciamento de estado ( Context API)
└── provider/           # Funções utilitárias de Toast ( React Toastify )
├── types/              # Definições de interfaces TypeScript
cypress/                # Testes (E2E)
public/                 # Arquivos estáticos (imagens, ícones)

```

## 🛠 Como rodar o projeto localmente
- Siga o passo a passo para rodar o projeto localmente:

  No terminal de sua preferencia faça clone do repositório
  ```
  git clone https://github.com/Roger-dornelles/mini-ecommerce.git
  ```

  Após o clone do projeto navegue até a pasta onde clonou o repositorio e instale as dependencias
  ```
  npm install
  ```

  Após a instalação das dependencias pode rodar o projeto localmente
  ```
  npm run dev
  ```

  Acesse: http://localhost:3000

## Para Rodar a API LOCALMENTE





## 🧠 Decisões Técnicas Relevantes
TypeScript: Adotado para garantir segurança de tipos, reduzindo erros em tempo de execução e melhorando o IntelliSense no editor.

Tailwind CSS: Utilizado para estilização rápida e utilitária, garantindo um design responsivo e com baixo custo de manutenção.

Cypress para E2E: Escolhido pela simulação do fluxo real do usuário EX: adicionar ao carrinho.

Estado Global decidi usar Context API para gerenciar o carrinho, o que o usuario digita na busca permitindo que os dados persistam durante a navegação entre páginas de forma fluida.
