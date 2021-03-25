import { createStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';

const store=createStore(appSlice.reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;