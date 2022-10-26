import { render, screen } from '@testing-library/react';
import { ProductListPage } from '../../pages';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducers } from '../../store/store';
import { productsApi } from '../../store/api/productsApi';
import { MemoryRouter } from 'react-router-dom';

describe('ProductListPage tests', () => {
  test('Should render the ProductListPage component', () => {
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
        <ProductListPage />
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
        <ProductListPage />
      </Provider>
    );
    expect(container.firstChild.className).toBe(
      'position-fixed top-50 end-50 spinner-border text-success'
    );
  });
  test('should render a list of products', async () => {
    const store = configureStore({
      reducer: reducers,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST']
          }
        }).concat(productsApi.middleware)
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductListPage />
        </MemoryRouter>
      </Provider>
    );
    const products = await screen.findAllByTestId('list-item-card');
    expect(products.length).toBe(100);
  });
});
