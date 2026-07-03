import { render, screen, fireEvent } from '@testing-library/react';
import BotaoTema from '@/components/BotaoTema/BotaoTema';

describe('BotaoTema', () => {
  it('renderiza o botão', () => {
    render(<BotaoTema />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('alterna o tema ao clicar', () => {
    render(<BotaoTema />);
    const botao = screen.getByRole('button');
    const temaInicial = botao.textContent;
    fireEvent.click(botao);
    expect(botao.textContent).not.toBe(temaInicial);
  });
});
