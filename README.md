# 📋 Tarefas Next.js

Aplicação de listagem e gerenciamento de tarefas desenvolvida com **Next.js 15**, **TypeScript** e **testes unitários**. O projeto foi criado como atividade prática para colocar em prática os conceitos de testes unitários com foco em componentes reutilizáveis, Server Components e hooks personalizados usando o modelo App Router.

---

## 🚀 Funcionalidades

-  Lista de tarefas carregadas de um arquivo simulado
-  Adiciona novas tarefas via formulário controlado
-  Concluir e reabrir tarefas
-  Excluir tarefas
-  Contador de tarefas com hook personalizado
-  Alternar entre tema claro e escuro com persistência no localStorage

---

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/) — Framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática
- [SASS](https://sass-lang.com/) — Estilização com CSS Modules e mobile first
- [Jest](https://jestjs.io/) — Framework de testes
- [Testing Library](https://testing-library.com/) — Utilitários para testes de componentes React

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/loganpedace/tarefas-nextjs.git
cd tarefas-nextjs
npm install
```

---

## ▶️ Executar o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🧪 Executar os testes

Rode todos os testes uma vez:

```bash
npm test
```

Rode os testes em modo watch (re-executa ao salvar):

```bash
npm run test:watch
```

---

## 📁 Estrutura do Projeto

```
tarefas-nextjs/
├── app/
│   ├── page.tsx               # Server Component que carrega as tarefas
│   ├── layout.tsx             # Layout global da aplicação
│   └── globals.scss           # Estilos globais e variáveis de tema
├── components/
│   ├── BotaoTema/             # Botão para alternar tema claro/escuro
│   ├── ListaDeTarefas/        # Componente que gerencia e exibe a lista
│   └── NovaTarefa/            # Formulário para adicionar novas tarefas
├── hooks/
│   ├── useContadorDeTarefas.ts  # Hook que retorna o número de tarefas
│   └── useTema.ts               # Hook que gerencia o tema com localStorage
├── lib/
│   └── tarefas.ts             # Dados simulados (mock de API)
└── __tests__/
    ├── page.test.tsx
    ├── NovaTarefa.test.tsx
    ├── ListaDeTarefas.test.tsx
    ├── BotaoTema.test.tsx
    ├── useContadorDeTarefas.test.ts
    └── useTema.test.ts
```

---

## 🧩 Arquitetura

- **Server Component** — `app/page.tsx` carrega as tarefas no servidor usando `async/await`
- **Client Components** — `NovaTarefa`, `ListaDeTarefas` e `BotaoTema` usam `useState` e interatividade no cliente
- **Hooks personalizados** — `useContadorDeTarefas` e `useTema` encapsulam lógica reutilizável
- **Dados simulados** — `lib/tarefas.ts` simula uma API com `Promise.resolve()`

---

## 📊 Cobertura de Testes

| Arquivo | Statements | Branches | Functions | Lines |
|---|---|---|---|---|
| app/page.tsx | 100% | 100% | 100% | 100% |
| components/NovaTarefa | 100% | 100% | 100% | 100% |
| components/ListaDeTarefas | 100% | 94% | 100% | 100% |
| components/BotaoTema | 100% | 100% | 100% | 100% |
| hooks/useContadorDeTarefas | 100% | 100% | 100% | 100% |
| hooks/useTema | 100% | 88% | 100% | 100% |
| lib/tarefas.ts | 100% | 100% | 100% | 100% |
