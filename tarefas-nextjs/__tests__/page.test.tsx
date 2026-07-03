import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
    it('Renderiza o título da página', async () => {
        render(await Home());
        expect(screen.getByRole('heading', { name: /Tarefas/i })).toBeInTheDocument();
    })

    it('Renderiza a lista de tarefas', async () => {
        render(await Home());
        expect(screen.getByText('Estudar Programação')).toBeInTheDocument();
        expect(screen.getByText('Estudar a biblioteca React')).toBeInTheDocument();
        expect(screen.getByText('Estudar a linguagem TypeScript')).toBeInTheDocument();
    })
})