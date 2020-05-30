import axios from 'axios';
import { baseUrl } from './constants.json';

const tokenFromStorage = localStorage.getItem('token');
console.log('tokenFromStorage :>> ', tokenFromStorage);
const requests = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${tokenFromStorage}`,
  },
});

requests.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('interceptor error :>> ', error);
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const response = await requests.post('/refreshToken');
      const { token } = response.data;

      localStorage.setItem('token', token);
      requests.defaults.headers.Authorization = `Bearer ${token}`;
      originalRequest.headers.Authorization = `Bearer ${token}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default requests;
