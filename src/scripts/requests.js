import axios from 'axios';
import { baseUrl } from '../admin/shared/constants.json';

const $axios = axios.create({
  baseURL: baseUrl,
});

export default $axios;
