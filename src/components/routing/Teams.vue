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
  data() {
    return {
      teams: [
        { id: "t1", name: "Manchested United", members: ["u2", "u8"] },
        { id: "t2", name: "Liverpool", members: ["u3", "u4", "u5"] },
        { id: "t3", name: "Chelsea", members: ["u6", "u7"] },
        { id: "t4", name: "Everton", members: ["u1"] },
      ],
      users: [
        { id: "u1", fullName: "Richarlison", role: "Striker" },
        { id: "u2", fullName: "Bruno Fernandes", role: "Midfielder" },
        { id: "u3", fullName: "Bobby Firmino", role: "Striker" },
        { id: "u4", fullName: "Sadio Mane", role: "Midfielder" },
        { id: "u5", fullName: "Joel Matip", role: "Defender" },
        { id: "u6", fullName: "Christian Pulisic", role: "Midfielder" },
        { id: "u7", fullName: "Mason Mount", role: "Midfielder" },
        { id: "u8", fullName: "Paul Pogba", role: "Midfielder" },
      ],
    };
  },
  provide() {
    return {
      users: this.users,
      teams: this.teams,
    };
  },
};
</script>

<style></style>
