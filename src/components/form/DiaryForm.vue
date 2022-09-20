<template>
  <h1 class="text-3xl text-color-1 mb-4 text-center">Add a new Diary</h1>
  <Form class="flex flex-col justify-between items-center shadow overflow-hidden sm:rounded-md w-[900px] p-8"
    @submit="onSubmit">
    <div class="flex flex-col items-center gap-4 mb-4 w-full">
      <div class="shrink-0">
        <img class="object-cover w-72 h-20"
          :src="blob ? blob : 'https://i.picsum.photos/id/200/200/300.jpg?hmac=XVCLpc2Ddr652IrKMt3L7jISDD4au5O9ZIr3fwBtxo8'"
          alt="Diary cover" />
      </div>
      <label class="block">
        <span class="sr-only">Choose File</span>
        <Field type="file" name="cover"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          @change="handleFile" />
      </label>
      <ErrorMessage name="cover" class="text-color-error text-xs" />
    </div>
    <div class="flex flex-col mb-4 w-full">
      <label for="title">Title</label>
      <Field
        class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
        name="title" type="text" placeholder="Enter diary title" />
      <ErrorMessage name="title" class="text-color-error text-xs" />
    </div>
    <div>
      <TipTap class="flex flex-col mb-4 w-full" v-model="body" />
    </div>
    <button type="submit" :disabled="isLoading"
      class="text-color-4 bg-color-2 hover:bg-color-3 focus:outline-none focus:ring-4 focus:ring-color-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-color-1 dark:hover:color-2 dark:focus:ring-color-3 dark:border-color-3 transition-all">
      {{btnText}}
      <Loading v-if="isLoading" size="sm" />
    </button>
  </Form>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import Loading from '../UI/Loading.vue';
import TipTap from '../editor/TipTap.vue';

const body = ref('');

defineProps({
  btnText: {
    type: String
  }
});

async function onSubmit (values) {
  console.log(values, body.value);
}

</script>

<style lang="scss" scoped>

</style>