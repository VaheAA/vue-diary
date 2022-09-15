<template>
  <div>
    <button @click="openProfile" class="btn bg-color-4 p-2 rounded-full w-12 h-12">
      <font-awesome-icon icon="fa-solid fa-user" class="text-2xl text-color-2" />
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const openProfile = () => {
  router.push('/profile');
};
</script>

<style lang="scss" scoped>

</style>