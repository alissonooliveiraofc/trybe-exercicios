// src/App.test.tsx

import { render, screen } from '@testing-library/react';

import App from './App';

it('Renderiza texto da página inicial', () => {
  render(<App />);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})