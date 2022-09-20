<template>
  <Form @submit="onSubmit" :validation-schema="schema"
    class="flex flex-col justify-between items-center shadow overflow-hidden sm:rounded-md w-[500px] p-8" v-if="user">
    <div class="flex flex-col mb-4 w-full">
      <label for="username">Username</label>
      <Field
        class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
        name="username" type="text" placeholder="Enter username" v-model="user.user_metadata.username" />
      <ErrorMessage name="username" class="text-color-error text-xs" />
    </div>
    <div class="flex items-center gap-4 mb-4 w-full">
      <div class="shrink-0">
        <img class="object-cover w-16 h-16 rounded-full"
          :src="blob ? blob : 'https://i.picsum.photos/id/200/200/300.jpg?hmac=XVCLpc2Ddr652IrKMt3L7jISDD4au5O9ZIr3fwBtxo8'"
          alt="profile photo" />
      </div>
      <label class="block">
        <span class="sr-only">Choose File</span>
        <Field type="file" name="avatar"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          @change="handleFile" />
      </label>
      <ErrorMessage name="avatar" class="text-color-error text-xs" />
    </div>
    <button type="submit" :disabled="isLoading"
      class="text-color-4 bg-color-2 hover:bg-color-3 focus:outline-none focus:ring-4 focus:ring-color-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-color-1 dark:hover:color-2 dark:focus:ring-color-3 dark:border-color-3 transition-all">
      {{btnText}}
      <Loading v-if="isLoading" size="sm" />
    </button>
  </Form>
  <Loading v-else size="3xl" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { supabase } from '../../db/supabase';
import { useRoute, useRouter } from 'vue-router';
import Loading from '../UI/Loading.vue';
import { userSessionStore } from '../../store/store';

const route = useRoute();
const router = useRouter();
const userSession = userSessionStore();
const { openToast } = userSession;
const isLoading = ref(false);

const blob = ref(null);

const handleFile = async (e) => {
  blob.value = URL.createObjectURL(e.target.files[0]);
};

defineProps({
  btnText: {
    type: String
  }
});

const schema = yup.object({
  username: yup.string().required().min(8),
});

const user = ref(null);

onMounted(() => {
  user.value = supabase.auth.user();
});

async function onSubmit (values) {
  try {
    isLoading.value = true;
    const { user, error } = await supabase.auth.update(
      {
        data: {
          username: values.username,
        }
      },
    );
    if (error) throw error;
    if (values.avatar) {
      const { data, error: avatarError } = await supabase.storage
        .from('avatars')
        .update(`${user.id}/avatar.jpg`, values.avatar, {
          cacheControl: '3600',
          upsert: false,
        });
      if (avatarError) throw avatarError;
    }
    isLoading.value = false;
    openToast('Success', '');
  } catch (error) {
    isLoading.value = false;
    toast.message = error.message;
    toast.isOpen = true;
    toast.status = 'error';
  }
}
</script>

<style lang="scss" scoped>

</style>