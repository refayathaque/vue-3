<template>
  <li>
    <h4>ResourceItem.vue</h4>
    <span
      ><i>{{ id }} - </i></span
    ><span
      ><a :href="link">{{ title }}</a></span
    ><span> - {{ description }} - </span>
    <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "description", "link"],
};
</script>
