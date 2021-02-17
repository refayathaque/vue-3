import { createStore } from "vuex";
import counterModule from './counterModule'
import authModule from './authModule'

const store = createStore({
  modules: {
    counterModule,
    authModule,
    // good practice to use namespacing for modules, can deal with name clashes in actions/mutations/getters in different modules
    // https://vuex.vuejs.org/guide/modules.html#namespacing
  },
});

export default store;