/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';

const baseRoute = '/categories';

const categories = {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
    ADD_CATEGORY(state, category) {
      state.categories.unshift(category);
    },
    UPDATE_CATEGORY(state, category, initialId) {
      const index = state.categories.findIndex((item) => item.id === initialId);

      if (index !== -1) {
        Vue.set(state.categories, index, category);
      }
    },
    DELETE_CATEGORY(state, id) {
      state.categories = state.categories.filter((item) => item.id !== id);
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const { data } = await this.$axios.get(baseRoute);
        commit('SET_CATEGORIES', data);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    addEmptyCategory({ commit }, newCategory) {
      commit('ADD_CATEGORY', newCategory);
    },
    async addCategory({ commit }, payload) {
      try {
        const { data } = await this.$axios.post(baseRoute, {
          title: payload.category,
        });
        const temporaryId = payload.id;
        commit('DELETE_CATEGORY', temporaryId);
        commit('ADD_CATEGORY', data);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async updateCategory({ commit }, payload) {
      try {
        const { data } = await this.$axios.post(`${baseRoute}/${payload.id}`, {
          title: payload.category,
        });
        commit('UPDATE_CATEGORY', data);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async deleteCategory({ commit }, id) {
      try {
        const isCreatedInDatabase = id >= 0;
        if (isCreatedInDatabase) {
          await this.$axios.delete(`${baseRoute}/${id}`);
        }
        commit('DELETE_CATEGORY', id);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
  },
  getters: {
    getCategory: (state) => (id) =>
      state.categories.find((item) => item.id === id),
  },
};

export default categories;
