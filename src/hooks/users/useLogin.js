/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-return-await */
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Notiflix from 'notiflix';

import { userService } from '../../service/user/userService';

export default function useLogin() {
  const navigate = useNavigate();
  const { loginUser } = userService(); // mutasi data loginUser service

  const {
    mutate: login,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: ({ loginData, password }) => loginUser({ loginData, password }), // memberikan efek response dari server

    onSuccess: () => {
      console.log('Berhasil Login');
      Notiflix.Notify.success('Login berhasil! Selamat datang');
      navigate('/home');
    },
    onError: (error) => {
      console.error('Terdapat kesalahan saat login user:', error);
      Notiflix.Notify.failure(
        'Terjadi kesalahan, Mohon periksa kembali data anda dan refresh kembali',
      );
    },
  });

  return { login, isLoading, isError };
}
