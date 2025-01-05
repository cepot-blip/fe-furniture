/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { shippingStore } from '../../redux/reducers/shippingReducer';
import instance from '../api';

export const shippingService = (dispatch) => {
  const createShipping = async ({
    order_id,
    address_id,
    shipping_cost,
    shipping_date,
    status,
  }) => {
    console.log(
      'order_id: ',
      order_id,
      'address_id: ',
      address_id,
      'shipping_cost: ',
      shipping_cost,
      'shipping_date: ',
      shipping_date,
      'status: ',
      status,
    );
    const response = await instance.post('/shipping', {
      order_id,
      address_id,
      shipping_cost,
      shipping_date,
      status,
    });
    console.log('response: ', response.data);
    const shipping_id = response.data.data.id;
    dispatch(shippingStore({ shipping_id }));

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed create shipping');
    }
    return response.data;
  };
  return { createShipping };
};
