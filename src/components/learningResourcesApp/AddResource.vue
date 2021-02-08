<template>
  <modal v-if="inputIsInvalid" title="Invalid input" @close="confirmError">
    <template #default>
      <p>At least one input value is invalid, check all input fields</p>
    </template>
    <template #actions>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="confirmError"
      >
        Okay
      </button>
    </template>
  </modal>
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
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  inject: ["addResource"],
  data() {
    return {
      inputIsInvalid: false,
      title: "",
      description: "",
      link: "",
    };
  },
  methods: {
    submitForm() {
      if (!this.title.trim() || !this.description.trim() || !this.link.trim()) {
        // trim removes excess white space at the beginning and end of strings
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(this.title, this.description, this.link);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
