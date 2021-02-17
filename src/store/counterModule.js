const counterModule = {
  namespaced: true,
  state() {
    // will remain local in the module, i.e., this state object is inaccessible to other modules, but, if you really need another module's state you can access - https://vuex.vuejs.org/guide/modules.html#accessing-global-assets-in-namespaced-modules
    return {
      counter: 0,
    };
  },
  actions: {
    incrementCounter({ commit }, payload) {
      // first arg is `context`, destructured here, `context` also provides `dispatch` to invoke other actions and `getters` to get data
      // can have same name as corresponding mutation
      commit("incrementCounter", payload); // calls corresponding mutation below
    },
  },
  mutations: {
    incrementCounter(state, { value }) {
      // destructuring `state` doesn't work, not sure why
      state.counter = state.counter + value;
    },
  },
  getters: {
    counter({ counter }) {
      // first arg is `state`, destructured here
      return counter;
    },
    normalizedCounter(_, { counter }) {
      // second arg is `getters`, destructured here
      // having access to other getters helpful if value here is dependent on others
      if (counter < 0) {
        return 0;
      } else if (counter > 100) {
        return 100;
      } else {
        return counter;
      }
    },
  },
};

export default counterModule;
