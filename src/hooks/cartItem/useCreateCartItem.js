/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import { useMutation } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

export function useCreateCartItem() {
  const { createCartItem } = cartItemService();

  const { mutate: createCartItemMutation } = useMutation({
    mutationFn: async ({ cart_id, product_id, quantity, subtotal_price }) => {
      console.log(
        'createCartItemMutation',
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      );
      return await createCartItem({
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      });
    },
    onSuccess: (data) => {
      console.log('Cart item created successfully:', data);
    },
    onError: (error) => {
      console.error('Error creating cart item:', error);
    },
  });

  return { createCartItemMutation };
}
