/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import { userId } from '../../shared/constants.json';
import errorGenerator from '../../shared/error-generator';

const baseRoute = '/reviews';

function setFormData(payload) {
  const result = new FormData();

  result.append('photo', payload.photo);
  result.append('author', payload.author);
  result.append('occ', payload.occ);
  result.append('text', payload.text);

  return result;
}

const yells = {
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
    async fetchYells({ commit }) {
      try {
        const { data } = await this.$axios.get(`${baseRoute}/${userId}`);

        commit('SET_ITEMS', data);
      } catch (error) {
        errorGenerator(error);
      }
    },
    async addYell({ commit }, payload) {
      try {
        const formData = setFormData(payload);
        const { data } = await this.$axios.post(baseRoute, formData);

        commit('ADD', data);
      } catch (error) {
        errorGenerator(error);
      }
    },
    async updateYell({ commit }, payload) {
      try {
        const formData = setFormData(payload);
        const { data } = await this.$axios.post(
          `${baseRoute}/${payload.id}`,
          formData
        );

        commit('UPDATE', data.review);
      } catch (error) {
        errorGenerator(error);
      }
    },
    async deleteYell({ commit }, id) {
      try {
        await this.$axios.delete(`${baseRoute}/${id}`);
        commit('DELETE', id);
      } catch (error) {
        errorGenerator(error);
      }
    },
  },
  getters: {
    getYell: (state) => (id) => state.items.find((item) => item.id === id),
  },
};

export default yells;
