<template>
  <div class="main">
    <MainHeader />
    <slot></slot>
  </div>
</template>

<script setup>
import MainHeader from '../navigation/MainHeader.vue';
</script>