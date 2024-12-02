/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import Notiflix from 'notiflix';

import { cartService } from '../../service/cart/cart';

export function useCreateCart() {
  const { createCart } = cartService;

  const { mutate: createCartMutation } = useMutation({
    mutationFn: async ({ user_id, total_price }) =>
      await createCart({
        user_id,
        total_price,
      }),
    onSuccess: (data) => {
      Notiflix.Notify.success('Cart berhasil dibuat!');
      console.log('Create cart success:', data);
    },
    onError: (error) => {
      Notiflix.Notify.failure(
        error.message || 'Gagal membuat cart. Periksa kembali data Anda!',
      );
      console.error('Error creating cart:', error);
    },
  });
  return { createCartMutation };
}
