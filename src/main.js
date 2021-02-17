import { createApp } from "vue";

// https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import App from "./App.vue";
import BaseModal from "./components/animationsAndTransitions/BaseModal.vue";

import store from "./store";

import router from "./router";

const app = createApp(App);

// registered components, *modals still need to be registered
app.component("base-modal", BaseModal);

router.isReady().then(() => {
  app.mount("#app");
}); // order matters here! routing will only work if this is before `app.use(router)`

app.use(router);
app.use(store);
