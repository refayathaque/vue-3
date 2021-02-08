<template>
  <h4>FriendContact.vue</h4>
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
      <p v-if="british">
        Local lad
        <button class="btn btn-outline-primary" @click="giveKnighthood">
          Knight
        </button>
      </p>
      <p v-else>
        #brexit
      </p>
      <button class="btn btn-outline-dark" @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} contact details
      </button>
      <ul class="list-inline" v-if="detailsAreVisible">
        <!-- https://getbootstrap.com/docs/5.0/content/typography/#inline -->
        <li>Phone: {{ phone }}</li>
        <li>Email: {{ email }}</li>
      </ul>
      <button
        class="btn btn-outline-danger"
        @click="$emit('delete-friend', id)"
      >
        Delete
      </button>
      <!-- when binding to an event, you can either point at a method, execute a method or execute any other basic JS code -->
    </div>
  </div>
</template>

<script>
export default {
  // props: ["id", "name", "phone", "email"],
  // https://v3.vuejs.org/guide/component-props.html
  props: {
    // use camelCase for props
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
    british: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  // declaring custom events is not required but recommended
  // emits: ["give-knighthood"],
  emits: {
    "give-knighthood": function(id) {
      if (!id) {
        console.warn(
          "give-knighthood custom event 2nd argument of id is missing!"
        );
        return false;
      } else {
        return true;
      }
    },
    "delete-friend": null,
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
    giveKnighthood() {
      this.$emit("give-knighthood", this.id);
      // emitting custom event for parent component to listen for, use kebab-case in first argument (name of custom event parent component will look for) to $emit
    },
  },
};
</script>

<style></style>
