import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import Teams from "./components/routing/Teams.vue";
import TeamMembers from "./components/routing/TeamMembers.vue";
import Users from "./components/routing/Users.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/teams", component: Teams },
    // { path: "/teams/new", component: Teams }
    { path: "/teams/:teamId", component: TeamMembers }, // order matters when working on passing data with route params (dynamic segments)
    { path: "/users", component: Users },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
