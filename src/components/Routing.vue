<template>
  <div class="container-fluid componentBorder">
    <h2>Routing.vue</h2>
    <router-link to="/teams">Teams</router-link>
    <router-link to="/users">Users</router-link>
    <router-view></router-view>
  </div>
</template>

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
