<template>
  <div class="flex gap-4 flex-wrap justify-center">
    <div
      class="flex flex-col w-full max-w-[350px] max-h-[500px] bg-color-4 rounded-lg border border-color-3 shadow-md dark:bg-color-3 dark:border-color-3"
      v-for="post in posts" :key="post.id">
      <img class="rounded-t-lg max-h-48 w-full block object-cover mb-2" :src="post.cover_url" alt="">
      <div class="p-5 flex flex-col w-full h-full gap-4">
        <router-link to="/">
          <h3 class="text-color-4 text-xl font-bold tracking-tight">
            {{post.title}}
          </h3>
        </router-link>
        <span class="text-xs text-color-4">{{new Date(post.created_at).toLocaleDateString("en-US")}}</span>
        <p class="text-color-4 text-md  font-normal">
          {{post.description.slice(0, 100)}}...
        </p>
        <router-link to="/"
          class="text-color-4 bg-color-2 hover:bg-color-4 hover:text-color-1 focus:outline-none focus:ring-4 focus:ring-color-1 font-medium rounded-lg text-sm px-5 py-2.5 transition-all mt-auto self-start">
          Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Array
  }
});
</script>

<style lang="scss" scoped>

</style>