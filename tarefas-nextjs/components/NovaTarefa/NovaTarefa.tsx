// Client Component — formulário controlado para adicionar novas tarefas
'use client';

import { useState } from 'react';
import { Tarefa } from '@/lib/tarefas';
import styles from './NovaTarefa.module.scss';

interface Props {
  // Função chamada ao submeter uma nova tarefa válida
  onAdicionarTarefa: (tarefa: Tarefa) => void;
}

export default function NovaTarefa({ onAdicionarTarefa }: Props) {
  // Estado controlado do campo de texto
  const [titulo, setTitulo] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Impede adicionar tarefa com título vazio ou apenas espaços
    if (!titulo.trim()) return;
    onAdicionarTarefa({ id: Date.now(), titulo, descricao: '', concluida: false });
    // Limpa o campo após adicionar
    setTitulo('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
