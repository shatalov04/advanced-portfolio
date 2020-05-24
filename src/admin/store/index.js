import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import skills from './modules/skills';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    categories,
    skills,
  },
});

export default store;
