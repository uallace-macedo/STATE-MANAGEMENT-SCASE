import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.js';

const store = configureStore({ rootReducer });
export default store;