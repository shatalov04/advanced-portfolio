const messageModule = {
  namespaced: true,
  state: {
    message: {},
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    sendMessage({ commit }, message) {
      commit('SET_MESSAGE', message);
    },
  },
};

export default messageModule;
