import { combineReducers } from 'redux';
import userReducer from './user/reducer.js';

const rootReducer = combineReducers({ userReducer });
export default rootReducer;