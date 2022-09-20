<template>
  <div class="h-full pt-28">
    <MainHeader />
    <main class="h-full flex flex-col justify-center items-center pt-14">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import MainHeader from '../header/MainHeader.vue';

</script>