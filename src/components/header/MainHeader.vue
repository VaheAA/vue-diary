<template>
  <div class="flex flex-between items-center bg-color-1 p-4 fixed left-0 top-0 right-0 bottom-0 shadow-md h-16">
    <Logo />
    <NavLinks />
    <UseAvatar />
  </div>
</template>

<script setup>
import Logo from '../UI/Logo.vue';
import NavLinks from './NavLinks.vue';
import UseAvatar from './UseAvatar.vue';

</script>
