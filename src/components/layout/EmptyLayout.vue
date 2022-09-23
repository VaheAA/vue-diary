<template>
  <div class="h-full">
    <MainHeader />
    <main class="h-full flex flex-col justify-center items-center pt-42">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import MainHeader from '../header/MainHeader.vue';

</script>