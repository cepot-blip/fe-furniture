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
    const response = await instance.post('/shipping', {
      order_id,
      address_id,
      shipping_cost,
      shipping_date,
      status,
    });
    console.log('response: ', response.data);
    const dataShipping = {
      id: response.data.data.id,
      order_id: response.data.data.order_id,
      address_id: response.data.data.address_id,
      shipping_cost: response.data.data.shipping_cost,
      shipping_date: response.data.data.shipping_date,
      status: response.data.data.status,
    };
    dispatch(shippingStore(dataShipping));

    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed create shipping');
    }
    return response.data;
  };
  return { createShipping };
};
