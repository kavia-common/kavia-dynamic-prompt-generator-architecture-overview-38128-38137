import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header brand title', () => {
  render(<App />);
  // The header brand contains this exact text in SlideDeckHeader
  const brand = screen.getByText(/Kavia Slides • Dynamic Prompt Generator/i);
  expect(brand).toBeInTheDocument();
});

test('renders navigation controls', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /Previous slide/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Next slide/i })).toBeInTheDocument();
});
