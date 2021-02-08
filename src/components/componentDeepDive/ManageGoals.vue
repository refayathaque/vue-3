<template>
  <h4>ManageGoals.vue</h4>
  <input type="text" v-model="goal" />
  <button @click="setGoal()" type="button" class="btn btn-outline-success">
    Set goal
  </button>
  <p>
    keep dynamic components "alive" to retain the input data (i.e., component
    data is cached by Vue)
  </p>
  <teleport to="body">
    <modal v-if="inputIsInvalid">
      <p class="text-danger">Input is invalid, enter characters</p>
      <button
        @click="confirmError()"
        type="button"
        class="btn btn-outline-primary"
      >
        Okay
      </button>
    </modal>
  </teleport>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      goal: "",
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      if (this.goal === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = !this.inputIsInvalid;
    },
  },
};
</script>

<style></style>
