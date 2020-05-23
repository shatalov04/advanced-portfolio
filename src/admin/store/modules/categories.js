/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';

const categories = {
  state: {
    categories: [],
  },
  mutations: {
    addCategory(state, category) {
      state.categories.unshift(category);
    },
    changeCategory(state, category) {
      const index = state.categories.findIndex(
        (item) => item.id === category.id
      );

      if (index !== -1) {
        Vue.set(state.categories, index, category);
      }
    },
    deleteCategory(state, category) {
      state.categories = state.categories.filter(
        (item) => item.id !== category.id
      );
    },
  },
  actions: {},
  getters: {
    getCategory: (state) => (id) =>
      state.categories.find((item) => item.id === id),
  },
};

export default categories;
