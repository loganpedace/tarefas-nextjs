// Hook personalizado que gerencia o tema da aplicação e persiste no localStorage
import { useState, useEffect } from 'react';

export function useTema() {
  // Inicializa o tema lendo o localStorage, evitando um useEffect extra
  const [tema, setTema] = useState<'claro' | 'escuro'>(() => {
    // No servidor o window não existe, retorna claro como padrão
    if (typeof window === 'undefined') return 'claro';
    return (localStorage.getItem('tema') as 'claro' | 'escuro') || 'claro';
  });

  // Sempre que o tema mudar, atualiza o atributo no HTML e salva no localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  // Alterna entre claro e escuro
  function alternarTema() {
    setTema((t) => (t === 'claro' ? 'escuro' : 'claro'));
  }

  return { tema, alternarTema };
}
