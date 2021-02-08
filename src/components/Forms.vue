<template>
  <h4>StandardForm.vue</h4>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: nameValidity === 'invalid' }">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="name"
        @blur="validateInput"
      />
      <p v-if="nameValidity === 'invalid'">Please enter valid name</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="age" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video courses"
          v-model="how"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="how"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="how"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <custom-control v-model="rating"></custom-control>
      <!-- since any button in a form will submit the form, the buttons in this custom-control component are set to type="button" which overrides the default type="submit" and prevents the form from getting submitted on button clicks -->
      <!-- example of using v-model on custom control components - use the modelValue prop and update:modelValue custom event in the child custom control component - the data property in the custom control component is maintained here in the parent -->
    </div>
    <div class="form-control">
      <input
        id="confirm-terms"
        name="confirm-terms"
        type="checkbox"
        v-model="confirmTerms"
        for="confirm-terms"
      />
      <label for="confirm-terms">Agree to terms and conditions?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import CustomControl from './forms/CustomControl.vue';

export default {
  components: { CustomControl },
  data() {
    return {
      name: "",
      age: null,
      referrer: null,
      interest: [],
      // group of checkboxes must use arrays for data properties, unless it's singular (see one for confirmTerms)
      how: null,
      confirmTerms: false,
      rating: null,
      nameValidity: "pending",
    };
  },
  methods: {
    submitForm() {
      console.log(
        this.name,
        this.age,
        this.referrer,
        this.interest,
        this.how,
        this.confirmTerms,
        this.rating,
      );
    },
    validateInput() {
      if (!this.name) {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.25rem 1rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
