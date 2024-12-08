/* eslint-disable no-multiple-empty-lines */
/* eslint-disable arrow-spacing */
/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trash } from 'lucide-react';
import { setProductAddToCart } from '../../../redux/reducers/productReducer';
import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

import { deleteCartItem } from '../../../redux/reducers/cartItemReducer';

function Sidebar(props) {
  const { isVisible, onClose } = props;
  const dispatch = useDispatch();

  const cartItemFromRedux = useSelector((state) => state.cartItem.cartItem);

  const cartFromRedux = useSelector((state) => state.cart.cart);
  const totalPriceFromRedux = useSelector(
    (state) => state.cartItem.total_price,
  );
  console.log('cartItemFromRedux', cartItemFromRedux);
  console.log('cartFromRedux', cartFromRedux);
  console.log(totalPriceFromRedux);
  const insertToCart = () => {
    dispatch(setProductAddToCart());
  };

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[25%] bg-white shadow-xl text-gray-800 transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-10`}
    >
      <div className="w-full h-full flex flex-col">
        {/*  header sidebar */}
        <div className="p-6 flex justify-between items-center border-b-2 border-gray-300">
          <h2 className="text-xl font-semibold">Cart</h2>
          <Button className="text-red-500 text-xs" onClick={onClose}>
            Close
          </Button>
        </div>

        {/* content cart */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow overflow-y-auto">
            {cartItemFromRedux.map((item) => (
              <Card
                key={item.cart_id}
                className="border-b border-gray-300 py-4 flex gap-4"
              >
                <Card.Header className="w-24 h-24">
                  <img
                    src={item.image_url}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Card.Header>

                <Card.Body className="flex-grow">
                  <h4 className="font-medium text-lg">{item.name}</h4>
                  <p className="text-gray-600">
                    Rp {item.price.toLocaleString('id-ID')}
                  </p>
                  <p>Jumlah: {item.quantity}</p>
                  <Button
                    className="text-white text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded-lg"
                    onClick={() => dispatch(deleteCartItem(item.id))}
                  >
                    Hapus
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* cta checkout */}
        <div className="p-4 border-t-2 border-gray-300">
          <h3 className="mb-2 text-lg font-semibold">
            Total: Rp {totalPriceFromRedux.toLocaleString('id-ID')}
          </h3>
          <Button
            className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-5 py-3  hover:shadow-lg cursor-pointer"
            onClick={insertToCart}
          >
            Checkout Now
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
