# Hospedado na vercel
- LINK

 
  https://mini-ecommerce-dwcgrtp1x-rogerdornelles-projects.vercel.app/


## 🚨 API => Hospedado no Render 🚨
  
⚠️ Quando for visualizar o Site aguardar a resposta da API pois o servidor do render fica em modo ociloso e demora em torno de 40s para retornar a primeira requisição


## 🛒 Mini-Ecommerce
Uma aplicação de um mini e-commerce moderno desenvolvida com Next.js, focada em performance, escalabilidade e experiência do usuário.

## ❓Escolha do framework
A escolha do Next.js como framework principal foi baseada nos seguintes pilares:

Static Site Generation para páginas de produtos, garantindo performance extrema.

Roteamento simples e API Routes que facilita a manutenção e a criação de rotas complexas e dinâmicas como por exemplo `/product/[id]`

Otimização de Imagens nativa como o componente `next/image` que gerencia automaticamente o redimensionamento e lazy-loading das fotos dos produtos.

Zero Configurações e suporte nativo a TypeScript, Fast Refresh e TailwindCSS que traz rapidez ao desenvolvimento e reponsividade.



## 📓 Tecnologias usadas

- NextJs
- Tailwind CSS
- Json Server
- React Toastify
- Framer Motion
- Cypress

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

  

## Para Rodar a API LOCALMENTE ( JSON SERVER )
### USAR OUTRO TERMINAL ( ABA ) POIS SÂO COMANDOS DIFERENTES PARA RODAR OS PROJETOS
- Siga o passo a passo para rodar um servidor para simular o backend.

  Passo a passo para configurar e rodar ele localmente:
  
  No terminal da sua preferencia navegue até a pasta onde foi feito o clone do projeto

  Faça a instalação da dependencia
  ```
  npm install json-server
  ```

  Após a instalação pode rodar o servidor para ter acesso aos dados da api que esta sendo usado no projeto.

  ```
  npm run server
  ```
- Para testar se a API esta rodando corretamente acesse [http://localhost:3333/products](http://localhost:3333/products)
- Se a api estiver rodando corretamente deve abrir no navegador os dados que estão em

   [DADOS DA API](https://github.com/Roger-dornelles/mini-ecommerce/blob/main/db.json)
  


  
## Para rodar os testes do Cypress

- Siga o passo a passo pois tem duas opções principais:

- O Modo Interativo (com interface visual) e o Modo Headless (via terminal).

- Modo Interativo (Interface Visual)
  - Em outro terminal ( ABA ) execute o comando
 
  ```
  npm run cypress:open
  ```

  - Uma janela abrirá e selecione E2E Testing.

  - Escolha um navegador (Chrome, Edge ou Electron), de preferencia ao Electron

  - Clique no arquivo do teste que queira executar para começar a execução.

- Modo Headless (Apenas Terminal)
  -  É mais rápido a execução e é usado para verificar se tudo está passando sem a necessidade abrir janelas e escolher qual navegador vai rodar.
  - Em outro terminal ( ABA ) execute o comando

  ```
  npm run cypress:run
  ```
  


## 🧠 Decisões Técnicas Relevantes
TypeScript: Adotado para garantir segurança de tipos, reduzindo erros em tempo de execução e melhorando o IntelliSense no editor.

Tailwind CSS: Utilizado para estilização rápida e utilitária, garantindo um design responsivo e com baixo custo de manutenção.

Cypress para E2E: Escolhido pela simulação do fluxo real do usuário EX: adicionar ao carrinho.

Estado Global decidi usar Context API para gerenciar o carrinho, o que o usuario digita na busca permitindo que os dados persistam durante a navegação entre páginas de forma fluida.


# 💡 Dica de Fluxo de Trabalho
Quando estiver testando, mantenha três terminais abertos:

Terminal 1: npm run dev ( Projeto ).

Terminal 2: npm run server ( JSON Server ).

Terminal 3: npm run cypress:open ( Rodar os testes ).
