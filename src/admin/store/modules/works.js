/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import { userId } from '../../shared/constants.json';
import errorGenerator from '../../shared/error-generator';

const baseRoute = '/works';

function setFormData(payload) {
  const result = new FormData();

  result.append('photo', payload.photo);
  result.append('title', payload.title);
  result.append('techs', payload.techs);
  result.append('link', payload.link);
  result.append('description', payload.description);

  return result;
}

const works = {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    SET_ITEMS(state, data) {
      state.items = data;
    },
    ADD(state, work) {
      state.items.push(work);
    },
    UPDATE(state, work) {
      const index = state.items.findIndex((item) => item.id === work.id);

      if (index !== -1) {
        Vue.set(state.items, index, work);
      }
    },
    DELETE(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
  actions: {
    async fetchWorks({ commit }) {
      try {
        const { data } = await this.$axios.get(`${baseRoute}/${userId}`);
        commit('SET_ITEMS', data);
      } catch (error) {
        errorGenerator(error);
      }
    },
    async addWork({ commit }, payload) {
      try {
        const formData = setFormData(payload);
        const { data } = await this.$axios.post(baseRoute, formData);

        commit('ADD', data);
      } catch (error) {
        errorGenerator(error);
      }
    },
    async updateWork({ commit }, payload) {
      try {
        const formData = setFormData(payload);
        const { data } = await this.$axios.post(
          `${baseRoute}/${payload.id}`,
          formData
        );

        commit('UPDATE', data.work);
      } catch (error) {
        errorGenerator(error);
      }
    },
    async deleteWork({ commit }, id) {
      try {
        await this.$axios.delete(`${baseRoute}/${id}`);
        commit('DELETE', id);
      } catch (error) {
        errorGenerator(error);
      }
    },
  },
  getters: {
    getWork: (state) => (id) => state.items.find((item) => item.id === id),
  },
};

export default works;
