<template>
  <h4>StoredResources.vue</h4>
  <ul v-for="resource in storedResources" :key="resource.id">
    <resource-item
      :description="resource.description"
      :id="resource.id"
      :link="resource.link"
      :title="resource.title"
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";

export default {
  inject: ["storedResources"],
  components: { ResourceItem },
};
</script>
