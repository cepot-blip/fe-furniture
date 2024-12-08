/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-return-await */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { userService } from '../../service/user/user';

export default function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginUser } = userService(dispatch);

  const {
    mutate: login,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: async ({ loginData, password }) =>
      await loginUser({
        loginData,
        password,
      }),

    onSuccess: async (data) => {
      console.log('Berhasil Login', data);
      Notiflix.Notify.success('Login berhasil! Selamat datang');
      navigate('/home');
    },

    onError: (error) => {
      console.error('Terdapat kesalahan saat login user:', error.message);
      Notiflix.Notify.failure(error.message);
    },
  });

  return { login, isLoading, isError };
}
