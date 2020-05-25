/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import { userId } from '../../shared/constants.json';

const baseRoute = '/works';

function setFormData(payload) {
  const workData = new FormData();

  workData.append('photo', payload.photo);
  workData.append('title', payload.title);
  workData.append('techs', payload.techs);
  workData.append('link', payload.link);
  workData.append('description', payload.description);

  return workData;
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
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async addWork({ commit }, payload) {
      try {
        const workData = setFormData(payload);
        const { data } = await this.$axios.post(baseRoute, workData);

        commit('ADD', data);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async updateWork({ commit }, payload) {
      try {
        const workData = setFormData(payload);
        const { data } = await this.$axios.post(
          `${baseRoute}/${payload.id}`,
          workData
        );

        console.log('data :>> ', data);
        commit('UPDATE', data.work);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async deleteWork({ commit }, id) {
      try {
        await this.$axios.delete(`${baseRoute}/${id}`);
        commit('DELETE', id);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
  },
  getters: {
    getWork: (state) => (id) => state.items.find((item) => item.id === id),
  },
};

export default works;
