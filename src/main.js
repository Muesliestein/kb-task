import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

import "./styles/normalize.css";
import "./styles/style.css";

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
  router,
});
