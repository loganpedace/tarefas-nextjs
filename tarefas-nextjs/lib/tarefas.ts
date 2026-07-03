// Tipagem da entidade Tarefa usada em toda a aplicação
export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

// Simula uma chamada de API retornando uma lista fixa de tarefas
export async function getTarefas(): Promise<Tarefa[]> {
    return Promise.resolve([
        { id: 1, titulo: 'Estudar Programação', descricao: 'Estudar a programação em geral', concluida: false },
        { id: 2, titulo: 'Estudar React', descricao: 'Estudar a biblioteca React', concluida: true },
        { id: 3, titulo: 'Estudar TypeScript', descricao: 'Estudar a linguagem TypeScript', concluida: false },
    ]);
}