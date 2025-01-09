/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CircleCheckBig,
  CircleDollarSign,
  Clock,
  CreditCard,
  HandCoins,
  Mails,
  ReceiptText,
  TrendingUp,
} from 'lucide-react';

import { useCreateCheckout } from '../../../hooks/checkout/useCreateCheckout';
import { addressReset } from '../../../redux/reducers/addressReducer';
import { setResetCartItem } from '../../../redux/reducers/cartItemReducer';
import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function CheckoutModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10);
  const dataUser = JSON.parse(localStorage.getItem('data'));
  const dataPayment = JSON.parse(localStorage.getItem('payment'));
  const dataShipping = JSON.parse(localStorage.getItem('shipping'));
  const dataAddress = JSON.parse(localStorage.getItem('address'));
  const { createCheckoutMutation } = useCreateCheckout();
  const cartFromRedux = useSelector((state) => state.cart);
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const totalPriceFromRedux = useSelector(
    (state) => state.cartItem.total_price,
  );
  const order = JSON.parse(localStorage.getItem('order'));

  const handleDone = () => {
    // logic create checkout
    const checkoutData = {
      user_id: dataUser.id,
      cart_id: cartFromRedux.id,
      payment_id: dataPayment.id,
      shipping_id: dataShipping.id,
      address_id: dataAddress.id,
      status: 'Pending',
      total_price: totalPriceFromRedux,
    };
    createCheckoutMutation(checkoutData);
    dispatch(setResetCartItem());
    dispatch(addressReset());
    localStorage.removeItem('payment');
    localStorage.removeItem('order');
    localStorage.removeItem('shipping');
    navigate('/');
  };

  return (
    <Card className="flex flex-col gap-6 rounded-xl w-full max-w-2xl z-50 ">
      <Card.Header className="flex flex-col gap-3 items-center justify-center">
        <div className="p-4 bg-gray-200 rounded-lg">
          <CircleCheckBig className="text-blue-600 font-bold" size={30} />
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Payment Succesful</h2>
          <p className="text-center text-gray-600 font-medium">
            Thank you for your payment
          </p>
        </div>

        {/* <div className="py-3">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
            Success
          </span>
        </div> */}

        <div className="flex items-center gap-5 px-6 py-2 border border-gray-300 rounded-lg">
          <ReceiptText />
          <p className="text-gray-600 font-medium">#1945-{order?.order_id}</p>
        </div>
      </Card.Header>

      <Card.Body className="border-t-2 border-gray-200 flex flex-col gap-5 pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <Clock size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Time / Date</h2>
          </div>
          <h3>
            {new Date().toLocaleString('ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <CreditCard size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Ref Number</h2>
          </div>
          {/* static */}
          <h3>123 456 789</h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <HandCoins size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Payment Method</h2>
          </div>
          <h3>Bank Transfer</h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <Mails size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Ref Email</h2>
          </div>
          <h3>{dataUser?.email}</h3>
        </div>
      </Card.Body>

      <Card.Footer className="border-t-2 border-gray-200 flex flex-col gap-5 pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <TrendingUp size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Shipping Status</h2>
          </div>
          <div className="py-3">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
              Delivered
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <CircleDollarSign size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Amount</h2>
          </div>
          <h3> Rp {totalPriceFromRedux.toLocaleString('id-ID')}</h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <CircleDollarSign size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Fee</h2>
          </div>
          <h3>Rp. 0</h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <CircleDollarSign size={24} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Grand Total</h2>
          </div>
          <h3> Rp {totalPriceFromRedux.toLocaleString('id-ID')}</h3>
        </div>
      </Card.Footer>

      <Button
        className="text-gray-800 w-full bg-white border  hover:bg-gray-100 ease-in hover:border border-gray-500 font-medium rounded-lg px-3 py-4  cursor-pointer transition-all text-lg"
        onClick={handleDone}
      >
        Done Checkout
      </Button>
    </Card>
  );
}

export default CheckoutModal;
