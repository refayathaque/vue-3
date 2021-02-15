import { createApp } from "vue";

// https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from './router';

import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");
