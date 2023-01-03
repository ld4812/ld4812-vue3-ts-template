<script lang="ts" setup>
import MainMenu from '@/views/MainMenu.vue';
import MainHeader from '@/components/common/MainHeader.vue';
import MainSidebar from '@/components/common/MainSidebar.vue';
import MainFooter from '@/components/common/MainFooter.vue';
</script>

<template>
  <MainMenu />
  <MainHeader />
  <MainSidebar />
  <RouterView />
  <MainFooter />
</template>
