/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { paymentService } from '../../service/payment/payment';

export function useCreatePayment() {
  const dispatch = useDispatch();
  const { createPayment } = paymentService(dispatch);

  const { mutate: createPaymentMutation } = useMutation({
    mutationFn: async ({
      order_id,
      payment_method,
      payment_status,
      payment_date,
      amount,
    }) =>
      await createPayment({
        order_id,
        payment_method,
        payment_status,
        payment_date,
        amount,
      }),
    onSuccess: (data) => console.log('Success Create Payment: ', data),
    onError: (error) => console.log('Error Create Payment: ', error),
  });
  return { createPaymentMutation };
}
