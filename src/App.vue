
<template>
  <component :is="userSession.session ? MainLayout : EmptyLayout">
    <router-view />
  </component>
</template>

<script setup>
import { ref } from 'vue';
import EmptyLayout from './components/layout/EmptyLayout.vue';
import MainLayout from './components/layout/MainLayout.vue';
import { supabase } from './db/supabase';
import { userSessionStore } from './store/store';

const userSession = userSessionStore();


supabase.auth.onAuthStateChange((event, session) => {
  userSession.session = session;
});
</script>


<style scoped>

</style>
