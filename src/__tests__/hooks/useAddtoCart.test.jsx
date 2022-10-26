import { renderHook } from '@testing-library/react';
import { useAddToCart } from '../../hooks/useAddToCart';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducers } from '../../store/store';

describe('useAddtoCart hook tests', () => {
  const productToAdd = { id: '564654', colors: ['blue', 'red'], memoryOptions: ['16Gb', '32Gb'] };
  const { id, colors, memoryOptions } = productToAdd;
  const store = configureStore({ reducer: reducers });

  test('Should return two functions', () => {
    const { result } = renderHook(() => useAddToCart({ id, colors, memoryOptions }), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    });
    expect(typeof result.current).toBe('object');
  });
});
