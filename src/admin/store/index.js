import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    categories,
  },
});

export default store;
