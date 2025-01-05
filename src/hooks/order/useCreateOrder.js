/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { orderService } from '../../service/order/order';

export function useCreateOrder() {
  const dispatch = useDispatch();
  const { createOrder } = orderService(dispatch);

  const { mutate: createOrderMutation } = useMutation({
    mutationFn: async ({ user_id, cart_id, total_price, status }) => {
      console.log('Call req order body:', {
        user_id,
        cart_id,
        total_price,
        status,
      });
      return await createOrder({ user_id, cart_id, total_price, status });
    },
    onSuccess: (data) => {
      console.log('Order created successfully, API response:', data);
    },
    onError: (error) => {
      console.error('Error during createOrderMutation:', error);
    },
  });

  return { createOrderMutation };
}
