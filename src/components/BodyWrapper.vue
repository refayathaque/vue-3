<template>
  <div class="container-fluid">
    <h4>BodyWrapper.vue</h4>
    <component-communication></component-communication>
  </div>
</template>

<script>
import ComponentCommunication from "./ComponentCommunication.vue";

export default {
  components: { ComponentCommunication },
  name: "BodyWrapper",
};
</script>
