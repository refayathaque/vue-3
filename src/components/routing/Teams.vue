<template>
  <h4>Teams.vue</h4>
  <router-link :to="`/teams/${team.id}`" v-for="team in teams" :key="team.id">
    {{ team.name }}
  </router-link>
  <router-view></router-view>
  <!-- used for all "/teams" child routes -->
</template>

<script>
export default {
  inject: ["teams"],
};
</script>

<style></style>
