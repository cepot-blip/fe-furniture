/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

function PaymentCartItem() {
  const cartItemFromRedux = useSelector((state) => state.cartItem.cartItem);
  const cartItemStore = useSelector((state) => state.cartItem.cartItemStore);
  const totalPriceFromRedux = useSelector(
    (state) => state.cartItem.total_price,
  );

  console.log('cartItemFromRedux', cartItemFromRedux);

  const totalQuantity = cartItemFromRedux.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <section className="w-full flex flex-col">
      {/* right */}
      <div className="flex flex-col gap-3 p-5 border border-gray-200 rounded-lg overflow-hidden">
        <div className="border-b-2 mb-5">
          <h1 className="text-xl font-semibold text-gray-800 mb-5">
            Your cart item
          </h1>
        </div>
        {cartItemFromRedux.length > 0 ? (
          cartItemFromRedux.map((item) => {
            const cartItemFromStore = cartItemStore.find(
              (cartItem) => cartItem.product_id === item.id,
            );
            if (!cartItemFromStore) return null;

            return (
              <Card
                key={item.id}
                className="w-full py-2 px-5 flex border border-gray-300 rounded-lg items-center justify-between"
              >
                <Card.Header>
                  <img
                    src={item.image_url}
                    className="w-36 h-36 p-3"
                    alt={item.name}
                  />
                </Card.Header>
                <Card.Body className="flex flex-col max-w-sm">
                  <h2 className="font-medium max-w-[180px]">{item.name}</h2>
                </Card.Body>
                <Card.Body className="text-normal text-gray-500">
                  <h3>Rp. {cartItemFromStore.subtotal_price}</h3>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No Data Available</p>
        )}
      </div>

      {/* cart summary */}
      {cartItemFromRedux.length > 0 && (
        <div className="mt-6 w-[100%] flex justify-end">
          <Card className="p-6 w-[80%] bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Cart Summary
            </h1>

            <Card.Body className="space-y-3">
              <div className="border-b-gray-300 border-b-4">
                {cartItemFromRedux.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3"
                  >
                    <p className="text-md font-medium text-gray-700">
                      {item.name}
                    </p>
                    <p className="text-gray-500">
                      x <span className="text-lg">{item.quantity}</span>
                    </p>
                  </div>
                ))}
                <p className="text-end font-semibold py-4 pr-3">
                  Total Quantity:
                  <span className="text-blue-600 pl-2">{totalQuantity}</span>
                </p>
              </div>
            </Card.Body>

            <Card.Footer className="mt-5 text-lg font-bold text-gray-800">
              <p className="text-end">
                Rp {totalPriceFromRedux.toLocaleString('id-ID')}
              </p>
            </Card.Footer>
          </Card>
        </div>
      )}
    </section>
  );
}

export default PaymentCartItem;
