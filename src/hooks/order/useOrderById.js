import { useQuery } from '@tanstack/react-query';

import { orderService } from '../../service/order/order';

export default function useOrderById(id) {
  const { orderById } = orderService();
  const {
    data: orderId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['orderId', id],
    queryFn: () => orderById(id),
    enabled: !!id,
  });

  return { orderId, isLoading, isError };
}
