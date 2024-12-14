/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

// eslint-disable-next-line no-unused-vars
export function useCreateCartItem() {
  const { createCartItem } = cartItemService();

  const { mutate: createCartItemMutation } = useMutation({
    mutationFn: async ({ cart_id, product_id, quantity, subtotal_price }) =>
      await createCartItem({ cart_id, product_id, quantity, subtotal_price }),
  });

  return { createCartItemMutation };
}
