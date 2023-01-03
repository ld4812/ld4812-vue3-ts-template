import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import UserRepository from '@/repositories/user';

export const userStore = defineStore('user', () => {
  const count = ref(0);
  const message = ref('');
  const addCount = computed(() => count.value + 1);
  const fCount = (): void => {
    count.value++;
  };
  const getAllUsers = async (): Promise<void> => {
    const user = new UserRepository();
    const result = await user.getUsers();
    message.value = result.data;
  };
  return { count, addCount, message, fCount, getAllUsers };
});
