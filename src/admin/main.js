import '../styles/main-admin.pcss';

import Vue from 'vue';
import App from './App.vue';

import store from './store';
import router from './router';

// eslint-disable-next-line no-new
new Vue({
  el: '#app-root',
  render: (h) => h(App),
  store,
  router,
});
