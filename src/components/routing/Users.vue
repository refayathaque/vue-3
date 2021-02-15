<template>
  <h4>Users.vue</h4>
  <button class="btn btn-outline-info" @click="progNav">
    Programatically navigate to Teams
  </button>
  <p>Rendering multiple components per route with named router views</p>
  <button class="btn btn-outline-success" @click="goToNamedRouters">
    Go to "/users/namedRouters" to see two different components rendered below
  </button>
  <router-view></router-view>
  <router-view name="bottom"></router-view>
  <form @submit.prevent="saveData">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <button type="submit" class="btn btn-primary">Save data</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    progNav() {
      this.$router.push("/teams");
    },
    goToNamedRouters() {
      this.$router.push("/users/namedRouters");
    },
    saveData() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(_, _2, next) {
    next();
  },
  beforeRouteLeave(_, _2, next) {
    // used to prevent user from navigating away from page accidentally, e.g., without having saved form data
    if (this.changesSaved) {
      next();
    } else {
      const userConsent = confirm("Are you sure you want to dip?");
      next(userConsent);
    }
  },
};
</script>

<style></style>
