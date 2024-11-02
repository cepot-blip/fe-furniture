/* eslint-disable operator-linebreak */
import * as yup from 'yup';

const MATCHES_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const authLogin = yup.object().shape({
  username: yup
    .string()
    .min(6, 'Username harus diisi minimal 6 karakter huruf')
    .required('Username harus diisi, ini digunakan untuk public profile'),
  email: yup
    .string()
    .email('Masukan email yang valid')
    .required('Email harus diisi'),
  password: yup
    .string()
    .matches(
      MATCHES_PASSWORD,
      'Password harus diisi minimal 8 karakter dan mengandung huruf, angka dan simbol',
    )
    .required('Password harus diisi'),
});
export default authLogin;
