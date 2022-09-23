<template>
  <h1 class="text-3xl text-color-1 mb-4 text-center">Add a new Diary</h1>
  <Form class="flex flex-col justify-between items-center shadow overflow-hidden sm:rounded-md w-[900px] p-8"
    @submit="onSubmit" :validation-schema="schema">
    <div class="flex flex-col items-center gap-4 mb-4 w-full">
      <div class="w-full">
        <img class="object-cover block max-h-60 w-full"
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
    <div class="flex flex-col mb-4 w-full">
      <label for="description">Description</label>
      <Field
        class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
        name="description" as="textarea" placeholder="Enter diary description" />
      <ErrorMessage name="description" class="text-color-error text-xs" />
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
import { useRouter } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { supabase } from '../../db/supabase';
import Loading from '../UI/Loading.vue';
import { userSessionStore } from '../../store/store';


const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required()
});

const router = useRouter();

const userSession = userSessionStore();

const { user, openToast } = userSession;
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

async function onSubmit (values) {
  try {
    isLoading.value = true;
    if (values.cover) {
      const { data, error: coverError } = await supabase.storage
        .from('covers')
        .upload(`${user.id}/${values.title.toLowerCase()}.jpg`, values.cover, {
          cacheControl: '3600',
          upsert: false,
        });
      if (coverError) throw coverError;
    }

    const { data: urlData, error: urlError } = supabase.storage.from('covers').getPublicUrl(`${user.id}/${values.title.toLowerCase()}.jpg`);

    const { data, error } = await supabase
      .from('diaries')
      .insert({
        author_id: user.id,
        title: values.title,
        description: values.description,
        cover_url: urlData.publicURL
      }
      );
    isLoading.value = false;
    if (error) throw error;
    openToast('Diary was successfully created', 'success');
    router.push({ name: 'Profile' });
  } catch (error) {
    isLoading.value = false;
    openToast(error.message, 'error');
  }
}

</script>

<style lang="scss" scoped>

</style>