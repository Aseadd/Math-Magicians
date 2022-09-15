import React from 'react';
import ReactDOM from 'react-dom/client';
import renderer from 'react-test-renderer';
import Quotes from '../quotes';

it('should render the quotes component', () => {
  const wrapper = ReactDOM.createRoot(document.createElement('div'));
  wrapper.render(<Quotes />);
});

it('should match the snapshot', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
