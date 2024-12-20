/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:9000/api_v1',
  timeout: 5000,
});

instance.interceptors.request.use(
  (conf) => {
    const token = Cookies.get('token');
    console.log('Token yang digunakan:', token);

    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
      conf.headers['Content-Type'] = 'application/json';
    }

    return conf;
  },
  (error) => Promise.reject(error),
);

export default instance;
