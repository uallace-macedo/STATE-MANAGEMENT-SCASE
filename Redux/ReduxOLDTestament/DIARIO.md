# 📘 Diário de Bordo – REDUX OLDSchool

> Última atualização: 18/04/2025
> Autor: Jonathas Uallace Macedo Santos
> Status: ✅ Concluído

---

## 🏗️ Instalação das dependências
```bash
# com npm
npm install redux react-redux
# com yarn
yarn add redux react-redux
```

---

### 📌 1. Configuração do Store
A store centraliza o gerenciamento de estado da aplicação, combinando múltiplos reducers.
```js
import { createStore } from 'redux';
import rootReducer from './rootReducer.js';

const store = createStore(rootReducer);
export default store;
```

### 🔄 2. Root Reducer
Une todos os reducers da aplicação, permitindo uma estrutura modular e organizada.
```js
import { combineReducers } from 'redux';
import userReducer from './user/reducer.js';

const rootReducer = combineReducers({ userReducer });
export default rootReducer;
```

### 🔥 3. Definição das Actions
As ações permitem a alteração do estado global da aplicação.
```js
import UserActionTypes from "./action-types"

export const loginUser = (payload) => {
    return { type: UserActionTypes.LOGIN, payload }
}

export const logoutUser = () => {
    return { type: UserActionTypes.LOGOUT }
}
```

### 🗃️ 4. Reducer do Usuário
Os reducers determinam como o estado será alterado com base nas ações despachadas.
```js
import UserActionTypes from './action-types';

const initialState = {
    currentUser: {
        name: '-',
        lastname: '-'
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case UserActionTypes.LOGIN: 
            return { ...state, currentUser: action.payload };
        case UserActionTypes.LOGOUT: 
            return { ...state, currentUser: { name: '-', lastname: '-' }};
        default:
            return state;
    }
}

export default userReducer;

```

### 🏗️ 5. Estruturando o Provider (main.jsx)
O `Provider` é essencial para permitir o acesso ao Redux em toda a aplicação.
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
```

### 🎯 6. Criando um Componente com Redux `(App.jsx)`
Nesse arquivo são utilizados o `useSelector` para acessar o estado global e `useDispatch` para enviar ações de login/logout.

---

## ✅ Resumo
Este projeto implementa Redux sem Toolkit para gerenciar o estado do usuário globalmente.

### 🔑 Principais conceitos abordados:
- Store: Configura o estado global.
- Reducers: Manipulam as mudanças de estado.
- Actions: Definem quais alterações o estado pode sofrer.
- useSelector: Obtém valores do estado global no React.
- useDispatch: Envia ações que modificam o estado.