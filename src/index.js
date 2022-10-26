import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProductListPage, ProductDetailPage } from './pages';
import { GlobalLayout } from './layout/GlobalLayout';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalLayout>
            <Routes>
              <Route
                path='/'
                element={<Navigate to='/products' />}
              />
              <Route
                index
                path='products'
                element={<ProductListPage />}
              />
              <Route
                path='products/:productId'
                element={<ProductDetailPage />}
              />
            </Routes>
          </GlobalLayout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
