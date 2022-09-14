import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Auth from '../pages/Auth/AuthPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Auth,
      meta: {
        authType: 'login'
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Auth,
      meta: {
        authType: 'logout'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Auth,
      meta: {
        authType: 'register'
      }
    }
  ]
});

export default router;
