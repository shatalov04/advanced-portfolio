import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    categories,
  },
});

export default store;
