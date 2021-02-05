import { createApp } from "vue";
import App from "./App.vue";
import BodyWrapper from "./components/BodyWrapper.vue";
import ComponentCommunication from "./components/ComponentCommunication.vue";

// https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.component("body-wrapper", BodyWrapper);

app.component("component-communication", ComponentCommunication);

app.mount("#app");
