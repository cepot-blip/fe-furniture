/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { orderService } from '../../service/order/order';

/* eslint-disable import/prefer-default-export */
export function useCreateOrder() {
  const dispatch = useDispatch();
  const { createOrder } = orderService(dispatch);
  const { mutate: createOrderMutation } = useMutation({
    mutationFn: async ({ user_id, cart_id, total_price, status }) =>
      await createOrder({
        user_id,
        cart_id,
        total_price,
        status,
      }),
    onSuccess: (data) => {
      console.log('isi data: ', data);
    },
  });
  return { createOrderMutation };
}
