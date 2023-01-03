import { createRouter, createWebHistory } from 'vue-router';
import MainContents from '@/components/common/MainContents.vue';
import Home from '@/components/dashboard/Home.vue';
import UserList from '@/components/user/UserList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainContents,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Home,
        },
        {
          path: '/user',
          name: 'user',
          component: UserList,
        },
      ],
    },
  ],
});

export default router;
