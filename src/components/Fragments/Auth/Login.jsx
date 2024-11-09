/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import useLogin from '../../../hooks/users/useLogin';
import authLogin from '../../../schema/auth/login';
import Button from '../../Elements/Button/Button';
import Fields from '../../Elements/Fields';

function FormLogin() {
  const { login, isLoading, isError } = useLogin();

  const [loading, setLoading] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      phone_number: '',
      password: '',
    },
    validationSchema: authLogin,
    onSubmit: async (values) => {
      const payload = {
        // payload ke server
        loginData: values.email || values.phone_number,
        password: values.password,
      };

      login(payload);
      setLoading(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full">
      <div>
        <Fields
          htmlFor="email"
          label="Email"
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
          className={`block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.email && formik.touched.email ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.email && formik.touched.email && (
          <small className="text-red-500 text-xs">{formik.errors.email}</small>
        )}
      </div>

      <div>
        <Fields
          htmlFor="phone_number"
          label="Phone Number"
          type="text"
          name="phone_number"
          id="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your Phone Number"
          className={`block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm ${formik.errors.phone_number && formik.touched.phone_number ? 'ring-2 ring-red-500' : ''}`}
          autoComplete="off"
        />
        {formik.errors.phone_number && formik.touched.phone_number && (
          <small className="text-red-500 text-xs">
            {formik.errors.phone_number}
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
