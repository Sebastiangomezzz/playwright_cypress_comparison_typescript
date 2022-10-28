import { render } from '@testing-library/react';
import { ProductDetailPage } from '../../pages';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducers } from '../../store/store';
import { productsApi } from '../../store/api/productsApi';
import { MemoryRouter } from 'react-router-dom';

describe('ProductDetailPage tests', () => {
  test('Should render the ProductDetailPage component', () => {
    const store = configureStore({
      reducer: reducers,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST']
          }
        }).concat(productsApi.middleware)
    });
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductDetailPage />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toBeTruthy();
  });
  test('Should render a spinner', () => {
    const store = configureStore({
      reducer: reducers,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST']
          }
        }).concat(productsApi.middleware)
    });
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductDetailPage />
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild.className).toBe(
      'position-fixed top-50 end-50 spinner-border text-success'
    );
  });
});
