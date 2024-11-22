/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import { useSelector } from 'react-redux';

export const useAuthStore = () => {
  const { id, name, email, password, phone_number, role, loginData, token } =
    useSelector((state) => state.auth.userAuth);

  return { id, name, email, password, phone_number, role, loginData, token };
};
