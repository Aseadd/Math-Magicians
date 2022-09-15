import React from 'react';
import ReactDOM from 'react-dom/client';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../calculator';

it('should render the calculator component', () => {
  const wrapper = ReactDOM.createRoot(document.createElement('div'));
  wrapper.render(<Calculator />);
});

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
