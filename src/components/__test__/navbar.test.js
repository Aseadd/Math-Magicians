import React from 'react';
import ReactDOM from 'react-dom/client';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../navbar';

it('should render the navbar component', () => {
  const wrapper = ReactDOM.createRoot(document.createElement('div'));
  wrapper.render(<Navbar />);
});

it('should match the snapshot', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
