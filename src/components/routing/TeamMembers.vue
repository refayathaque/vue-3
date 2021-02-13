<template>
  <h4>TeamMembers.vue</h4>
  <p>{{ teamName }}</p>
  <p v-for="member in members" :key="member.id">
    <i>{{ member.fullName }} - {{ member.role }}</i>
  </p>
  <router-link to="/teams/t4">Go to Everton</router-link>
</template>

<script>
export default {
  inject: ["users", "teams"],
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    loadTeamMembers({ params }) {
      const teamId = params.teamId;
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const membersIds = selectedTeam.members;
      for (const memberId of membersIds) {
        const selectedUser = this.users.find((user) => user.id === memberId);
        this.members.push(selectedUser);
      }
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.$route)
  },
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute)
    }
  }
  // to understand this pattern and why we need to watch for the route changes watch video 172 (has to do with vue-router caching and not updating component when route changes)
  // params can also be accessed as props, watch video 173, this makes the component more flexible/reusable, you can pass data in when routing OR when normally rendering (would need props)
};
</script>

<style></style>
