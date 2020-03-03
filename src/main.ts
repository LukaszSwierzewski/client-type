import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//ts--ignore

import "@/assets/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  //@ts-ignore
  render: h => h(App)
}).$mount("#app");
