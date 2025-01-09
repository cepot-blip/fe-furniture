/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { useMutation } from '@tanstack/react-query';

import { checkoutService } from '../../service/checkout/checkout';

export function useCreateCheckout() {
  const { createCheckout } = checkoutService();
  const { mutate: createCheckoutMutation } = useMutation({
    mutationFn: async ({
      user_id,
      cart_id,
      payment_id,
      shipping_id,
      address_id,
      status,
      total_price,
    }) =>
      await createCheckout({
        user_id,
        cart_id,
        payment_id,
        shipping_id,
        address_id,
        status,
        total_price,
      }),
    onSuccess: (data) => {
      console.log('Checkout created successfully, API response:', data);
    },
    onError: (error) => {
      console.error('Error during createCheckoutMutation:', error);
    },
  });
  return { createCheckoutMutation };
}
