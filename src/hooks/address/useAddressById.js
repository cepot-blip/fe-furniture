import { useQuery } from '@tanstack/react-query';

import { addressService } from '../../service/address/address';

export default function useAddressById(id) {
  const { addressById } = addressService();
  const {
    data: addressId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['addressId', id],
    queryFn: () => addressById(id),
    enabled: !!id,
  });

  return { addressId, isLoading, isError };
}
