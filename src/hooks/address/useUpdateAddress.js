/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { useMutation } from '@tanstack/react-query';

import { addressService } from '../../service/address/address';

export function useUpdateAddress() {
  const { updateAddress } = addressService();
  const { mutate: updateAddressMutation } = useMutation({
    mutationFn: async ({
      id,
      user_id,
      street,
      city,
      state,
      postal_code,
      country,
    }) =>
      await updateAddress({
        id,
        user_id,
        street,
        city,
        state,
        postal_code,
        country,
      }),
    onSuccess: (data) => {
      console.log('Update Address Successfully', data);
    },
  });
  return { updateAddressMutation };
}
