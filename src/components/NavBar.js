import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-500 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Art Quilts
          </NavLink>
          <NavLink
            to="/gallery"
            activeClassName="text-red-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-600 hover:underline"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="underline"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-600 hover:underline"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://linkedin.com"
            className="mr-4"
            target="_blank"
            fgColor="#ffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://facebook.com"
            className="mr-4"
            target="_blank"
            fgColor="#ffff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
