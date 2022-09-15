<template>
  <div class="empty">
    <MainHeader />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import MainHeader from '../header/MainHeader.vue';

</script>