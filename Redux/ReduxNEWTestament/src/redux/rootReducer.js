import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './user/slice.js';

const rootReducer = combineReducers({
    user: userSlice.reducer,
});

export default rootReducer;
