/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
const baseRoute = '/user';

const userModule = {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT_USER(state) {
      state.user = {};
    },
  },
  actions: {
    async setUser({ commit }, guard) {
      const { data } = await guard.get(`${baseRoute}`);

      commit('SET_USER', data.user);
    },
    async logout({ commit }) {
      try {
        await this.$axios.post('/logout');
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      } finally {
        commit('LOGOUT_USER');
        localStorage.removeItem('token');
      }
    },
  },
  getters: {
    isUserLoggedIn: ({ user }) => {
      const userObjectIsEmpty = Object.keys(user).length === 0 && user.constructor === Object;
      return userObjectIsEmpty === false;
    },
  },
};

export default userModule;
