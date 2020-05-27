import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import routes from './routes';
import store from '../store';
import { baseUrl } from '../shared/constants.json';

Vue.use(VueRouter);

const router = new VueRouter({ routes });
const guard = axios.create({
  baseURL: baseUrl,
});

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some((route) => route.meta.isPublic);
  const isUserLoggedIn = store.getters['user/isUserLoggedIn'];
  console.log('isUserLoggedIn :>> ', isUserLoggedIn);

  try {
    if (isPublicRoute === false && isUserLoggedIn === false) {
      const token = localStorage.getItem('token');

      guard.defaults.headers.Authorization = `Bearer ${token}`;

      await store.dispatch('user/setUser', guard);
    }
    next();
  } catch (error) {
    console.error(error);
    localStorage.removeItem('token');

    next('/login');
  }
});

export default router;
