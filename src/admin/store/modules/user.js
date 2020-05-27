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
      console.log('logout user :>> ');
      state.user = {};
    },
  },
  actions: {
    async login(store, token) {
      localStorage.setItem('token', token);
      this.$axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    async setUser({ commit }, guard) {
      const { data } = await guard.get(`${baseRoute}`);

      commit('SET_USER', data.user);
      console.log('data :>> ', data);
    },
    async logout({ commit }) {
      console.log('logout :>> ');
      try {
        localStorage.removeItem('token');
        await this.$axios.post('/logout');
      } catch (error) {
        const errorData = error.response.data;
        console.error(errorData.error || errorData.message);
      } finally {
        commit('LOGOUT_USER');
      }
    },
  },
  getters: {
    isUserLoggedIn: ({ user }) => {
      console.log('user :>> ', user);
      const userObjectIsEmpty = Object.keys(user).length === 0 && user.constructor === Object;
      return userObjectIsEmpty === false;
    },
  },
};

export default userModule;
