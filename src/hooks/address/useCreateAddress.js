/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-return-await */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */

import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { addressService } from '../../service/address/address';

export function useCreateAddress() {
  const dispatch = useDispatch();
  const { createAddress } = addressService(dispatch);

  const { mutate: createAddressMutation } = useMutation({
    mutationFn: async ({
      id,
      user_id,
      street,
      city,
      state,
      postal_code,
      country,
    }) =>
      await createAddress({
        id,
        user_id,
        street,
        city,
        state,
        postal_code,
        country,
      }),
    onSuccess: (data) => {
      console.log('data: ', data);
    },
  });
  return { createAddressMutation };
}
