import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/assets/css/styles.scss";
import Axios from "axios";

Vue.prototype.$mapFields = Vue;

Vue.config.productionTip = false;

Axios.defaults.baseURL = "https://api.github.com"

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
