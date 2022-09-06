import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <nav className="pt-3 pb-3 nav-bar ">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item pe-5">
            <a
              id="count-likes"
              className="nav-link active"
              aria-current="page"
              href="#App"
            >
              Home
            </a>
          </li>
          <li className="nav-item pe-5">
            <a className="nav-link text-white" href="#calculator">
              Calculator
            </a>
          </li>
          <li className="nav-item pe-5">
            <a className="nav-link text-white" href="#calculator">
              Quote
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
