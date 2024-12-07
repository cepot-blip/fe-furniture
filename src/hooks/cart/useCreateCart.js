/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';

import { cartService } from '../../service/cart/cart';

export function useCreateCart() {
  const { createCart } = cartService();

  const { mutate: createCartMutation } = useMutation({
    mutationFn: async ({ user_id, total_price }) => {
      console.log(
        'Creating cart for user:',
        user_id,
        'with total price:',
        total_price,
      );

      return await createCart({ user_id, total_price });
    },
  });
  return { createCartMutation };
}
