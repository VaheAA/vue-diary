<template>
  <Teleport to="#toast">
    <Transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0"
      enter-to-class="opacity-100" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100"
      leave-to-class="transform opacity-0">
      <div :class="[`bg-color-${toast.status === 'error' ? 'error' : 'success'}`]"
        class="w-max-[320px] absolute right-0 bottom-5 p-5 m-4 rounded-md shadow-lg flex items-baseline gap-4 text-color-4"
        v-if="toast.isOpen">
        <span class="text-2xl">{{toast.message}}</span>
        <button @click="closeToast">
          <font-awesome-icon class="text-xl" icon="fa-solid fa-circle-xmark" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from 'vue';
import { userSessionStore } from '../../../store/store';

const userSession = userSessionStore();

const { toast } = userSession;

function closeToast () {
  toast.isOpen = false;
  toast.message = '';
  toast.status = '';
};

watch(toast, () => {
  setTimeout(closeToast, 3000);
});
</script>

<style lang="scss" scoped>

</style>