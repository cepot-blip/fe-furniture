/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import useLogin from '../../../hooks/users/useLogin';
import { authStore } from '../../../redux/reducers/authReducer';
import authLogin from '../../../schema/auth/login';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormLogin() {
  const [loading, setLoading] = useState();
  const { login, isLoading } = useLogin();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { loginData: '', password: '', id: '' },
    validationSchema: authLogin,
    onSubmit: async (values) => {
      const payload = {
        id: values.id,
        loginData: values.loginData,
        password: values.password,
      };

      // setLoading(true);
      // try {
      //   await login(payload);
      // } catch (error) {
      //   console.error('Login error:', error.message);
      //   setLoading(false);
      // }
      dispatch(authStore(payload));
      setLoading(true);
      login(payload);
      console.log(payload);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full">
      <div>
        <Fields
          htmlFor="loginData"
          label="Email atau Nomor Telepon"
          type="text"
          name="loginData"
          id="loginData"
          value={formik.values.loginData}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Masukkan email atau nomor telepon"
          className={`block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${
            formik.errors.loginData && formik.touched.loginData
              ? 'ring-2 ring-red-500'
              : ''
          }`} // ternary
          autoComplete="off"
        />
        {formik.errors.loginData && formik.touched.loginData && (
          <small className="text-red-500 text-xs">
            {formik.errors.loginData}
          </small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="password"
          label="Password"
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your password"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.password && formik.touched.password ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.password && formik.touched.password && (
          <small className="text-red-500 text-xs">
            {formik.errors.password}
          </small>
        )}
      </div>

      <Button
        type="submit"
        className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold"
        disabled={isLoading}
      >
        {loading ? 'Loading...' : 'Login'}
      </Button>
    </form>
  );
}

export default FormLogin;
