import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../calculator';

it('should match the snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders user event correctly and display 1', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByRole('button', { name: '1' }));
  const result = screen.getByRole('button', { name: '1' });
  expect(result.innerHTML).toBe('1');
});

it('Renders user event correctly and display AC', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByRole('button', { name: 'AC' }));
  const result = screen.getByRole('button', { name: 'AC' });
  expect(result.innerHTML).toBe('AC');
});

// Simulate user interaction test
test('User event on Rack Dom', () => {
  render(<Calculator />);
  userEvent.click(screen.getByText('1'));
  userEvent.click(screen.getByText('2'));
  userEvent.click(screen.getByText('+'));
  userEvent.click(screen.getByText('3'));
  userEvent.click(screen.getByText('='));
  // 12 + 3 = 15  <- on display
  const result = screen.getByTestId('display');
  expect(result.innerHTML).toBe('15');
});
