import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders placeholder test', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const boton = screen.getByText(/iniciar sesión/i);
  expect(boton).toBeInTheDocument();
});
