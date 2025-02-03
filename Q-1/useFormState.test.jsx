import { render, fireEvent } from '@testing-library/react';
import MyForm from './MyForm';

test('should handle form input change', () => {
  const { getByPlaceholderText } = render(<MyForm />);

  const nameInput = getByPlaceholderText('Enter your name');
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  expect(nameInput.value).toBe('John Doe');
});
