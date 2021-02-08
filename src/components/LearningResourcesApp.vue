<template>
  <div class="container-fluid componentBorder">
    <h2>LearningResourcesApp.vue</h2>
    <button
      @click="selectComponent('stored-resources')"
      type="button"
      class="btn btn-outline-warning"
    >
      Stored resources
    </button>
    <button
      @click="selectComponent('add-resource')"
      type="button"
      class="btn btn-outline-success"
    >
      Add resource
    </button>
    <keep-alive><component :is="selectedComponent"></component></keep-alive>
    <!-- how to add props to dynamic components? provide and inject -->
    <!-- how to add custom events (child => parent) to dynamic components? provide and inject -->
  </div>
</template>

<script>
import uniqid from "uniqid";
import StoredResources from "./learningResourcesApp/StoredResources.vue";
import AddResource from "./learningResourcesApp/AddResource.vue";

export default {
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  components: { StoredResources, AddResource },
  methods: {
    selectComponent(component) {
      this.selectedComponent = component;
    },
    addResource(title, description, link) {
      const newResource = {
        id: uniqid(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedComponent = "stored-resources";
    },
    removeResource(id) {
      const responseIndex = this.storedResources.findIndex(
        (response) => response.id === id
      );
      this.storedResources.splice(responseIndex, 1);
    },
  },
  data() {
    return {
      selectedComponent: "stored-resources",
      storedResources: [
        {
          id: uniqid(),
          title: "Official guide",
          description: "The official Vue.js documentation",
          link: "https://v3.vuejs.org/",
        },
        {
          id: uniqid(),
          title: "Google",
          description: "Learn to google",
          link: "https://www.google.com/",
        },
        {
          id: uniqid(),
          title: "Stack Overflow",
          description: "Learn from others that may be struggling just like you",
          link: "https://www.google.com/",
        },
        {
          id: uniqid(),
          title: "Udemy",
          description: "Learn from videos using structure and examples",
          link: "https://www.udemy.com/",
        },
        {
          id: uniqid(),
          title: "Medium",
          description:
            "Useful to have access to how-tos on very specific topics related to code",
          link: "https://medium.com/",
        },
      ],
    };
  },
};
</script>
