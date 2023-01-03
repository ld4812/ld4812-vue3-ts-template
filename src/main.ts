import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import repository from '@/factories/repositoryFactory';
import '@/assets/css/style.css';
import { ErrorHandlingPlugin } from '@/plugins/ErrorHandlingPlugin';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.$repository = repository;
app.provide('$repository', app.config.globalProperties.$repository);
app.use(ErrorHandlingPlugin);

app.mount('#app');
