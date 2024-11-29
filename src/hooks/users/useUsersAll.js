import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

import { userService } from '../../service/user/user';

export default function useUserAll() {
  const dispatch = useDispatch();
  const { getAllUsers } = userService(dispatch);

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });

  return { users, isLoading, isError };
}
