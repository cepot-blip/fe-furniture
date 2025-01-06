/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { User } from 'lucide-react';
import Notiflix from 'notiflix';

import useUserId from '../../../hooks/users/useUserId';
import { addressReset } from '../../../redux/reducers/addressReducer';
import { setReset } from '../../../redux/reducers/authReducer';
import { setResetCartItem } from '../../../redux/reducers/cartItemReducer';
import Button from '../../Elements/Button/Button';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('data'));
  const mitraData = JSON.parse(localStorage.getItem('mitraData'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const confirmation = window.confirm('Apakah Anda yakin ingin keluar?');

    if (confirmation) {
      Cookies.remove('token');
      dispatch(setReset());
      dispatch(setResetCartItem());
      dispatch(addressReset());
      localStorage.removeItem('data');
      localStorage.removeItem('payment');
      localStorage.removeItem('order');
      localStorage.removeItem('shipping');
      console.log('Berhasil logout');

      Notiflix.Notify.success('Anda berhasil logout');
      navigate('/login');
      window.location.reload();
    }
  };

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <User className="text-lg cursor-pointer" />
        Unknown
      </div>
    );
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={toggleMenu}
        className="inline-flex justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 border border-gray-100 rounded-lg"
      >
        <div className="text-lg cursor-pointer flex items-center gap-2">
          <User className="text-lg cursor-pointer" />
          <span>{user?.email || mitraData?.company_name}</span>
        </div>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1 z-30"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex flex-col border-b-2  px-4 py-2 gap-2">
              <p className="text-xs text-gray-700">Signed in as</p>
              <h3>{user?.email}</h3>
            </div>

            <Link
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              View Profile
            </Link>
            <Button
              onClick={handleLogout}
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
