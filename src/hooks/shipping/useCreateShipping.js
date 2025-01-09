/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { shippingService } from '../../service/shipping/shipping';

export function useCreateShipping() {
  const dispatch = useDispatch();
  const { createShipping } = shippingService(dispatch);
  const { mutate: createShippingMutation } = useMutation({
    mutationFn: async ({
      order_id,
      address_id,
      shipping_cost,
      shipping_date,
      status,
    }) => {
      await createShipping({
        order_id,
        address_id,
        shipping_cost,
        shipping_date,
        status,
      });
    },
    onSuccess: (data) => {
      console.log('Success create shipping : ', data);
    },
    onError: (error) => {
      console.log('Error create shipping : ', error);
    },
  });
  return { createShippingMutation };
}
