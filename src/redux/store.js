import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { userSlice } from './myValue/slice';
import { itemsSlice } from './items/slice';

export const { add, remove } = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: userSlice.reducer,
    items: itemsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
