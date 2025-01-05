/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { paymentStore } from '../../redux/reducers/paymentReducer';
import instance from '../api';

export const paymentService = (dispatch) => {
  const createPayment = async ({
    order_id,
    payment_method,
    payment_status,
    payment_date,
    amount,
  }) => {
    console.log(
      'order_id:',
      order_id,
      'payment_method:',
      payment_method,
      'payment_status:',
      payment_status,
      'payment_date:',
      payment_date,
      'amount:',
      amount,
    );
    const response = await instance.post('/payment', {
      order_id,
      payment_method,
      payment_status,
      payment_date,
      amount,
    });
    console.log('response: ', response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to create payment');
    }

    const paymentData = {
      id: response.data.data.id,
      order_id,
      payment_method,
      payment_status,
      payment_date,
      amount,
    };

    dispatch(paymentStore(paymentData));
    return response.data;
  };

  return { createPayment };
};
