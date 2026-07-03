import { renderHook, act } from '@testing-library/react';
import { useTema } from '@/hooks/useTema';

beforeEach(() => {
  localStorage.clear();
});

describe('useTema', () => {
  it('inicia com tema claro', () => {
    const { result } = renderHook(() => useTema());
    expect(result.current.tema).toBe('claro');
  });

  it('alterna para tema escuro ao chamar alternarTema', () => {
    const { result } = renderHook(() => useTema());
    act(() => result.current.alternarTema());
    expect(result.current.tema).toBe('escuro');
  });

  it('volta para tema claro ao chamar alternarTema duas vezes', () => {
    const { result } = renderHook(() => useTema());
    act(() => result.current.alternarTema());
    act(() => result.current.alternarTema());
    expect(result.current.tema).toBe('claro');
  });
});
