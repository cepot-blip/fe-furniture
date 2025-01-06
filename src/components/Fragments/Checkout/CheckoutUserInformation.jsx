/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { CircleDollarSign } from 'lucide-react';

import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function CheckoutUserInformation() {
  const cartItemFromRedux = useSelector((state) => state.cartItem.cartItem);

  const userData = JSON.parse(localStorage.getItem('data'));
  // const shipping = useSelector((state) => state.shipping);

  const totalQuantity = cartItemFromRedux.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // console.log('shipping:', shipping);

  return (
    <div className="w-full">
      <Card className="w-full">
        <Card.Header className="">
          <div className="flex items-center gap-5 border border-gray-200 rounded-lg p-3 justify-between">
            <div className="flex items-center gap-5">
              <img
                src={`https://api.multiavatar.com/${userData?.id}.svg`}
                className="w-14 h-14"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-medium text-gray-800">
                  {userData?.email}
                </h1>
                <p className="text-md text-gray-500">{userData?.role}</p>
              </div>
            </div>

            <h2 className="underline text-blue-600 font-medium cursor-pointer">
              Change Account
            </h2>
          </div>
        </Card.Header>

        {/* <Card.Body>
          <div className="p-3">
            <h2 className="text-lg font-medium text-gray-800">
              Checkout our Products
            </h2>
          </div>
        </Card.Body> */}

        <Card.Body className="space-y-3">
          <div className="">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <CircleDollarSign size={24} className="text-gray-600" />
                <p className="text-gray-500 font-medium py-4 pl-3">
                  Total Quantity:
                </p>
              </div>
              <span className="text-blue-600 pl-2">{totalQuantity}</span>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="flex justify-center gap-8">
          <Button className="text-gray-800 w-full bg-white border border-gray-800 font-medium rounded-lg px-3 py-4  cursor-pointer transition-all text-lg">
            Continue Shopping
          </Button>

          <Button className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg px-3 py-4 hover:shadow-lg cursor-pointer transition-all text-lg">
            Payment Now
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CheckoutUserInformation;
