import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav">
      <div className="container header-container">
        <NavLink to="/" className="navbar-brand">My blog</NavLink>
        <ul className={'nav-list'}>
          <li className={'nav-item'}>
            <NavLink
              to="/"
              className={'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li className={'nav-item'}>
            <NavLink
              to="/posts/add"
              className={'nav-link'}
            >
              Add
            </NavLink>
          </li>
          <li className={'nav-item'}>
            <NavLink
              to="/about"
              className={'nav-link'}
            >
              About
            </NavLink>
          </li>
          <li className={'nav-item'}>
            <NavLink
              to="/contacts"
              className={'nav-link'}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;