/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trash } from 'lucide-react';

import { useUpdateCart } from '../../../hooks/cart/useUpdateCart';
import { useDeleteCartItem } from '../../../hooks/cartItem/useDeleteCartItem';
import { useUpdateCartItem } from '../../../hooks/cartItem/useUpdateCartItem';
import {
  decreaseCartItem,
  decreaseCartItemStore,
  increaseCartItem,
  increaseCartItemStore,
} from '../../../redux/reducers/cartItemReducer';
import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function AddressCartItem() {
  const dispatch = useDispatch();
  const { updateCartItemMutation } = useUpdateCartItem(dispatch);
  const { deleteCartItemMutation } = useDeleteCartItem(dispatch);
  const { updateCartMutation } = useUpdateCart(dispatch);
  const user_id = JSON.parse(localStorage.getItem('data')).id;
  const totalPriceFromRedux = useSelector(
    (state) => state.cartItem.total_price,
  );
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
        user_id,
        total_price: totalPriceFromRedux,
      });
      console.log(' isi updateCartItemMutation', updateCartItemMutation);
      console.log('isi item price', cartItem.price);
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
  const cartItemFromRedux = useSelector((state) => state.cartItem.cartItem);
  const cartItemStore = useSelector((state) => state.cartItem.cartItemStore);
  return (
    <section className="w-full pt-5">
      <div className="flex flex-col gap-3 pb-5">
        {cartItemFromRedux.map((item) => {
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
                  className="w-36 h-36"
                  alt={item.name}
                />
              </Card.Header>
              <Card.Body className="flex flex-col">
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.category}</p>
              </Card.Body>

              <Card.Body className="text-normal text-gray-500">
                <h3>Rp. {cartItemFromStore.subtotal_price}</h3>
              </Card.Body>

              <Card.Footer className="flex gap-3 flex-col items-center">
                <div className="flex items-center gap-4 border border-gray-300 rounded-md py-1 px-3">
                  <Button
                    onClick={() => {
                      handleUpdateCartItem(cartItemFromStore, false);
                      dispatch(decreaseCartItemStore(item.id));
                      dispatch(decreaseCartItemStore(cartItemFromStore.id));
                    }}
                  >
                    -
                  </Button>
                  <span className="text-sm">{item.quantity}</span>
                  <Button
                    onClick={() => {
                      handleUpdateCartItem(cartItemFromStore, true);
                      dispatch(increaseCartItem(item.id));
                      dispatch(increaseCartItemStore(cartItemFromStore.id));
                    }}
                  >
                    +
                  </Button>
                </div>

                {/* Hapus atau aktifkan tombol Trash jika diperlukan */}
                {/* <Trash className="w-5 h-5 cursor-pointer hover:text-red-600 transition-all" onClick={() => handleDeleteFromCart(item.id)} /> */}
                {/* <p className="text-normal text-gray-500">Remove</p> */}
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default AddressCartItem;
