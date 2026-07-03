import { render, screen, fireEvent } from '@testing-library/react';
import ListaDeTarefas from '@/components/ListaDeTarefas/ListaDeTarefas';

const tarefasIniciais = [
  { id: 1, titulo: 'Tarefa 1', descricao: 'Desc 1', concluida: false },
  { id: 2, titulo: 'Tarefa 2', descricao: 'Desc 2', concluida: true },
];

describe('ListaDeTarefas', () => {
  it('renderiza a lista de tarefas', () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasIniciais} />);
    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
  });

  it('adiciona uma nova tarefa', () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasIniciais} />);
    fireEvent.change(screen.getByPlaceholderText('Nova tarefa'), { target: { value: 'Tarefa 3' } });
    fireEvent.click(screen.getByRole('button', { name: /adicionar/i }));
    expect(screen.getByText('Tarefa 3')).toBeInTheDocument();
  });

  it('conclui uma tarefa', () => {
    render(<ListaDeTarefas tarefasIniciais={[{ id: 1, titulo: 'Tarefa 1', descricao: '', concluida: false }]} />);
    fireEvent.click(screen.getByRole('button', { name: /concluir/i }));
    expect(screen.getByText('Reabrir')).toBeInTheDocument();
  });

  it('reabre uma tarefa concluída', () => {
    render(<ListaDeTarefas tarefasIniciais={[{ id: 1, titulo: 'Tarefa 1', descricao: '', concluida: true }]} />);
    fireEvent.click(screen.getByRole('button', { name: /reabrir/i }));
    expect(screen.getByText('Concluir')).toBeInTheDocument();
  });

  it('exclui uma tarefa', () => {
    render(<ListaDeTarefas tarefasIniciais={tarefasIniciais} />);
    fireEvent.click(screen.getAllByRole('button', { name: /excluir/i })[0]);
    expect(screen.queryByText('Tarefa 1')).not.toBeInTheDocument();
  });
});
