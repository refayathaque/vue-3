<template>
  <h4>Teams.vue</h4>
  <router-link :to="`/teams/${team.id}`" v-for="team in teams" :key="team.id">
    {{ team.name }}
  </router-link>
</template>

<script>
export default {
  inject: ["teams"],
};
</script>

<style></style>
