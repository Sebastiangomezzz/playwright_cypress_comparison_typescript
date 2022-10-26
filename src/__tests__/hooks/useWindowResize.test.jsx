import { renderHook } from '@testing-library/react';
import { useWindowResize } from '../../hooks/useWindowResize';

describe('useWindowResize hook tests', () => {
  test('Should return a breakPoint of xs', () => {
    window.innerWidth = 575;
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.breakPoint).toBe('xs');
  });
  test('Should return a breakPoint of sm', () => {
    window.innerWidth = 576;
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.breakPoint).toBe('sm');
  });
  test('Should return a breakPoint of md', () => {
    window.innerWidth = 768;
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.breakPoint).toBe('md');
  });
  test('Should return a breakPoint of lg', () => {
    window.innerWidth = 992;
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.breakPoint).toBe('lg');
  });
  test('Should return a breakPoint of xl', () => {
    window.innerWidth = 1200;
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.breakPoint).toBe('xl');
  });
  test('Should return a breakPoint of xxl', () => {
    window.innerWidth = 1400;
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.breakPoint).toBe('xxl');
  });
});
