<template>
  <h4>Post.vue</h4>
  <form @submit.prevent="submitForm">
    <label for="name" class="form-label">Your Name</label>
    <input
      id="name"
      name="name"
      type="text"
      v-model.trim="name"
      class="form-control"
    />
    <button type="submit" class="btn btn-outline-primary">
      Submit form to AWS Lambda function
    </button>
    <div v-if="isLoading" class="spinner-border text-warning" role="status">
      <span class="visually-hidden"></span>
    </div>
    <p v-else-if="!isLoading && isError">
      Fetch error
    </p>
    <p v-else-if="!isLoading && response">
      Lambda received {{ response.event.name }}
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      isLoading: false,
      response: null,
      isError: false,
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true;

      try {
        const resolvedOne = await fetch(
          "https://jjaidzgnt7.execute-api.us-east-1.amazonaws.com/prod",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.name,
            }),
            // JSON.stringify converts JS object to JSON object
          }
        );
        if (resolvedOne.status === (200 || 201)) {
          const resolvedTwo = await resolvedOne.json();
          this.response = resolvedTwo;
          this.isLoading = false;
        } else {
          throw new Error(resolvedOne.status);
        }
      } catch (error) {
        this.isLoading = false;
        this.isError = true;
      }

      // https://javascript.info/fetch
      // First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers.
      // Second, to get the response body, we need to use an additional method call.
      // error handling with try/catch - https://javascript.info/async-await#error-handling
    },
  },
};
</script>

<style></style>
