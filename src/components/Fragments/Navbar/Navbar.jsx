/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

import Button from '../../Elements/Button/Button';
import NavMenu from '../../Elements/NavMenu/NavMenu';
import Profile from '../Profile/Profile';

function Navbar({ onCartClick }) {
  const { token } = useSelector((state) => state.auth.userAuth);

  return (
    <div className="border-b-2 border-b-gray-300 relative pb-20 pt-3">
      <header className="w-[1500px] py-2 fixed bg-gray10 rounded-lg z-50 border border-gray-100">
        <div className="flex items-center justify-between px-6">
          <Link to="/">
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
              {token ? (
                <Profile />
              ) : (
                <Link to="/register">
                  <Button className="py-2 px-4 bg-white border border-gray-500 rounded-lg hover:bg-gray-50 transition-all ease-in hover:border-gray-50">
                    Sign Up
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
