<template>
  <div class="container-fluid componentBorder">
    <h2>ComponentDeepDive.vue</h2>
    <span class="badge rounded-pill bg-info text-dark">Scoped styles</span>
    <span class="badge rounded-pill bg-info text-dark">Slots</span>
    <span class="badge rounded-pill bg-info text-dark">Scoped slots</span>
    <span class="badge rounded-pill bg-info text-dark">Dynamic components</span>
    <span class="badge rounded-pill bg-info text-dark">Teleport</span>
    <base-card>
      <!-- <template v-slot:default> -->
      <template #default>
        <p class="lead">
          examples of slots
        </p>
        <p>{{ whatAreSlots }}</p>
      </template>
      <template #namedSlot>
        <p>
          <i>{{ namedSlotString }}</i>
        </p>
      </template>
    </base-card>
    <course-goals>
      <!-- example of a scoped slot -->
      <template #default="slotProps">
        <span
          ><small>{{ slotProps.item }}</small></span
        ><span>{{ slotProps.anotherProp }}</span>
      </template>
      <template #definition>{{ whatAreScopedSlots }}</template>
    </course-goals>
    <div class="progress" style="height: 1px;">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 100%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <!-- https://getbootstrap.com/docs/5.0/components/progress/#height -->
    <p>Dynamic components</p>
    <button
      @click="selectComponent('active-goals')"
      type="button"
      class="btn btn-outline-warning"
    >
      Active goals
    </button>
    <button
      @click="selectComponent('manage-goals')"
      type="button"
      class="btn btn-outline-success"
    >
      Manage goals
    </button>
    <keep-alive><component :is="selectedComponent"></component></keep-alive>
  </div>
</template>

<script>
import BaseCard from "./componentDeepDive/BaseCard.vue";
import CourseGoals from "./componentDeepDive/CourseGoals.vue";
import ManageGoals from "./componentDeepDive/ManageGoals.vue";
import ActiveGoals from "./componentDeepDive/ActiveGoals.vue";

export default {
  components: { BaseCard, CourseGoals, ManageGoals, ActiveGoals },
  data() {
    return {
      selectedComponent: "active-goals",
      whatAreSlots:
        "slots allow us to recieve HTML mark up/template content, which may also be using Vue features, from outside of the component, similar to props, but whereas props are designed for data, slots are meant to be used for HTML mark up/template code that the component needs",
      namedSlotString: "string for named slot",
      whatAreScopedSlots:
        "scoped slots lets you pass data from inside the component where you defined the slot to the component from where you are passing in the mark up for the slot",
    };
  },
  methods: {
    selectComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style></style>
