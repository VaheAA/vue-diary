<template>
  <div
    class="border-solid border-2 border-color-3 border-opacity-20 rounded-md p-10 mb-8 relative flex items-center gap-4"
    v-if="user">
    <div>
      <img class="w-24 h-24 rounded-full object-cover" :src="avatar" alt="">
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl text-color-1 font-bold">{{user.user_metadata.username}}</h2>
      <span class="text-sm text-color-1">Email: <strong>{{user.email}}</strong></span>
      <span class="text-sm text-color-1">Active from: <strong>{{new
      Date(user.created_at).toLocaleDateString("en-US")}}</strong></span>
      <span class="text-sm text-color-1">Last login: <strong> {{new
      Date(user.last_sign_in_at).toLocaleTimeString("en-US")}}</strong></span>
    </div>
    <div class="flex flex-col gap-4 ml-8">
      <span class="text-lg text-color-1">Diaries: <strong>23</strong></span>
      <span class="text-lg text-color-1">Last diary: <router-link class="underline" to="/">
          <strong>My New diary</strong>
        </router-link>
      </span>
    </div>
    <router-link :to="{name: 'Update Profile'}"
      class="ml-auto text-color-4 bg-color-2 hover:bg-color-3 focus:outline-none focus:ring-4 focus:ring-color-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-color-1 dark:hover:color-2 dark:focus:ring-color-3 dark:border-color-3 transition-all">
      Update information
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../../db/supabase';
import { userSessionStore } from '../../store/store';
import Loading from '../UI/Loading.vue';

const userSession = userSessionStore();

const { user } = userSession;

defineProps({
  user: {
    type: Object
  }
});

const avatar = ref(null);

onMounted(async () => {
  const { publicURL, error } = supabase.storage
    .from('avatars')
    .getPublicUrl(`${user.id}/avatar.jpg`);
  avatar.value = publicURL;
});


</script>

<style lang="scss" scoped>

</style>