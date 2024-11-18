import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMenu() {
  return (
    <nav className="font-poppins flex-1">
      <ul className="flex justify-center space-x-8">
        <li>
          <NavLink className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer">
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer">
            GALLERY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
