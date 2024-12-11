/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { cartItemService } from '../../service/cartItem/cartItem';

export function useCreateCartItem() {
  const { createCartItem } = cartItemService();

  const { mutate: createCartItemMutation } = useMutation({
    mutationFn: async ({ cart_id, product_id, quantitiy, subtotal_price }) =>
      await createCartItem({
        cart_id,
        product_id,
        quantitiy,
        subtotal_price,
      }),

    onSuccess: (data) => {
      Notiflix.Notify.success('Produk berhasil dibuat!');
      console.log('Create product success:', data);
    },

    onError: (error) => {
      Notiflix.Notify.failure(
        error.message || 'Gagal membuat cart item. Periksa kembali data Anda!',
      );
      console.log('Error creating cart item', error.message);
    },
  });

  return { createCartItemMutation };
}
