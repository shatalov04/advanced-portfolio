import Vue from 'vue';
import VueRouter from 'vue-router';
import $axios from '../shared/requests';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some((route) => route.meta.isPublic);
  const isUserLoggedIn = store.getters['user/isUserLoggedIn'];

  try {
    if (isPublicRoute === false && isUserLoggedIn === false) {
      const token = localStorage.getItem('token');

      $axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data } = await $axios.get('/user');
      store.dispatch('user/setUser', data.user);
    }
    next();
  } catch (error) {
    router.replace('/login');

    localStorage.removeItem('token');
  }
});

export default router;
