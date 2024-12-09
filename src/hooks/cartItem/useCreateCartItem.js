/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

export function useCreateCartItem() {
  const { createCartItem } = cartItemService();

  const { mutate: createCartItemMutation } = useMutation({
    mutationFn: async ({ cart_id, product_id, quantitiy }) =>
      await createCartItem({ cart_id, product_id, quantitiy }),
  });
  return { createCartItemMutation };
}
