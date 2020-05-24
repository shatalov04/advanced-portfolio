import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import skills from './modules/skills';
import works from './modules/works';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    categories,
    skills,
    works,
  },
});

export default store;
