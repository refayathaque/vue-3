<template>
  <div class="container-fluid componentBorder">
    <h4>BodyWrapper.vue</h4>
    <animations-and-transitions></animations-and-transitions>
    <routing></routing>
    <http-requests></http-requests>
    <forms></forms>
    <learning-resources-app></learning-resources-app>
    <component-deep-dive></component-deep-dive>
    <component-communication></component-communication>
  </div>
</template>

<script>
import ComponentCommunication from "./ComponentCommunication.vue";
import ComponentDeepDive from "./ComponentDeepDive.vue";
import Forms from "./Forms.vue";
import Routing from "./Routing.vue";
import HttpRequests from "./HttpRequests.vue";
import LearningResourcesApp from "./LearningResourcesApp.vue";
import AnimationsAndTransitions from "./AnimationsAndTransitions.vue";

export default {
  components: {
    AnimationsAndTransitions,
    ComponentCommunication,
    ComponentDeepDive,
    LearningResourcesApp,
    Forms,
    HttpRequests,
    Routing,
  },
  name: "BodyWrapper",
};
</script>

<style>
.componentBorder {
  border: 1px solid #1c6ea4;
}
/* https://html-css-js.com/css/generator/border-outline/ */
</style>
