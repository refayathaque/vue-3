<template>
  <div class="container-fluid componentBorder">
    <h4>BodyWrapper.vue</h4>
    <learning-resources-app></learning-resources-app>
    <component-deep-dive></component-deep-dive>
    <component-communication></component-communication>
  </div>
</template>

<script>
import ComponentCommunication from "./ComponentCommunication.vue";
import ComponentDeepDive from "./ComponentDeepDive.vue";
import LearningResourcesApp from "./LearningResourcesApp.vue";

export default {
  components: { ComponentCommunication, ComponentDeepDive, LearningResourcesApp },
  name: "BodyWrapper",
};
</script>

<style>
.componentBorder {
  border: 1px solid #1c6ea4;
}
/* https://html-css-js.com/css/generator/border-outline/ */
</style>
