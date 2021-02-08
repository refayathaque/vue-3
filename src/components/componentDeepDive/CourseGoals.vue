<template>
  <h4>CourseGoals.vue</h4>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
  <slot name="definition"></slot>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        "Learn Vue ASAP",
        "Try and deploy something",
        "Stay abreast on all things DevOps",
      ],
    };
  },
};
</script>

<style></style>
