<template>
  <div class="container-fluid componentBorder">
    <h2>AnimationsAndTransitions.vue</h2>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container-udemy">
      Animated modal example
      <button @click="showDialog">Show Dialog</button>
    </div>
    <div class="container-udemy">
      Transition example
      <transition>
        <!-- transition can only have one direct child. Yes, even within a nested custom component, that's why transition in the modal example above had to be moved to the base-modal component and used where there is only one direct child -->
        <p v-if="paraIsVisible">
          helloWorld
        </p>
      </transition>
      <button @click="toggleParagraph">Toggle paragraph</button>
    </div>
    <div class="container-udemy">
      Transition example 2 - can have more than one direct child element when
      you guarantee that only one element will be added to the real DOM at a
      time (must use `v-else`)
      <transition name="fade-button" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
        <button @click="hideUsers" v-else>Hide users</button>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
  },
};
</script>

<style>
/* transition classes */
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.v-leave-from,
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-leave-from,
.fade-button-enter-to {
  opacity: 1;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

/* use named transition elements when you have multiple, the default will use `.v-` prefix in classes, while named one will use class prefix corresponding to named transition element */
/* https://v3.vuejs.org/guide/transitions-enterleave.html#transitioning-single-elements-components */

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.container-udemy {
  max-width: 40rem;
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
