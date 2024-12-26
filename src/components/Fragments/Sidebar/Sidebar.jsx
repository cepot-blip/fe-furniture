/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Trash } from 'lucide-react';

import { useCreateCart } from '../../../hooks/cart/useCreateCart';
import { useDeleteCart } from '../../../hooks/cart/useDeleteCart';
import { useUpdateCart } from '../../../hooks/cart/useUpdateCart';
import { useCreateCartItem } from '../../../hooks/cartItem/useCreateCartItem';
import { useDeleteCartItem } from '../../../hooks/cartItem/useDeleteCartItem';
import { useUpdateCartItem } from '../../../hooks/cartItem/useUpdateCartItem';
import useUserId from '../../../hooks/users/useUserId';
import {
  decreaseCartItem,
  decreaseCartItemStore,
  deleteCartItem,
  deleteCartItemStore,
  increaseCartItem,
  increaseCartItemStore,
} from '../../../redux/reducers/cartItemReducer';
import { setProductAddToCart } from '../../../redux/reducers/productReducer';
import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function Sidebar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createCartMutation } = useCreateCart();
  const { deleteCartItemMutation } = useDeleteCartItem(dispatch);
  const { updateCartItemMutation } = useUpdateCartItem(dispatch);
  const { updateCartMutation } = useUpdateCart(dispatch);
  const { getUserByIdMutation } = useUserId(dispatch);
  const { isVisible, onClose } = props;

  const cartItemFromRedux = useSelector((state) => state.cartItem.cartItem);

  const cartFromRedux = useSelector((state) => state.cart.cart);
  const cartItemStore = useSelector((state) => state.cartItem.cartItemStore);
  const totalPriceFromRedux = useSelector(
    (state) => state.cartItem.total_price,
  );
  const data = JSON.parse(localStorage.getItem('data'));
  const handleToCart = async () => {
    // await createCartItemMutation();
    await createCartMutation();
    await getUserByIdMutation(data.id);
    console.log('createCartItemMutation', createCartMutation);

    dispatch(setProductAddToCart());

    onClose();

    navigate('/address-pages', { replace: true });
  };
  const handleUpdateCartItem = async (item, increment) => {
    const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity < 1) {
      handleDeleteFromCart(item.id);
      return;
    }
    try {
      updateCartItemMutation({
        id: item.id,
        cart_id: item.cart_id,
        product_id: item.product_id,
        quantity: newQuantity,
        subtotal_price: item.subtotal_price,
      });
      updateCartMutation({
        id: item.cart_id,
        user_id: data.id,
        total_price: totalPriceFromRedux,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFromCart = async (id) => {
    try {
      const cartItemToDelete = cartItemStore.find((item) => item.id === id);
      if (cartItemToDelete) {
        await deleteCartItemMutation({ id: cartItemToDelete.id });
        dispatch(deleteCartItem(cartItemToDelete.id));
        console.log(`CartItem dengan id ${id} berhasil dihapus.`);
      } else {
        console.warn(
          `CartItem dengan id ${id} tidak ditemukan di cartItemStore.`,
        );
      }
    } catch (error) {
      console.error('Gagal menghapus CartItem:', error);
    }
  };
  console.log('cartItemFromRedux', cartItemFromRedux);
  console.log('cartFromRedux', cartFromRedux);
  console.log('cartItemStore', cartItemStore);
  console.log(totalPriceFromRedux);

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[25%] bg-white shadow-xl text-gray-800 transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
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
          {cartItemFromRedux.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              <h1 className="text-lg font-medium">No Product Found</h1>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto">
              {cartItemFromRedux.map((item) => {
                const cartItemFromStore = cartItemStore.find(
                  (storeItem) => storeItem.product_id === item.id,
                );
                if (!cartItemFromStore) return null;

                return (
                  <Card
                    key={cartItemFromStore.id}
                    className="border border-gray-300 rounded-md mb-4 flex py-3 px-2"
                  >
                    <Card.Header className="w-1/3 rounded-lg overflow-hidden shadow-sm">
                      <img
                        src={item.image_url}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </Card.Header>
                    <Card.Body className="flex-grow px-4">
                      <h4 className="font-medium text-lg text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>

                      <Card.Footer className="flex justify-between items-center mt-4">
                        <div className="flex gap-3 items-center bg-gray-100 rounded-md border border-gray-300 py-1 px-3">
                          <Button
                            className="py-1 px-2 rounded-md text-gray-800 hover:bg-gray-200"
                            onClick={() => {
                              handleUpdateCartItem(cartItemFromStore, false);
                              dispatch(decreaseCartItem(item.id));
                              dispatch(
                                decreaseCartItemStore(cartItemFromStore.id),
                              );
                            }}
                          >
                            -
                          </Button>
                          <p className="text-gray-700">{item.quantity}</p>
                          <Button
                            className="py-1 px-2 rounded-md text-gray-800 hover:bg-gray-200"
                            onClick={() => {
                              handleUpdateCartItem(cartItemFromStore, true);
                              dispatch(increaseCartItem(item.id));
                              dispatch(
                                increaseCartItemStore(cartItemFromStore.id),
                              );
                            }}
                          >
                            +
                          </Button>
                        </div>

                        <Button
                          className="text-red-500 hover:text-red-700 transition-colors"
                          onClick={() => {
                            handleDeleteFromCart(cartItemFromStore.id);
                            dispatch(deleteCartItem(item.id));
                            dispatch(deleteCartItemStore(cartItemFromStore.id));
                          }}
                        >
                          <Trash className="w-5 h-5" />
                        </Button>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* cta checkout */}
        {cartItemFromRedux.length > 0 && (
          <div className="p-4 border-t-2 border-gray-300 flex flex-col gap-3">
            <div className="p-4 flex flex-col gap-3">
              <h3 className="mb-2 text-lg font-semibold">
                Total: Rp {totalPriceFromRedux.toLocaleString('id-ID')}
              </h3>
              <Button
                className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-lg px-5 py-3 hover:shadow-lg cursor-pointer transition-all"
                onClick={handleToCart}
              >
                Continue to delivery address
              </Button>
              <Button className="w-full rounded-lg px-5 py-3 border border-gray-800 hover:bg-gray-100 transition-all cursor-pointer font-medium">
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
