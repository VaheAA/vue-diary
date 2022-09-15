<template>
  <div class="flex justify-center flex-col items-center">
    <h2 class="text-center text-3xl mb-4">{{title}}</h2>
    <AuthForm :btn-text="btnText" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AuthForm from '../../components/form/AuthForm.vue';


const title = ref('');
const btnText = ref('');
const route = useRoute();

switch (route.name) {
  case 'Login':
    title.value = 'Login';
    btnText.value = 'Sign in';
    break;
  case 'Register':
    title.value = 'Register';
    btnText.value = 'Sign up';
}

watch(route, (newRoute, oldRoute) => {
  switch (route.name) {
    case 'Login':
      title.value = 'Login';
      btnText.value = 'Sign in';
      break;
    case 'Register':
      title.value = 'Register';
      btnText.value = 'Sign up';
      break;
  }
});

</script>
