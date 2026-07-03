import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/components/NovaTarefa/NovaTarefa';

describe('NovaTarefa', () => {
    it('Renderiza o input e o botão de adicionar', () => {
        render(<NovaTarefa onAdicionarTarefa={jest.fn()} />);
        expect(screen.getByPlaceholderText('Nova tarefa')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /adicionar/i })).toBeInTheDocument();
    })

    it('não chama onAdicionarTarefa com input vazio', () => {
        const mock = jest.fn()
        render(<NovaTarefa onAdicionarTarefa={mock} />)
        fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }))
        expect(mock).not.toHaveBeenCalled()
  })

    it('chama onAdicionarTarefa e limpa o input ao submeter', () => {
        const mock = jest.fn()
        render(<NovaTarefa onAdicionarTarefa={mock} />)
        fireEvent.change(screen.getByPlaceholderText('Nova tarefa'), { target: { value: 'Nova tarefa teste' } })
        fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }))
        expect(mock).toHaveBeenCalledWith(expect.objectContaining({ titulo: 'Nova tarefa teste' }))
        expect(screen.getByPlaceholderText('Nova tarefa')).toHaveValue('')
  })
})