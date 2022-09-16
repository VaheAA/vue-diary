import { defineStore } from 'pinia';

export const userSessionStore = defineStore({
  id: 'userSession',
  state: () => ({
    session: null,
    error: null,
    toast: {
      message: '',
      isOpen: false,
      status: ''
    }
  })
});
