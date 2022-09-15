import React from 'react';
import ReactDOM from 'react-dom/client';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';

it('should render the calculator component', () => {
  const wrapper = ReactDOM.createRoot(document.createElement('div'));
  wrapper.render(<Calculator />);
});

it('should match the snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
