import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import skills from './modules/skills';
import works from './modules/works';
import yells from './modules/yells';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    categories,
    skills,
    works,
    yells,
  },
});

export default store;
