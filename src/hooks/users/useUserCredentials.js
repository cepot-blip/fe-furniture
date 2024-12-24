/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

import { userService } from '../../service/user/user';

export default function useCredentialsData() {
  const token = useSelector((state) => state.auth.userAuth.loginData);

  const dispatch = useDispatch();

  const { getAllUsers } = userService(dispatch);

  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['allusers'],
    queryFn: () => getAllUsers(),
    enabled: !!token,
  });

  console.log(users);
  console.log(error);

  return { users, error, isLoading };
}
