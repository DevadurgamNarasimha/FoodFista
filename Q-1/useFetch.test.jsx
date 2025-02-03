import { render, screen, waitFor } from '@testing-library/react';
import DataDisplay from './DataDisplay';

test('should display loading and then the fetched data', async () => {
  render(<DataDisplay />);

  expect(screen.getByText(/Loading.../)).toBeInTheDocument();

  await waitFor(() => screen.getByText(/Fetched Data:/));

  expect(screen.getByText(/Fetched Data:/)).toBeInTheDocument();
});
