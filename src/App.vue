
<template>
  <component :is="isAuth ? MainLayout : EmptyLayout">
    <router-view />
  </component>
</template>

<script setup>
import { ref } from 'vue';
import EmptyLayout from './components/layout/EmptyLayout.vue';
import MainLayout from './components/layout/MainLayout.vue';

const isAuth = ref(true);
</script>


<style scoped>

</style>
