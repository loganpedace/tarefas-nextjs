// Client Component — gerencia o estado da lista de tarefas
'use client';

import { useState } from 'react';
import { Tarefa } from '@/lib/tarefas';
import NovaTarefa from '../NovaTarefa/NovaTarefa';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import styles from './ListaDeTarefas.module.scss';

interface Props {
  tarefasIniciais: Tarefa[];
}

export default function ListaDeTarefas({ tarefasIniciais }: Props) {
  // Estado local da lista de tarefas, iniciado com os dados vindos do servidor
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  // Hook personalizado que retorna o total de tarefas
  const total = useContadorDeTarefas(tarefas);

  // Adiciona uma nova tarefa ao estado
  function handleAdicionarTarefa(tarefa: Tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  // Alterna o status de concluída/pendente de uma tarefa pelo id
  function handleToggleConcluida(id: number) {
    setTarefas(tarefas.map((t) => t.id === id ? { ...t, concluida: !t.concluida } : t));
  }

  // Remove uma tarefa da lista pelo id
  function handleExcluir(id: number) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  return (
    <div className={styles.container}>
      {/* Exibe o total de tarefas usando o hook */}
      <p className={styles.contador}>Total de tarefas: {total}</p>
      {/* Formulário para adicionar nova tarefa */}
      <NovaTarefa onAdicionarTarefa={handleAdicionarTarefa} />
      <ul className={styles.lista}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className={`${styles.tarefa} ${tarefa.concluida ? styles.concluida : ''}`}>
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.descricao}</p>
            <p>Status: {tarefa.concluida ? 'Concluída' : 'Pendente'}</p>
            <div className={styles.acoes}>
              {/* Botão alterna entre concluir e reabrir conforme o status atual */}
              <button
                className={tarefa.concluida ? styles.btnReabrir : styles.btnConcluir}
                onClick={() => handleToggleConcluida(tarefa.id)}
              >
                {tarefa.concluida ? 'Reabrir' : 'Concluir'}
              </button>
              <button className={styles.btnExcluir} onClick={() => handleExcluir(tarefa.id)}>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
