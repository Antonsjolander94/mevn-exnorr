import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Birthdays',
    component: () => import('../views/Birthdays.vue'),
    meta: {
      checkForBirthday: true
    }
  },
  {
    path: '/birthday',
    name: 'Birthday',
    component: () => import('../views/Birthday.vue')
  },
  {
    path: '/slideshow',
    name: 'Slideshow',
    component: () => import('../views/Slideshow.vue'),
    meta: {
      checkForBirthday: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      requiresAuth: true
    }
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
var pushToBirthdays;
var pushToSlideshow;


router.beforeEach((to, from, next) => {

  // if (isBirthday) {
  //   router.push("birthday")
  // }
  if (to.path === '/slideshow') {
    clearTimeout(pushToBirthdays);
    clearTimeout(pushToSlideshow);
    pushToBirthdays = setTimeout(() => {
      router.push("/", () => { })
    }, 30000);
  }

  if (to.path === '/') {
    clearTimeout(pushToBirthdays);
    clearTimeout(pushToSlideshow);
    pushToSlideshow = setTimeout(() => {
      router.push("/slideshow", () => { })
    }, 30000);
  }


  if (to.path === '/admin' || to.path === '/login') {
    console.log("clear timouyt")
    clearTimeout(pushToBirthdays);
    clearTimeout(pushToSlideshow);
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router
