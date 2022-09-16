<template>
  <div class="flex flex-col w-full container mx-auto">
    <UserCard :user="user" v-if="user" />
    <Loading size="3xl" v-else />
    <div>
      <h3 class="text-center text-3xl text-color-1 mb-4">Latest diaries</h3>
      <PostList :posts="posts" v-if="posts" />
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../../db/supabase';
import UserCard from '../../components/user/UserCard.vue';
import Loading from '../../components/UI/Loading.vue';
import { onMounted, ref } from 'vue';
import PostList from '../../components/posts/PostList.vue';

const user = ref(null);
const posts = ref(null);
const isOpen = ref(false);

onMounted(async () => {
  user.value = supabase.auth.user();
  try {
    isOpen.value = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=4');
    const data = await res.json();
    posts.value = data;
    isOpen.value = false;
  } catch (error) {
    alert(error);
  }

});


</script>

