import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bassin à flot : histoire et témoignages/i);
  expect(titleElement).toBeInTheDocument();
});
