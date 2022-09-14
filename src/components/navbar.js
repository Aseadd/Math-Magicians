import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Calculator', path: '/calculator' },
  { id: 3, name: 'Quotes', path: '/quotes' },
];
const Navbar = () => (
  <div>
    <nav className="pt-3 pb-3 nav-bar ">
      <ul className="nav nav-pills justify-content-end pe-5 me-3">
        <li className="nav-item me-auto">
          <a
            href={links[0].path}
            className="nav-link text-white"
            aria-current="page"
          >
            Math Magician
          </a>
        </li>
        {links.map((link) => (
          <li className="nav-item" key={link.id}>
            <NavLink className="nav-link text-white" to={link.path}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
