/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react-hooks/rules-of-hooks */

import { useMutation } from '@tanstack/react-query';

import { cartService } from '../../service/cart/cart';
/* eslint-disable no-undef */
export function useUpdateCart() {
  const { updateCart } = cartService();
  const { mutate: updateCartMutation } = useMutation({
    mutationFn: async ({ id, user_id, total_price }) =>
      await updateCart({ id, user_id, total_price }),
    onSuccess: (data) => {
      console.log('Update cart successfully', data);
    },
  });
  return { updateCartMutation };
}
