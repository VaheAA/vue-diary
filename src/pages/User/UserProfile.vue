<template>
  <div class="flex flex-col w-full container mx-auto">
    <UserCard />
    <div class="border-solid border-2 border-color-3 border-opacity-20 rounded-md p-10">
      <h2>My diaries</h2>
    </div>
  </div>
</template>

<script setup>
import { userSessionStore } from '../../store/store';
import { supabase } from '../../db/supabase';
import UserCard from '../../components/user/UserCard.vue';

</script>

