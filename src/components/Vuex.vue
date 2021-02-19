<template>
  <div class="container-fluid componentBorder">
    <h2>Vuex.vue</h2>
    <p>Counter value in vuex state: {{ counter }}</p>
    <p>
      Normalized counter value in vuex state (only allows greater than 0 and
      less than 100): {{ normalizedCounter }}
    </p>
    <input type="number" v-model.number="incrementAmount" />
    <button @click="incrementCounter({ value: incrementAmount })">
      Increment counter using a vuex mutation
    </button>
    <p>
      <strong>Async code</strong> need <i>actions</i> because mutations can't
      handle async
    </p>
    <div class="container-udemy buttons-group">
      <p v-if="auth">User is logged in</p>
      <p v-else>User is logged out</p>
      <button v-if="auth" @click="toggleAuth">Logout</button>
      <button v-else @click="toggleAuth">Login</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// precludes us from having to drill down into the store and ref getters like `this.$store.getters.counter` and actions like `this.$store.dispatch("incrementCounter", this.incrementAmount)`

export default {
  data() {
    return {
      incrementAmount: null,
    };
  },
  methods: {
    ...mapActions("counterModule", ["incrementCounter"]),
    ...mapActions("authModule", ["toggleAuth"]),
    // first arg is namespace of module, followed by action(s)/getter(s) in array
    // args that go into dispatching an action are name of the mutation and payload (provided above in template)
  },
  computed: {
    ...mapGetters("counterModule", ["counter", "normalizedCounter"]),
    ...mapGetters("authModule", ["auth"]),
    // `mapGetters` gets merged with the computed object using the spread (...) operator
  },
};
</script>

<style scoped>
.buttons-group {
  display: inline-block;
}
</style>
