import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NotFoundPage from '../pages/404';
import HomePage from '../pages/home/Home';
import LoginPage from '../pages/login/Login';
import RegisterPage from '../pages/register/Register';

const modules = import.meta.glob('/src/pages/**/[a-z[]*.jsx', { eager: true });

const pages = Object.keys(modules)
  .map((mod) => {
    if (!mod.includes('app')) {
      const path = mod
        .replace(/\/src\/pages|app|index|\.jsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1');

      const Element = modules[mod].default;
      return {
        path,
        element: <Element />,
      };
    }
    return false;
  })
  .filter((page) => !!page);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />,
    children: [...pages],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'home',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default routes;
