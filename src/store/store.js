import { defineStore } from 'pinia';
import { supabase } from '../db/supabase';

export const userSessionStore = defineStore({
  id: 'userSession',
  state: () => ({
    user: null,
    session: null,
    error: null,
    toast: {
      message: '',
      isOpen: false,
      status: ''
    }
  }),
  actions: {
    getUser() {
      this.user = supabase.auth.user();
    },
    openToast(message, status) {
      this.toast.message = message;
      this.toast.status = status;
      this.toast.isOpen = true;
    }
  }
});
