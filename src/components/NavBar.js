import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact>
            Jasper
          </NavLink>
          <NavLink to="/post">Blog Posts</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
