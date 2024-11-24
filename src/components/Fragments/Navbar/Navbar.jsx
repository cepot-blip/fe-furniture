/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

import NavMenu from '../../Elements/NavMenu/NavMenu';
import Profile from '../Profile/Profile';

function Navbar({ onCartClick }) {
  return (
    <div className="w-full border-b-2 border-b-gray-300">
      <header className="w-full py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.svg" className="w-[150px] h-20" />
          </div>

          <NavMenu />

          <div className="flex items-center ml-auto gap-24">
            <div className="flex items-center gap-8">
              <Search className="text-lg cursor-pointer" />
              <ShoppingCart
                className="text-lg cursor-pointer"
                onClick={onCartClick}
              />
            </div>
            <div className="">
              <Profile />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
