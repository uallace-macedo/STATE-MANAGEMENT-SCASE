# 📘 Redux – O Antigo e o Novo Testamento

> Última atualização: 18/04/2025
> Autor: Jonathas Uallace Macedo Santos
> Status: ✅ Concluído

---

## 📝 Notas
Esta documentação explora duas abordagens para Redux:
- **✅ Redux Clássico**: O "Antigo Testamento", com createStore e estrutura tradicional.
- **✅ Redux Toolkit**: O "Novo Testamento", trazendo simplificações modernas.

Cada abordagem gerencia um estado de usuário (login/logout), simulando um sistema de autenticação.

---

## 🔍 Conceitos Essenciais

### 📌 O que é Redux?
- Biblioteca de gerenciamento de estado global.
- Centraliza o estado da aplicação.
- Oferece uma API para leitura e modificação do estado.

### 📌 Principais componentes do Redux:
- **🔹 Redux Provider**: Necessário no topo da aplicação para que os componentes tenham acesso ao estado.
- **🔹 Store**: Onde o estado global é armazenado.
- **🔹 Actions**: Objetos que descrevem eventos e mudanças de estado.
- **🔹 Reducers**: Funções que alteram o estado e geram um **NOVO** estado.

---

## 🔄 Fluxo de Dados (Data Flow)
O fluxo do Redux segue esta sequência:
- **1️⃣ Evento é disparado** na UI e capturado pelo event handler.
- 2️⃣ O event handler dispara uma **Action** e a envia para a Store.
- 3️⃣ A Store encaminha a Action para o **Reducer**, que verifica também o estado atual.
- 4️⃣ O Reducer **gera um novo estado**, que é retornado e refletido na UI.

---

## 📂 Estrutura de Pastas
- **Redux Clássico (Antigo Testamento)**
  ```bash
  redux/
  ├── specific-redux/
  │   ├── reducer.js
  │   ├── actions.js
  │   └── actions-types.js
  ├── other-specific-redux/
  │   ├── reducer.js
  │   ├── actions.js
  │   └── actions-types.js
  ├── rootReducer.js
  └── store.js
  ```

- **Redux Toolkit (Novo Testamento)**
  ```bash
  redux/
  ├── specific-redux/
  │   ├── slice.js
  ├── other-specific-redux/
  │   ├── slice.js
  ├── rootReducer.js
  └── store.js
  ```

---

## 🛠️ Código Boilerplate

### 🔹 Configuração da Store

- **Redux Clássico (Antigo Testamento)**
  ```js
  import { createStore } from 'redux';
  import rootReducer from './rootReducer';

  const storeOld = createStore(rootReducer);
  export default storeOld;
  ```

- **Redux Toolkit (Novo Testamento)**
  ```js
  import { configureStore } from '@reduxjs/toolkit';
  import specificReducer from './specific-redux/reducer';

  const storeNew = configureStore({
    reducer: {
      specific: specificReducer
    }
  });

  export default storeNew;
  ```

### 🔹 Configuração do RootReducer
```js
import { combineReducers } from 'redux';
import specificReducer from './specific-redux/reducer';

const rootReducer = combineReducers({
  specific: specificReducer,
  // outros reducers podem ser adicionados aqui
});

export default rootReducer;
```

### Definição de Action Types (Exclusivo para Redux Clássico)
```js
export const FETCH_DATA_REQUEST = 'specific/FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'specific/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'specific/FETCH_DATA_FAILURE';
```

### 🔹 Criação de Actions
- **Redux Clássico (Antigo Testamento)**
As ações devem ser criadas manualmente, retornando um objeto com `type` e `payload`.
  ```js
  import * as types from './actions-types';

  export const fetchDataRequest = () => ({
    type: types.FETCH_DATA_REQUEST,
  });

  export const fetchDataSuccess = (data) => ({
    type: types.FETCH_DATA_SUCCESS,
    payload: data,
  });

  export const fetchDataFailure = (error) => ({
    type: types.FETCH_DATA_FAILURE,
    payload: error,
  });
  ```

- **Redux Toolkit (Novo Testamento)**
Com `createSlice()`, as ações são geradas automaticamente a partir dos reducers.
  ```js
  import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  const specificSlice = createSlice({
    name: 'specific',
    initialState,
    reducers: {
      fetchDataRequest(state) {
        state.loading = true;
        state.error = null;
      },
      fetchDataSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
      },
      fetchDataFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      }
    }
  });

  export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = specificSlice.actions;
  export default specificSlice.reducer;
  ```

### 🔹 Implementação do Reducer
- **Redux Clássico (Antigo Testamento)**
No Redux tradicional, o reducer precisa gerenciar manualmente as alterações de estado.
  ```js
  import * as types from './actions-types';

  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  function specificReducer(state = initialState, action) {
    switch (action.type) {
      case types.FETCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case types.FETCH_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case types.FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }

  export default specificReducer;
  ```

- **Redux Toolkit (Novo Testamento)**
Aqui, o reducer já está integrado ao slice e manipula o estado diretamente. **Não há necessidade** de `switch` statements!
  ```js
  export default specificSlice.reducer;
  ```

---

## ✅ Resumo

### 🔥 Redux Clássico vs Redux Toolkit
O Redux Toolkit é uma versão moderna que reduz código boilerplate, tornando a manipulação de estado mais eficiente.

### 🚀 Redux em ação
- **Redux Clássico** usa `createStore()` e Actions separadas.
- **Redux Toolkit** usa `configureStore()` e `createSlice()` para agrupar estado, ações e reducers em um só lugar.