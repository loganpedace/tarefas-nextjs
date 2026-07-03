import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';

const tarefas = [
    { id: 1, titulo: 'Tarefa 1', descricao: '', concluida: false },
    { id: 2, titulo: 'Tarefa 2', descricao: '', concluida: false },
];

describe('useContadorDeTarefas', () => {
    it('Retorna 0 quando a lista de tarefas está vazia', () => {
        const { result } = renderHook(() => useContadorDeTarefas([]));
        expect(result.current).toBe(0);
    });

    it('Retorna o número correto de tarefas', () => {
        const { result } = renderHook(() => useContadorDeTarefas(tarefas));
        expect(result.current).toBe(2);
    });
});