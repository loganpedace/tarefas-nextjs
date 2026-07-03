// Server Component — carrega as tarefas no servidor antes de renderizar a página
import { getTarefas } from '@/lib/tarefas';
import ListaDeTarefas from '@/components/ListaDeTarefas/ListaDeTarefas';
import BotaoTema from '@/components/BotaoTema/BotaoTema';
import styles from './page.module.scss';

export default async function Home() {
  // Busca as tarefas simulando uma chamada de API
  const tarefas = await getTarefas();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.titulo}>Tarefas</h1>
        {/* Botão para alternar entre tema claro e escuro */}
        <BotaoTema />
      </header>
      {/* Passa as tarefas carregadas no servidor para o Client Component */}
      <ListaDeTarefas tarefasIniciais={tarefas} />
    </main>
  );
}
