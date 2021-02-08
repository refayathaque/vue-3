<template>
  <div class="container-fluid componentBorder">
    <h4>BodyWrapper.vue</h4>
    <component-deep-dive></component-deep-dive>
    <component-communication></component-communication>
  </div>
</template>

<script>
import ComponentCommunication from "./ComponentCommunication.vue";
import ComponentDeepDive from "./ComponentDeepDive.vue";

export default {
  components: { ComponentCommunication, ComponentDeepDive },
  name: "BodyWrapper",
};
</script>

<style>
.componentBorder {
  border: 1px solid #1c6ea4;
}
/* https://html-css-js.com/css/generator/border-outline/ */
</style>
