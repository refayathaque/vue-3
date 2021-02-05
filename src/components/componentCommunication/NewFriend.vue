<template>
  <h4>NewFriend.vue</h4>
  <form @submit.prevent="submitForm">
    <div class="row">
      <div class="col">
        <label class="form-label">Id</label>
        <input v-model="id" type="number" class="form-control" />
      </div>

      <div class="col">
        <label class="form-label">Name</label>
        <input v-model="name" type="text" class="form-control" />
      </div>

      <div class="col">
        <label class="form-label">Phone</label>
        <input v-model="phone" type="number" class="form-control" />
      </div>

      <div class="col">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" />
      </div>
            <div class="col">
        
        <button class="btn btn-outline-success">
          Add friend
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      phone: null,
      email: "",
    };
  },
  emits: ["add-friend"],
  methods: {
    submitForm() {
      this.$emit("add-friend", this.id, this.name, this.phone, this.email);
    },
  },
};
</script>
