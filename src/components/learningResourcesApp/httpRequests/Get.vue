<template>
  <h4>Get.vue</h4>
  <button @click="fetchPosts" class="btn btn-outline-secondary">
    Fetch posts
  </button>
  <div v-if="isLoadingPosts" class="spinner-border text-info" role="status">
    <span class="visually-hidden"></span>
  </div>
  <p v-else-if="!isLoadingPosts && isErrorPosts">
    Posts fetch error
  </p>
  <div v-else-if="!isLoadingPosts && posts.length === 0 && fetchedPosts">
    No posts in backend
  </div>
  <div v-else-if="!isLoadingPosts && posts.length > 0">
    <p>Posts</p>
    <ul v-for="post in posts" :key="post.id">
      <li>{{ post.title }}</li>
    </ul>
  </div>
  <div
    v-if="isLoadingComments"
    class="spinner-border text-danger"
    role="status"
  >
    <span class="visually-hidden"></span>
  </div>
  <p v-else-if="!isLoadingComments && isErrorComments">
    Comments fetch error
  </p>
  <div v-else-if="!isLoadingComments && comments.length === 0">
    No comments in backend
  </div>
  <div v-else-if="!isLoadingComments && comments.length > 0">
    <p>Comments</p>
    <ul v-for="comment in comments" :key="comment.id">
      <li>{{ comment.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      comments: [],
      fetchedPosts: false,
      isLoadingPosts: false,
      isLoadingComments: false,
      isErrorPosts: false,
      isErrorComments: false,
    };
  },
  mounted() {
    // lifecycle method will fetch comments once component is mounted
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      this.isLoadingComments = true;

      try {
        const resolvedOne = await fetch(
          "https://jsonplaceholder.typicode.com/coments"
        );
        if (resolvedOne.status === (200 || 201)) {
          const resolvedTwo = await resolvedOne.json();
          this.comments = resolvedTwo.slice(0, 5);
          this.isLoadingComments = false;
        } else {
          throw new Error(resolvedOne.status);
        }
      } catch (error) {
        this.isLoadingComments = false;
        this.isErrorComments = true;
      }
    },

    async fetchPosts() {
      this.isLoadingPosts = true;

      try {
        const resolvedOne = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            // method: "GET",
            // since GET is the default request type method is not needed
            // headers: {
            //   "Content-Type": "application/json",
            // },
            // since there is no body, headers is also not needed
          }
        );
        if (resolvedOne.status === (200 || 201)) {
          console.log("hello");
          const resolvedTwo = await resolvedOne.json();
          this.posts = resolvedTwo.slice(0, 5);
          this.isLoadingPosts = false;
          this.fetchedPosts = true;
        } else {
          throw new Error(resolvedOne.status);
        }
      } catch (error) {
        this.isLoadingPosts = false;
        this.isErrorPosts = true;
      }
    },
  },
};
</script>

<style></style>
