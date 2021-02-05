<template>
  <h1>App.vue</h1>
  <body-wrapper></body-wrapper>
</template>

<script>
import BodyWrapper from './components/BodyWrapper.vue';
export default {
  components: { BodyWrapper },
  name: "App",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

h1, h2, h3 {
  font-family: 'Yellowtail', cursive;
}
</style>