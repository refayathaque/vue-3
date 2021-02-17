<template>
  <h4>AnimatedRoutes.vue</h4>
  <router-link to="/animatedRouteAlpha">/animatedRouteAlpha</router-link>
  <router-link to="/animatedRouteBeta">/animatedRouteBeta</router-link>
  <p>
    Shows "Teams.vue" as that was set as the default from the "Routing" section
  </p>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-leave-from,
.route-enter-to {
  opacity: 1;
}

.route-enter-active {
  transition: opacity 0.3s ease-out;
}

.route-leave-active {
  transition: opacity 0.3s ease-in;
}
</style>
