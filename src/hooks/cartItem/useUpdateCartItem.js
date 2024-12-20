/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

export function useUpdateCartItem() {
  const { updateCartItem } = cartItemService();
  const { mutate: updateCartItemMutation } = useMutation({
    mutationFn: async ({ id, cart_id, product_id, quantity, subtotal_price }) =>
      await updateCartItem({
        id,
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      }),
    onSuccess: (data) => {
      console.log('Data updated successfully:', data);
    },
  });
  return { updateCartItemMutation };
}
