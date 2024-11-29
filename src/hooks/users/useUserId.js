/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query';

import { userService } from '../../service/user/user';

export default function useUserId(id) {
  const { getUserById } = userService();

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['GET_DATA_USER_ID', id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });

  return { user, error, isLoading };
}
