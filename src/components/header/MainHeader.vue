<template>
  <header class="flex items-center bg-color-1 p-4 fixed left-0 top-0 right-0 bottom-0 shadow-md h-16">
    <div class="flex flex-between items-center container mx-auto">
      <Logo />
      <NavLinks />
      <UserMenu v-if="userSession.session" />
    </div>
  </header>
</template>

<script setup>
import Logo from '../UI/Logo.vue';
import NavLinks from './NavLinks.vue';
import UserMenu from './UserMenu.vue';
import { userSessionStore } from '../../store/store';

const userSession = userSessionStore();
</script>
