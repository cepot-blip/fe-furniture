/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

function PaymentCartItem() {
  const cartItemFromRedux = useSelector((state) => state.cartItem.cartItem);
  const cartItemStore = useSelector((state) => state.cartItem.cartItemStore);

  console.log('cartItemFromRedux', cartItemFromRedux);

  return (
    <section className="w-full">
      {/* right */}
      <div className="flex flex-col gap-3 pb-5">
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
                  {/* <p className="text-sm text-gray-500">{item.category}</p> */}
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
    </section>
  );
}

export default PaymentCartItem;
