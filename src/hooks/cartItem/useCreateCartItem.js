/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';

import { cartItemService } from '../../service/cartItem/cartItem';

export function useCreateCartItem() {
  const { CreateCartItem } = cartItemService();

  const { mutate: createCartItemMutation } = useMutation({
    mutationFn: async ({ cart_id, product_id, quantitiy }) =>
      await CreateCartItem({ cart_id, product_id, quantitiy }),
  });
  return { createCartItemMutation };
}
