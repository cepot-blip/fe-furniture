/* eslint-disable camelcase */
import * as yup from 'yup';

const MATCHES_PASSWORD = /^[a-zA-Z0-9]+$/;

const authLogin = yup.object().shape({
  loginData: yup
    .string()
    .required('Email atau nomor telepon harus diisi')
    .test(
      'emailOrPhone',
      'Masukkan email yang valid atau nomor telepon yang diawali dengan 08 atau 628',
      (value) => {
        const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phone_number = /^(08|628)\d+$/;
        return email.test(value) || phone_number.test(value);
      },
    ),
  password: yup
    .string()
    .matches(MATCHES_PASSWORD, 'Password harus mengandung huruf dan angka saja')
    .min(8, 'Password harus diisi minimal 8 karakter')
    .required('Password harus diisi'),
});

export default authLogin;
