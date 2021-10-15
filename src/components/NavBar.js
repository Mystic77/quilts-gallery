import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-300 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Art Quilts
          </NavLink>
          <NavLink
            to="/gallery"
            activeClassName="underline"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:underline"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="underline"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:underline"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="underline"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-300 hover:underline"
          >
            Contact
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
