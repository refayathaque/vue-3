<template>
  <h4>AddResource.vue</h4>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Description</label>
      <input v-model="description" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Link</label>
      <input v-model="link" type="url" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Add resource</button>
  </form>
</template>

<script>
export default {
  inject: ["addResource"],
  data() {
    return {
      title: "",
      description: "",
      link: "",
    };
  },
  methods: {
    submitForm() {
      this.addResource(this.title, this.description, this.link);
    },
  },
};
</script>
