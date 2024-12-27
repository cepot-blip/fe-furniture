/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { User } from 'lucide-react';
import Notiflix from 'notiflix';

import useUserId from '../../../hooks/users/useUserId';
import { setReset } from '../../../redux/reducers/authReducer';
import { setResetCartItem } from '../../../redux/reducers/cartItemReducer';

function Profile({ id }) {
  const user = JSON.parse(localStorage.getItem('data'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const confirmation = window.confirm('Apakah Anda yakin ingin keluar?');

    if (confirmation) {
      Cookies.remove('token');
      dispatch(setReset());
      dispatch(setResetCartItem());
      localStorage.removeItem('data');
      console.log('Berhasil logout');

      Notiflix.Notify.success('Anda berhasil logout');
      navigate('/login');
      // window.location.reload();
    } else {
      console.log('Logout dibatalkan');
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

  return (
    <div
      className="text-lg cursor-pointer flex items-center gap-2"
      onClick={handleLogout}
    >
      <User className="text-lg cursor-pointer" />
      <span>{user?.email}</span>
    </div>
  );
}

export default Profile;
