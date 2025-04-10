// App.test.tsx

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
    };

    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  });
})