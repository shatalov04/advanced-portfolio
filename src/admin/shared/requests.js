import axios from 'axios';
import { baseUrl } from './constants.json';

const token = localStorage.getItem('token');

if (!token) {
  console.warn('Token is not found!');
}

const $axios = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default $axios;
