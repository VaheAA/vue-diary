import { createRouter, createWebHistory } from 'vue-router';
import { userSessionStore } from '../store/store';
import Home from '../pages/Home.vue';
import Auth from '../pages/Auth/AuthPage.vue';
import UserProfile from '../pages/User/UserProfile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Auth,
      meta: {
        authType: 'login',
        needsAuth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Auth,
      meta: {
        authType: 'register',
        needsAuth: false
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile,
      meta: {
        needsAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const userSession = userSessionStore();

  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next();
    } else {
      return next('/login');
    }
  }

  return next();
});

export default router;
