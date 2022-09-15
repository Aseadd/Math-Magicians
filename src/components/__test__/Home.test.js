import React from 'react';
import ReactDOM from 'react-dom/client';
import renderer from 'react-test-renderer';
import Home from '../../Home';

it('should render the home component', () => {
  const wrapper = ReactDOM.createRoot(document.createElement('div'));
  wrapper.render(<Home />);
});

it('should match the snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
