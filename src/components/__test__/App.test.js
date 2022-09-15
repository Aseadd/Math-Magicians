import React from 'react';
import ReactDOM from 'react-dom/client';
import renderer from 'react-test-renderer';
import App from '../../App';

it('should render the app component', () => {
  const wrapper = ReactDOM.createRoot(document.createElement('div'));
  wrapper.render(<App />);
});

it('should match the snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
