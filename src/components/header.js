import React from 'react';

const Header = () => (
  <nav className="pt-3 pb-3 nav-bar ">
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item pe-5 ">
        <a className="nav-link text-white" aria-current="page" href="#App">
          Home
        </a>
      </li>
      <li className="nav-item pe-5">
        <a className="nav-link text-white active" href="#calculator">
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

export default Header;
