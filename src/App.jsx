/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProtectedRoute from './components/Template/Auth/ProtectedRoute.jsx';
import NotFoundPage from './pages/404.jsx';
import Checkout from './pages/checkout/checkout.jsx';
import HomePage from './pages/home/Home';
import LoginPage from './pages/login/Login';
import DetailsProduct from './pages/products/DetailsProduct.jsx';
import Products from './pages/products/Products.jsx';
import RegisterPage from './pages/register/Register';
import store from './redux/store/index.js';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/products" element={<Products />} />

            <Route path="/product/:id" element={<DetailsProduct />} />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
