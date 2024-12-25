/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

import Button from '../../components/Elements/Button/Button';
import Card from '../../components/Fragments/Card/Card';
import Footer from '../../components/Fragments/Footer/Footer';
import Navbar from '../../components/Fragments/Navbar/Navbar';
import ReviewProduct from '../../components/Fragments/Product/ReviewProduct';
import Sidebar from '../../components/Fragments/Sidebar/Sidebar';
import { useCreateCartItem } from '../../hooks/cartItem/useCreateCartItem';
import { useByIdProduct } from '../../hooks/product/useByIdProduct';
import { addToCartItem } from '../../redux/reducers/cartItemReducer';

import 'react-loading-skeleton/dist/skeleton.css';

function DetailsProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const cart_id = useSelector((state) => state.cart.id);

  const { product, isLoading, isError } = useByIdProduct(id);
  const { createCartItemMutation } = useCreateCartItem(dispatch);

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleProductToCart = (e) => {
    const cartItem = {
      cart_id,
      product_id: e.id,
      quantity: 1,
      subtotal_price: e.price * 1,
    };
    createCartItemMutation(cartItem);
    console.log('isi cartItem: ', cartItem);
    dispatch(addToCartItem(product));
  };

  console.log('data', product);

  return (
    <main className="flex flex-col mx-auto max-w-[1300px]">
      <Navbar onCartClick={handleSidebarToggle} />
      <Sidebar isVisible={isSidebarVisible} onClose={handleSidebarToggle} />

      <div className="w-full flex py-8">
        <div className="flex w-full gap-8 items-center px-5">
          <div className="flex-1">
            <Card className="flex flex-col items-center gap-6 rounded-lg">
              <Card.Body className="border border-gray-300 rounded-lg">
                {isLoading ? (
                  <Skeleton height={300} width="100%" />
                ) : (
                  <img
                    src={product?.image_url}
                    className="w-full h-auto rounded-lg shadow-md p-2"
                  />
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-44">
              <Card className="flex flex-col gap-6 h-full">
                <Card.Header className="text-5xl font-semibold text-gray-800">
                  {isLoading ? <Skeleton width={200} /> : product?.name}
                  {/* iternary opt */}
                </Card.Header>
                <Card.Body className="text-md text-gray-500">
                  {isLoading ? (
                    <Skeleton width={100} />
                  ) : (
                    `Stock: ${product?.stock}`
                  )}
                </Card.Body>
                <Card.Body className="text-xl text-gray-900 font-semibold flex justify-between items-center">
                  {isLoading ? (
                    <Skeleton width={100} />
                  ) : (
                    `Price: Rp. ${product?.price}`
                  )}
                  <div className="flex items-center gap-2">
                    {isLoading ? (
                      <Skeleton circle width={26} height={26} count={5} />
                    ) : (
                      Array(5)
                        .fill(null)
                        .map((_, pleerr) => (
                          <Star
                            key={pleerr}
                            size={26}
                            className="text-orange-500"
                          />
                        ))
                    )}
                  </div>
                </Card.Body>
                <Card.Body className="text-gray-600 text-xl">
                  {isLoading ? (
                    <Skeleton count={3} />
                  ) : (
                    <p>{product?.description}</p>
                  )}
                </Card.Body>
              </Card>

              <div className="flex flex-col gap-5">
                <div className="flex gap-10 items-center">
                  <div className="flex items-center gap-4 border border-gray-300 rounded-lg py-3 px-10">
                    <Button className="py-1 px-2 rounded-md text-gray-800 hover:bg-gray-200">
                      -
                    </Button>
                    <span className="text-gray-700">
                      <h1>0</h1>
                    </span>
                    <Button className="py-1 px-2 rounded-md text-gray-800 hover:bg-gray-200">
                      +
                    </Button>
                  </div>

                  <Button
                    className="py-4 px-14 bg-[#3AA39F] text-white font-semibold rounded-lg"
                    onClick={() => handleProductToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
                <p>
                  {isLoading ? (
                    <Skeleton width={300} />
                  ) : (
                    // condisional rendering
                    'Free 3-5 day shipping • Tool-free assembly • 30-day trial'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? <Skeleton height={200} /> : <ReviewProduct />}

      <Footer />
    </main>
  );
}

export default DetailsProduct;
