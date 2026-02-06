import { configureStore } from '@reduxjs/toolkit';

import UserList from './slices/requestSlice';
const reducer = {
  UserList,
};
const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
