/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProtectedRoute from './components/Template/Auth/ProtectedRoute.jsx';
import Payment from './pages/payment/Payment.jsx';
import store from './redux/store/index.js';

const ErrorElements = lazy(
  () => import('./components/Elements/Error/ErrorElements.jsx'),
);
const Loaders = lazy(() => import('./components/Elements/Loaders/Loaders.jsx'));

const NotFoundPage = lazy(() => import('./pages/404.jsx'));
const AddressPages = lazy(() => import('./pages/address/address.jsx'));
const CategoryDetailId = lazy(
  () => import('./pages/category/[params]/categoryDetailId.jsx'),
);
const Category = lazy(() => import('./pages/category/category.jsx'));
const Checkout = lazy(() => import('./pages/checkout/checkout.jsx'));
const HomePage = lazy(() => import('./pages/home/Home'));
const LoginPage = lazy(() => import('./pages/login/Login'));
const Mitra = lazy(() => import('./pages/mitra/Mitra.jsx'));
const DetailsProduct = lazy(
  () => import('./pages/products/DetailsProduct.jsx'),
);
const Products = lazy(() => import('./pages/products/Products.jsx'));
const RegisterPage = lazy(() => import('./pages/register/Register'));
const ShippingPages = lazy(() => import('./pages/shipping/shipping.jsx'));

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
          <Suspense fallback={<Loaders />}>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/login"
                element={<LoginPage />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/register"
                element={<RegisterPage />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/daftar-mitra"
                element={<Mitra />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/products"
                element={<Products />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/category"
                element={<Category />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/category/:id"
                element={<CategoryDetailId />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/product/:id"
                element={<DetailsProduct />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/shipping"
                element={<ShippingPages />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/address-pages"
                element={<AddressPages />}
                errorElement={<ErrorElements />}
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
                errorElement={<ErrorElements />}
              />
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                }
                errorElement={<ErrorElements />}
              />
              <Route
                path="*"
                element={<NotFoundPage />}
                errorElement={<ErrorElements />}
              />
            </Routes>
          </Suspense>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
