import '../styles/main-admin.pcss';
import Vue from 'vue';
import SimpleVueValidator from 'simple-vue-validator';
import App from './App.vue';

import router from './router';
import store from './store';
import $axios from './shared/requests';

store.$axios = $axios;
Vue.use(SimpleVueValidator);

// eslint-disable-next-line no-new
new Vue({
  el: '#app-root',
  render: (h) => h(App),
  store,
  router,
});
