<template>
  <div class="flex justify-center flex-col items-center">
    <h2 class="text-center text-3xl mb-4">Update Profile Information</h2>
    <UpdateForm btn-text="Save" />
  </div>
</template>

<script setup>
import UpdateForm from '../../components/form/UpdateForm.vue';
import Toast from '../../components/UI/toast/Toast.vue';
</script>

<style lang="scss" scoped>

</style>