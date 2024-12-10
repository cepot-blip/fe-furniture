/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Notiflix from 'notiflix';

function ProtectedRoute({ children }) {
  const authrenticated = Cookies.get('token');

  if (!authrenticated) {
    Notiflix.Notify.failure(
      'Anda harus login terlebih dahulu untuk mengakses halaman ini.',
    );

    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
