<template>
  <font-awesome-icon icon="fa-solid fa-spinner" :class="[`text-${size} text-color-4 animate-spin`]" />
</template>

<script setup>
defineProps({
  size: {
    type: String
  }
});
</script>