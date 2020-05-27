import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import skills from './modules/skills';
import works from './modules/works';
import yells from './modules/yells';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    categories,
    skills,
    works,
    yells,
    user,
  },
});

export default store;
