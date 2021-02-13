<template>
  <h4>Users.vue</h4>
  <button class="btn btn-outline-info" @click="progNav">
    Programatically navigate to Teams
  </button>
</template>

<script>
export default {
  methods: {
    progNav() {
      this.$router.push('/teams')
    },
  },
};
</script>

<style></style>
