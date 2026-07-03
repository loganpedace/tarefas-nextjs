// Hook personalizado que retorna o número total de tarefas na lista
import { Tarefa } from '@/lib/tarefas';

export function useContadorDeTarefas(tarefas: Tarefa[]) {
    return tarefas.length;
}