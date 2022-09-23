<template>
  <div class="flex flex-col w-full container mx-auto">
    <UserCard />
    <div>
      <h3 class="text-center text-3xl text-color-1 mb-4">Latest diaries</h3>
      <PostList :posts="posts" v-if="posts" />
    </div>
  </div>
</template>

<script setup>
import UserCard from '../../components/user/UserCard.vue';
import { onMounted, ref } from 'vue';
import PostList from '../../components/posts/PostList.vue';
import { supabase } from '../../db/supabase';
import { userSessionStore } from '../../store/store';


const userSession = userSessionStore();

const { user, openToast } = userSession;

const posts = ref(null);
const isOpen = ref(false);

onMounted(async () => {
  try {
    isOpen.value = true;
    const { data, error } = await supabase
      .from('diaries')
      .select('*')
      .eq('author_id', user.id)
      .order('created_at', { ascending: false })
      .limit(4);
    posts.value = data;
    isOpen.value = false;
  } catch (error) {
    alert(error);
  }
});


</script>

