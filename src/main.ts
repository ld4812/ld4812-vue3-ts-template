import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import repository from '@/factories/repositoryFactory';
import '@/assets/css/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.$repository = repository;
app.provide('$repository', app.config.globalProperties.$repository);
console.log(app);

app.mount('#app');
