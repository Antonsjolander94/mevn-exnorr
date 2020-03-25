import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "@/scss/app.scss"
import moment from "moment";
import VuePageTransition from 'vue-page-transition'

moment.locale("sv");
Object.defineProperty(Vue.prototype, "$moment", { value: moment })

Vue.config.productionTip = false

Vue.use(VuePageTransition)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
