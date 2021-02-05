<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ id }}</h5>
      <p class="card-text">
        {{ name }}
      </p>
      <figcaption class="blockquote-footer">
        <!-- https://getbootstrap.com/docs/5.0/content/typography/#naming-a-source -->
        {{ profession }}
      </figcaption>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} contact details
      </button>
      <ul class="list-inline" v-if="detailsAreVisible">
        <!-- https://getbootstrap.com/docs/5.0/content/typography/#inline -->
        <li>Phone: {{ phone }}</li>
        <li>Email: {{ email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["id", "name", "phone", "email"],
  // https://v3.vuejs.org/guide/component-props.html
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: false,
      default: "Premier League player",
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style></style>
