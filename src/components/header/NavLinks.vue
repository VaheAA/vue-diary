<template>
  <nav class="ml-auto mr-12">
    <ul class="flex justify-between items-center">
      <li class="mr-4 ml-4" v-if="!userSession.session">
        <router-link class="text-color-4" to='/login'>Login</router-link>
      </li>
      <li class="mr-4 ml-4" v-if="userSession.session">
        <router-link class="text-color-4" to='/add-diary'>Add diary</router-link>
      </li>
      <li class="mr-4 ml-4" v-if="!userSession.session">
        <router-link class="text-color-4" to="/register">Sign Up</router-link>
      </li>
      <li class="mr-4 ml-4" v-if="userSession.session">
        <button type="button" @click="logOut"
          class="text-color-4 bg-color-4 hover:bg-color-3 focus:outline-none focus:ring-4 focus:ring-color-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-color-3 dark:hover:color-2 dark:focus:ring-color-4 dark:border-color-4 transition-all">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { userSessionStore } from '../../store/store';
import { supabase } from '../../db/supabase';
import { useRouter } from 'vue-router';

const userSession = userSessionStore();
const router = useRouter();

const logOut = async () => {
  try {
    const { error } = await supabase.auth.signOut().then(router.push('/login'));
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  }
};

</script>

