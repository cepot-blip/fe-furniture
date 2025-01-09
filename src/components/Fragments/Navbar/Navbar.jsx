/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable arrow-spacing */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import Cookies from 'js-cookie';
import Notiflix from 'notiflix';
import Button from '../../Elements/Button/Button';
import { useCreateCart } from '../../../hooks/cart/useCreateCart';
import NavMenu from '../../Elements/NavMenu/NavMenu';
// eslint-disable-next-line import/newline-after-import
import Profile from '../Profile/Profile';
function Navbar({ onCartClick }) {
  const navigate = useNavigate();
  const token = Cookies.get('token');

  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem('data'));
  const total_price = useSelector((state) => state.cartItem.total_price);
  const { createCartMutation } = useCreateCart(dispatch);
  const cartItem = useSelector((state) => state.cartItem.cartItem);

  const handleCrartClick = () => {
    if (!token) {
      Notiflix.Notify.failure(
        'Anda belum login, silahkan login terlebih dahulu',
      );
      navigate('/login');
      return;
    }
    createCartMutation({
      user_id: data.id,
      total_price,
    });
    onCartClick();
  };

  return (
    <div className="border-b-gray-300 relative pb-20 pt-3 flex justify-center z-10">
      <header className="w-[1400px] py-2 fixed bg-gray10 rounded-lg  border border-gray-100">
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
              <div className="relative">
                <ShoppingCart
                  className="text-gray-900 hover:text-gray-800 text-2xl cursor-pointer transition-colors"
                  onClick={handleCrartClick}
                />
                {cartItem.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full text-center">
                    {cartItem.length}
                  </span>
                )}
              </div>
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
