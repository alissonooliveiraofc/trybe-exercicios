import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouter } from './utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from './App';

// usando a renderização padrão
it('Renderiza texto da página inicial', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

// usando a renderização com wrapper
it('Navega para página About', async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  await userEvent.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})

// usando a função renderWithRouter
it('Renderiza página inicial', () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Navega para a página About', async () => {
  const { user } = renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});