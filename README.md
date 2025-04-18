# 📘 StateManagementSCase

> Explorando e descobrindo as ferramentas: Redux, ContextAPI e Zustand.

---

## ✍️ Sobre o Projeto

Esse repositório é um caso de estudo, sobre diferentes abordagens de **gerenciamento de estado em aplicações React**. A ideia é entender, comparar e aplicar na prática soluções com **Redux**, **ContextAPI** e **Zustand**, documentando insights, desafios e aprendizados ao longo da trajetória.

Cada abordagem tem sua própria pasta no repositório, com um `DIARIO.md` exclusivo para anotar detalhes específicos de implementação, decisões, vantagens e dificuldades encontradas.

O projeto não tem pressa para acabar, crescerá conforme estudo.

---

## 📅 Progresso

Abaixo, registro meu progresso e observações gerais, antes de entrar nos detalhes de cada tecnologia:

### 🔹 Redux
> _Status: Finalizado_

🚀 Considerações:
- O **Redux Tradicional** exige mais configuração manual, com `createStore()`, `combineReducers()`, ações separadas e um controle mais rigoroso da imutabilidade do estado (`spread operator`), o que gera mais código boilerplate. Já o **Redux Toolkit** simplifica tudo com `createSlice()`, que une estado, ações e reducers em um só lugar, além de usar o `configureStore()` para criar a Store sem precisar do `combineReducers()`. Ele também **facilita a manipulação do estado** com `Immer`, permitindo modificar diretamente o state **sem necessidade de** `spread operator`. No geral, **Redux Toolkit mantém a estrutura do Redux**, mas *reduz complexidade e repetição*, tornando o gerenciamento de estado **mais eficiente e intuitivo**.

### 🔹 ContextAPI
> _Status: Ainda não iniciado_

### 🔹 Zustand
> _Status: Ainda não iniciado_

---

## 🎯 Objetivo Final

O objetivo desse projeto é:

- Entender na prática as vantagens e desvantagens de cada abordagem
- Ter pequenos exemplos funcionando com cada solução
- Criar uma base de comparação real para projetos futuros
- Documentar o processo como forma de estudo e referência futura

---

## 📌 Notas Finais

- Cada pasta é um universo à parte, e os `DIARIO.md` vão conter os detalhes técnicos e experiências pessoais com aquela tecnologia.
- Esse README vai sendo atualizado à medida que o projeto cresce. Ele é o índice geral da jornada. 🚀