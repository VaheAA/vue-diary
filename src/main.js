import { createApp } from 'vue';
import './assets/style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUserSecret,
  faUser,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faUser, faSpinner);
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
