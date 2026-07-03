// Client Component — botão para alternar entre tema claro e escuro
'use client';

import { useTema } from '@/hooks/useTema';
import styles from './BotaoTema.module.scss';

export default function BotaoTema() {
    const { tema, alternarTema } = useTema();

    return (
        // suppressHydrationWarning evita erro de hydration causado pela
        // diferença de tema entre servidor e cliente
        <button suppressHydrationWarning className={styles.botao} onClick={alternarTema}>
            {tema === 'claro' ? '🌞' : '🌜'}
        </button>
    );
}