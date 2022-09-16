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
    <div class="flex flex-col mb-4 w-full" v-if="$route.name === 'Register'">
      <label for="username">Username</label>
      <Field
        class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
        name="username" type="text" placeholder="Enter username" />
      <ErrorMessage name="username" class="text-color-error text-xs" />
    </div>
    <div class="flex flex-col w-full mb-4">
      <label for="password">Password</label>
      <Field
        class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
        name="password" type="password" placeholder="Enter password" />
      <ErrorMessage name="password" class="text-color-error text-xs" />
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
import * as yup from 'yup';
import { supabase } from '../../db/supabase';
import { useRoute, useRouter } from 'vue-router';
import Loading from '../UI/Loading.vue';
import { userSessionStore } from '../../store/store';

const route = useRoute();
const router = useRouter();
const userSession = userSessionStore();
const { toast } = userSession;
const isLoading = ref(false);

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  username: route.name === 'Register' && yup.string().required().min(8)
});

defineProps({
  btnText: {
    type: String
  }
});

async function onSubmit (values) {
  if (route.name === 'Register') {
    try {
      isLoading.value = true;
      const { data: user, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      },
        {
          data: {
            username: values.username
          }
        });
      isLoading.value = false;
      if (error) throw error;
      router.push('/');
    } catch (error) {
      isLoading.value = false;
      toast.message = error.message;
      toast.isOpen = true;
      toast.status = 'error';
    }
  } else {
    try {
      isLoading.value = true;
      const { data: user, error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password,
      });
      isLoading.value = false;
      if (error) throw error;
      router.push('/');
    } catch (error) {
      isLoading.value = false;
      toast.message = error.message;
      toast.isOpen = true;
      toast.status = 'error';
    }
  }


}
</script>
