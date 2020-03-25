import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/scss/app.scss";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import moment from "moment";
import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

moment.locale("sv");
Object.defineProperty(Vue.prototype, "$moment", { value: moment })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
