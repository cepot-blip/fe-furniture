/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProtectedRoute from './components/Template/Auth/ProtectedRoute.jsx';
import NotFoundPage from './pages/404.jsx';
import AddressPages from './pages/address/address.jsx';
import CategoryDetailId from './pages/category/[params]/categoryDetailId.jsx';
import Category from './pages/category/category.jsx';
import Checkout from './pages/checkout/checkout.jsx';
import HomePage from './pages/home/Home';
import LoginPage from './pages/login/Login';
import Mitra from './pages/mitra/Mitra.jsx';
import DetailsProduct from './pages/products/DetailsProduct.jsx';
import Products from './pages/products/Products.jsx';
import RegisterPage from './pages/register/Register';
import ShippingPages from './pages/shipping/shipping.jsx';
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
            <Route path="/daftar-mitra" element={<Mitra />} />

            <Route path="/products" element={<Products />} />

            <Route path="/category" element={<Category />} />
            <Route path="/category/:id" element={<CategoryDetailId />} />

            <Route path="/product/:id" element={<DetailsProduct />} />
            <Route path="/shipping" element={<ShippingPages />} />
            <Route path="/address-pages" element={<AddressPages />} />

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
