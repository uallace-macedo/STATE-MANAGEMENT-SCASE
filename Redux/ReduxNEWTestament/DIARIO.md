# 📘 Diário de Bordo – Redux com Toolkit

> Última atualização: 18/04/2025
> Autor: Jonathas Uallace Macedo Santos
> Status: ✅ Concluído

---

## 🏗️ Instalação das dependências
```bash
# com npm
npm install @reduxjs/toolkit react-redux react-hook-form
# com yarn
yarn add @reduxjs/toolkit react-redux react-hook-form
```

---

### 📌 1. Configuração do Store
O Redux Toolkit simplifica a criação da store com `configureStore()`.
```js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store;
```

### 🔄 2. Criando o Slice do Usuário
Com `createSlice()`, podemos definir estado, reducers e actions em um único arquivo.
```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    name: '-',
    lastname: '-'
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = { name: '-', lastname: '-' };
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
```

### 🏗️ 3. Estruturando o Provider `(main.jsx)`
Aqui envolvemos a aplicação com o Provider, garantindo acesso ao Redux Toolkit.
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

### 🎯 4. Criando um Componente com Redux `(App.jsx)`
Agora utilizamos `useSelector` para acessar o estado e `useDispatch` para disparar ações do slice.
```js
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login, logout } from './redux/user/userSlice';

const App = () => {
  const { register, handleSubmit, resetField } = useForm();
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const resetFields = () => {
    resetField('name');
    resetField('lastname');
  }

  const handleLoginClick = (data) => {
    dispatch(login({ name: data.name, lastname: data.lastname }));
    resetFields();
  }
  
  const handleLogoutClick = () => {
    dispatch(logout());
    resetFields();
  }

  return (
    <div>
      <h1>User State Management</h1>
      <p>Nome: {currentUser.name}</p>
      <p>Sobrenome: {currentUser.lastname}</p>

      <div>
        <div>
          <input {...register('name')} type="text" placeholder='Nome'/>
          <input {...register('lastname')} type="text" placeholder='Sobrenome'/>
        </div>
        <button onClick={handleSubmit(handleLoginClick)}>Login</button>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  )
}

export default App;
```

## ✅ Resumo
Este projeto implementa Redux com Toolkit, tornando a manipulação do estado global mais simples e eficiente.

### 🔑 Principais melhorias do Redux Toolkit:
- Menos código boilerplate
- Reducers e Actions combinados em "slices"
- Uso simplificado do Store

### 📌 Principais conceitos abordados:
- **Store**: Criado com `configureStore()`.
- **Slices**: Combina reducers e actions.
- **useSelector**: Obtém o estado global no React.
- **useDispatch**: Dispara ações que modificam o estado.