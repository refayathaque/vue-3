<template>
  <div class="container-fluid componentBorder">
    <h2>HttpRequests.vue</h2>
    <div class="row">
      <div class="col">
        <post></post>
      </div>
      <div class="col">
        <get></get>
      </div>
    </div>
  </div>
</template>

<script>
import Get from "./learningResourcesApp/httpRequests/Get.vue";
import Post from "./learningResourcesApp/httpRequests/Post.vue";
export default {
  components: { Post, Get },
};
</script>

<style></style>
