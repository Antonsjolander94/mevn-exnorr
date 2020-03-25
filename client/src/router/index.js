import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Overview",
    component: () =>
      import(/* webpackChunkName: "overview" */ "../views/Overview.vue")
  },
  {
    path: "/slideshow",
    name: "Slideshow",
    component: () =>
      import(/* webpackChunkName: "slideshow" */ "../views/Slideshow.vue")
  },

  {
    path: "/birthday",
    name: "Birthday",
    component: () =>
      import(/* webpackChunkName: "birthday" */ "../views/Birthday.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
