const authModule = {
  namespaced: true,
  state() {
    return {
      auth: false,
    };
  },
  actions: {
    toggleAuth({ commit }) {
      commit("toggleAuth");
    },
  },
  mutations: {
    toggleAuth(state) {
      state.auth = !state.auth;
    },
  },
  getters: {
    auth({ auth }) {
      return auth;
    },
  },
};

export default authModule;
