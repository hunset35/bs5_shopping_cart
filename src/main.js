import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";
import VueSplide from "@splidejs/vue-splide";
import GSignInButton from "vue-google-signin-button";
import VueRouter from "vue-router";
import i18n from "@/lang";
//引入路由器
import router from "./router";
// import "bootstrap-vue/src/icons.scss";

// import 'bootstrap/dist/css/bootstrap.css'
// import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VueSplide);
Vue.use(GSignInButton);
// Vue.use(BootstrapIconsPlugin);

Vue.use(VueRouter);

// Vue.use(LoaderPlugin, {
//   client_id: CLIENT_ID
// });
// Vue.component('b-modal', BModal)
// Note that Vue automatically prefixes directive names with `v-`
// Vue.directive('b-modal', VBModal)

new Vue({
  render: h => h(App),
  router: router,
  i18n: i18n
}).$mount("#app");
