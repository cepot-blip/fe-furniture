/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query';

import { userService } from '../../service/user/userService';

export default function useDataUser(id) {
  const { getUserData } = userService();

  const { data: user } = useQuery({
    queryKey: ['GET_DATA_USER_ID'],
    queryFn: () => getUserData(id),
  });

  return { user }; // get 1 user: id
}
