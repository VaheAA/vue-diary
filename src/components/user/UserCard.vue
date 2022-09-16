<template>
  <div
    class="border-solid border-2 border-color-3 border-opacity-20 rounded-md p-10 mb-8 relative flex items-center gap-4">
    <div>
      <img class="w-24 h-24 rounded-full"
        src="https://i.picsum.photos/id/200/200/300.jpg?hmac=XVCLpc2Ddr652IrKMt3L7jISDD4au5O9ZIr3fwBtxo8" alt="">
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
defineProps({
  user: {
    type: Object
  }
});


</script>

<style lang="scss" scoped>

</style>