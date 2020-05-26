/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import { userId } from '../../shared/constants.json';

const baseRoute = '/skills';

const skills = {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    SET_ITEMS(state, data) {
      state.items = data;
    },
    ADD(state, skill) {
      state.items.push(skill);
    },
    UPDATE(state, skill) {
      const index = state.items.findIndex((item) => item.id === skill.id);

      if (index !== -1) {
        Vue.set(state.items, index, skill);
      }
    },
    DELETE(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
  actions: {
    async fetchSkills({ commit }) {
      try {
        const { data } = await this.$axios.get(`${baseRoute}/${userId}`);
        commit('SET_ITEMS', data);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async addSkill({ commit }, payload) {
      try {
        const { data } = await this.$axios.post(baseRoute, payload);
        commit('ADD', data);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async updateSkill({ commit }, payload) {
      try {
        const { data } = await this.$axios.post(
          `${baseRoute}/${payload.id}`,
          payload
        );
        commit('UPDATE', data.skill);
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      }
    },
    async deleteSkill({ commit }, id) {
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
    getSkill: (state) => (id) => state.items.find((item) => item.id === id),
    getSkillsByCategoryId: (state) => (id) =>
      state.items.filter((item) => item.category === id),
  },
};

export default skills;
