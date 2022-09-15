<template>
  <Form @submit="onSubmit" :validation-schema="schema"
    class="flex flex-col justify-between items-center shadow overflow-hidden sm:rounded-md w-[500px]">
    <div>
      <Field name="email" type="email" class="border-2" placeholder="Enter you email" />
      <ErrorMessage name="email" />
    </div>
    <div>
      <Field name="password" type="password" class="border-2" placeholder="Enter password" />
      <ErrorMessage name="password" />
    </div>
    <button>Submit</button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

function onSubmit(values) {
  // Submit values to API...
  alert(JSON.stringify(values, null, 2));
}
</script>

<style lang="scss" scoped>

</style>