import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Home',
      component: Home
    },
    {
      path: '/logout',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Home',
      component: Home
    }
  ]
});

export default router;
