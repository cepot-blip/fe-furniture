/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

import NavMenu from '../../Elements/NavMenu/NavMenu';
// eslint-disable-next-line import/newline-after-import
import Profile from '../Profile/Profile';
function Navbar({ onCartClick }) {
  return (
    <div className=" border-b-2 border-b-gray-300 relative pb-20">
      <header className="w-[1500px] py-2 fixed bg-white rounded-lg z-50">
        <div className="flex items-center justify-between px-6">
          <Link to="/home">
            <div className="flex items-center">
              <img src="/logo.svg" className="w-[150px] h-20" />
            </div>
          </Link>

          <NavMenu />

          <div className="flex items-center ml-auto gap-20">
            <div className="flex items-center gap-6">
              <Search className="text-gray-900 hover:text-gray-800 text-2xl cursor-pointer transition-colors" />
              <ShoppingCart
                className="text-gray-900 hover:text-gray-800 text-2xl cursor-pointer transition-colors"
                onClick={onCartClick}
              />
            </div>
            <div>
              <Profile />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
