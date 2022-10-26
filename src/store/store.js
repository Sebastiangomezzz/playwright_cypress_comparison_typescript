import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Slices/cartSlice';
import { productsApi } from './api/productsApi';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const expireReducer = require('redux-persist-expire');

const persistConfig = {
  key: 'root',
  transforms: [
    expireReducer('cart', {
      expireSeconds: 3600,
      autoExpire: true,
      expiredState: { value: 0 }
    })
  ],
  storage
};

export const reducers = combineReducers({
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    }).concat(productsApi.middleware)
});
