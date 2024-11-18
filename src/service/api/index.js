import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api_v1',
  timeout: 5000, // res 5 detik
});

export default instance;
