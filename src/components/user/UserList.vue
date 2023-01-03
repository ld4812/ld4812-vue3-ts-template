<script lang="ts" setup>
import { inject, onMounted, reactive, ref } from 'vue';
import { userStore } from '@/stores/user';
import { MyException } from '@/exceptions/MyException';

const us = userStore();

class State {
  counter: number = 0;
}

const state = reactive(new State());
console.log(state);
const userId = ref('');
console.log(userId);
const click = (): void => {
  state.counter++;
};
const clickError = (): void => {
  throw new MyException();
};
onMounted(() => {
  console.log('setup mounted');
  console.log(inject('$repository'));
});
</script>

<template>
  <div>user list</div>
  <button @click="click">click</button>
  <div>this count: {{ state.counter }}</div>
  <button @click="us.fCount">click</button>
  <div>user store counter: {{ us.count }}</div>
  <div>user store add counter: {{ us.addCount }}</div>
  <button @click="us.getAllUsers">click</button>
  <div>user message: {{ us.message }}</div>
  <button @click="$repository.users.getAllUsers">global click</button>
  <div>user message: {{ us.message }}</div>
  <button @click="clickError">click error</button>
  <div>error message: error</div>
</template>
