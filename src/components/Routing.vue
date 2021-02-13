<template>
  <div class="container-fluid componentBorder">
    <h2>Routing.vue</h2>
    <router-link to="/teams">Teams</router-link>
    <router-link to="/users">Users</router-link>
    <router-view></router-view>
  </div>
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
      teams: this.teams,
      users: this.users
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
  background: transparent;
  border: 1px solid red;
  color: blue;
  padding: 0.5rem;
  display: inline-block;
  margin-right: 1rem;
}

a:hover,
a:active,
a.router-link-active {
  background-color: lawngreen;
}
</style>
