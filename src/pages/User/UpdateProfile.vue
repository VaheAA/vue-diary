<template>
  <div class="flex justify-center flex-col items-center">
    <h2 class="text-center text-3xl mb-4">Update Profile Information</h2>
    <UpdateForm btn-text="Save" />
    <Toast />
  </div>
</template>

<script setup>
import UpdateForm from '../../components/form/UpdateForm.vue';
</script>

<style lang="scss" scoped>

</style>