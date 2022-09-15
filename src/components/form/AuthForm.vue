<template>
  <Form @submit="onSubmit" :validation-schema="schema"
    class="flex flex-col justify-between items-center shadow overflow-hidden sm:rounded-md w-[500px] p-8">
    <div class="flex flex-col mb-4 w-full">
      <label for="email">Email</label>
      <Field
        class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
        name="email" type="email" placeholder="Enter you email" />
      <ErrorMessage name="email" class="text-color-error text-xs" />
    </div>
    <div class="flex flex-col w-full mb-4">
      <label for="password">Password</label>
      <Field
        class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
        name="password" type="password" placeholder="Enter password" />
      <ErrorMessage name="password" class="text-color-error text-xs" />
    </div>
    <div class="flex flex-col w-full mb-4">
      <label for="avatar">Avatar</label>
      <Field class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-color-3
    bg-white bg-clip-padding
    border border-solid border-color-4
    rounded
    transition
    ease-in-out
    m-0
    focus:text-color-3 focus:bg-white focus:border-color-2 focus:outline-none" name="avatar" type="file" />
      <ErrorMessage name="avatar" class="text-color-error text-xs" />
    </div>
    <button type="submit"
      class="text-color-4 bg-color-2 hover:bg-color-3 focus:outline-none focus:ring-4 focus:ring-color-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-color-1 dark:hover:color-2 dark:focus:ring-color-3 dark:border-color-3 transition-all">
      {{btnText}}
    </button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8)
});

defineProps({
  btnText: {
    type: String
  }
});

function onSubmit(values) {
  // Submit values to API...
  alert(JSON.stringify(values, null, 2));
}
</script>
